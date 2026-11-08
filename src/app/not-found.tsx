import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Shown for unknown URLs. The static export saves it as 404.html,
// which GitHub Pages serves automatically.
export const metadata = { title: "Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-yellow sm:text-8xl">404</p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-body/75">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-navy mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Home
      </Link>
    </section>
  );
}
