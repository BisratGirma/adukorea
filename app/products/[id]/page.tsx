import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';
import { getProduct } from "@/lib/products";
import ProductPageClient from "./page.client";

type Props = { params: Promise<{ id: string }> };

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id);

  if (!product) {
    return (
      <main>
  
        <section className="py-24 text-center">
          <h2 className="text-2xl font-semibold">Product not found</h2>
          <p className="text-gray-600 mt-4">We couldn't find that product.</p>
        </section>
      
      </main>
    );
  }

  return (
    <main className="bg-white">
     
      <ProductPageClient product={product} />
     
    </main>
  );
}


