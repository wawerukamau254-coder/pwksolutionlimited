# AGENTS.md

## Stack

Next.js 15 (App Router) + TypeScript, styling in `app/globals.css`. Postgres 16 stores contact
form submissions. No third-party services, so no credentials are required to run.

Marketing copy that repeats across pages lives in `lib/content.ts` — edit it there rather than in
the individual pages.

## Running

```bash
docker compose -f docker-compose.base44.yml up -d
```

Site: http://localhost:3000. The `web` service runs `next dev` from the bind-mounted source, so
edits hot-reload. `npm ci` runs on every container start (~30-60s), so the first request after a
restart can take a moment; the healthcheck's `start_period` covers it.

## Non-obvious behaviour

- `db/init.sql` is applied by Postgres **only when the `pwk-db-data` volume is first created**.
  A later schema change needs a manual `psql` against the running `db` service; dropping the
  volume deletes stored messages.
- `app/api/contact/route.ts` is the only server route and requires `DATABASE_URL` (provided
  inline by compose). Without a reachable database it returns 500 with a fallback message.
- `next.config.ts` adds the preview origin (`3000-<BASE44_PUBLIC_HOST_SUFFIX>`) to
  `allowedDevOrigins` **only when `BASE44_PREVIEW_MODE === "1"`**. Without it Next serves the
  page but blocks dev assets and HMR behind the preview proxy. With the flag unset the
  allowlist stays empty, preserving normal behaviour.
- `WATCHPACK_POLLING` / `CHOKIDAR_USEPOLLING` are enabled because bind mounts on the sandbox do
  not reliably emit inotify events.

## Verifying

```bash
docker compose -f docker-compose.base44.yml exec -T web npm run typecheck
docker compose -f docker-compose.base44.yml exec -T db psql -U pwk -d pwk \
  -c "SELECT id, name, email, created_at FROM contact_messages ORDER BY id DESC LIMIT 5;"
```

- Routes: `/`, `/services`, `/about`, `/contact`.
- End-to-end check for the form: submit it in the browser, then confirm the row landed in the
  table above (delete the test row afterwards).
- In the Base44 preview browser, move between routes by **clicking the header links**.
  `window.__base44_preview.navigate()` uses `pushState` and the Next App Router ignores it — the
  URL changes while the old page stays on screen. At mobile widths the header links are collapsed
  behind the menu button, so open the menu first.
- `next build` writes into `.next` and disturbs the running dev server; use `typecheck` while the
  preview is in use.
