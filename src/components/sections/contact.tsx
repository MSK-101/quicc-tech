"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";
import {
  emptyContactForm,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  validateContactForm,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { EASE } from "@/lib/motion";

const CTA_POINTS = [
  "Reply with scope and a fixed starting price",
  "No obligation, no sales sequence",
  "You own the code and every account",
];

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 pt-6 pb-28 lg:px-8">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] border border-white/10 bg-linear-[150deg,rgba(37,99,235,0.22),rgba(29,78,216,0.12)_45%,rgba(34,211,238,0.08)] shadow-[0_60px_140px_-60px_rgba(37,99,235,0.8)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_40%,#000,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-45 left-[20%] size-130 animate-drift rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.3),transparent_62%)] blur-[60px]"
        />

        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:p-14">
          <Reveal className="flex flex-col gap-7">
            <h2 className="text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-balance">
              Ready to Build Something Amazing?
            </h2>
            <p className="max-w-115 text-lg leading-relaxed text-white/72 text-pretty">
              Whether you&apos;re launching a startup, upgrading your business, or
              creating your next big idea, {site.name} is ready to help.
            </p>

            <ul className="flex flex-col gap-3.5">
              {CTA_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <svg viewBox="0 0 16 16" className="size-4 flex-none" fill="none">
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      stroke="var(--color-aqua-400)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[15.5px] text-white/82">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-3.5 pt-4">
              <Image
                src="/team/founder.png"
                alt=""
                width={104}
                height={104}
                className="size-13 rounded-full border border-white/20 bg-white/8 object-cover object-[50%_12%]"
              />
              <span className="text-sm leading-relaxed text-white/66">
                Every enquiry is read by our founder,
                <br />
                usually the same working day.
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const update = <Key extends keyof ContactFormValues>(
    key: Key,
    value: ContactFormValues[Key],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    // Clear a field's error as soon as the visitor edits it.
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setServerError(
          result.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setServerError(
        `We couldn't reach the server. Please email ${site.email} directly.`,
      );
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(emptyContactForm);
    setErrors({});
    setServerError(null);
    setStatus("idle");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex h-full flex-col items-start gap-4 rounded-[22px] border border-white/16 bg-ink-950/62 p-10 backdrop-blur-2xl"
        >
          <span className="grid size-14 place-items-center rounded-full border border-mint-400/40 bg-mint-400/15">
            <svg viewBox="0 0 16 16" className="size-6.5" fill="none">
              <path
                d="M3.5 8.5l3 3 6-7"
                stroke="var(--color-mint-400)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">
            Enquiry received
          </h3>
          <p className="text-base leading-relaxed text-white/62">
            Thanks — we&apos;ll come back with scope, timeline and a fixed starting
            price. A confirmation is on its way to your inbox.
          </p>
          <Button type="button" variant="ghost" size="sm" onClick={reset}>
            Send another
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="relative flex flex-col gap-4.5 rounded-[22px] border border-white/14 bg-ink-950/60 p-7 backdrop-blur-2xl sm:p-8"
        >
          <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
            Start your project
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="NAME"
              error={errors.name}
              input={
                <input
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Jane Doe"
                  className={inputClasses(Boolean(errors.name))}
                />
              }
            />
            <Field
              label="EMAIL"
              error={errors.email}
              input={
                <input
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="jane@company.com"
                  className={inputClasses(Boolean(errors.email))}
                />
              }
            />
          </div>

          <Field
            label="PHONE"
            error={errors.phone}
            input={
              <input
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="+1 555 123 4567"
                className={inputClasses(Boolean(errors.phone))}
              />
            }
          />

          <ChipGroup
            label="WHAT DO YOU NEED?"
            options={SERVICE_OPTIONS}
            selected={values.service}
            onSelect={(option) => update("service", option)}
          />

          <ChipGroup
            label="TIMELINE"
            options={TIMELINE_OPTIONS}
            selected={values.timeline}
            onSelect={(option) => update("timeline", option)}
            mono
          />

          <Field
            label="PROJECT DETAILS"
            error={errors.message}
            input={
              <textarea
                rows={3}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="A sentence or two about what you're building and when you need it live."
                className={`${inputClasses(Boolean(errors.message))} resize-y leading-relaxed`}
              />
            }
          />

          {/* Honeypot — hidden from people, irresistible to bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label>
              Company
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.company ?? ""}
                onChange={(event) => update("company", event.target.value)}
              />
            </label>
          </div>

          {serverError ? (
            <p
              role="alert"
              className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-[13.5px] text-red-200"
            >
              {serverError}
            </p>
          ) : null}

          <Button
            type="submit"
            variant="solid"
            className="mt-1 w-full"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Submit project inquiry"}
          </Button>

          <span className="text-center text-[12.5px] text-white/42">
            No obligation. We reply with scope and a fixed starting price.
          </span>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-xl border bg-white/4 px-4 py-3.25 text-[14.5px] text-white outline-none transition-colors placeholder:text-white/32 focus:bg-brand-600/9 ${
    hasError
      ? "border-red-400/60 focus:border-red-400"
      : "border-white/13 focus:border-brand-500"
  }`;
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] tracking-[0.14em] text-white/42">
        {label}
      </span>
      {input}
      {error ? (
        <span role="alert" className="text-[12.5px] text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function ChipGroup<Option extends string>({
  label,
  options,
  selected,
  onSelect,
  mono = false,
}: {
  label: string;
  options: readonly Option[];
  selected: Option;
  onSelect: (option: Option) => void;
  mono?: boolean;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 font-mono text-[10px] tracking-[0.14em] text-white/42">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = option === selected;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option)}
              className={`rounded-[9px] border px-3.5 py-2.25 transition-all duration-250 ${
                mono ? "font-mono text-[12.5px]" : "text-[13.5px] font-medium"
              } ${
                isSelected
                  ? "border-white/90 bg-white text-ink-950"
                  : "border-white/12 bg-white/3.5 text-white/62 hover:border-white/30 hover:text-white"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
