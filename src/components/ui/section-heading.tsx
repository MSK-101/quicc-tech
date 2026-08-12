import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  /** Two-digit section number, e.g. "03". */
  index: string;
  /** Short uppercase label, e.g. "SERVICES". */
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Colour of the eyebrow label. */
  accent?: "brand" | "aqua";
  className?: string;
};

const accentClass = {
  brand: "text-brand-400",
  aqua: "text-aqua-400",
} as const;

export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
  accent = "aqua",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <Reveal
      className={`${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <span
        className={`mb-4 inline-block font-mono text-[11px] tracking-[0.18em] ${accentClass[accent]}`}
      >
        {index} — {label}
      </span>
      <h2 className="text-[clamp(2rem,4.4vw,2.875rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[17px] leading-relaxed text-white/55 text-pretty">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
