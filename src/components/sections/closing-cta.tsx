import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/**
 * Final prompt after the FAQ. Someone who has read this far has run out of
 * page — this sends them back up to the enquiry form rather than leaving the
 * only path forward behind a scroll.
 */
export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 px-6 py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_65%)] blur-[70px]"
      />

      <Reveal className="relative mx-auto max-w-[1240px] text-center">
        <h2 className="mx-auto max-w-2xl text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-balance">
          Still deciding? Let&rsquo;s talk it through.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16.5px] leading-relaxed text-white/55 text-pretty">
          Tell us what you&rsquo;re building and we&rsquo;ll come back with
          scope, a timeline, and a fixed starting price.
        </p>

        <div className="mt-8 flex justify-center">
          <ButtonLink href="#contact">
            Book a consultation
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
