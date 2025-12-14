"use client";

export type OrderLineItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export type Order = {
  id: string;
  createdAt: string;
  customer?: {
    name?: string;
    email?: string;
  };
  items: OrderLineItem[];
  subtotal: number;
  status: "new" | "processing" | "fulfilled" | "cancelled";
};

const ORDERS_STORAGE_KEY = "adukorea.orders.v1";

function safeParseOrders(raw: string | null): Order[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((o: any) => o && typeof o.id === "string" && Array.isArray(o.items))
      .map((o: any) => ({
        id: String(o.id),
        createdAt: String(o.createdAt ?? new Date().toISOString()),
        customer: o.customer
          ? { name: o.customer.name ? String(o.customer.name) : undefined, email: o.customer.email ? String(o.customer.email) : undefined }
          : undefined,
        items: o.items.map((it: any) => ({
          id: String(it.id),
          name: String(it.name ?? ""),
          price: Number(it.price ?? 0),
          quantity: Math.max(1, Number(it.quantity ?? 1)),
          image: it.image ? String(it.image) : undefined,
        })),
        subtotal: Number(o.subtotal ?? 0),
        status: (o.status as Order["status"]) ?? "new",
      })) as Order[];
  } catch {
    return [];
  }
}

function getStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  return window.localStorage;
}

export function listOrders(): Order[] {
  const storage = getStorage();
  return safeParseOrders(storage?.getItem(ORDERS_STORAGE_KEY) ?? null);
}

export function saveOrder(order: Order) {
  const storage = getStorage();
  if (!storage) return;

  const orders = listOrders();
  storage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...orders]));
}

export function clearOrders() {
  const storage = getStorage();
  if (!storage) return;
  storage.removeItem(ORDERS_STORAGE_KEY);
}

export function createOrderId() {
  // compact, sortable-enough ID without crypto dependency
  return `ord_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
