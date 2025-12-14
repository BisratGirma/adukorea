-- Orders schema (shared)

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'new',
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  room_number TEXT,
  departure_time TEXT,
  departure_date TEXT,
  notes TEXT,
  payment_method TEXT,
  subtotal NUMERIC NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS order_items (
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  quantity INTEGER NOT NULL,
  image TEXT,
  PRIMARY KEY (order_id, product_id)
);

-- If the table existed before, ensure new columns exist.
ALTER TABLE orders ADD COLUMN IF NOT EXISTS customer_phone TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS room_number TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS departure_time TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS departure_date TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_method TEXT;
