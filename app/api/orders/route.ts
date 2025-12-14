import { NextResponse } from "next/server";
import { createOrder, ensureOrdersSchema, listOrders } from "@/lib/orders-db";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function checkAdminAuth(request: Request) {
  const required = process.env.ADMIN_KEY?.trim();
  if (!required) return true;

  const auth = request.headers.get("authorization") ?? "";
  if (!auth.toLowerCase().startsWith("bearer ")) return false;
  const token = auth.slice(7).trim();
  return token.length > 0 && token === required;
}

export async function GET(request: Request) {
  if (!checkAdminAuth(request)) return unauthorized();

  await ensureOrdersSchema();
  const url = new URL(request.url);
  const limit = Math.min(200, Math.max(1, Number(url.searchParams.get("limit") ?? 50)));
  const orders = await listOrders(limit);
  return NextResponse.json({ orders });
}

export async function POST(request: Request) {
  await ensureOrdersSchema();

  const body = (await request.json()) as {
    id: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    roomNumber?: string;
    departureTime?: string;
    departureDate?: string;
    notes?: string;
    paymentMethod?: string;
    items: Array<{ id: string; name: string; price: number; quantity: number; image?: string }>;
  };

  if (!body?.id || !Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const items = body.items.map(it => ({
    id: String(it.id),
    name: String(it.name ?? ""),
    price: Number(it.price ?? 0),
    quantity: Math.max(1, Math.floor(Number(it.quantity ?? 1))),
    image: it.image ? String(it.image) : undefined,
  }));

  const created = await createOrder({
    id: String(body.id),
    customerName: body.customerName ? String(body.customerName) : undefined,
    customerEmail: body.customerEmail ? String(body.customerEmail) : undefined,
    customerPhone: body.customerPhone ? String(body.customerPhone) : undefined,
    roomNumber: body.roomNumber ? String(body.roomNumber) : undefined,
    departureTime: body.departureTime ? String(body.departureTime) : undefined,
    departureDate: body.departureDate ? String(body.departureDate) : undefined,
    notes: body.notes ? String(body.notes) : undefined,
    paymentMethod: body.paymentMethod ? String(body.paymentMethod) : undefined,
    items,
  });

  return NextResponse.json({ ok: true, id: created.id, subtotal: created.subtotal });
}
