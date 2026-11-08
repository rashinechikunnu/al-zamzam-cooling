import {
  Building2,
  Headset,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Feature } from "@/types";

const reasons: Feature[] = [
  {
    title: "Professional Cooling Solutions",
    text: "A professional approach to every air conditioning and refrigeration job, from first visit to handover.",
    icon: ShieldCheck,
  },
  {
    title: "AC & Refrigeration Expertise",
    text: "Technical know-how across air conditioning, chillers, freezers and cold rooms.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Installation & Maintenance",
    text: "One team for both new installations and the ongoing maintenance that keeps systems running.",
    icon: Wrench,
  },
  {
    title: "Commercial & Industrial Services",
    text: "Cooling services for shops, restaurants, warehouses, offices and industrial facilities all over the UAE.",
    icon: Building2,
  },
  {
    title: "Customer-Focused Approach",
    text: "We listen to your requirements and recommend solutions that suit your space and operations.",
    icon: Headset,
  },
  {
    title: "Complete Cooling Support",
    text: "From AC units to cold rooms and kitchen equipment — your cooling needs, handled in one place.",
    icon: Snowflake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white sm:py-28">
      {/* Subtle technical grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Al ZamZam Cooling?"
          description="Practical, dependable cooling services since 2020 — from our office in Ajman to sites all over the UAE."
          align="center"
          tone="light"
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <li key={reason.title} className="group bg-dark p-8 transition-colors hover:bg-navy-900 sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-md border border-yellow/30 bg-yellow/10 text-yellow transition-colors group-hover:bg-yellow group-hover:text-navy">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold !text-white">{reason.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{reason.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
