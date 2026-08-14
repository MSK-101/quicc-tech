import Image from "next/image";

import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { founderStats, site } from "@/content/site";

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden px-6 py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-[6%] size-160 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_62%)] blur-[60px]"
      />
      <SectionEdgeLabel text="FOUNDER" side="right" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[5fr_7fr]">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-[6%] top-[8%] bottom-0 rounded-t-3xl bg-linear-to-b from-brand-600/30 via-aqua-500/10 to-transparent blur-[4px]"
          />
          <div className="relative overflow-hidden rounded-t-3xl bg-linear-to-b from-white/6 to-transparent [mask-image:linear-gradient(180deg,#000_78%,transparent_99%)]">
            {/* Circuit backdrop sits behind the cut-out portrait. */}
            <Image
              src="/team/founder_bg.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-center opacity-70"
            />
            <Image
              src="/team/founder.png"
              alt={`Founder and Chief Executive Officer of ${site.name}`}
              width={1454}
              height={1982}
              priority={false}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="relative h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            />
          </div>

          <div className="absolute bottom-13 -left-4 animate-float-sm rounded-2xl border border-white/13 bg-[rgba(12,15,22,0.8)] px-4.5 py-3.5 shadow-[0_24px_50px_-22px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <span className="mb-1.5 block font-mono text-[9.5px] tracking-[0.14em] text-white/40">
              &ldquo;QUICC&rdquo; RESPONSE
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.02em]">
              Within 12 Hours
            </span>
          </div>

          {/* On phones the title sits directly under the photo, so the person
              is named before the copy about them begins. */}
          <div className="mt-8 flex items-center gap-3.5 lg:hidden">
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

        <div className="flex flex-col gap-7 lg:pl-6">
          <SectionHeading
            index="07"
            label="LEADERSHIP"
            title="Leadership You Can Reach"
            className="max-w-3xl"
          />

          <Reveal delay={0.05}>
            <div className="flex max-w-xl flex-col gap-4 text-[17px] leading-relaxed text-white/60 text-pretty">
              <p>
                At {site.name}, every project is personally overseen to ensure
                quality, accountability, and alignment with your goals. While our
                team manages the design, development, and technical execution,
                you&rsquo;ll have direct access to company leadership throughout
                the process, with regular milestone reviews and guidance from
                start to launch.
              </p>
              <p>
                Behind every project is a skilled team of engineers, designers,
                and technology specialists experienced in building websites,
                mobile applications, and custom software solutions. Together, we
                combine hands-on leadership, technical expertise, and clear
                communication to deliver solutions that support long-term
                business growth.
              </p>
            </div>
          </Reveal>

          {/* Repeated for the desktop column, where the photo sits alongside
              rather than above. */}
          <Reveal delay={0.1} className="hidden lg:block">
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

          <Reveal delay={0.15}>
            <dl className="grid max-w-xl grid-cols-3 gap-4">
              {founderStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/2.5 p-5"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <CountUp
                      to={stat.value}
                      suffix={stat.suffix}
                      className="block bg-linear-to-br from-white to-brand-300 bg-clip-text text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.035em] text-transparent"
                    />
                    <span className="mt-1.5 block text-[13px] leading-snug text-white/45">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
