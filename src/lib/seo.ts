import type { Metadata } from "next";
import { fullAddress, siteConfig } from "@/config/site";
import { images } from "@/data/images";

/**
 * Builds the SEO tags (title, description, canonical URL, Open Graph)
 * for one page. Each page.tsx calls this with its own values.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  /** The page URL path, e.g. "/about/" */
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const desc = description || siteConfig.description;

  return {
    // "absolute" stops the layout's title template being added a second time.
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName: siteConfig.name,
      title: fullTitle,
      description: desc,
      url: path,
      images: [
        {
          url: `${images.hero.src}?w=1200&h=630&fit=crop&auto=format&q=70`,
          width: 1200,
          height: 630,
          alt: images.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

/**
 * LocalBusiness structured data (JSON-LD) for Google.
 * Uses only verified company details from src/config/site.ts.
 */
export function localBusinessJsonLd() {
  const { address, contact } = siteConfig;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/alzamzam-logo.svg`,
    image: `${images.hero.src}?w=1200&auto=format&q=70`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.city,
      addressCountry: address.countryCode,
    },
    foundingDate: String(siteConfig.foundedYear),
    areaServed: { "@type": "Country", name: address.country },
    hasMap: siteConfig.mapsLink,
    knowsAbout: [
      "AC installation",
      "AC maintenance",
      "Chiller installation and service",
      "Freezer installation and service",
      "Cold room installation",
      "Annual maintenance contracts",
      "Commercial kitchen equipment maintenance",
    ],
  };

  if (contact.phones.length > 0) data.telephone = contact.phones.map((phone) => phone.dial);
  if (contact.email) data.email = contact.email;

  return data;
}

export { fullAddress };
