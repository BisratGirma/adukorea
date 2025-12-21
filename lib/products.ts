export type Product = {
  id: string;
  name: string;
  price: number;
  subtitle?: string;
  description: string;
  badge?: string;
  emoji?: string;
  category: string;
  manufacturer: string;
  image: string;
  gallery?: string[];
};

export const products: Product[] = [
  {
    id: "galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    price: 790,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 8 Elite for Galaxy (3nm)</li>" +
      "<li><strong>Display:</strong> 6.9\" Dynamic LTPO AMOLED 2X (3120×1440), 120Hz, up to 2600 nits</li>" +
      "<li><strong>RAM:</strong> 12GB / 16GB</li>" +
      "<li><strong>Storage:</strong> 256GB / 512GB / 1TB</li>" +
      "<li><strong>Rear cameras:</strong> 200MP wide + 50MP periscope (5x) + 10MP telephoto (3x) + 50MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 5000mAh, up to 45W charging</li>" +
      "<li><strong>Other:</strong> S Pen included, titanium frame, IP68</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s25-ultra/S25-ultra.png",
    gallery: [
      "/products/s25-ultra/s25-ultra-gallary-1.jpg",
      "/products/s25-ultra/s25-ultra-gallary-2.jpg",
      "/products/s25-ultra/s25-ultra-gallary-3.jpg",
    ],
  },
  {
    id: "galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 560,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 8 Gen 3 for Galaxy</li>" +
      "<li><strong>Display:</strong> 6.8\" Dynamic AMOLED 2X (QHD+), 120Hz, up to 2600 nits</li>" +
      "<li><strong>RAM:</strong> 12GB</li>" +
      "<li><strong>Storage:</strong> up to 1TB</li>" +
      "<li><strong>Rear cameras:</strong> 200MP + 50MP (5x) + 10MP (3x) + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 5000mAh</li>" +
      "<li><strong>Other:</strong> titanium frame, S Pen, Gorilla Armor</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s24-ultra/s24-ultra.png",
    gallery: [
      "/products/s24-ultra/s24-ultra-gallary-1.jpg",
      "/products/s24-ultra/s24-ultra-gallary-2.jpg",
    ],
  },
  {
    id: "galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra",
    price: 415,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 8 Gen 2 for Galaxy</li>" +
      "<li><strong>Display:</strong> 6.8\" Dynamic AMOLED 2X (QHD+), 120Hz</li>" +
      "<li><strong>RAM:</strong> 8GB / 12GB</li>" +
      "<li><strong>Rear cameras:</strong> 200MP + 10MP (10x) + 10MP (3x) + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 5000mAh</li>" +
      "<li><strong>Other:</strong> built-in S Pen, up to 100x Space Zoom</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s23-ultra/s23-ultra.png",
    gallery: [
      "/products/s23-ultra/s23-ultra-gallary-1.jpg",
      "/products/s23-ultra/s23-ultra-gallary-2.jpg",
      "/products/s23-ultra/s23-ultra-gallary-3.jpg",
    ],
  },
  {
    id: "galaxy-s22-ultra",
    name: "Samsung Galaxy S22 Ultra",
    price: 310,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 8 Gen 1 / Exynos 2200</li>" +
      "<li><strong>Display:</strong> 6.8\" Dynamic AMOLED 2X, 120Hz</li>" +
      "<li><strong>RAM:</strong> 8GB / 12GB</li>" +
      "<li><strong>Rear cameras:</strong> 108MP + 10MP (10x) + 10MP (3x) + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 5000mAh</li>" +
      "<li><strong>Other:</strong> first S series with built-in S Pen</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s22-ultra/s22-ultra.png",
    gallery: [
      "/products/s22-ultra/s22-ultra-gallary-1.jpg",
      "/products/s22-ultra/s22-ultra-gallary-2.jpg",
      "/products/s22-ultra/s22-ultra-gallary-3.jpg",
    ],
  },
  {
    id: "galaxy-s22",
    name: "Samsung Galaxy S22",
    price: 193,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 8 Gen 1</li>" +
      "<li><strong>Display:</strong> 6.1\" Dynamic AMOLED 2X (FHD+), 120Hz, up to 1300 nits</li>" +
      "<li><strong>RAM:</strong> 8GB</li>" +
      "<li><strong>Rear cameras:</strong> 50MP wide + 10MP telephoto + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 3700mAh, up to 25W charging</li>" +
      "<li><strong>Other:</strong> compact flagship design</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s22/s22.png",
    gallery: [
      "/products/s22/s22-gallary-1.jpg",
    ],
  },
  {
    id: "galaxy-s22-plus",
    name: "Samsung Galaxy S22+",
    price: 160,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 8 Gen 1</li>" +
      "<li><strong>Display:</strong> 6.6\" Dynamic AMOLED 2X (FHD+), 120Hz, up to 1750 nits</li>" +
      "<li><strong>RAM:</strong> 8GB</li>" +
      "<li><strong>Rear cameras:</strong> 50MP wide + 10MP telephoto + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 4500mAh, up to 45W charging</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s22-plus/s22-plus.png",
    gallery: [
      "/products/s22-plus/s22-plus-gallary-1.jpg",
      "/products/s22-plus/s22-plus-gallary-2.jpg",
      "/products/s22-plus/s22-plus-gallary-3.jpg",
    ],
  },
  {
    id: "galaxy-s21",
    name: "Samsung Galaxy S21",
    price: 137,
    description:
      "<ul>" +
      "<li><strong>Processor:</strong> Snapdragon 888 / Exynos 2100</li>" +
      "<li><strong>Display:</strong> 6.2\" Dynamic AMOLED 2X, 120Hz</li>" +
      "<li><strong>RAM:</strong> 8GB</li>" +
      "<li><strong>Rear cameras:</strong> 12MP wide + 64MP telephoto + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 4000mAh</li>" +
      "<li><strong>Other:</strong> contour-cut camera housing</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Samsung",
    image: "/products/s21/s21.png",
    gallery: [
      "/products/s21/s21-gallary-1.jpg",
      "/products/s21/s21-gallary-2.jpg",
    ],
  },
  {
    id: "iphone-13-pro-128",
    name: "iPhone 13 Pro (128GB)",
    price: 310,
    description:
      "<ul>" +
      "<li><strong>Chip:</strong> A15 Bionic (5nm)</li>" +
      "<li><strong>Display:</strong> 6.1\" Super Retina XDR OLED with ProMotion (120Hz)</li>" +
      "<li><strong>RAM:</strong> 6GB</li>" +
      "<li><strong>Storage:</strong> 128GB</li>" +
      "<li><strong>Cameras:</strong> triple 12MP (wide, telephoto, ultrawide) + LiDAR</li>" +
      "<li><strong>Battery:</strong> 3095mAh</li>" +
      "<li><strong>Other:</strong> Cinematic mode, ProRes video</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-13-pro/iphone-13-pro.png",
    gallery: [
      "/products/iphone-13-pro/iphone-13-pro-gallary-1.jpg",
    ],
  },
  {
    id: "iphone-13-pro-256",
    name: "iPhone 13 Pro (256GB)",
    price: 360,
    description:
      "<ul>" +
      "<li><strong>Chip:</strong> A15 Bionic (5nm)</li>" +
      "<li><strong>Display:</strong> 6.1\" Super Retina XDR OLED with ProMotion (120Hz)</li>" +
      "<li><strong>RAM:</strong> 6GB</li>" +
      "<li><strong>Storage:</strong> 256GB</li>" +
      "<li><strong>Cameras:</strong> triple 12MP (wide, telephoto, ultrawide) + LiDAR</li>" +
      "<li><strong>Other:</strong> stainless steel frame, Ceramic Shield front</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-13-pro/iphone-13-pro.png",
    gallery: [
      "/products/iphone-13-pro/iphone-13-pro-gallary-1.jpg",
    ],
  },
  {
    id: "iphone-14-pro-128",
    name: "iPhone 14 Pro (128GB)",
    price: 410,
    description:
      "<ul>" +
      "<li><strong>Chip:</strong> A16 Bionic (4nm)</li>" +
      "<li><strong>Display:</strong> 6.1\" LTPO Super Retina XDR OLED (Always-On), Dynamic Island</li>" +
      "<li><strong>RAM:</strong> 6GB</li>" +
      "<li><strong>Storage:</strong> 128GB</li>" +
      "<li><strong>Rear cameras:</strong> 48MP main + 12MP telephoto + 12MP ultrawide</li>" +
      "<li><strong>Other:</strong> Crash Detection, Emergency SOS via satellite</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-14-pro/iphone-14-pro.png",
    gallery: [
      "/products/iphone-14-pro/iphone-14-pro-gallary-1.jpg",
    ],
  },
  {
    id: "iphone-14-pro-256",
    name: "iPhone 14 Pro (256GB)",
    price: 450,
    description:
      "<ul>" +
      "<li><strong>Chip:</strong> A16 Bionic (4nm)</li>" +
      "<li><strong>Display:</strong> 6.1\" LTPO Super Retina XDR OLED (Always-On), Dynamic Island</li>" +
      "<li><strong>RAM:</strong> 6GB</li>" +
      "<li><strong>Storage:</strong> 256GB</li>" +
      "<li><strong>Rear cameras:</strong> 48MP main + 12MP telephoto + 12MP ultrawide</li>" +
      "<li><strong>Other:</strong> Photonic Engine for improved low-light photos</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-14-pro/iphone-14-pro.png",
    gallery: [
      "/products/iphone-14-pro/iphone-14-pro-gallary-1.jpg",
    ],
  },
  {
    id: "iphone-15-pro-128",
    name: "iPhone 15 Pro (128GB)",
    price: 550,
    description:
      "<ul>" +
      "<li><strong>Chip:</strong> A17 Pro (3nm)</li>" +
      "<li><strong>Display:</strong> 6.1\" Super Retina XDR OLED with ProMotion (120Hz)</li>" +
      "<li><strong>RAM:</strong> 8GB</li>" +
      "<li><strong>Storage:</strong> 128GB</li>" +
      "<li><strong>Rear cameras:</strong> 48MP main + 12MP (3x) telephoto + 12MP ultrawide</li>" +
      "<li><strong>Battery:</strong> 3274mAh</li>" +
      "<li><strong>Other:</strong> titanium frame, Action Button, USB-C (up to USB 3)</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-15-pro/iphone-15-pro.png",
    gallery: [
      "/products/iphone-15-pro/iphone-15-pro-gallary-1.jpg",
    ],
  },
  {
    id: "iphone-15-pro-256",
    name: "iPhone 15 Pro (256GB)",
    price: 620,
    description:
      "<ul>" +
      "<li><strong>Chip:</strong> A17 Pro (3nm)</li>" +
      "<li><strong>Display:</strong> 6.1\" Super Retina XDR OLED with ProMotion (120Hz)</li>" +
      "<li><strong>RAM:</strong> 8GB</li>" +
      "<li><strong>Storage:</strong> 256GB</li>" +
      "<li><strong>Rear cameras:</strong> 48MP triple system, Log video recording support</li>" +
      "<li><strong>Other:</strong> Grade 5 titanium design, USB-C charging</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-15-pro/iphone-15-pro.png",
    gallery: [
      "/products/iphone-15-pro/iphone-15-pro-gallary-1.jpg",
    ],
  },
  {
    id: "iphone-17-pro-max-512",
    name: "iPhone 17 Pro Max (512GB)",
    price: 1620,
    description:
      "<p class='text-sm text-gray-600'><strong>Note:</strong> This entry contains rumored / unconfirmed specifications.</p>" +
      "<ul>" +
      "<li><strong>Chip (rumored):</strong> A19 Pro (2nm)</li>" +
      "<li><strong>Display (rumored):</strong> 6.9\" Super Retina XDR OLED, thinner bezels</li>" +
      "<li><strong>RAM:</strong> 12GB</li>" +
      "<li><strong>Storage:</strong> 512GB</li>" +
      "<li><strong>Camera (rumored):</strong> upgraded 48MP ultrawide and telephoto sensors</li>" +
      "<li><strong>Other (rumored):</strong> under-display Face ID</li>" +
      "</ul>",
    category: "Phones/ Tablets",
    manufacturer: "Apple",
    image: "/products/iphone-17-pro-max/iphone-17-pro-max.png",
    gallery: [
      "/products/iphone-17-pro-max/iphone-17-pro-max-gallary-1.jpg",
      "/products/iphone-17-pro-max/iphone-17-pro-max-gallary-2.jpg",
    ],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
