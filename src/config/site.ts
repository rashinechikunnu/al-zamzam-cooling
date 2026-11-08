/**
 * ============================================================
 *  CENTRAL SITE SETTINGS — edit company details here only.
 * ============================================================
 *
 * Every page, the footer, the WhatsApp button, SEO tags and the
 * structured data read from this file. Change a value here and it
 * updates everywhere on the website.
 *
 * Empty values ("" or an empty list) are hidden on the website
 * automatically, so no fake details are ever shown.
 */

export const siteConfig = {
  name: "Al ZamZam Cooling",
  tagline: "The Complete Cooling Solution",
  category: "HVAC, Air Conditioning & Refrigeration Solutions",

  /**
   * Full website address, WITHOUT a trailing slash.
   * The GitHub Actions workflow fills this in automatically from your
   * GitHub Pages settings (NEXT_PUBLIC_SITE_URL). Once your custom domain
   * is confirmed you can also hard-code it here, e.g. "https://www.example.ae".
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),

  title: "Al ZamZam Cooling | AC Installation & Refrigeration Services in Ajman & UAE",
  description:
    "Al ZamZam Cooling provides AC installation, chiller and freezer services, cold room installation, AMC and commercial kitchen equipment maintenance. Office in Ajman, working all over the UAE since 2020.",

  address: {
    line1: "Industrial Area 1",
    line2: "Opp. Al Ain Floor Mill",
    city: "Ajman",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  /** Year the company started. */
  foundedYear: 2020,

  /** Where the office is, and where the team works. */
  officeLocation: "Ajman",
  serviceArea: "All over the UAE",

  contact: {
    /**
     * WhatsApp number in INTERNATIONAL format, digits only, no "+" or spaces.
     * 971 = UAE country code, then the mobile number without its leading 0.
     * 050 920 2450  →  971509202450
     */
    whatsapp: "971509202450",

    /**
     * Phone numbers. "dial" is used for the tap-to-call link,
     * "display" is how the number is shown on the website.
     */
    phones: [
      { dial: "+971509202450", display: "050 920 2450" },
      { dial: "+971507742450", display: "050 774 2450" },
    ],

    /** Business email (from the company visiting card). */
    email: "alzamzamcoolingsolutions@gmail.com",
  },

  /**
   * Link that opens the location in Google Maps.
   * Currently an address search. When the business has a Google Business
   * Profile, paste its "Share" link here for a precise pin.
   */
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Industrial Area 1, Opp. Al Ain Floor Mill, Ajman, United Arab Emirates"),

  /** Embedded map (address search — no coordinates are assumed). */
  mapsEmbed:
    "https://www.google.com/maps?output=embed&q=" +
    encodeURIComponent("Industrial Area 1, Opp. Al Ain Floor Mill, Ajman, United Arab Emirates"),

  whatsappDefaultMessage:
    "Hello Al ZamZam Cooling, I would like to enquire about your cooling solutions and services.",

  /** Main navigation links. */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Contact", href: "/contact/" },
  ],
};

/** The address as one line, e.g. for alt text and meta tags. */
export const fullAddress = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  siteConfig.address.city,
  siteConfig.address.country,
].join(", ");

/**
 * Builds a WhatsApp "click to chat" link with a pre-filled message.
 * If no number is configured yet, WhatsApp still opens with the message
 * and lets the visitor choose a contact.
 */
export function whatsappLink(message: string = siteConfig.whatsappDefaultMessage): string {
  const text = encodeURIComponent(message);
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}
