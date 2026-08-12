type SectionEdgeLabelProps = {
  text: string;
  /** Which edge of the section the label is pinned to. */
  side: "left" | "right";
};

/**
 * The section name set vertically against one edge of the section, at the same
 * scale as the hero wordmark and centred in the section's height so it never
 * leaves a dead gap above or below.
 *
 * The wrapper spans the full section height and centres with flexbox rather
 * than `top-1/2` + translate: a half-height offset would only leave the text
 * half the section to lay out in, and a longer label such as "WHY QUICC" would
 * silently break into two vertical columns.
 *
 * The gradient fades as it descends but bottoms out on a dim blue rather than
 * transparent, so the final letter is still legible.
 *
 * Purely decorative — the real heading is still in the DOM as an `h2`, so this
 * is hidden from assistive technology. Shown from `xl` up, where the page
 * gutter is wide enough for it to sit beside the content.
 *
 * The section's inner container must reserve room for it with `xl:pr-28`
 * (right side) or `xl:pl-28` (left side), the same way the hero clears its
 * wordmark with `lg:pl-28`.
 */
export function SectionEdgeLabel({ text, side }: SectionEdgeLabelProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 z-0 hidden select-none xl:flex xl:items-center ${
        side === "left" ? "-left-3" : "-right-3"
      }`}
    >
      <span className="bg-linear-to-b from-brand-500/40 via-brand-600/26 via-50% to-brand-700/16 bg-clip-text text-[clamp(4.5rem,10vw,9rem)] leading-none font-extrabold tracking-[-0.055em] whitespace-nowrap text-transparent [writing-mode:vertical-rl]">
        {text}
      </span>
    </div>
  );
}
