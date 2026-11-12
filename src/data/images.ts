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
    src: localImage("ac-installation-service.jpg"),
    alt: "Technician servicing a wall-mounted split air conditioning unit",
  },
  freezer: {
    src: localImage("chiller-freezer-service.jpg"),
    alt: "Commercial glass-door chiller and upright freezer stocked with food",
  },
  maintenance: {
    src: localImage("amc-maintenance.jpg"),
    alt: "Maintenance checklist with wrench and screwdriver for an annual maintenance contract",
  },
  coldRoom: {
    src: localImage("cold-room-installation.jpg"),
    alt: "Insulated panel cold room with a refrigeration unit and cold room door",
  },
  kitchen: {
    src: localImage("kitchen-equipment-maintenance.jpg"),
    alt: "Technician repairing the refrigeration system of a commercial kitchen prep counter",
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
