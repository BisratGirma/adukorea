"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-transparent text-center"
    >
      <div className="relative w-full h-80 mx-auto">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="mt-4 text-base font-medium text-gray-800">{product.name}</h3>
    </Link>
  );
}
