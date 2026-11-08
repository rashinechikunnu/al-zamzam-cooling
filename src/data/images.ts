import type { SiteImage } from "@/types";

/**
 * Builds an Unsplash photo URL at a fixed width, in a modern format (WebP/AVIF).
 * Images are "unoptimized" in next.config.ts, so the size is chosen here instead.
 */
function unsplash(photoId: string, width: number): string {
  return `https://images.unsplash.com/${photoId}?w=${width}&q=70&auto=format&fit=crop`;
}

/** Path to a photo in public/images/, with the site's base path (/al-zamzam-cooling) added. */
export function localImage(fileName: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/${fileName}`;
}

/**
 * All photos used on the website, in one place.
 *
 * These are free-to-use photos from Unsplash (https://unsplash.com/license),
 * loaded from Unsplash's fast image CDN.
 *
 * TO USE YOUR OWN PHOTOS (recommended — real project photos build trust):
 *   1. Put the file in  public/images/  e.g. public/images/cold-room.jpg
 *      (resize it to about 1600px wide first so pages stay fast)
 *   2. Change the src below to  localImage("cold-room.jpg")
 *   3. Update the alt text to describe the photo.
 */
export const images = {
  hero: {
    src: unsplash("photo-1698479603408-1a66a6d9e80f", 1920),
    alt: "Commercial air conditioning condenser units with fans and refrigerant pipework",
  },
  acService: {
    src: unsplash("photo-1792799888905-8696bd32a11a", 1000),
    alt: "Technician servicing an outdoor air conditioning unit with refrigerant gauges",
  },
  freezer: {
    src: unsplash("photo-1601599967100-f16100982063", 1000),
    alt: "Commercial display freezer stocked with frozen products",
  },
  maintenance: {
    src: unsplash("photo-1748442001865-5583ec02ae22", 1000),
    alt: "Maintenance technician inspecting industrial pipes and valves",
  },
  coldRoom: {
    src: unsplash("photo-1741739813128-cb658a9a0f9a", 1000),
    alt: "Frozen goods stored in metal cages inside a cold storage room",
  },
  kitchen: {
    src: unsplash("photo-1589109807644-924edf14ee09", 1000),
    alt: "Commercial kitchen with stainless steel equipment and shelving",
  },
  acUnits: {
    src: unsplash("photo-1667983453881-4992fe86ab1b", 1920),
    alt: "Air conditioning outdoor units mounted on a commercial building wall",
  },
  ducting: {
    src: unsplash("photo-1615309662243-70f6df917b59", 1920),
    alt: "Large metal ventilation ducts on a commercial building",
  },
  industrial: {
    src: unsplash("photo-1620203853151-496c7228306c", 1920),
    alt: "Industrial pipework and valves in a plant room",
  },
} satisfies Record<string, SiteImage>;
