import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { searchProducts } from "@/lib/search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").toString();
  const results = searchProducts(query);

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Search</h1>
            <p className="mt-1 text-gray-600">
              {query
                ? `Results for “${query}” (${results.length})`
                : "Type a keyword to search products."}
            </p>
          </div>

          <form action="/search" className="mt-4 sm:mt-0 w-full sm:w-auto">
            <div className="flex gap-2">
              <input
                name="q"
                defaultValue={query}
                placeholder="Search products…"
                className="w-full sm:w-80 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {!query ? null : results.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-gray-700">No products matched your search.</p>
            <Link
              href="/products"
              className="inline-flex mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600"
            >
              Browse all products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
