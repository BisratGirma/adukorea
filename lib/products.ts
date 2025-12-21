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
  gallery?: string[];
};

export const products: Product[] = [
  {
    id: "galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    price: 790,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 560,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra",
    price: 415,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "galaxy-s22-ultra",
    name: "Samsung Galaxy S22 Ultra",
    price: 310,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "galaxy-s22",
    name: "Samsung Galaxy S22",
    price: 193,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "galaxy-s22-plus",
    name: "Samsung Galaxy S22+",
    price: 160,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "galaxy-s21",
    name: "Samsung Galaxy S21",
    price: 137,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-13-pro-128",
    name: "iPhone 13 Pro (128GB)",
    price: 310,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-13-pro-256",
    name: "iPhone 13 Pro (256GB)",
    price: 360,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-14-pro-128",
    name: "iPhone 14 Pro (128GB)",
    price: 410,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-14-pro-256",
    name: "iPhone 14 Pro (256GB)",
    price: 450,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-15-pro-128",
    name: "iPhone 15 Pro (128GB)",
    price: 550,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-15-pro-256",
    name: "iPhone 15 Pro (256GB)",
    price: 620,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
  {
    id: "iphone-17-pro-max-512",
    name: "iPhone 17 Pro Max (512GB)",
    price: 1620,
    description: "Full specifications coming soon.",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
