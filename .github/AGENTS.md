# .github

## Purpose

Validate site changes on pull requests and deploy production on merges to `main`.

## Ownership

- `workflows/pages.yml` builds Remix and deploys the `bitsix-landing-page` Cloudflare Pages project.

## Local Contracts

- Pull request checks generate Tina types with local content and run TypeScript and the Remix build.
- Production uses the GitHub Actions `production` environment. Set `TINA_CLIENT_ID` and `CLOUDFLARE_ACCOUNT_ID` as variables and `TINA_TOKEN` and `CLOUDFLARE_API_TOKEN` as secrets.
- The Cloudflare token needs Pages Write for the hosting account. Zoho runtime bindings stay in Cloudflare Pages.
- Run the workflow manually on `main` to retry a deployment.

## Work Guidance

## Verification

- The production workflow checks the public home, About, and Contact routes after publishing.

## Child DOX Index
