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
    id: "advanced-snail-92",
    name: "COSRX | Cream",
    price: 21.00,
    description: "Infused with 92% snail secretion filtrate, this lightweight cream glides onto the skin and builds a moisture barrier to plump, hydrate, and soothe skin. Repair, recover, and rebuild your skin's natural radiance.",
    category: "K-Beauty / Skin Care",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "advanced-snail-96",
    name: "COSRX | Snail 96 Essence",
    price: 25.00,
    description: "Lightweight yet moisturizing, this essence absorbs quickly to leave skin feeling hydrated and refreshed. Formulated with 96.3% Snail Secretion Filtrate, it helps protect the skin from moisture loss while improving skin elasticity. Snail mucin helps repair and soothes red, sensitized skin post-breakouts by replenishing moisture.",
    category: "K-Beauty / Skin Care",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "niacinamide-10",
    name: "ANUA | Niacinamide 10%",
    price: 23.00,
    description: "A powerful serum for post-acne care and dark spot correction. With 10% Niacinamide and 4% Tranexamic Acid, it targets uneven skin tone and texture, helping to fade dark spots and control sebum production for a clearer, brighter complexion.",
    category: "K-Beauty / Skin Care",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    price: 999,
    description: "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip. <br><br> <h4 class='font-semibold mt-4 mb-2'>Specifications:</h4> <table class='w-full text-sm'><tbody><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Display</td><td class='py-2'>6.1-inch Super Retina XDR</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Chip</td><td class='py-2'>A16 Bionic</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Camera</td><td class='py-2'>48MP Main, 12MP Ultra Wide, 12MP Telephoto</td></tr><tr><td class='py-2 font-medium text-gray-600'>Battery</td><td class='py-2'>Up to 23 hours video playback</td></tr></tbody></table>",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "samsung-galaxy-z-flip-4",
    name: "Samsung Galaxy Z Flip 4",
    price: 999,
    description: "Capture life from new angles with FlexCam. This compact phone unfolds to reveal a stunning 6.7-inch display, perfect for hands-free video calls and content creation. Its durable design and water resistance give you peace of mind. <br><br> <h4 class='font-semibold mt-4 mb-2'>Specifications:</h4> <table class='w-full text-sm'><tbody><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Main Display</td><td class='py-2'>6.7-inch Dynamic AMOLED 2X</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Cover Display</td><td class='py-2'>1.9-inch Super AMOLED</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Processor</td><td class='py-2'>Snapdragon 8+ Gen 1</td></tr><tr><td class='py-2 font-medium text-gray-600'>Water Resistance</td><td class='py-2'>IPX8</td></tr></tbody></table>",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "samsung-galaxy-fold-4",
    name: "Samsung Galaxy Fold 4",
    price: 1799,
    description: "More than a phone. It’s a tablet and a phone in one. Unfold a massive 7.6-inch screen for an immersive viewing experience, perfect for multitasking with multiple apps. The ultimate device for productivity and entertainment. <br><br> <h4 class='font-semibold mt-4 mb-2'>Specifications:</h4> <table class='w-full text-sm'><tbody><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Main Display</td><td class='py-2'>7.6-inch Dynamic AMOLED 2X</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Cover Display</td><td class='py-2'>6.2-inch Dynamic AMOLED 2X</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Processor</td><td class='py-2'>Snapdragon 8+ Gen 1</td></tr><tr><td class='py-2 font-medium text-gray-600'>S Pen Support</td><td class='py-2'>Yes</td></tr></tbody></table>",
    category: "Phones/ Tablets",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "galaxy-watch-5",
    name: "Galaxy Watch 5",
    price: 279,
    description: "Your wellness coach on your wrist. Track your sleep, body composition, and workouts with advanced sensors. With a durable Sapphire Crystal glass and a sleek design, it's ready for any adventure. <br><br> <h4 class='font-semibold mt-4 mb-2'>Specifications:</h4> <table class='w-full text-sm'><tbody><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Material</td><td class='py-2'>Armor Aluminum frame</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Display</td><td class='py-2'>Sapphire Crystal</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Sensors</td><td class='py-2'>BioActive Sensor (ECG, Heart Rate)</td></tr><tr><td class='py-2 font-medium text-gray-600'>Battery</td><td class='py-2'>Up to 40 hours</td></tr></tbody></table>",
    category: "Games, Earphone, Watch etc.",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "jbl-earbuds",
    name: "JBL Earbuds",
    price: 99,
    description: "Pure Bass. Zero Noise. Tackle your day one song at a time with the JBL Tune Flex. These true wireless earbuds give you 32 hours of exceptional JBL Pure Bass Sound, while the ergonomic and water-resistant design gives you all-day comfort in any weather.",
    category: "Games, Earphone, Watch etc.",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
  {
    id: "wd-elements-hdd",
    name: "WD Elements HDD",
    price: 59,
    description: "Simple, fast, and portable storage. With up to 5TB capacity in a lightweight design, this drive is the ideal companion for users on the go. USB 3.0 connectivity delivers maximum performance for transferring files to and from this drive. <br><br> <h4 class='font-semibold mt-4 mb-2'>Specifications:</h4> <table class='w-full text-sm'><tbody><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Capacity</td><td class='py-2'>1TB - 5TB</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Interface</td><td class='py-2'>USB 3.0 / USB 2.0 compatible</td></tr><tr class='border-b'><td class='py-2 font-medium text-gray-600'>Compatibility</td><td class='py-2'>Windows, macOS (requires reformatting)</td></tr><tr><td class='py-2 font-medium text-gray-600'>Dimensions</td><td class='py-2'>4.35 x 3.23 x 0.83 inches</td></tr></tbody></table>",
    category: "Games, Earphone, Watch etc.",
    image: "/placeholder.png",
    gallery: [
      '/placeholder.png',
      '/placeholder.png',
      '/placeholder.png',
    ]
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
