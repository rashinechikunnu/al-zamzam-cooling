import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      {/* Background photo */}
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Navy overlay so text is always readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy/50 lg:via-navy-900/80 lg:to-navy/20"
      />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-1.5 bg-yellow" />

      <div className="container-site pb-28 pt-20 sm:pb-36 sm:pt-28 lg:pb-44 lg:pt-36">
        <div className="max-w-3xl animate-fade-up">
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-yellow/40 bg-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-yellow">
            <span>Since {siteConfig.foundedYear}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-yellow/60" />
            <span>Office in {siteConfig.officeLocation}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-yellow/60" />
            <span>Working All Over UAE</span>
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] !text-white sm:text-5xl lg:text-7xl">
            Complete Cooling Solutions for <span className="text-yellow">Every Space</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Professional air conditioning, refrigeration, chiller, freezer and cold room installation and
            maintenance services. Based in Ajman, working all over the UAE.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/services/" className="btn btn-primary">
              Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact/" className="btn btn-outline-light">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Service quick-links strip along the bottom of the hero */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-navy-900/70 backdrop-blur md:block">
        <ul className="container-site grid grid-cols-5 divide-x divide-white/10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/#${service.slug}`}
                  className="group flex h-full items-center gap-3 px-4 py-5 text-sm font-semibold leading-snug text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-6 w-6 shrink-0 text-yellow" aria-hidden="true" />
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
