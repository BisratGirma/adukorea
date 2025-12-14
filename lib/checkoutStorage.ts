"use client";

export type CheckoutCustomerInfo = {
  email: string;
  name: string;
  phone: string;
  roomNumber: string;
  departureTime: string;
  departureDate: string;
  notes?: string;
};

const KEY = "adukorea.checkout.customer.v1";

export function loadCheckoutCustomerInfo(): CheckoutCustomerInfo | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<CheckoutCustomerInfo>;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      email: String(parsed.email ?? ""),
      name: String(parsed.name ?? ""),
      phone: String(parsed.phone ?? ""),
      roomNumber: String(parsed.roomNumber ?? ""),
      departureTime: String(parsed.departureTime ?? ""),
      departureDate: String(parsed.departureDate ?? ""),
      notes: parsed.notes ? String(parsed.notes) : "",
    };
  } catch {
    return null;
  }
}

export function saveCheckoutCustomerInfo(info: CheckoutCustomerInfo) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(info));
}
