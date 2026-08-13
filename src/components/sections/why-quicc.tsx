// The accordion below is interactive and takes render functions, which cannot
// cross the server/client boundary — so this section renders on the client.
"use client";

import { Accordion, type AccordionEntry } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/content/reasons";

const entries: AccordionEntry[] = reasons.map((reason, index) => ({
  id: reason.title,
  header: () => (
    <span className="flex items-baseline gap-4">
      <span className="font-mono text-[13px] tabular-nums text-aqua-400/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-[16.5px] leading-snug font-semibold tracking-[-0.015em]">
        {reason.title}
      </span>
    </span>
  ),
  body: () => (
    <p className="pl-[2.1rem] text-[15px] leading-relaxed text-white/58 text-pretty">
      {reason.detail}
    </p>
  ),
}));

/**
 * The ten reasons, as collapsible rows. Only one is open at a time, so the
 * section stays short enough to scan rather than running as a long list.
 */
export function WhyQuicc() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-white/1 px-6 py-28 lg:px-8">
      <SectionEdgeLabel text="WHY QUICC" side="right" />

      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeading
          index="03"
          label="WHY QUICC"
          accent="brand"
          title="10 Reasons to Partner With Our Team"
          description="Transparent pricing. Clear communication. Complete visibility. Work directly with experienced engineers and stay informed throughout every phase of development — from strategy and design to launch and ongoing support."
        />

        <Reveal delay={0.05} className="mt-14 max-w-4xl">
          <Accordion items={entries} />
        </Reveal>
      </div>
    </section>
  );
}
