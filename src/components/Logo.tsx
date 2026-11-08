import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * The official Al ZamZam Cooling logo (exported from the logo PDF).
 *   public/logo/alzamzam-logo.svg        → colour version, for white backgrounds
 *   public/logo/alzamzam-logo-white.svg  → white version, for navy backgrounds
 */
type LogoProps = {
  /** "dark" = colour logo for light backgrounds, "light" = white logo for dark backgrounds */
  variant?: "dark" | "light";
  className?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Logo({ variant = "dark", className = "h-10 sm:h-12" }: LogoProps) {
  const file = variant === "light" ? "alzamzam-logo-white.svg" : "alzamzam-logo.svg";

  return (
    <Link href="/" aria-label={`${siteConfig.name} — home`} className="inline-flex shrink-0 items-center">
      {/* A plain <img> is best for an SVG logo: it is already sharp at every size. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/logo/${file}`}
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        width={844}
        height={172}
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
