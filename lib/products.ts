export type Product = {
  id: string;
  name: string;
  price: number;
  subtitle?: string;
  description: string;
  badge?: string;
  emoji?: string;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "advanced-snail-92",
    name: "COSRX | Cream",
    price: 21.00,
    description: "Advanced Snail 92 All in one Cream for face.",
    category: "K-Beauty / Skin Care",
    image: "/images/cosrx-cream.jpg",
  },
  {
    id: "advanced-snail-96",
    name: "COSRX | Snail 96 Essence",
    price: 25.00,
    description: "Advanced Snail 96 Mucin Power Essence.",
    category: "K-Beauty / Skin Care",
    image: "/images/cosrx-essence.jpg",
  },
  {
    id: "niacinamide-10",
    name: "ANUA | Niacinamide 10%",
    price: 23.00,
    description: "ANUA Niacinamide 10% + TXA 4% Dark Spot Correcting Serum.",
    category: "K-Beauty / Skin Care",
    image: "/images/anua-serum.jpg",
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    price: 999,
    description: "The ultimate iPhone.",
    category: "Phones/ Tablets",
    image: "/images/iphone-14-pro.jpg",
  },
  {
    id: "samsung-galaxy-z-flip-4",
    name: "Samsung Galaxy Z Flip 4",
    price: 999,
    description: "The phone that folds in half.",
    category: "Phones/ Tablets",
    image: "/images/samsung-galaxy-z-flip-4.jpg",
  },
  {
    id: "samsung-galaxy-fold-4",
    name: "Samsung Galaxy Fold 4",
    price: 1799,
    description: "The phone that unfolds into a tablet.",
    category: "Phones/ Tablets",
    image: "/images/samsung-galaxy-fold-4.jpg",
  },
  {
    id: "galaxy-watch-5",
    name: "Galaxy Watch 5",
    price: 279,
    description: "The watch that knows you best.",
    category: "Games, Earphone, Watch etc.",
    image: "/images/galaxy-watch-5.jpg",
  },
  {
    id: "jbl-earbuds",
    name: "JBL Earbuds",
    price: 99,
    description: "Sound that's always on.",
    category: "Games, Earphone, Watch etc.",
    image: "/images/jbl-earbuds.jpg",
  },
  {
    id: "wd-elements-hdd",
    name: "WD Elements HDD",
    price: 59,
    description: "Simple, fast and portable.",
    category: "Games, Earphone, Watch etc.",
    image: "/images/wd-elements-hdd.jpg",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
