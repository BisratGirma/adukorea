import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
