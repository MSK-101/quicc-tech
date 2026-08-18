import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import Image from "next/image";

import { HeroDevices } from "@/components/sections/hero-devices";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { heroBadges, site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-12 lg:pb-24 lg:px-8 lg:pt-52"
    >
      <HeroBackdrop />
      <MobileBackdropArt />
      <VerticalWordmark />

      <div className="relative z-10 mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/4 py-1.75 pr-2 pl-3 backdrop-blur-md">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-aqua-400 shadow-[0_0_10px_var(--color-aqua-400)]" />
              <span className="text-[12.5px] font-medium tracking-tight text-white/78">
                Now booking Q4 development slots
              </span>
              <span className="rounded-full bg-aqua-400 px-1.75 py-0.75 font-mono text-[11px] font-medium text-ink-950">
                3 left
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-[clamp(2.5rem,5.4vw,4.125rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance">
              Building Powerful{" "}
              <span className="text-gradient-brand">Digital Solutions</span> for
              Modern Businesses
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-[520px] text-[17px] leading-relaxed text-white/58 text-pretty lg:text-lg">
              {site.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3.5">
              <ButtonLink href="#contact">
                Get Free Consultation
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="#work" variant="ghost">
                <span className="grid size-6 flex-none place-items-center rounded-full bg-linear-to-br from-brand-500 to-aqua-400 shadow-[0_0_14px_rgba(34,211,238,0.55)]">
                  <svg
                    viewBox="0 0 16 16"
                    className="size-3 translate-x-px"
                    aria-hidden="true"
                  >
                    <path d="M5 3.5l7 4.5-7 4.5z" fill="#06070A" />
                  </svg>
                </span>
                View Our Work
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="grid grid-cols-3 gap-2 w-10/12 items-center justify-center">
              {heroBadges.map((badge) => (
                <li key={badge.label}>
                  <Image
                    src={badge.image}
                    alt={badge.label}
                    width={200}
                    height={400}
                    className={`object-contain ${badge.label == "Custom Software" ? "ml-2 scale-125" : ""
                      }`}
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <HeroDevices />
      </div>
    </section>
  );
}

/**
 * Hero artwork for phones and tablets.
 *
 * The desktop device composition is a fixed-height scene that cannot shrink, so
 * below `lg` it is hidden and this sits behind the copy instead — anchored to
 * the bottom-right and faded down far enough that the headline stays readable
 * over it.
 */
function MobileBackdropArt() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-4 z-0 w-[85%] max-w-md opacity-85 select-none sm:w-[65%] lg:hidden"
    >
      <Image
        src="/herobg.png"
        alt=""
        width={1024}
        height={1536}
        priority
        className="h-auto w-full [mask-image:linear-gradient(180deg,transparent,#000_28%,#000_75%,transparent)]"
      />
    </div>
  );
}

/**
 * The full company name set vertically down the far-right of the hero
 * background, starting below the fixed header rather than behind it.
 *
 * It sits on the right so the headline column keeps the container's full
 * width, and behind the device composition — one continuous gradient runs the
 * whole word so it fades as it descends without the last letters vanishing.
 */
function VerticalWordmark() {
  return (
    <div
      aria-hidden="true"
      // top-28 clears the fixed chrome; bottom-10 keeps the last letter clear
      // of the section edge. `whitespace-nowrap` stops a tight fit breaking the
      // word into a second vertical column, and the section clips any residue.
      className="pointer-events-none absolute top-28 -right-3 bottom-10 z-0 hidden select-none md:block"
    >
      <span className="bg-linear-to-b from-brand-500/40 via-brand-600/26 via-50% to-aqua-600/16 bg-clip-text text-[clamp(4rem,9vw,8.25rem)] leading-none font-extrabold tracking-[-0.055em] whitespace-nowrap text-transparent [writing-mode:vertical-rl]">
        {site.wordmarkPrimary}
        {site.wordmarkSecondary}
      </span>
    </div>
  );
}
