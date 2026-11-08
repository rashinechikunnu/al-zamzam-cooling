/**
 * ============================================================
 *  CENTRAL SITE SETTINGS — edit company details here only.
 * ============================================================
 *
 * Every page, the footer, the WhatsApp button, SEO tags and the
 * structured data read from this file. Change a value here and it
 * updates everywhere on the website.
 *
 * Empty strings ("") mean "not supplied yet". Anything empty is
 * hidden on the website automatically, so no fake details are shown.
 */

export const siteConfig = {
  name: "Al Zamams",
  tagline: "The Complete Cooling Solution",
  category: "HVAC, Air Conditioning & Refrigeration Solutions",

  /**
   * Full website address, WITHOUT a trailing slash.
   * The GitHub Actions workflow fills this in automatically from your
   * GitHub Pages settings (NEXT_PUBLIC_SITE_URL). Once your custom domain
   * is confirmed you can also hard-code it here, e.g. "https://www.example.ae".
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),

  title: "Al Zamams | AC Installation & Refrigeration Services in Ajman",
  description:
    "Al Zamams provides AC installation, chiller and freezer services, cold room installation, AMC and commercial kitchen equipment maintenance in Ajman, UAE.",

  address: {
    line1: "Industrial Area 1",
    line2: "Opp. Al Ain Floor Mill",
    city: "Ajman",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  contact: {
    /**
     * WhatsApp number in INTERNATIONAL format, digits only, no "+" or spaces.
     * Example format: "9715XXXXXXXX"  (971 = UAE country code)
     * Leave "" until the real business number is supplied.
     */
    whatsapp: "",

    /** Phone number as it should be dialled, e.g. "+9716XXXXXXX". */
    phone: "",

    /** Phone number as it should be displayed, e.g. "+971 6 XXX XXXX". */
    phoneDisplay: "",

    /** Business email, e.g. "info@your-domain.com". */
    email: "",
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
    "Hello Al Zamams, I would like to enquire about your cooling solutions and services.",

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
