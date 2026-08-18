import Image from "next/image";
import type { CSSProperties } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/content/reasons";

/**
 * The ten reasons as a single centred column: an index, then the reason and its
 * supporting line, strung along a hairline rail so the list reads as one
 * continuous sequence.
 *
 * Every row carries its own accent colour, cycling aqua → pink over the first
 * six and then back through purple into blue.
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
              className="group relative flex gap-5 border-l border-white/8 pb-9 pl-6 last:border-transparent last:pb-0 sm:gap-7 sm:pl-8"
              // Exposed as a variable so the number and the rail node share one
              // colour without repeating it.
              style={{ "--accent": reason.accent } as CSSProperties}
            >
              {/* Node on the rail, tinted with the row's own accent. */}
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[3px] size-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_10px_var(--accent)]"
              />

              <span className="w-9 flex-none font-mono text-[19px] leading-none font-semibold tabular-nums text-[color:var(--accent)] sm:w-12 sm:text-[22px]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
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
