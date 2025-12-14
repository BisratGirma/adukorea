# AduKorea

## Database migrations (Vercel Postgres / Neon)

This project uses Vercel Postgres (Neon) via `@vercel/postgres`.

### Local migration

1) Set your connection string:

```powershell
$env:POSTGRES_URL="YOUR_CONNECTION_STRING"
```

2) Run migrations:

```powershell
npm run db:migrate
```

Migrations live in `migrations/` and are applied in filename order. Applied files are tracked in a `migrations` table.

### Production (Vercel)

- When you connect Vercel Postgres to the project, Vercel injects `POSTGRES_URL` automatically.
- You can run the migration script in CI (or locally against the production connection string).

## Admin API auth

- `GET /api/orders` is protected with a bearer token if `ADMIN_KEY` is set.
- Set `ADMIN_KEY` in your environment variables.
