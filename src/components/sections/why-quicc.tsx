import Image from "next/image";
import type { CSSProperties } from "react";

import { ReasonIcon } from "@/components/icons/reason-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/content/reasons";

/**
 * The ten reasons as a single centred column: a large index, a hexagon-framed
 * icon, then the reason and its supporting line. A dotted rail links each row
 * to the next so the list reads as one continuous sequence.
 *
 * Every row carries its own accent colour, graded from aqua down to magenta.
 */
export function WhyQuicc() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-white/1 px-6 py-28 lg:px-8">
      <SectionEdgeLabel text="WHY QUICC" side="right" />

      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeading
          index="03"
          label="WHY QUICC"
          align="center"
          accent="brand"
          title={
            <>
              10 Reasons to Partner{" "}
              <span className="text-gradient-brand">With Our Team</span>
            </>
          }
        />

        {/* Supplied glow divider between the heading and the description. */}
        <Reveal delay={0.05}>
          <Image
            src="/divider.png"
            alt=""
            aria-hidden="true"
            width={2172}
            height={724}
            className="mx-auto -my-4 h-auto w-full max-w-md select-none"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto max-w-2xl text-center text-[16.5px] leading-relaxed text-white/55 text-pretty">
            Transparent pricing. Clear communication. Complete visibility. Work
            directly with experienced engineers and stay informed throughout
            every phase of development — from strategy and design to launch and
            ongoing support.
          </p>
        </Reveal>

        <ol className="mx-auto mt-16 flex max-w-3xl flex-col">
          {reasons.map((reason, index) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={0.04}
              className="group relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
              // Exposed as a variable so the number, hexagon and rail can all
              // share one colour without repeating it four times.
              style={{ "--accent": reason.accent } as CSSProperties}
            >
              <span className="w-9 flex-none pt-1 text-right font-mono text-[19px] leading-none font-semibold tabular-nums text-[color:var(--accent)] sm:w-12 sm:text-[22px]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex-none">
                <ReasonIcon
                  name={reason.icon}
                  className="size-13 text-[color:var(--accent)] transition-transform duration-400 group-hover:scale-105 sm:size-14"
                />
                {/* Dotted rail down to the next row, with a node at its centre. */}
                {index < reasons.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-full mx-auto flex h-10 w-px justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]"
                  >
                    <span className="mt-4 size-1.5 rounded-full bg-[color:var(--accent)] opacity-70" />
                  </span>
                ) : null}
              </div>

              <div className="min-w-0 pt-1">
                <h3 className="text-[17px] leading-snug font-semibold tracking-[-0.015em] sm:text-[18px]">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/50">
                  {reason.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
