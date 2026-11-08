import type { SiteImage } from "@/types";

/**
 * All photos used on the website, in one place.
 *
 * These are free-to-use photos from Unsplash (https://unsplash.com/license),
 * loaded from Unsplash's fast image CDN.
 *
 * TO USE YOUR OWN PHOTOS (recommended — real project photos build trust):
 *   1. Put the file in  public/images/  e.g. public/images/cold-room.jpg
 *   2. Change the src below to  "/images/cold-room.jpg"
 *   3. Update the alt text to describe the photo.
 */
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f",
    alt: "Commercial air conditioning condenser units with fans and refrigerant pipework",
  },
  acService: {
    src: "https://images.unsplash.com/photo-1792799888905-8696bd32a11a",
    alt: "Technician servicing an outdoor air conditioning unit with refrigerant gauges",
  },
  freezer: {
    src: "https://images.unsplash.com/photo-1601599967100-f16100982063",
    alt: "Commercial display freezer stocked with frozen products",
  },
  maintenance: {
    src: "https://images.unsplash.com/photo-1748442001865-5583ec02ae22",
    alt: "Maintenance technician inspecting industrial pipes and valves",
  },
  coldRoom: {
    src: "https://images.unsplash.com/photo-1741739813128-cb658a9a0f9a",
    alt: "Frozen goods stored in metal cages inside a cold storage room",
  },
  kitchen: {
    src: "https://images.unsplash.com/photo-1589109807644-924edf14ee09",
    alt: "Commercial kitchen with stainless steel equipment and shelving",
  },
  acUnits: {
    src: "https://images.unsplash.com/photo-1667983453881-4992fe86ab1b",
    alt: "Air conditioning outdoor units mounted on a commercial building wall",
  },
  ducting: {
    src: "https://images.unsplash.com/photo-1615309662243-70f6df917b59",
    alt: "Large metal ventilation ducts on a commercial building",
  },
  industrial: {
    src: "https://images.unsplash.com/photo-1620203853151-496c7228306c",
    alt: "Industrial pipework and valves in a plant room",
  },
} satisfies Record<string, SiteImage>;
