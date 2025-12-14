"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { type DbOrder as Order } from "@/lib/orders-db";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString();
}

function getAdminKeyFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return (params.get("key") ?? "").trim();
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const required = process.env.NEXT_PUBLIC_ADMIN_KEY?.trim();
    if (!required) {
      // No key configured -> allow (dev-friendly)
      setAuthed(true);
      return;
    }

    const provided = getAdminKeyFromUrl();
    setAuthed(provided.length > 0 && provided === required);
  }, []);

  useEffect(() => {
    if (!authed) return;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/orders", {
          headers: process.env.NEXT_PUBLIC_ADMIN_KEY
            ? { authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_KEY}` }
            : {},
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || `Failed to load orders (${res.status})`);
        }
        const data = (await res.json()) as { orders: Order[] };
        setOrders(data.orders ?? []);
      } catch (e: any) {
        setError(e?.message ?? "Failed to load orders");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [authed]);

  const totalRevenue = useMemo(
    () => orders.reduce((sum, o) => sum + o.subtotal, 0),
    [orders]
  );

  if (!authed) {
    return (
      <main className="min-h-[70vh] bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-2xl font-bold text-gray-900">Admin</h1>
          <p className="mt-2 text-gray-600">
            Admin key required. Open with: <code className="font-mono">/admin?key=YOUR_KEY</code>
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Configure a key via <code className="font-mono">NEXT_PUBLIC_ADMIN_KEY</code>.
          </p>
          <Link
            href="/"
            className="inline-flex mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600"
          >
            Go home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Orders</h1>
            <p className="mt-1 text-gray-600">
              {orders.length} order(s) • Total {formatMoney(totalRevenue)}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={async () => {
                setLoading(true);
                setError(null);
                try {
                  const res = await fetch("/api/orders", {
                    headers: process.env.NEXT_PUBLIC_ADMIN_KEY
                      ? { authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_KEY}` }
                      : {},
                  });
                  if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    throw new Error(data?.error || `Failed to load orders (${res.status})`);
                  }
                  const data = (await res.json()) as { orders: Order[] };
                  setOrders(data.orders ?? []);
                } catch (e: any) {
                  setError(e?.message ?? "Failed to load orders");
                  setOrders([]);
                } finally {
                  setLoading(false);
                }
              }}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={() => {
                setOrders([]);
              }}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Clear (local)
            </button>
          </div>
        </div>

        {loading ? (
          <p className="mt-6 text-sm text-gray-600">Loading…</p>
        ) : null}

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="font-semibold text-red-900">Failed to load orders</p>
            <p className="mt-1 text-sm text-red-800">{error}</p>
          </div>
        ) : null}

        {orders.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-gray-700">No orders yet.</p>
            <p className="mt-2 text-sm text-gray-500">
              Create one from the cart page using the checkout button.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {orders.map(order => (
              <div key={order.id} className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Order {order.id}</p>
                    <p className="mt-1 text-sm text-gray-600">{formatDate(order.createdAt)}</p>
                    {(order.customerName || order.customerEmail) && (
                      <p className="mt-1 text-sm text-gray-600">
                        {order.customerName ?? ""}{order.customerName && order.customerEmail ? " • " : ""}
                        {order.customerEmail ?? ""}
                      </p>
                    )}
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600">
                      Status: <span className="font-medium text-gray-900">{order.status}</span>
                    </p>
                    <p className="mt-1 font-semibold text-gray-900">{formatMoney(order.subtotal)}</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    {order.items.map(item => (
                      <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
                        <p className="text-gray-900">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-500"> × {item.quantity}</span>
                        </p>
                        <p className="font-medium text-gray-900">
                          {formatMoney(item.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
