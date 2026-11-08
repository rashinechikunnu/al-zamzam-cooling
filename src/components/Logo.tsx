import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Text-based logo (placeholder until the official logo file is supplied).
 *
 * TO USE THE OFFICIAL LOGO:
 *   1. Save it as public/logo/al-zamams-logo.svg (or .png)
 *   2. Replace the <span> blocks below with:
 *      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo/al-zamams-logo.svg`}
 *           alt="Al Zamams logo" width={180} height={48} />
 */
type LogoProps = {
  /** "dark" = navy text for light backgrounds, "light" = white text for dark backgrounds */
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" aria-label={`${siteConfig.name} — home`} className="group inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md font-display text-xl font-bold ${
          isLight ? "bg-yellow text-navy" : "bg-navy text-yellow"
        }`}
      >
        AZ
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-bold uppercase tracking-wide ${
            isLight ? "text-white" : "text-navy"
          }`}
        >
          Al Zamams
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[0.56rem] font-semibold uppercase tracking-[0.14em] sm:text-[0.62rem] sm:tracking-[0.2em] ${
            isLight ? "text-yellow" : "text-navy/60"
          }`}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
