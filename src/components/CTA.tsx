import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/config/site";

type CTAProps = {
  title?: string;
  description?: string;
};

/** Navy call-to-action banner, reused on several pages. */
export default function CTA({
  title = "Looking for Reliable Cooling Solutions?",
  description = "Contact Al ZamZam Cooling for AC, refrigeration, chiller, freezer and cold room services.",
}: CTAProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-lg bg-navy px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-yellow/15" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-1.5 w-40 bg-yellow" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight !text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 text-lg text-white/75">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn btn-primary">
                Contact Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
