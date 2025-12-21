import { getProductsByCategory } from "@/lib/products";
import { slugToCategoryName, categoryDisplayNameMap } from "@/lib/categoryMapping";
import ProductCard from "@/components/ProductCard";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ manufacturer?: string }>;
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const internalCategoryName = slugToCategoryName(resolvedParams.slug);
  const products = getProductsByCategory(internalCategoryName || "");
  const displayName = internalCategoryName ? categoryDisplayNameMap[internalCategoryName] : "Category";

  const manufacturerQuery = (resolvedSearchParams?.manufacturer ?? "").trim();
  const selectedManufacturer = manufacturerQuery || "All";
  const manufacturers = Array.from(new Set(products.map((p) => p.manufacturer))).sort((a, b) => a.localeCompare(b));
  const filteredProducts =
    selectedManufacturer === "All"
      ? products
      : products.filter((p) => p.manufacturer === selectedManufacturer);

  const getManufacturerLogoSrc = (manufacturer: string) => {
    switch (manufacturer) {
      case "Apple":
        return "/brands/apple.svg";
      case "Samsung":
        return "/brands/samsung.svg";
      default:
        return null;
    }
  };

  if (!internalCategoryName) {
    return <div>Category not found</div>;
  }

  return (
    <main>
      <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="p-6 border border-gray-200 rounded-lg bg-white mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Filter by manufacturer</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/category/${resolvedParams.slug}`}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedManufacturer === "All"
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold ${
                      selectedManufacturer === "All"
                        ? "border-white/50 text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    ALL
                  </span>
                  All
                </Link>

                {manufacturers.map((m) => (
                  <Link
                    key={m}
                    href={`/category/${resolvedParams.slug}?manufacturer=${encodeURIComponent(m)}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedManufacturer === m
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border ${
                        selectedManufacturer === m ? "border-white/50" : "border-gray-300"
                      }`}
                    >
                      {getManufacturerLogoSrc(m) ? (
                        <Image
                          src={getManufacturerLogoSrc(m)!}
                          alt={`${m} logo`}
                          width={24}
                          height={24}
                          className={selectedManufacturer === m ? "invert" : ""}
                        />
                      ) : (
                        <span className={selectedManufacturer === m ? "text-white" : "text-gray-700"}>
                          {m.slice(0, 1).toUpperCase()}
                        </span>
                      )}
                    </span>
                    {m}
                  </Link>
                ))}
              </div>
            </div>
            <PriceRangeSlider />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>{displayName}</span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">{displayName}</h1>
            
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">Showing 1–{filteredProducts.length} of {filteredProducts.length} results</p>
              <select className="border border-gray-300 rounded-md text-sm">
                <option>Sort by price: high to low</option>
                <option>Sort by price: low to high</option>
                <option>Sort by latest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
    </main>
    
  );
}
