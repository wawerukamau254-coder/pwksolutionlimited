# PWK Solutions Limited — marketing website

Next.js (App Router) + TypeScript marketing site with a Postgres-backed contact form.

## Run it

```bash
docker compose -f docker-compose.base44.yml up -d --build
docker compose -f docker-compose.base44.yml ps
```

The site is served on http://localhost:3000.

## Layout

- `app/` — routes: `/` (home), `/services`, `/about`, `/contact`, plus `POST /api/contact`
- `components/` — `SiteHeader`, `SiteFooter`, `ContactForm`
- `lib/content.ts` — all copy that appears in more than one place (services, stats, contact details)
- `lib/db.ts` — Postgres pool used by the contact route
- `db/init.sql` — schema, applied by the `db` service on first start

## Checks

```bash
docker compose -f docker-compose.base44.yml exec -T web npm run typecheck
docker compose -f docker-compose.base44.yml exec -T web npm run build
```

## Sandbox notes

See `AGENTS.md` for environment specifics, and `docker-compose.base44.yml` for the
development stack.
