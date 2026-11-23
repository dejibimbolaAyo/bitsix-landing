# app

## Purpose

Core Remix + TinaCMS application — routes, page components, shared UI, entry points, and styles.

## Ownership

- Route files organized under `routes/` — each route gets a folder with `route.tsx` (loader/data) and `page.tsx` (component)
- Components split into `components/blocks/` (page-section components, one per route/block type) and `components/ui/` (shared primitives: Carousel, BlogPost, Icons)
- Entry points: `entry.client.tsx`, `entry.server.tsx`
- Root layout: `root.tsx` — loads Navbar + Footer from TinaCMS globally
- Shared navigation uses one link list across breakpoints. Keep submenu triggers keyboard operable, expose expanded state, and mark the current page.
- Styles: `style.css` using Tailwind CSS v4 + DaisyUI custom theme "bitsix"

## Local Contracts

- Routes defined explicitly in `vite.config.ts` via `defineRoutes()`, not file-convention routing
- Each route folder pattern: `route.tsx` (loader + Tina query) + `page.tsx` (presentation component consuming query data)
- Data fetching via `client.queries.*` from `@tina/__generated__/client`, consumed via `useTina<Type>()`
- Path aliases: `@app/`, `@components/`, `@util/`, `@tina/`
- Fonts: Comfortaa and Playfair Display (loaded in root.tsx via Google Fonts preconnect)
- Import groups (enforced by ESLint): builtin/external first, then internal/parent/sibling/index, separated by newline

- The contact action reads `GOOGLE_SHEETS_WEBAPP_URL` from the Cloudflare Pages runtime. Keep the binding server-side. The contact page loads independently of the submission binding.

## Work Guidance

- Adding a new page: create folder under `routes/`, add `route.tsx` and `page.tsx`, register route in `vite.config.ts`, add TinaCMS collection if needed, create block components if needed
- Component naming: PascalCase folders, matching page/block names
- New shared UI primitives go in `components/ui/`, new page sections go in `components/blocks/`
- Use the paper and sand surfaces and the shared `site-container`, `site-hero`, `site-title`, `site-section`, and `site-action` styles in `style.css` for public-page layout and primary actions.

- Use navy for actions and text, paper and sand for surfaces, and muted gold for rating stars and small accents. Use semantic tokens for status colors. Pair dark surfaces with light text and an inverse primary action.

- Case Studies links use document navigation to bypass the intermittent client-side transition crash. Keep other route links on normal Remix navigation.

## Verification

- `npm run lint` — ESLint with React, TypeScript, JSX-a11y, import ordering rules
- `npm run typecheck` — TypeScript strict checks
