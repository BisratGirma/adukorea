import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ProductCarousel from "@/components/ProductCarousel";
import { getProductsByCategory } from "@/lib/products";
import FeaturedCategories from "@/components/FeaturedCategories";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  const phoneProducts = getProductsByCategory("Phones/ Tablets");

  return (
    <main>
      <Hero />

      <ProductCarousel category="Phones/ Tablets" products={phoneProducts} />

      <FeaturedCategories />

      <CallToAction />

      {/* <About />
      <Services />
      <Contact /> */}
    </main>
  );
}
