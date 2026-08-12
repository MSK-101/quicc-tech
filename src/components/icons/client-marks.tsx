import type { ReactNode } from "react";

/**
 * House-built marks for the client logo strip.
 *
 * They deliberately share one visual system — a 32×32 grid, 2px strokes with
 * round joins, and at most one filled accent dot — so a row of eight reads as
 * a set rather than a scrapbook. Swap any of these for a real client logo by
 * replacing the entry in the `CLIENT_MARKS` map.
 */
export type ClientMarkName =
  | "northwind"
  | "vantage"
  | "orbital"
  | "lumen"
  | "bridgepoint"
  | "kestrel"
  | "halcyon"
  | "ironwood";

const MARKS: Record<ClientMarkName, ReactNode> = {
  // Compass north — two nested chevrons.
  northwind: (
    <>
      <path d="M6 20L16 8l10 12" />
      <path d="M10 25l6-7 6 7" />
    </>
  ),
  // Two overlapping peaks.
  vantage: (
    <>
      <path d="M4 25l8-15 5 9" />
      <path d="M14 25l6-11 8 11z" />
    </>
  ),
  // A core with an orbit ring.
  orbital: (
    <>
      <circle cx="16" cy="16" r="5" />
      <ellipse cx="16" cy="16" rx="12" ry="5.5" transform="rotate(-28 16 16)" />
      <circle cx="26" cy="11" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  // A light source with rays.
  lumen: (
    <>
      <circle cx="16" cy="16" r="5.5" />
      <path d="M16 3.5v4M16 24.5v4M3.5 16h4M24.5 16h4M7.2 7.2l2.8 2.8M22 22l2.8 2.8M24.8 7.2L22 10M10 22l-2.8 2.8" />
    </>
  ),
  // An arch spanning two piers.
  bridgepoint: (
    <>
      <path d="M4 24V13M28 24V13" />
      <path d="M4 17a12 12 0 0124 0" />
      <path d="M2 24h28" />
    </>
  ),
  // A swept wing.
  kestrel: (
    <>
      <path d="M3 21c7 1 13-2 17-9" />
      <path d="M11 24c7-1 13-6 16-14" />
      <circle cx="27" cy="8" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  // Three calm waves.
  halcyon: (
    <>
      <path d="M4 11c3-3 5-3 8 0s5 3 8 0 5-3 8 0" />
      <path d="M4 17c3-3 5-3 8 0s5 3 8 0 5-3 8 0" />
      <path d="M4 23c3-3 5-3 8 0s5 3 8 0 5-3 8 0" />
    </>
  ),
  // A leaf with a central vein.
  ironwood: (
    <>
      <path d="M25 6C13 6 7 12 7 20c0 3 1 5 1 5s2-11 17-14" />
      <path d="M8 25C18 25 25 18 25 6" />
    </>
  ),
};

type ClientMarkProps = {
  name: ClientMarkName;
  className?: string;
};

export function ClientMark({ name, className = "" }: ClientMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {MARKS[name]}
    </svg>
  );
}
