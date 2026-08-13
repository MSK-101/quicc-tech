"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { IsoFlow } from "@/components/decor/isometric";
import { ServiceIcon } from "@/components/icons/service-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/process";

/**
 * The five stages as a vertical timeline. A gradient rail fills from top to
 * bottom in step with the reader's scroll position, so progress through the
 * process mirrors progress through the section.
 */
export function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const railScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-28 lg:px-8"
    >
      <SectionEdgeLabel text="PROCESS" side="left" />
      <IsoFlow className="pointer-events-none absolute top-1/2 -right-20 hidden w-100 -translate-y-1/2 opacity-40 [mask-image:linear-gradient(90deg,transparent,#000_45%)] lg:block" />

      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeading
          index="04"
          label="PROCESS"
          title="Five steps, fully visible"
          description="You approve each stage before the next one begins, with payment made one phase at a time."
        />

        <div ref={timelineRef} className="relative mt-16">
          {/* Rail — a static track with a scroll-driven gradient fill on top. */}
          <div className="absolute top-2 bottom-2 left-7 w-px bg-white/10" />
          <motion.div
            aria-hidden="true"
            style={prefersReducedMotion ? { scaleY: 1 } : { scaleY: railScale }}
            className="absolute top-2 bottom-2 left-7 w-px origin-top bg-linear-to-b from-brand-600 via-brand-500 to-aqua-400 shadow-[0_0_12px_rgba(37,99,235,0.7)]"
          />

          <ol className="flex flex-col gap-6">
            {processSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 0.05}
                className="group relative pl-22 md:pl-26"
              >
                <div className="absolute top-0 left-0 grid size-14 place-items-center rounded-[18px] border border-white/14 bg-linear-[150deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03)] shadow-[0_12px_40px_-14px_rgba(37,99,235,0.6)] backdrop-blur-md transition-transform duration-400 group-hover:scale-105">
                  <ServiceIcon name={step.icon} className="size-6" />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-linear-to-br from-brand-600 to-aqua-400 font-mono text-[11px] font-semibold text-ink-950">
                    {index + 1}
                  </span>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-colors duration-400 group-hover:border-brand-500/35 group-hover:bg-brand-600/6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <span className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10.5px] tracking-[0.12em] text-white/45 uppercase">
                      {step.duration}
                    </span>
                  </div>

                  <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-white/52 text-pretty">
                    {step.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2.5 border-t border-white/7 pt-4">
                    <span className="font-mono text-[9.5px] tracking-[0.14em] text-white/32">
                      YOU GET
                    </span>
                    <span className="text-[13.5px] font-medium text-aqua-300">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
