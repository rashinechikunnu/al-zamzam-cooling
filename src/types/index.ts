import type { LucideIcon } from "lucide-react";

/** A photo used on the website. */
export type SiteImage = {
  src: string;
  alt: string;
};

/** One service offered by Al ZamZam Cooling. */
export type Service = {
  /** Short id, also used as the #anchor on the Services page, e.g. "ac-installation". */
  slug: string;
  title: string;
  /** One or two sentences for cards on the homepage. */
  summary: string;
  /** Longer introduction for the Services page. */
  description: string;
  /** Bullet points covering what the service includes. */
  features: { title: string; text: string }[];
  icon: LucideIcon;
  image: SiteImage;
};

/** A simple icon + title + text item (used for "Why choose us" etc.). */
export type Feature = {
  title: string;
  text: string;
  icon: LucideIcon;
};
