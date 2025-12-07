import Navigation from "@/components/Navigation";
import { getProduct } from "@/lib/products";

type Props = { params: Promise<{ id: string }> };

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id);

  if (!product) {
    return (
      <main>
        <Navigation />
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold">Product not found</h2>
            <p className="text-gray-600 mt-4">We couldn't find that product.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-white flex items-center justify-center text-8xl">
                {product.emoji ?? "📦"}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-semibold mb-2">{product.name}</h1>
              {product.subtitle && <p className="text-gray-500 mb-4">{product.subtitle}</p>}
              <div className="text-3xl font-bold mb-6">${product.price}</div>

              <div className="space-y-6 text-gray-700 mb-8">
                <p>{product.description}</p>
                <p>
                  Crafted with attention to detail and premium components. Experience
                  smooth performance and timeless design.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors">
                  Buy
                </button>
                <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
