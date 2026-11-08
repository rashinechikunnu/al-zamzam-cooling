"use client";
// "use client" = this component runs in the browser, because it needs
// interactivity (opening the mobile menu) and the current URL (active link).

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { fullAddress, siteConfig, whatsappLink } from "@/config/site";

/** True when `href` is the page we're on (handles trailing slashes). */
function isActive(pathname: string, href: string): boolean {
  const clean = (p: string) => p.replace(/\/+$/, "") || "/";
  return clean(pathname) === clean(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a stronger shadow once the user scrolls down.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Thin top bar with address — hidden on small phones */}
      <div className="hidden bg-navy-900 text-white/80 md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-yellow" aria-hidden="true" />
            {fullAddress}
          </span>
          <span className="font-medium tracking-wide text-yellow">{siteConfig.category}</span>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "border-transparent shadow-[0_6px_24px_-12px_rgb(15_24_64/0.25)]" : "border-line"
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 text-[0.95rem] font-semibold transition-colors after:absolute after:inset-x-4 after:-bottom-0.5 after:h-[3px] after:origin-left after:bg-yellow after:transition-transform ${
                      active
                        ? "text-navy after:scale-x-100"
                        : "text-body/80 after:scale-x-0 hover:text-navy hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact/" className="btn btn-outline py-2.5">
              Contact Us
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp py-2.5"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy hover:bg-light lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden ${
            menuOpen ? "max-h-[28rem]" : "max-h-0 border-t-0"
          }`}
        >
          <ul className="container-site flex flex-col py-3">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center border-l-4 px-4 py-3 text-base font-semibold ${
                      active ? "border-yellow bg-light text-navy" : "border-transparent text-body hover:bg-light"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-3 grid grid-cols-2 gap-3 px-1 pb-2">
              <Link href="/contact/" className="btn btn-navy" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
