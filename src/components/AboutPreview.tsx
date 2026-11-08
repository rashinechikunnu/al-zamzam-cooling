import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { images } from "@/data/images";

const highlights = [
  "AC installation, servicing and repair",
  "Chiller, freezer and cold room solutions",
  "Annual maintenance contracts",
  "Commercial kitchen equipment maintenance",
];

/** Homepage "About" preview with a split image/text layout. */
export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <div className="relative isolate pb-10 pr-10 sm:pb-14 sm:pr-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
            <Image
              src={images.acUnits.src}
              alt={images.acUnits.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 overflow-hidden rounded-lg border-[6px] border-white shadow-card-hover">
            <div className="relative aspect-square">
              <Image
                src={images.industrial.src}
                alt={images.industrial.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute -left-4 -top-4 -z-10 h-32 w-32 bg-yellow sm:-left-6 sm:-top-6" />
        </div>

        {/* Text */}
        <div>
          <SectionHeading eyebrow="About Al ZamZam Cooling" title="Your Trusted Cooling Solutions Partner" />
          <p className="mt-6 text-lg leading-relaxed text-body/80">
            Since 2020, Al ZamZam Cooling has provided air conditioning, refrigeration and cooling solutions for
            commercial and industrial requirements. From our office in Ajman, we work all over the UAE, focusing on
            professional installation, maintenance and reliable technical support.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 font-medium text-navy">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/about/" className="btn btn-navy mt-10">
            Learn More About Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
