"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ArrowRight } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { IsoSteps } from "@/components/decor/isometric";
import { faqs } from "@/content/faqs";
import { EASE } from "@/lib/motion";

export function Faq() {
  // Index of the open question; -1 means all collapsed.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28 lg:px-8">
      <SectionEdgeLabel text="FAQ" side="right" />

      {/* Supporting artwork on the left */}
      <IsoSteps className="pointer-events-none absolute top-1/2 -left-24 hidden w-120 -translate-y-1/2 opacity-50 [mask-image:linear-gradient(90deg,#000_40%,transparent)] lg:block" />

      <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[4fr_8fr] xl:pl-28">
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

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-350 ${isOpen
                    ? "border-brand-600/40 bg-brand-600/7"
                    : "border-white/8 bg-white/2 hover:border-white/16"
                    }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5.5 text-left"
                    >
                      <span className="text-[17px] font-semibold tracking-[-0.02em]">
                        {faq.question}
                      </span>
                      <span className="grid size-7.5 flex-none place-items-center rounded-full border border-white/14 bg-white/5">
                        <svg
                          viewBox="0 0 16 16"
                          className="size-3.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 8h11"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <motion.path
                            d="M8 2.5v11"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            animate={{
                              opacity: isOpen ? 0 : 1,
                              rotate: isOpen ? 90 : 0,
                            }}
                            transition={{ duration: 0.25, ease: EASE }}
                            style={{
                              transformBox: "fill-box",
                              transformOrigin: "center",
                            }}
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-white/58 text-pretty">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
