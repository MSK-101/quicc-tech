import type { ReactNode } from "react";

/**
 * Social marks drawn as a matching set: every glyph sits inside the same
 * rounded square on the same 24×24 grid with the same 1.7px stroke, so the row
 * reads as one family rather than four borrowed logos.
 */
export type SocialIconName = "instagram" | "linkedin" | "twitter" | "facebook";

const GLYPHS: Record<SocialIconName, ReactNode> = {
  instagram: (
    <>
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  // The "in" mark: a dotted stem beside a rounded n.
  linkedin: (
    <>
      <path d="M8.3 11.2v4.9" />
      <circle cx="8.3" cy="8.6" r="0.95" fill="currentColor" stroke="none" />
      <path d="M11.6 16.1v-4.9" />
      <path d="M11.6 13.5a2.1 2.1 0 014.2 0v2.6" />
    </>
  ),
  // The X wordmark, reduced to its crossing strokes.
  twitter: (
    <>
      <path d="M8.6 8.6l6.8 6.8M15.4 8.6l-6.8 6.8" />
    </>
  ),
  // The Facebook "f".
  facebook: (
    <>
      <path d="M14.2 8.1h-1.1c-1.1 0-1.8.7-1.8 1.8V16.4" />
      <path d="M9.6 12.1h4.4" />
    </>
  ),
};

type SocialIconProps = {
  name: SocialIconName;
  className?: string;
};

export function SocialIcon({ name, className = "" }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      {GLYPHS[name]}
    </svg>
  );
}
