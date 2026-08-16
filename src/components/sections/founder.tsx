import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { founderStats, site } from "@/content/site";

/**
 * Leadership section, in reading order: label, heading, portrait, title, then
 * the copy.
 *
 * The supplied portrait already includes its circuit backdrop and the response
 * badge, so nothing is composited over it here. The three stat cards are
 * supplied artwork too — each image carries its own figure and label.
 */
export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden px-6 py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-[6%] size-160 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_62%)] blur-[60px]"
      />
      <SectionEdgeLabel text="FOUNDER" side="right" />

      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeading
          index="05"
          label="LEADERSHIP"
          align="center"
          title="Leadership You Can Reach"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal className="flex flex-col items-center gap-6">
            <Image
              src="/team/founder.jpeg"
              alt={`Founder and Chief Executive Officer of ${site.name}`}
              width={1021}
              height={1540}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full max-w-sm rounded-3xl border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]"
            />

            <div className="flex items-center gap-3.5">
              <span className="h-11 w-[3px] flex-none rounded-sm bg-linear-to-b from-brand-600 to-aqua-400" />
              <div>
                <span className="block text-base font-semibold tracking-[-0.02em]">
                  Founder &amp; Chief Executive Officer
                </span>
                <span className="mt-0.5 block text-sm text-white/45">
                  {site.name}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-9">
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-white/60 text-pretty">
                <p>
                  At {site.name}, every project is personally overseen to ensure
                  quality, accountability, and alignment with your goals. While
                  our team manages the design, development, and technical
                  execution, you&rsquo;ll have direct access to company
                  leadership throughout the process, with regular milestone
                  reviews and guidance from start to launch.
                </p>
                <p>
                  Behind every project is a skilled team of engineers,
                  designers, and technology specialists experienced in building
                  websites, mobile applications, and custom software solutions.
                  Together, we combine hands-on leadership, technical expertise,
                  and clear communication to deliver solutions that support
                  long-term business growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid grid-cols-3 gap-3 sm:gap-5">
                {founderStats.map((stat) => (
                  <li key={stat.image}>
                    <Image
                      src={stat.image}
                      alt={stat.alt}
                      width={640}
                      height={640}
                      sizes="(min-width: 640px) 200px, 30vw"
                      className="h-auto w-full object-contain transition-transform duration-400 hover:-translate-y-1"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
