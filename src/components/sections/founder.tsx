import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { founderStats, site } from "@/content/site";

/** Bloom colour per stat card, matching each card's own artwork. */
const STAT_GLOW = [
  "radial-gradient(circle, rgba(249,115,22,0.55), transparent 70%)",
  "radial-gradient(circle, rgba(34,211,238,0.55), transparent 70%)",
  "radial-gradient(circle, rgba(217,70,239,0.55), transparent 70%)",
];

/**
 * Leadership section, in reading order: label, heading, portrait, title, then
 * the copy.
 *
 * The portrait is layered here — circuit backdrop, cut-out figure, then the
 * response badge — so each piece can be swapped independently. The three stat
 * cards are supplied artwork; each image carries its own figure and label.
 */
export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden px-6 py-12 lg:py-28 lg:px-8">
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
          <Reveal className="flex flex-col gap-6">
            {/* The portrait is a cut-out again, so the circuit backdrop and the
                response badge are composited here rather than baked into one
                flattened file. */}
            <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
              <Image
                src="/team/founder-bg.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />

              <Image
                src="/team/founder.png"
                alt={`Founder and Chief Executive Officer of ${site.name}`}
                width={1454}
                height={1982}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="absolute inset-x-0 bottom-0 h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)]"
              />

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                <span className="mb-1 block font-mono text-[9.5px] tracking-[0.16em] text-aqua-300/80">
                  QUICC RESPONSE
                </span>
                <span className="text-[17px] font-semibold tracking-[-0.02em]">
                  Under 12 Hours
                </span>
              </div>
            </div>

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
              {/* The cards are rendered artwork on a transparent background, so
                  they float unanchored against the page. A soft brand bloom
                  behind each one and a faint plinth beneath grounds them in the
                  section instead. */}
              <ul className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
                {founderStats.map((stat, index) => (
                  <li key={stat.image} className="group relative">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-2 top-2 bottom-6 rounded-3xl opacity-45 blur-2xl transition-opacity duration-500 group-hover:opacity-75"
                      style={{ background: STAT_GLOW[index] }}
                    />
                    <Image
                      src={stat.image}
                      alt={stat.alt}
                      width={640}
                      height={640}
                      sizes="(min-width: 640px) 200px, 30vw"
                      className="relative h-auto w-full object-contain transition-transform duration-400 group-hover:-translate-y-1"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-4 bottom-1 h-6 rounded-[50%] opacity-55 blur-md"
                      style={{ background: STAT_GLOW[index] }}
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
