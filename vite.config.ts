import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), netlifyPlugin(), tsconfigPaths(), remix({
    ignoredRouteFiles: ["**/*"],
    routes(defineRoutes) {
      return defineRoutes((route) => {
        route("/", "routes/home/route.tsx", { index: true });
        route("/about/company", "routes/about/company/route.tsx");
        route("/blog", "routes/blog/route.tsx");
        route("/blog/:slug", "routes/blog/post.tsx");
        route("/services/digital-transformation", "routes/services/digital-transformation/route.tsx");
        route("/sitemap.xml", "routes/sitemap[.]xml.tsx");
      });
    },
  })],
});
