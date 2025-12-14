"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import {
  loadCheckoutCustomerInfo,
  saveCheckoutCustomerInfo,
  type CheckoutCustomerInfo,
} from "@/lib/checkoutStorage";
import { createOrderId } from "@/lib/orders";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const emptyInfo: CheckoutCustomerInfo = {
  email: "",
  name: "",
  phone: "",
  roomNumber: "",
  departureTime: "",
  departureDate: "",
  notes: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, itemCount, subtotal, clear } = useCart();

  const [info, setInfo] = useState<CheckoutCustomerInfo>(emptyInfo);
  const [paymentMethod, setPaymentMethod] = useState<"cod">("cod");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placedOrderId, setPlacedOrderId] = useState<string | null>(null);

  useEffect(() => {
    const saved = loadCheckoutCustomerInfo();
    if (saved) setInfo({ ...emptyInfo, ...saved });
  }, []);

  useEffect(() => {
    saveCheckoutCustomerInfo(info);
  }, [info]);

  const canSubmit = useMemo(() => {
    if (items.length === 0) return false;
    return (
      info.email.trim() &&
      info.name.trim() &&
      info.phone.trim() &&
      info.roomNumber.trim() &&
      info.departureTime.trim() &&
      info.departureDate.trim() &&
      paymentMethod === "cod"
    );
  }, [items.length, info, paymentMethod]);

  const placeOrder = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);

    const id = createOrderId();

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id,
          customerName: info.name,
          customerEmail: info.email,
          customerPhone: info.phone,
          roomNumber: info.roomNumber,
          departureTime: info.departureTime,
          departureDate: info.departureDate,
          notes: info.notes ?? "",
          paymentMethod: "cash_on_delivery",
          items: items.map(it => ({
            id: it.id,
            name: it.name,
            price: it.price,
            quantity: it.quantity,
            image: it.image,
          })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Place order failed (${res.status})`);
      }

      setPlacedOrderId(id);
      clear();
    } catch (e: any) {
      setError(e?.message ?? "Place order failed");
    } finally {
      setSubmitting(false);
    }
  };

  // If cart is empty and no placed order, guide back.
  useEffect(() => {
    if (items.length === 0 && !placedOrderId) {
      // allow render; don't hard redirect to let user read message
    }
  }, [items.length, placedOrderId]);

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Complete your order</h1>
            <p className="mt-2 text-gray-600">
              You are just few step away from completing your order…
            </p>
            <p className="mt-2 text-sm text-amber-700">
              Please don&apos;t place an order or go through this step if you&apos;re not currently in
              South Korea (Incheon). Thank you!
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/cart")}
            className="hidden sm:inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Back to cart
          </button>
        </div>

        {placedOrderId ? (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="font-semibold text-green-900">Order placed!</p>
            <p className="mt-1 text-sm text-green-800">
              Order ID: <span className="font-mono">{placedOrderId}</span>
            </p>
            <Link
              href="/products"
              className="inline-flex mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600"
            >
              Continue shopping
            </Link>
          </div>
        ) : null}

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="font-semibold text-red-900">Could not place order</p>
            <p className="mt-1 text-sm text-red-800">{error}</p>
          </div>
        ) : null}

        {items.length === 0 && !placedOrderId ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-gray-700">Your cart is empty.</p>
            <Link
              href="/products"
              className="inline-flex mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900">Customer information</h2>
                <label className="mt-4 block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  value={info.email}
                  onChange={e => setInfo(prev => ({ ...prev, email: e.target.value }))}
                  type="email"
                  placeholder="Email Address"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900">Billing / Delivery Details</h2>

                <label className="mt-4 block text-sm font-medium text-gray-700">
                  First and last name <span className="text-red-500">*</span>
                </label>
                <input
                  value={info.name}
                  onChange={e => setInfo(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="First and last name"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <label className="mt-4 block text-sm font-medium text-gray-700">
                  Phone number (+ Country code) <span className="text-red-500">*</span>
                </label>
                <input
                  value={info.phone}
                  onChange={e => setInfo(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Phone number (+ Country code)"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <label className="mt-4 block text-sm font-medium text-gray-700">
                  Room number <span className="text-red-500">*</span>
                </label>
                <input
                  value={info.roomNumber}
                  onChange={e => setInfo(prev => ({ ...prev, roomNumber: e.target.value }))}
                  placeholder="Room number"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Time of departure <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={info.departureTime}
                      onChange={e => setInfo(prev => ({ ...prev, departureTime: e.target.value }))}
                      placeholder="Time of departure"
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of departure from Korea <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={info.departureDate}
                      onChange={e => setInfo(prev => ({ ...prev, departureDate: e.target.value }))}
                      type="date"
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900">Additional information</h2>
                <label className="mt-4 block text-sm font-medium text-gray-700">
                  Order notes (optional)
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  Notes about your order, e.g. special notes for delivery.
                </p>
                <textarea
                  value={info.notes ?? ""}
                  onChange={e => setInfo(prev => ({ ...prev, notes: e.target.value }))}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
                <label className="mt-4 flex items-start gap-3 rounded-xl border border-gray-200 p-4 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Cash on delivery</p>
                    <p className="text-sm text-gray-600">Pay with cash upon delivery.</p>
                  </div>
                </label>

                <p className="mt-4 text-xs text-gray-500">
                  Your personal data will be used to process your order, support your experience
                  throughout this website, and for other purposes described in our privacy policy.
                </p>
              </div>
            </section>

            <aside className="rounded-2xl border border-gray-200 bg-white p-6 h-fit">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Your order</h2>
                <p className="text-sm text-gray-600">{itemCount} item(s)</p>
              </div>

              <div className="mt-4 divide-y divide-gray-200">
                {items.map(it => (
                  <div key={it.id} className="py-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{it.name}</p>
                      <p className="text-xs text-gray-500">× {it.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatMoney(it.price * it.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">{formatMoney(subtotal)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Total</dt>
                  <dd className="font-semibold text-gray-900">{formatMoney(subtotal)}</dd>
                </div>
              </dl>

              <button
                type="button"
                disabled={!canSubmit || submitting || placedOrderId !== null}
                onClick={placeOrder}
                className="mt-5 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting
                  ? "Placing order…"
                  : `Place Order  ${formatMoney(subtotal)}`}
              </button>

              <div className="mt-5 rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-sm font-semibold text-gray-900">Privacy protected</p>
                <p className="mt-2 text-xs text-gray-600">100% Satisfaction Guaranteed</p>
                <p className="mt-1 text-xs text-gray-600">Your Data is Safe here</p>
                <p className="mt-1 text-xs text-gray-600">100% Money Back. No-Risk.</p>
                <p className="mt-2 text-[11px] text-gray-500">
                  If you find any technical problems in the products over the next 30 days, then we
                  will gladly refund your money, when proved.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
