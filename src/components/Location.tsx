import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fullAddress, siteConfig } from "@/config/site";

/** Address card + embedded Google Map. */
export default function Location({ showHeading = true }: { showHeading?: boolean }) {
  const { address } = siteConfig;

  return (
    <section className="bg-light py-20 sm:py-28" aria-label="Our location">
      <div className="container-site">
        {showHeading && (
          <SectionHeading
            eyebrow="Visit Us"
            title="Our Location"
            description="Find Al Zamams in Industrial Area 1, Ajman."
          />
        )}

        <div className={`grid overflow-hidden rounded-lg border border-line bg-white shadow-card lg:grid-cols-[2fr_3fr] ${showHeading ? "mt-12" : ""}`}>
          <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-md bg-navy text-yellow">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">{siteConfig.name}</h3>
              <address className="mt-4 text-lg not-italic leading-relaxed text-body/85">
                {address.line1},<br />
                {address.line2},<br />
                {address.city}, {address.country}.
              </address>
            </div>
            <a
              href={siteConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy self-start"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="relative min-h-[320px] bg-line lg:min-h-[420px]">
            <iframe
              title={`Map showing ${fullAddress}`}
              src={siteConfig.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
