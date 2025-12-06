"use client";

import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { categoryToSlug } from "@/lib/products";
import Link from "next/link";

export default function ProductCarousel({
  category,
  products,
}: {
  category: string;
  products: Product[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-gray-800">{category}</h2>
          <div className="w-24 h-px bg-yellow-400 mx-auto mt-2"></div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[33%] gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 sm:px-6 lg:px-8"
          >
            {products.map((product) => (
              <div key={product.id} className="snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <button
              onClick={() => scroll("left")}
              className="bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/category/${categoryToSlug(category)}`}
            className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
