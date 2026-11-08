import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  HardHat,
  Lightbulb,
  ScanSearch,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

// ABOUT PAGE — the folder name "about" makes this the "/about/" URL.
export const metadata = pageMetadata({
  title: "About Us — HVAC & Refrigeration Company in Ajman",
  description:
    "Al ZamZam Cooling is a cooling solutions company with its office in Ajman, working all over the UAE since 2020, providing AC, refrigeration, chiller, freezer, cold room and commercial kitchen equipment installation and maintenance.",
  path: "/about/",
});

const approach = [
  {
    title: "Understand",
    text: "We start by understanding your space, your equipment and how your business uses cooling.",
    icon: ScanSearch,
  },
  {
    title: "Recommend",
    text: "We suggest a practical solution — installation, servicing, repair or a maintenance plan.",
    icon: Lightbulb,
  },
  {
    title: "Deliver",
    text: "Our technicians carry out the work carefully, with attention to safety and tidy workmanship.",
    icon: HardHat,
  },
  {
    title: "Maintain",
    text: "Ongoing maintenance and support help keep your systems performing over time.",
    icon: ClipboardList,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About"
        title="About Al ZamZam Cooling"
        description="Al ZamZam Cooling is a cooling solutions service company based in Ajman and working all over the UAE since 2020. We provide air conditioning, refrigeration, chiller, freezer, cold room and commercial kitchen equipment installation and maintenance services."
        image={images.ducting}
      />

      {/* Company introduction */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who We Are" title="The Complete Cooling Solution" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-body/80">
              <p>
                Established in 2020, Al ZamZam Cooling works with businesses that depend on reliable cooling — from offices and retail spaces to
                restaurants, food storage operations and industrial facilities.
              </p>
              <p>
                Our services cover the full range of cooling needs: air conditioning installation and servicing,
                chillers and freezers, cold room installation with insulated panels and refrigeration systems, annual
                maintenance contracts, and the maintenance of commercial kitchen equipment.
              </p>
              <p>
                Our office is in Industrial Area 1, Ajman, and our team works on projects all over the UAE. We aim
                to be a single, dependable point of contact for cooling installation and maintenance.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={images.acService.src}
                alt={images.acService.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-md bg-navy p-6 text-white shadow-card-hover sm:left-auto sm:max-w-xs">
              <p className="font-display text-lg font-bold text-yellow">Since 2020</p>
              <p className="mt-1 text-sm text-white/75">
                Office in Ajman · Working all over the UAE on AC, refrigeration and cooling projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our services */}
      <section className="bg-light py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Offer"
            description="Five core services covering air conditioning, refrigeration and commercial kitchen equipment."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/#${service.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-card-hover"
                  >
                    <Icon className="h-9 w-9 text-navy transition-colors group-hover:text-yellow-600" aria-hidden="true" />
                    <h3 className="mt-5 flex-1 text-lg font-bold leading-snug">{service.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                      Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Work"
            description="A straightforward process focused on your requirements and long-term system performance."
            align="center"
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {approach.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative">
                  {index < approach.length - 1 && (
                    <span aria-hidden="true" className="absolute left-16 right-0 top-7 hidden h-px bg-line lg:block" />
                  )}
                  <div className="relative flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-md bg-navy text-yellow">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold tracking-widest text-navy/40">STEP 0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-body/80">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <WhyChooseUs />

      <CTA
        title="Let's Discuss Your Cooling Requirements"
        description="Get in touch with Al ZamZam Cooling for installation, servicing or a maintenance contract."
      />
    </>
  );
}
