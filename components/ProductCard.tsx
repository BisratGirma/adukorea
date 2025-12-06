"use client";

import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-center h-40 mb-6 text-6xl">
        <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-5xl">
          {product.emoji ?? "📦"}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{product.name}</h3>
        {product.subtitle && (
          <p className="text-sm text-gray-500 mb-3">{product.subtitle}</p>
        )}
        <div className="flex items-center justify-center gap-3">
          <div className="text-lg font-medium text-gray-900">${product.price}</div>
          {product.badge && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary">{product.badge}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
