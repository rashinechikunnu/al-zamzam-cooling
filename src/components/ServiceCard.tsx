import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

/** One service card on the homepage grid. */
export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden bg-light">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
        <span className="absolute left-5 top-5 font-display text-sm font-bold tracking-widest text-white/90">
          0{index + 1}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10">
        <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-md bg-navy text-yellow shadow-lg transition-colors group-hover:bg-yellow group-hover:text-navy">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold leading-snug">{service.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-body/80">{service.summary}</p>
        <Link
          href={`/services/#${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-wider text-navy"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
