import type { CSSProperties } from "react";

import { GRADIENT_ID } from "@/components/ui/svg-defs";

/** Icon keys available to the services and process sections. */
export type ServiceIconName =
  | "phone"
  | "globe"
  | "funnel"
  | "code"
  | "search"
  | "pen"
  | "build"
  | "shield"
  | "rocket";

const PATHS: Record<ServiceIconName, string> = {
  phone:
    "M7 2.5h10a2.5 2.5 0 012.5 2.5v14a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 19V5A2.5 2.5 0 017 2.5zM10.5 18.5h3",
  globe:
    "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18",
  funnel: "M3.5 4.5h17l-6.5 8v7l-4 2v-9z",
  code: "M8.5 8.5L5 12l3.5 3.5M15.5 8.5L19 12l-3.5 3.5M13.5 5.5l-3 13",
  search: "M10.5 4a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM15.5 15.5L21 21",
  pen: "M4 20l1-4.5L16 4.5a2.1 2.1 0 013 3L8 18.5zM14 6.5l3.5 3.5",
  build: "M3 7l9-4 9 4-9 4zM3 12l9 4 9-4M3 17l9 4 9-4",
  shield:
    "M12 3l7.5 3v6c0 4.5-3 8-7.5 9.5C7.5 20 4.5 16.5 4.5 12V6zM9 12l2 2 4-4.5",
  rocket:
    "M12 3c3.5 2.5 5.5 6 5.5 10l-2.5 3h-6l-2.5-3C6.5 9 8.5 5.5 12 3zM9 19c-1 1.5-1 2.5-1 2.5s2-.4 3-1.5M15 19c1 1.5 1 2.5 1 2.5s-2-.4-3-1.5",
};

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
  /** Inline styles, typically to set `color` alongside `tone="current"`. */
  style?: CSSProperties;
  /**
   * `gradient` strokes with the shared brand gradient; `current` inherits the
   * parent's text colour, for use on already-coloured surfaces.
   */
  tone?: "gradient" | "current";
};

/** A line icon stroked with the shared brand gradient. */
export function ServiceIcon({
  name,
  className = "",
  style,
  tone = "gradient",
}: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden="true"
      fill="none"
    >
      <path
        d={PATHS[name]}
        stroke={tone === "current" ? "currentColor" : `url(#${GRADIENT_ID.icon})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
