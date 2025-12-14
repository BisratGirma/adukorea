import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ProductCarousel from "@/components/ProductCarousel";
import { getProductsByCategory } from "@/lib/products";
import FeaturedCategories from "@/components/FeaturedCategories";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  const kBeautyProducts = getProductsByCategory("K-Beauty / Skin Care");
  const phoneProducts = getProductsByCategory("Phones/ Tablets");
  const gamingProducts = getProductsByCategory("Games, Earphone, Watch etc.");

  return (
    <main>
      <Hero />

      <ProductCarousel category="K-Beauty / Skin Care" products={kBeautyProducts} />
      <ProductCarousel category="Phones/ Tablets" products={phoneProducts} />
      <ProductCarousel category="Games, Earphone, Watch etc." products={gamingProducts} />

      <FeaturedCategories />

      <CallToAction />

      {/* <About />
      <Services />
      <Contact /> */}
    </main>
  );
}
