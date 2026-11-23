# tina

## Purpose

TinaCMS configuration — schema definitions, collection metadata, custom fields, and generated type client.

## Ownership

- `schema.ts` — root schema that imports and registers all collections
- `collectionsSchema/` — one subdirectory per collection type (blog, case-study, pageBlocks, sharedFields, testimonial), each containing definition files and collection-level TS configs
- `customFields/` — custom TinaCMS field components (e.g. textInputWithCount)
- `config.ts` — TinaCMS client config (client ID, token, branch, media settings)
- `__generated__/` — auto-generated TypeScript client and types (committed, regenerated on `tinacms build`)

## Local Contracts

- Add new collection definitions in `collectionsSchema/<type>/` and import them into `schema.ts`
- Page block collections follow the pattern in `collectionsSchema/pageBlocks/` — one file per page type
- Shared field types (like SEO info) live in `collectionsSchema/sharedFields/`
- Run `tinacms build` after schema changes to regenerate `__generated__/`
- Blog `InfoBox` blocks declare rich-text `children` so Tina preserves Markdown inside the opening and closing tags.

## Verification

- `npm run typecheck` — type-check includes generated Tina types
- `npm run build` — triggers `tinacms build` before `remix vite:build`
