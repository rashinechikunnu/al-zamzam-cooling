import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Location from "@/components/Location";
import { pageMetadata } from "@/lib/seo";

// HOMEPAGE — this file is the "/" URL. It just stacks the section components.
export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <CTA />
      <Location />
    </>
  );
}
