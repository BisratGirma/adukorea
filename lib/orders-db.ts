import { sql } from "@/lib/db";

export type DbOrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export type DbOrder = {
  id: string;
  createdAt: string;
  status: "new" | "processing" | "fulfilled" | "cancelled";
  customerName?: string;
  customerEmail?: string;
  items: DbOrderItem[];
  subtotal: number;
};

export async function ensureOrdersSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      status TEXT NOT NULL DEFAULT 'new',
      customer_name TEXT,
      customer_email TEXT,
      subtotal NUMERIC NOT NULL DEFAULT 0
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS order_items (
      order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      product_id TEXT NOT NULL,
      name TEXT NOT NULL,
      price NUMERIC NOT NULL,
      quantity INTEGER NOT NULL,
      image TEXT,
      PRIMARY KEY (order_id, product_id)
    );
  `;
}

export async function createOrder(params: {
  id: string;
  status?: DbOrder["status"];
  customerName?: string;
  customerEmail?: string;
  items: DbOrderItem[];
}) {
  const status = params.status ?? "new";
  const subtotal = params.items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  await sql`BEGIN`;
  try {
    await sql`
      INSERT INTO orders (id, status, customer_name, customer_email, subtotal)
      VALUES (${params.id}, ${status}, ${params.customerName ?? null}, ${params.customerEmail ?? null}, ${subtotal})
    `;

    for (const item of params.items) {
      await sql`
        INSERT INTO order_items (order_id, product_id, name, price, quantity, image)
        VALUES (${params.id}, ${item.id}, ${item.name}, ${item.price}, ${item.quantity}, ${item.image ?? null})
      `;
    }

    await sql`COMMIT`;
  } catch (err) {
    await sql`ROLLBACK`;
    throw err;
  }

  return { id: params.id, subtotal };
}

export async function listOrders(limit = 50): Promise<DbOrder[]> {
  const ordersRes = await sql<{
    id: string;
    created_at: string;
    status: string;
    customer_name: string | null;
    customer_email: string | null;
    subtotal: string;
  }>`
    SELECT id, created_at, status, customer_name, customer_email, subtotal
    FROM orders
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;

  const ids = ordersRes.rows.map(r => r.id);
  if (ids.length === 0) return [];

  // @vercel/postgres sql helper doesn't expose sql.array in this setup.
  // Build a parameterized IN (...) clause safely.
  const placeholders = ids.map((_, idx) => `$${idx + 1}`).join(",");
  const query = `
    SELECT order_id, product_id, name, price, quantity, image
    FROM order_items
    WHERE order_id IN (${placeholders})
    ORDER BY order_id, name
  `;

  const itemsRes = (await (sql as any).query(query, ids)) as {
    rows: Array<{
      order_id: string;
      product_id: string;
      name: string;
      price: string;
      quantity: number;
      image: string | null;
    }>;
  };

  const itemsByOrder = new Map<string, DbOrderItem[]>();
  for (const row of itemsRes.rows) {
    const arr = itemsByOrder.get(row.order_id) ?? [];
    arr.push({
      id: row.product_id,
      name: row.name,
      price: Number(row.price),
      quantity: row.quantity,
      image: row.image ?? undefined,
    });
    itemsByOrder.set(row.order_id, arr);
  }

  return ordersRes.rows.map(r => ({
    id: r.id,
    createdAt: new Date(r.created_at).toISOString(),
    status: (r.status as DbOrder["status"]) ?? "new",
    customerName: r.customer_name ?? undefined,
    customerEmail: r.customer_email ?? undefined,
    items: itemsByOrder.get(r.id) ?? [],
    subtotal: Number(r.subtotal),
  }));
}
