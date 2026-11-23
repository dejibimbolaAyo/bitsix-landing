import { type PlatformProxy } from "wrangler";

interface Env {
  ZOHO_ACCOUNTS_URL?: string;
  ZOHO_CLIENT_ID?: string;
  ZOHO_CLIENT_SECRET?: string;
  ZOHO_REFRESH_TOKEN?: string;
}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}
