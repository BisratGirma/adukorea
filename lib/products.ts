export type Product = {
  id: string;
  name: string;
  price: number;
  subtitle?: string;
  description: string;
  badge?: string;
  emoji?: string;
};

export const products: Product[] = [
  {
    id: "air-1",
    name: "Air One",
    price: 999,
    subtitle: "Light. Powerful. Iconic.",
    description:
      "Air One combines cutting-edge performance with a lightweight design. Perfect for work, creativity and everything in between.",
    badge: "New",
    emoji: "✈️",
  },
  {
    id: "pro-14",
    name: "Pro 14",
    price: 1999,
    subtitle: "Pro-level performance.",
    description:
      "Designed for professionals who demand speed and versatility. Incredible display and long battery life.",
    badge: "Top Seller",
    emoji: "💻",
  },
  {
    id: "mini-buds",
    name: "Mini Buds",
    price: 199,
    subtitle: "Sound that fits.",
    description:
      "Compact earbuds with excellent sound quality and a snug, comfortable fit — daily companion for music and calls.",
    emoji: "🎧",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id) ?? null;
}
