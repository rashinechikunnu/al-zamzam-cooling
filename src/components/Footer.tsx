import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig, whatsappLink } from "@/config/site";
import { services } from "@/data/services";

export default function Footer() {
  const { address, contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/75">
      <div className="h-1 bg-yellow" aria-hidden="true" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr]">
        {/* Company */}
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Air conditioning, refrigeration, chiller, freezer, cold room and commercial kitchen equipment
            installation and maintenance services in Ajman, United Arab Emirates.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            Enquire on WhatsApp
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-yellow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Our Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/#${service.slug}`} className="transition-colors hover:text-yellow">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {address.line1},<br />
                {address.line2},<br />
                {address.city}, {address.country}
              </address>
            </li>
            {/* Phone and email only appear once they are added in src/config/site.ts */}
            {contact.phone && (
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-yellow" aria-hidden="true" />
                <a href={`tel:${contact.phone}`} className="hover:text-yellow">
                  {contact.phoneDisplay || contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-yellow" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-yellow">
                  {contact.email}
                </a>
              </li>
            )}
            <li>
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-white hover:text-yellow"
              >
                View on Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/50">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
