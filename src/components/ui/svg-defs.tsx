/** Ids of the gradients defined by {@link SvgDefs}. */
export const GRADIENT_ID = {
  /** Royal blue → aqua, following the object's bounding box. Used by the logo. */
  logo: "quicc-logo-gradient",
  /** Aqua → royal blue across a 24×24 icon viewBox. */
  icon: "quicc-icon-gradient",
  /** Soft radial bloom sitting behind the isometric background artwork. */
  decorGlow: "quicc-decor-glow",
} as const;

/**
 * A single zero-size SVG holding the gradients that repeat across the page.
 *
 * Defining them once and referencing them by id from other SVGs keeps the
 * markup valid (no duplicate ids) and lets every icon stay a Server Component,
 * which would not be possible if each one generated its own id with `useId`.
 * Rendered once from the root layout.
 */
export function SvgDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute h-0 w-0"
    >
      <defs>
        <linearGradient id={GRADIENT_ID.logo} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>

        <linearGradient
          id={GRADIENT_ID.icon}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>

        <radialGradient id={GRADIENT_ID.decorGlow}>
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#1D4ED8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
