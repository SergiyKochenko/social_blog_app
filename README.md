# Blog (Next.js + Prisma)

Short description
-----------------

A small Next.js (App Router) blog starter using TypeScript, TailwindCSS, Clerk auth, and Prisma (v7). It includes runtime adapter selection for Prisma so the app can run with Neon or a standard Postgres provider.

Table of contents
-----------------

- Features
- Tech stack
- Quick start
- Environment variables
- Prisma adapter (Neon vs Postgres)
- Development & build
- Deployment
- Credits

Features
--------

- App Router (Next.js)
- TypeScript
- TailwindCSS + shadcn components
- Prisma ORM (v7) with runtime adapter selection
- Clerk authentication (Sign in / Sign out components)

Tech stack
----------

- Next.js 14 (app router)
- React 18
- TypeScript 5+
- Tailwind CSS
- Prisma 7
- PostgreSQL / Neon

Quick start
-----------

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file (see Environment variables section).

3. Generate Prisma client and push schema:

```bash
npx prisma generate
npx prisma db push
```

4. Run the dev server:

```bash
npm run dev
```

Environment variables
---------------------

Create a `.env` in the project root with at least:

```env
DATABASE_URL="postgresql://username:password@host:5432/dbname"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

Prisma Adapter (Neon vs Postgres)
--------------------------------

This project supports both the Postgres and Neon adapters for Prisma and chooses the adapter at runtime.

- How adapter selection works:
  - Set `PRISMA_ADAPTER=neon` to force Neon.
  - Set `PRISMA_ADAPTER=pg` to force Postgres.
  - If `PRISMA_ADAPTER` is not set, the code auto-detects Neon when the `DATABASE_URL` contains `neon` or `neondatabase`; otherwise it uses Postgres.

- Example env:

```bash
DATABASE_URL="postgresql://..."  # or a Neon URL
# Optional: PRISMA_ADAPTER=neon
# Optional: PRISMA_ADAPTER=pg
```

- Common Prisma commands:

```bash
npx prisma generate
npx prisma db push   # or `prisma migrate` if you prefer migrations
```

Development & build
-------------------

- Start dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
npm run start
```

Deployment
----------



Credits
-------



