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
      <div className="relative w-full h-56 mx-auto">
        <Image
          src={product.image || '/placeholder.png'}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    </Link>
  );
}
