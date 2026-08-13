// The accordion below is interactive and takes render functions, which cannot
// cross the server/client boundary — so this section renders on the client.
"use client";

import { IsoSteps } from "@/components/decor/isometric";
import { Accordion, type AccordionEntry } from "@/components/ui/accordion";
import { ArrowRight } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/content/faqs";

const entries: AccordionEntry[] = faqs.map((faq) => ({
  id: faq.question,
  header: () => (
    <span className="text-[17px] font-semibold tracking-[-0.02em]">
      {faq.question}
    </span>
  ),
  body: () => (
    <p className="text-[15.5px] leading-relaxed text-white/58 text-pretty">
      {faq.answer}
    </p>
  ),
}));

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28 lg:px-8">
      <SectionEdgeLabel text="FAQ" side="right" />

      {/* Supporting artwork on the left */}
      <IsoSteps className="pointer-events-none absolute top-1/2 -left-24 hidden w-120 -translate-y-1/2 opacity-50 [mask-image:linear-gradient(90deg,#000_40%,transparent)] lg:block" />

      <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[4fr_8fr]">
        <div>
          <SectionHeading
            index="08"
            label="FAQ"
            accent="brand"
            title="Questions, answered plainly"
            description="Still unsure about something? Send it over and you'll get a straight answer, not a pitch."
          />
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-aqua-400 transition-colors hover:text-aqua-300"
            >
              Ask a question
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion items={entries} />
        </Reveal>
      </div>
    </section>
  );
}
