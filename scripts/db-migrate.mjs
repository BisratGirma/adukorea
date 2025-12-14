import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";    



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migrationsDir = path.resolve(__dirname, "..", "migrations");
dotenv.config({  path: path.resolve(__dirname, "..", ".env.local") });
const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  console.error("Missing POSTGRES_URL env var.");
  process.exit(1);
}

async function main() {
  const { Client } = await import("pg");
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });

  const files = fs
    .readdirSync(migrationsDir)
    .filter(f => f.endsWith(".sql"))
    .sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    console.log(`No migrations found in ${migrationsDir}`);
    return;
  }

  await client.connect();

  try {
    await client.query(`CREATE TABLE IF NOT EXISTS migrations (
      id TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`);

    for (const file of files) {
      const id = file;
      const already = await client.query("SELECT 1 FROM migrations WHERE id = $1", [id]);
      if (already.rowCount) {
        console.log(`skip ${file}`);
        continue;
      }

      const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
      console.log(`apply ${file}`);
      await client.query("BEGIN");
      try {
        await client.query(sql);
        await client.query("INSERT INTO migrations (id) VALUES ($1)", [id]);
        await client.query("COMMIT");
      } catch (e) {
        await client.query("ROLLBACK");
        throw e;
      }
    }

    console.log("Migrations complete.");
  } finally {
    await client.end();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
