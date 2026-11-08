import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

/** Homepage "Our Cooling Solutions" section. */
export default function Services() {
  return (
    <section className="bg-light py-20 sm:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Cooling Solutions"
            description="Complete air conditioning, refrigeration and industrial cooling services for your business."
          />
          <Link href="/services/" className="btn btn-outline shrink-0 self-start lg:self-auto">
            View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}

          {/* Sixth tile fills the grid with an enquiry prompt */}
          <div className="flex flex-col justify-between rounded-lg bg-navy p-8 text-white sm:col-span-2 lg:col-span-1">
            <div>
              <MessageSquareText className="h-10 w-10 text-yellow" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-bold !text-white">Not sure which service you need?</h3>
              <p className="mt-3 leading-relaxed text-white/75">
                Tell us about your space and equipment, and our team will advise on the right cooling solution.
              </p>
            </div>
            <Link href="/contact/" className="btn btn-primary mt-8 self-start">
              Send an Enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
