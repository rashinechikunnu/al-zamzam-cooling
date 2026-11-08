import type { NextConfig } from "next";

// The site is served from https://<username>.github.io/al-zamzam-cooling/
// If you later connect a custom domain, change this to "".
const basePath = "/al-zamzam-cooling";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Makes the base path available to code that builds plain URLs (e.g. the logo <img>).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Required: this is what processes Tailwind CSS. Without it the site has no styling.
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
