"use client";
// Client component: the form needs to react to typing and the submit button.

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { services } from "@/data/services";
import { siteConfig, whatsappLink } from "@/config/site";

/*
 * HOW THIS FORM WORKS (no server needed)
 * This is a static website, so there is no server to email the form.
 * Instead, when the visitor presses submit we:
 *   1. check the fields are filled in correctly, then
 *   2. open WhatsApp with their enquiry already typed out.
 * The visitor then presses "Send" inside WhatsApp.
 */

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const OTHER_SERVICE = "Other / Not sure";

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (phoneDigits.length < 7 || phoneDigits.length > 15 || !/^[+\d\s()-]+$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number, e.g. +971 50 123 4567.";
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.service) errors.service = "Please choose the service you need.";
  if (values.message.trim().length < 10) errors.message = "Please tell us a little more (at least 10 characters).";

  return errors;
}

function buildWhatsAppMessage(values: FormValues): string {
  return [
    `Hello ${siteConfig.name}, I would like to make an enquiry.`,
    "",
    `*Name:* ${values.name.trim()}`,
    `*Phone:* ${values.phone.trim()}`,
    values.email.trim() ? `*Email:* ${values.email.trim()}` : null,
    `*Service required:* ${values.service}`,
    "",
    `*Message:*`,
    values.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  // Turn "?service=cold-room" into the service's full title.
  const initialService = services.find((s) => s.slug === defaultService)?.title || "";

  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it.
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Move keyboard focus to the first field with a problem.
      const firstField = Object.keys(found)[0];
      document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    window.open(whatsappLink(buildWhatsAppMessage(values)), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const inputClass = (field: keyof FormValues) =>
    `mt-2 block w-full rounded-md border bg-white px-4 py-3 text-base text-dark placeholder:text-body/40 transition-colors focus:outline-none focus:ring-4 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
        : "border-line focus:border-navy focus:ring-navy/10"
    }`;

  const errorText = (field: keyof FormValues) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1.5 text-sm font-medium text-red-600">
        {errors[field]}
      </p>
    ) : null;

  const describedBy = (field: keyof FormValues) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-navy">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={inputClass("name")}
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="contact-phone" className="text-sm font-semibold text-navy">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+971 5X XXX XXXX"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className={inputClass("phone")}
          />
          {errorText("phone")}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-navy">
            Email Address <span className="font-normal text-body/50">(optional)</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={inputClass("email")}
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor="contact-service" className="text-sm font-semibold text-navy">
            Service Required <span className="text-red-600">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            value={values.service}
            onChange={handleChange}
            aria-invalid={!!errors.service}
            aria-describedby={describedBy("service")}
            className={`${inputClass("service")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2317245d%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.25rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value={OTHER_SERVICE}>{OTHER_SERVICE}</option>
          </select>
          {errorText("service")}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-navy">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us about your requirement — type of equipment, location, and any issues."
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          className={`${inputClass("message")} resize-y`}
        />
        {errorText("message")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-body/70">
          <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
          Submitting opens WhatsApp with your enquiry ready to send.
        </p>
        <button type="submit" className="btn btn-navy shrink-0">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send Enquiry via WhatsApp
        </button>
      </div>

      {submitted && (
        <div role="status" className="flex gap-3 rounded-md border border-[#25D366]/40 bg-[#25D366]/10 p-4 text-sm text-dark">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1a9e4b]" aria-hidden="true" />
          <p>
            WhatsApp has opened in a new tab with your enquiry. Please press <strong>Send</strong> in WhatsApp to
            deliver your message to us. If WhatsApp did not open,{" "}
            <a
              href={whatsappLink(buildWhatsAppMessage(values))}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline"
            >
              click here
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
