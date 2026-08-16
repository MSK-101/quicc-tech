// react-icons builds its icons on React context, which is unavailable in
// Server Components — so this section (and the stack data it imports) runs on
// the client.
"use client";

import type { CSSProperties } from "react";

import { IsoLayers } from "@/components/decor/isometric";
import { Accordion, type AccordionEntry } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { techGroups, type TechItem } from "@/content/stack";

const totalTechnologies = techGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

const entries: AccordionEntry[] = techGroups.map((group) => ({
  id: group.label,
  header: () => (
    <span className="flex items-baseline gap-3">
      <span className="text-[16.5px] font-semibold tracking-[-0.015em]">
        {group.label}
      </span>
      <span className="font-mono text-[11px] text-white/40">
        {group.items.length}
      </span>
    </span>
  ),
  body: () => (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {group.items.map((item) => (
        <TechTile key={item.name} item={item} />
      ))}
    </ul>
  ),
}));

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 px-6 py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-600/60 to-transparent"
      />
      <SectionEdgeLabel text="STACK" side="right" />
      {/* Held further out and dimmer than the other sections: the group labels
          run down this edge, so the artwork has to stay behind them. */}
      <IsoLayers className="pointer-events-none absolute top-1/2 -left-40 hidden w-105 -translate-y-1/2 opacity-30 [mask-image:linear-gradient(270deg,transparent,#000_40%)] lg:block" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="07"
            label="STACK"
            title="Modern Technology, Built to Last"
            description="We select proven, well-supported technologies with strong long-term roadmaps, ensuring your product remains secure, scalable, and easy to maintain as your business grows."
          />
          <Reveal delay={0.1}>
            <div className="flex items-baseline gap-2.5 rounded-2xl border border-white/8 bg-white/2.5 px-5 py-4">
              <span className="text-3xl font-semibold tracking-tight text-gradient-brand">
                {totalTechnologies}
              </span>
              <span className="text-sm text-white/50">
                technologies in active use
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion items={entries} />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * A technology tile.
 *
 * The logo carries its own brand colour at rest. On hover the tile fills with
 * that same colour and the logo and label invert to near-black, so the tech you
 * are pointing at reads as a solid brand chip.
 */
function TechTile({ item }: { item: TechItem }) {
  const { Icon, name, color, abbr } = item;

  return (
    <li
      style={{ "--tech": color } as CSSProperties}
      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/8 bg-white/2.5 px-3 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tech)] hover:bg-[var(--tech)] hover:shadow-[0_18px_40px_-18px_var(--tech)]"
    >
      {Icon ? (
        <Icon
          aria-hidden="true"
          className="relative size-7 text-[color:var(--tech)] transition-colors duration-300 group-hover:text-ink-950"
        />
      ) : (
        <span
          aria-hidden="true"
          className="relative grid size-7 place-items-center rounded-md border border-[var(--tech)] font-mono text-[9px] font-semibold text-[color:var(--tech)] transition-colors duration-300 group-hover:border-ink-950 group-hover:text-ink-950"
        >
          {abbr ?? name.slice(0, 3).toUpperCase()}
        </span>
      )}

      <span className="relative text-center text-[13px] font-medium tracking-tight text-white/70 transition-colors duration-300 group-hover:font-semibold group-hover:text-ink-950">
        {name}
      </span>
    </li>
  );
}
