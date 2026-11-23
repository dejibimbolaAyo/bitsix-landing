# content

## Purpose

All CMS-managed content in Markdown (`.mdx`) files, consumed by TinaCMS and rendered through Remix routes.

## Ownership

- `blockPages/` — page-level content organized by route (home.mdx, about.mdx, contact.mdx, services/, resources/)
- `blogLists/` — blog list page content (main.mdx)
- `global/` — site-wide content: navbar, footer, blog global config
- `posts/` — individual blog post entries in MDX

## Local Contracts

- Block pages in `blockPages/` mirror the route structure and are consumed by the corresponding route's Tina query
- Blog posts in `posts/` are individual MDX files with frontmatter, queried via `blogPostConnection`
- Global content (navbar, footer) is loaded in `root.tsx` and available across all routes
- Adding a new page: add `.mdx` file in `blockPages/` (or appropriate subdirectory), matching the TinaCMS collection's `relativePath`

## Work Guidance

- Use realistic engineering imagery for the homepage hero and Expertise section. Keep cartoon-style assets out of those placements.
