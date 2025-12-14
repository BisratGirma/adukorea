import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";

export const metadata: Metadata = {
  title: "ADU Korea",
  description: "Professional services and consulting in Korea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navigation />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
