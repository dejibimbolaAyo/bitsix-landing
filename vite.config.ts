import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      ignoredRouteFiles: ["**/*"],
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.tsx", { index: true });
          route("/contact", "routes/contact/route.tsx");
          route("/resources/case-studies", "routes/resources/case-studies/route.tsx");
          route("/resources/case-studies/:slug", "routes/resources/case-studies/slug.tsx");
          route("/resources/testimonials", "routes/resources/testimonials/route.tsx");
          route("/resources/testimonials/:slug", "routes/resources/testimonials/slug.tsx");
          route("/services/cto-for-hire", "routes/services/cto-for-hire/route.tsx");
          route("/services/engineers-for-hire", "routes/services/engineers-for-hire/route.tsx");
          route("/services/product-development", "routes/services/product-development/route.tsx");
          route("/about/company", "routes/about/company/route.tsx");
          route("/blog", "routes/blog/route.tsx");
          route("/blog/:slug", "routes/blog/post.tsx");
          route("/services/digital-transformation", "routes/services/digital-transformation/route.tsx");
          route("/sitemap.xml", "routes/sitemap[.]xml.tsx");

          route("/admin", "routes/admin.tsx");
        });
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
