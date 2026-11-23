import { type PlatformProxy } from "wrangler";

interface Env {
  GOOGLE_SHEETS_WEBAPP_URL?: string;
}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}
