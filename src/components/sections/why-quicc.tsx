import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/content/reasons";

/**
 * The ten reasons, set as a numbered editorial list rather than a grid of
 * identical tiles — each reason carries a supporting line, so the section
 * argues its case instead of just labelling it.
 */
export function WhyQuicc() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-white/1 px-6 py-28 lg:px-8">
      <SectionEdgeLabel text="WHY QUICC" side="right" />

      <div className="relative mx-auto max-w-[1240px] xl:pr-28">
        <SectionHeading
          index="03"
          label="WHY QUICC"
          accent="brand"
          title="Ten reasons teams stay with us"
          description="No lock-in, no surprise invoices, no black boxes. Just senior engineers and a process you can see through."
        />

        <ol className="mt-14 grid md:grid-cols-2 md:gap-x-14">
          {reasons.map((reason, index) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={(index % 2) * 0.06}
              className="group relative border-t border-white/8 py-6 transition-colors duration-400 hover:border-white/25"
            >
              {/* Accent line that wipes in from the left on hover. */}
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-brand-500 to-aqua-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <div className="flex gap-5">
                <span className="mt-0.5 font-mono text-[13px] tabular-nums text-white/25 transition-colors duration-300 group-hover:text-aqua-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16.5px] leading-snug font-semibold tracking-[-0.015em]">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/48">
                    {reason.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
