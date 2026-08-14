import Image from "next/image";

import { IsoPanels } from "@/components/decor/isometric";
import { ArrowRight } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";

const CheckIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 16 16" className="size-3.25 flex-none" fill="none">
    <path
      d="M3.5 8.5l3 3 6-7"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28 lg:px-8"
    >
      {/* Supporting artwork on the right, faded toward the content so it never
          competes with the service cards. */}
      <IsoPanels className="pointer-events-none absolute top-1/2 -right-24 hidden w-105 -translate-y-1/2 opacity-40 [mask-image:linear-gradient(90deg,transparent,#000_45%)] lg:block" />
      <SectionEdgeLabel text="SERVICES" side="left" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <SectionHeading
            index="01"
            label="SERVICES"
            title="Everything You Need to Build, Launch, and Grow"
            description="One team handles strategy, design, development and launch. You'll know exactly what happens at each stage, pay as each stage is finished, and own everything we build from day one."
          />
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-white/20 pb-1.5 text-sm font-semibold text-white transition-colors hover:border-aqua-400 hover:text-aqua-400"
            >
              Discuss your project
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} className="h-full">
              <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-[22px] border border-white/8 bg-linear-[160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018)] p-9 backdrop-blur-lg transition duration-400 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
                <div
                  className="pointer-events-none absolute -top-22 -right-18 size-70 rounded-full opacity-50 blur-[50px] transition-opacity duration-400 group-hover:opacity-80"
                  style={{
                    background: `radial-gradient(circle, ${service.accent}59, transparent 65%)`,
                  }}
                />

                {/* The supplied artwork is a finished 3D tile, so it sits on
                    its own with a coloured bloom rather than inside a frame. */}
                <div className="relative size-16">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full opacity-60 blur-xl transition-opacity duration-400 group-hover:opacity-90"
                    style={{ background: service.accent }}
                  />
                  <Image
                    src={service.image}
                    alt=""
                    width={128}
                    height={128}
                    className="relative size-16 object-contain transition-transform duration-400 group-hover:scale-105"
                  />
                </div>

                <div className="relative">
                  <h3 className="mb-2.5 text-2xl font-semibold tracking-[-0.025em]">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/52 text-pretty">
                    {service.description}
                  </p>
                </div>

                <ul className="relative grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.25">
                      <CheckIcon color={service.accent} />
                      <span className="text-sm text-white/72">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/14 bg-white/4 px-4.5 py-2.75 text-sm font-semibold text-white transition-all duration-250 hover:gap-3 hover:border-white/28 hover:bg-white/10"
                >
                  Learn more
                  <ArrowRight className="size-3.25" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
