import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { SiteImage } from "@/types";

type PageHeaderProps = {
  title: string;
  description: string;
  image: SiteImage;
  /** Name shown in the breadcrumb, e.g. "About" */
  breadcrumb: string;
};

/** Banner at the top of the About, Services and Contact pages. */
export default function PageHeader({ title, description, image, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <Image src={image.src} alt={image.alt} fill preload sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy/60" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-1.5 bg-yellow" />

      <div className="container-site py-20 sm:py-24 lg:py-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-yellow">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-semibold text-yellow">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <div className="max-w-3xl animate-fade-up">
          <h1 className="mt-5 text-4xl font-bold leading-tight !text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
