"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CART_STORAGE_KEY = "adukorea.cart.v1";

function safeParseCart(raw: string | null): CartState {
  if (!raw) return { items: [] };
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      Array.isArray((parsed as any).items)
    ) {
      const items = (parsed as any).items
        .filter((it: any) => it && typeof it.id === "string")
        .map((it: any) => ({
          id: String(it.id),
          name: String(it.name ?? ""),
          price: Number(it.price ?? 0),
          image: String(it.image ?? ""),
          quantity: Math.max(1, Number(it.quantity ?? 1)),
        })) as CartItem[];
      return { items };
    }
  } catch {
    // ignore
  }
  return { items: [] };
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const state = safeParseCart(
      typeof window === "undefined" ? null : window.localStorage.getItem(CART_STORAGE_KEY)
    );
    setItems(state.items);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const state: CartState = { items };
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [items]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      const qty = Math.max(1, quantity);
      setItems(prev => {
        const existing = prev.find(p => p.id === item.id);
        if (!existing) return [...prev, { ...item, quantity: qty }];
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
        );
      });
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(p => p.id !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const qty = Math.max(1, Math.floor(quantity));
    setItems(prev => prev.map(p => (p.id === id ? { ...p, quantity: qty } : p)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items]
  );

  const value: CartContextValue = useMemo(
    () => ({ items, itemCount, subtotal, addItem, removeItem, setQuantity, clear }),
    [items, itemCount, subtotal, addItem, removeItem, setQuantity, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
