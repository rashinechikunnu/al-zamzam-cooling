/**
 * Custom image loader for the static export.
 *
 * next/image calls this function to build the URL for each image size.
 * - Unsplash photos: we ask Unsplash's CDN for the exact width needed and a
 *   modern format (WebP/AVIF), so phones download small images.
 * - Local images in /public: returned as-is (with the base path added),
 *   because a static site has no server to resize them.
 */

type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src, width, quality }: LoaderProps): string {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality || 70));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }

  if (src.startsWith("/")) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return `${basePath}${src}`;
  }

  return src;
}
