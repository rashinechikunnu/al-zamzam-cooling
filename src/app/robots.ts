import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Generated once at build time as /robots.txt (required for static export).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
