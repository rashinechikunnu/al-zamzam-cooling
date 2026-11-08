import { Suspense } from "react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ContactFormWithParams from "@/components/ContactFormWithParams";
import Location from "@/components/Location";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { images } from "@/data/images";
import { siteConfig, whatsappLink } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

// CONTACT PAGE — the "/contact/" URL.
export const metadata = pageMetadata({
  title: "Contact Us — AC & Refrigeration Services in Ajman",
  description:
    "Contact Al ZamZam Cooling in Industrial Area 1, Ajman, UAE for AC installation and maintenance, chiller, freezer and cold room services, AMC and kitchen equipment maintenance.",
  path: "/contact/",
});

export default function ContactPage() {
  const { address, contact } = siteConfig;

  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title="Contact Us"
        description="Send us your enquiry for air conditioning, refrigeration, cold room or kitchen equipment services. Our office is in Ajman, and we work all over the UAE."
        image={images.acUnits}
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          {/* Contact details */}
          <aside className="space-y-6">
            <div>
              <p className="eyebrow">Get In Touch</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">We&apos;re Here to Help</h2>
              <p className="mt-4 text-lg leading-relaxed text-body/80">
                The quickest way to reach us is WhatsApp. Fill in the form and your enquiry will open in WhatsApp,
                ready to send.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon /> WhatsApp Enquiry
              </a>
              {/* Call and Email buttons come from src/config/site.ts */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {contact.phones.map((phone) => (
                  <a key={phone.dial} href={`tel:${phone.dial}`} className="btn btn-navy">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call {phone.display}
                  </a>
                ))}
              </div>
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="btn btn-outline">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email Us
                </a>
              )}
            </div>

            <ul className="divide-y divide-line rounded-lg border border-line bg-light">
              <li className="flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-yellow">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy">Office Address</h3>
                  <address className="mt-1 not-italic leading-relaxed text-body/85">
                    {address.line1},<br />
                    {address.line2},<br />
                    {address.city}, {address.country}.
                  </address>
                </div>
              </li>
              {contact.phones.length > 0 && (
                <li className="flex gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-yellow">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy">Phone</h3>
                    {contact.phones.map((phone) => (
                      <a key={phone.dial} href={`tel:${phone.dial}`} className="mt-1 block text-body/85 hover:text-navy">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
              )}
              {contact.email && (
                <li className="flex gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-yellow">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy">Email</h3>
                    <a href={`mailto:${contact.email}`} className="mt-1 block text-body/85 hover:text-navy">
                      {contact.email.split("@")[0]}
                      <wbr />@{contact.email.split("@")[1]}
                    </a>
                  </div>
                </li>
              )}
              <li className="flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-yellow">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy">Service Area</h3>
                  <p className="mt-1 leading-relaxed text-body/85">
                    Office in {siteConfig.officeLocation}. We work all over the UAE, serving customers since{" "}
                    {siteConfig.foundedYear}.
                  </p>
                </div>
              </li>
            </ul>
          </aside>

          {/* Enquiry form */}
          <div className="rounded-lg border border-line bg-white p-6 shadow-card sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Send an Enquiry</h2>
            <p className="mb-8 mt-2 text-body/75">
              Fields marked <span className="text-red-600">*</span> are required.
            </p>
            {/* Suspense lets the page be pre-built as static HTML while the
                form reads "?service=" from the URL in the browser. */}
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
