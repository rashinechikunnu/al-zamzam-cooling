import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Generated once at build time as /sitemap.xml (required for static export).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/about/", priority: 0.7 },
    { path: "/contact/", priority: 0.8 },
  ];

  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
