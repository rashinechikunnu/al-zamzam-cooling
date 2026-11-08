import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { whatsappLink } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

// SERVICES PAGE — the "/services/" URL. Content comes from src/data/services.ts.
export const metadata = pageMetadata({
  title: "Services — AC, Chiller, Freezer & Cold Room Services in Ajman",
  description:
    "AC installation and maintenance, chiller and freezer installation and service, cold room installation, annual maintenance contracts and kitchen equipment maintenance in Ajman, UAE.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        title="Our Services"
        description="Air conditioning, refrigeration and commercial kitchen equipment services — installation, servicing and maintenance for businesses in Ajman and across the UAE."
        image={images.industrial}
      />

      {/* Jump links to each service */}
      <nav aria-label="Services on this page" className="sticky top-[117px] z-30 hidden border-b border-line bg-white/95 backdrop-blur md:block">
        <ul className="container-site flex gap-1 overflow-x-auto py-3">
          {services.map((service) => (
            <li key={service.slug} className="shrink-0">
              <a
                href={`#${service.slug}`}
                className="block rounded-md px-4 py-2 text-sm font-semibold text-body/80 transition-colors hover:bg-light hover:text-navy"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-12 sm:py-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reversed = index % 2 === 1;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className="py-12 sm:py-16"
              aria-labelledby={`${service.slug}-title`}
            >
              <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-5 flex h-20 w-20 items-center justify-center rounded-md bg-yellow text-navy shadow-card-hover ${
                      reversed ? "-left-3 sm:-left-5" : "-right-3 sm:-right-5"
                    }`}
                  >
                    <Icon className="h-10 w-10" />
                  </span>
                </div>

                {/* Text */}
                <div>
                  <p className="eyebrow">Service 0{index + 1}</p>
                  <h2 id={`${service.slug}-title`} className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-body/80">{service.description}</p>

                  <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature.title} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-yellow">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="font-sans text-base font-bold text-navy">{feature.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-body/75">{feature.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link href={`/contact/?service=${service.slug}`} className="btn btn-navy">
                      Enquire About This Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a
                      href={whatsappLink(
                        `Hello Al Zamams, I would like to enquire about your ${service.title} service.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <WhatsAppIcon /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTA
        title="Need a Cooling Specialist?"
        description="Tell us what you need — installation, servicing, repair or an annual maintenance contract."
      />
    </>
  );
}
