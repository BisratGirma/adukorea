import { products, type Product } from "@/lib/products";

export type SearchResult = Product;

function normalize(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "");
}

export function searchProducts(query: string): SearchResult[] {
  const q = normalize(query);
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored = products
    .map(product => {
      const haystack = normalize(
        `${product.name} ${product.subtitle ?? ""} ${product.category} ${product.description}`
      );

      let score = 0;
      for (const token of tokens) {
        if (haystack.includes(token)) score += 1;
      }

      if (haystack.includes(q)) score += 2;

      return { product, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name));

  return scored.map(x => x.product);
}
