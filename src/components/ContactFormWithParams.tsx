"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";

/**
 * Reads "?service=..." from the URL (set by the "Enquire" buttons on the
 * Services page) and pre-selects that service in the contact form.
 * Must be wrapped in <Suspense> on the page — see contact/page.tsx.
 */
export default function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  // "key" makes the form restart with the new default if the URL changes.
  return <ContactForm key={service} defaultService={service} />;
}
