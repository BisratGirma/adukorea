"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, setQuantity, clear } = useCart();

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Cart</h1>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-gray-700">Your cart is empty.</p>
            <Link
              href="/products"
              className="inline-flex mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
                >
                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="mt-1 text-sm text-gray-600">{formatMoney(item.price)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-gray-600" htmlFor={`qty-${item.id}`}>
                            Qty
                          </label>
                          <select
                            id={`qty-${item.id}`}
                            value={item.quantity}
                            onChange={e => setQuantity(item.id, Number(e.target.value))}
                            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm"
                          >
                            {Array.from({ length: 10 }).map((_, idx) => {
                              const v = idx + 1;
                              return (
                                <option key={v} value={v}>
                                  {v}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <p className="font-semibold text-gray-900">
                          {formatMoney(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <aside className="rounded-2xl border border-gray-200 bg-white p-5 h-fit">
              <h2 className="text-lg font-semibold text-gray-900">Summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Items</dt>
                  <dd className="font-medium text-gray-900">{itemCount}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">Free</dd>
                </div>
                <div className="pt-2 mt-2 border-t border-gray-200 flex items-center justify-between">
                  <dt className="text-gray-900 font-semibold">Subtotal</dt>
                  <dd className="text-gray-900 font-semibold">{formatMoney(subtotal)}</dd>
                </div>
              </dl>

              <button
                type="button"
                className="mt-5 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600"
              >
                Checkout
              </button>

              <p className="mt-3 text-xs text-gray-500">
                Demo checkout button (no payment processing).
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
