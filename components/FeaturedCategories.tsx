"use client";

import { useState } from "react";
import { Product, getProductsByCategory } from "@/lib/products";
import ProductCard from "./ProductCard";

const TABS = ["Featured", "Recent", "Best sellers"];

export default function FeaturedCategories() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  // For now, we'll just use some of the existing products as placeholders.
  // Later, this could be replaced with actual logic for each tab.
  const featuredProducts = getProductsByCategory("K-Beauty / Skin Care").slice(0, 4);
  const recentProducts = getProductsByCategory("Phones/ Tablets").slice(0, 4);
  const bestSellerProducts = getProductsByCategory("Games, Earphone, Watch etc.").slice(0, 4);

  const getProductsForTab = (tab: string) => {
    switch (tab) {
      case "Featured":
        return featuredProducts;
      case "Recent":
        return recentProducts;
      case "Best sellers":
        return bestSellerProducts;
      default:
        return [];
    }
  };

  const products = getProductsForTab(activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif tracking-tight text-gray-900">
            FEATURED CATEGORIES
          </h2>
          <div className="w-24 h-px bg-yellow-400 mx-auto mt-3"></div>
        </div>

        <div className="flex justify-center border-b border-gray-200 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors
                ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
