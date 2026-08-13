import { ServiceIcon } from "@/components/icons/service-icons";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEdgeLabel } from "@/components/ui/section-edge-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { FireworksBackground } from "@/components/ui/fireworks-show";
import { milestones, pricingTiers, type PricingTier } from "@/content/pricing";

const priceFormatter = new Intl.NumberFormat("en-US");

export function Pricing() {
  return (
    <FireworksBackground>
      <section
        id="pricing"
        className="relative overflow-hidden border-t border-white/6 bg-white/1 px-6 py-28 lg:px-8"
      >
        <SectionEdgeLabel text="PRICING" side="left" />

        <div className="relative mx-auto max-w-[1240px]">
          <SectionHeading
            index="06"
            label="PRICING"
            align="center"
            accent="brand"
            title="Transparent starting points"
            description="These are the real floors — no discovery call required to find them out. Your final quote is set after a consultation, based on scope and features."
          />

          {/* pt-7 leaves room for the recommended badge to straddle the top edge. */}
          <div className="mt-14 grid gap-5 pt-7 sm:grid-cols-2 xl:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.06} className="h-full">
                <PricingCard tier={tier} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-8 rounded-3xl border border-white/8 bg-white/2.5 px-8 py-8">
              <div className="max-w-60 flex-none">
                <h3 className="text-lg font-bold tracking-[-0.02em]">
                  Milestone payments
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Transparent pay-as-you-go development. No full upfront payment
                  required.
                </p>
              </div>

              <ol className="flex min-w-full flex-1 items-start sm:min-w-100">
                {milestones.map((milestone, index) => (
                  <li
                    key={milestone}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <div className="flex flex-none flex-col items-center gap-2">
                      <span
                        className="size-3.5 rounded-full bg-linear-to-br from-brand-600 to-aqua-400 ring-4 ring-white/5"
                        style={{
                          boxShadow: `0 0 14px rgba(34,211,238,${0.3 + index * 0.14})`,
                        }}
                      />
                      <span className="text-[11px] font-semibold whitespace-nowrap sm:text-[13px]">
                        {milestone}
                      </span>
                    </div>
                    {index < milestones.length - 1 ? (
                      <span className="mx-2 mb-7 h-px flex-1 bg-linear-to-r from-white/28 to-white/10" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </FireworksBackground>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const isRecommended = Boolean(tier.recommended);

  return (
    <article
      className={`relative flex h-full flex-col gap-6 rounded-3xl p-7 backdrop-blur-md transition duration-400 hover:-translate-y-1.5 ${isRecommended
        ? "border border-aqua-400/70 bg-ink-900/85 shadow-[0_0_40px_-12px_rgba(34,211,238,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]"
        : "border border-white/9 bg-ink-900/55 hover:border-white/20"
        }`}
    >
      {isRecommended ? (
        <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-action px-5 py-1.5 text-[11px] font-bold tracking-[0.14em] whitespace-nowrap text-white uppercase shadow-[0_0_26px_rgba(34,211,238,0.75)]">
          Recommended
        </span>
      ) : null}

      {/* Icon badge. Recommended cards already carry the badge pill above the
          top edge, so the icon is left off there to keep that corner clean. */}
      {isRecommended ? null : (
        <span className="absolute -top-5 right-6 grid size-11 place-items-center rounded-full border-4 border-ink-950 bg-aqua-400/90">
          <ServiceIcon name="rocket" tone="current" className="size-5 text-ink-950" />
        </span>
      )}

      <header className="pt-2">
        <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-aqua-400 uppercase">
          {tier.name}
        </span>
        <p
          className={`mt-2.5 text-[20px] leading-snug font-semibold tracking-[-0.015em] text-white ${isRecommended ? "" : "max-w-[85%]"
            }`}
        >
          {tier.summary}
        </p>
      </header>

      <hr className="border-white/10" />

      <div>
        <span className="block font-mono text-[10px] tracking-[0.14em] text-white/40">
          STARTING AT
        </span>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-[38px] leading-none font-extrabold tracking-[-0.045em]">
            ${priceFormatter.format(tier.price)}
          </span>
          <span className="text-sm text-white/45">/ project</span>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <svg
              viewBox="0 0 16 16"
              className="mt-0.5 size-3.5 flex-none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.5 8.5l3 3 6-7"
                stroke="var(--color-aqua-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[13.5px] leading-snug text-white/75">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="#contact"
        variant={isRecommended ? "primary" : "ghost"}
        size="sm"
        className="mt-auto w-full"
      >
        {isRecommended ? "Book consultation" : "Request quote"}
      </ButtonLink>
    </article>
  );
}
