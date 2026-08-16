import type { ReactNode } from "react";

/**
 * Hexagon-framed glyphs for the "Why Quicc" list.
 *
 * Each reason gets a hexagon outline in its own colour with a line glyph
 * inside, so the ten rows read as a graded sequence rather than ten identical
 * bullets. The frame and the glyph share `currentColor`, so a single colour on
 * the wrapper tints the whole mark.
 */
export type ReasonIconName =
  | "team"
  | "stack"
  | "responsive"
  | "secure"
  | "ownership"
  | "communication"
  | "milestones"
  | "support"
  | "scalable"
  | "revisions";

const GLYPHS: Record<ReasonIconName, ReactNode> = {
  // Two people.
  team: (
    <>
      <circle cx="10" cy="10.5" r="2.4" />
      <circle cx="16" cy="10.5" r="2" />
      <path d="M5.6 18c0-2.4 2-4 4.4-4s4.4 1.6 4.4 4" />
      <path d="M15.4 14.2c2 .3 3.4 1.8 3.4 3.8" />
    </>
  ),
  // Angle brackets.
  stack: <path d="M9.6 9.5L6 13l3.6 3.5M14.4 9.5L18 13l-3.6 3.5M12.8 7.6l-1.6 10.8" />,
  // Monitor.
  responsive: (
    <>
      <rect x="5" y="7" width="14" height="9.5" rx="1.6" />
      <path d="M9.5 20h5M12 16.5V20" />
    </>
  ),
  // Shield with a tick.
  secure: (
    <>
      <path d="M12 5l5.5 2.2v4.4c0 3.3-2.2 5.9-5.5 7-3.3-1.1-5.5-3.7-5.5-7V7.2z" />
      <path d="M9.8 12.2l1.6 1.6 3-3.4" />
    </>
  ),
  // Key.
  ownership: (
    <>
      <circle cx="9.5" cy="14.5" r="3" />
      <path d="M11.7 12.3l6-6M15.6 8.4l1.8 1.8M17.4 6.6l1.8 1.8" />
    </>
  ),
  // Speech bubbles.
  communication: (
    <>
      <path d="M5.5 8.5h9v6h-5l-2.6 2.2V14.5H5.5z" />
      <path d="M16.5 11h2v5h-1.6l-2 1.7V16" />
    </>
  ),
  // Stepped milestones.
  milestones: (
    <>
      <path d="M5.5 18h13" />
      <path d="M7.5 18v-3.2M12 18V11M16.5 18V7.5" />
      <circle cx="16.5" cy="6" r="1.4" />
    </>
  ),
  // Lifebuoy.
  support: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M7.4 7.4l2.7 2.7M16.6 16.6l-2.7-2.7M16.6 7.4l-2.7 2.7M7.4 16.6l2.7-2.7" />
    </>
  ),
  // Rising bars.
  scalable: (
    <>
      <path d="M6 18V13M10.6 18V9.5M15.2 18v-6M19.8 18V6.5" />
    </>
  ),
  // Circular arrows.
  revisions: (
    <>
      <path d="M17.5 10.5A5.8 5.8 0 007 9.4" />
      <path d="M6.5 13.5a5.8 5.8 0 0010.5 1.1" />
      <path d="M6.4 6.4v3h3M17.6 17.6v-3h-3" />
    </>
  ),
};

type ReasonIconProps = {
  name: ReasonIconName;
  className?: string;
};

export function ReasonIcon({ name, className = "" }: ReasonIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hexagon frame, flat-top, inset so the glyph has room. */}
      <path
        d="M12 1.6l9 5.2v10.4l-9 5.2-9-5.2V6.8z"
        strokeWidth="1.1"
        opacity="0.55"
      />
      {GLYPHS[name]}
    </svg>
  );
}
