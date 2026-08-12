import { promoBanner } from "@/content/site";

/**
 * Static launch-pricing notice pinned above the header.
 *
 * Fixed height (32px on phones, 36px from `md`) so the header can sit at a
 * known offset beneath it — `SiteHeader` mirrors those numbers in its `top`.
 * `overflow-hidden` guarantees the non-wrapping text can never widen the
 * document, and the long detail line is dropped on narrow screens.
 */
export function PromoBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-8 items-center justify-center overflow-hidden border-b border-white/10 bg-linear-to-r from-brand-950 via-ink-900 to-brand-950 px-3 md:h-9 md:px-4">
      <p className="flex items-center gap-2 text-[11px] whitespace-nowrap md:gap-2.5 md:text-[12.5px]">
        <span className="inline-flex items-center gap-1.5 font-semibold tracking-tight text-aqua-300 md:gap-2">
          <span className="size-1.5 flex-none rounded-full bg-aqua-400 shadow-[0_0_8px_var(--color-aqua-400)]" />
          {promoBanner.headline}
        </span>
        <span aria-hidden="true" className="hidden text-white/25 md:inline">
          ·
        </span>
        <span className="hidden text-white/55 md:inline">
          {promoBanner.detail}
        </span>
      </p>
    </div>
  );
}
