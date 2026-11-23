# scripts

## Purpose

Developer tooling — page generator, dev server script, and tools menu for scaffolding.

## Ownership

- `dev.js` — custom dev server launcher
- `generate-page.ts` — CLI page generator with optional AI content generation (OpenAI)
- `index.ts` — tools menu entry point (launched via `npm run tools`)
- `README.md` — usage documentation for the page generator
- `package.json` + `tsconfig.json` — local dependencies and TS config for scripts

## Local Contracts

- Scripts use `ts-node --esm` for TypeScript execution
- Run via npm scripts: `npm run generate-page`, `npm run tools`
- Inquirer-based CLI prompts for interactive page scaffolding
- Chalk for colored terminal output

## Verification

- Scripts are run directly via npm; no automated test suite for scripts currently
