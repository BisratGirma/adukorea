import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
      {/* Background wrapper for nav + hero */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <Navigation transparent />
          <Hero />
        </div>
      </div>

      <ProductCarousel category="K-Beauty / Skin Care" products={kBeautyProducts} />
      <ProductCarousel category="Phones/ Tablets" products={phoneProducts} />
      <ProductCarousel category="Games, Earphone, Watch etc." products={gamingProducts} />

      <FeaturedCategories />

      <CallToAction />

      {/* <About />
      <Services />
      <Contact /> */}
      <Footer />
    </main>
  );
}
