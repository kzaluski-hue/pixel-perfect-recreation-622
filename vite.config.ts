// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Every public page is visitor-independent. Parameterized routes must be
    // listed with concrete URLs; never auto-discover future private pages.
    pages: [
      { path: "/" },
      { path: "/palmy-mrozoodporne" },
      { path: "/rosliny-egzotyczne" },
      { path: "/blog" },
      { path: "/blog/palma-w-polskim-ogrodzie-jaka-wybrac-jak-ja-uprawiac-i-zabezpieczyc-przed-mrozem" },
    ],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
    },
  },
});
