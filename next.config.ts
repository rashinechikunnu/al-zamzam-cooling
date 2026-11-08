import type { NextConfig } from "next";

/**
 * BASE PATH
 * - With a custom domain (www.your-domain.com) the site lives at the root,
 *   so the base path is "" (empty). This is the default.
 * - Without a custom domain, GitHub Pages serves the site from
 *   https://<username>.github.io/<repo-name>/ — then the base path must be
 *   "/<repo-name>". The GitHub Actions workflow sets NEXT_PUBLIC_BASE_PATH
 *   automatically, so you normally never edit this by hand.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Build a fully static site into the "out" folder (no server needed).
  output: "export",

  // Emit /about/index.html instead of /about.html. Works reliably on GitHub Pages.
  trailingSlash: true,

  basePath,

  images: {
    // The default Next.js image optimizer needs a server, so we use our own
    // tiny loader (src/lib/image-loader.ts) that works with static hosting.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
