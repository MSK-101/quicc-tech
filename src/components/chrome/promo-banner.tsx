import { promoBanner } from "@/content/site";

/**
 * Launch-pricing notice, pinned above the header as a centred pill.
 *
 * The bar itself is transparent and only reserves height — `SiteHeader` mirrors
 * that height in its `top` offset. `overflow-hidden` guarantees the
 * non-wrapping text can never widen the document, and the long detail line is
 * dropped on narrow screens where the pill would otherwise span the viewport.
 */
export function PromoBanner() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex h-12 items-center justify-center overflow-hidden px-4">
      <p className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-aqua-400/35 bg-ink-950/85 px-5 py-1.5 text-[12px] whitespace-nowrap shadow-[0_0_24px_-6px_rgba(34,211,238,0.55)] backdrop-blur-md md:text-[12.5px]">
        <span className="size-1.5 flex-none animate-pulse-dot rounded-full bg-aqua-400 shadow-[0_0_8px_var(--color-aqua-400)]" />
        <span className="font-semibold tracking-tight text-aqua-300">
          {promoBanner.headline}
        </span>
        <span aria-hidden="true" className="hidden text-white/25 lg:inline">
          ·
        </span>
        <span className="hidden text-white/55 lg:inline">
          {promoBanner.detail}
        </span>
      </p>
    </div>
  );
}
