import { GRADIENT_ID } from "@/components/ui/svg-defs";

type LogoProps = {
  className?: string;
  /** Render the wordmark, or just the arc mark on its own. */
  variant?: "full" | "mark";
};

/**
 * The Quicc Technologies logo: an open arc terminating in two dots, with the
 * gradient running from royal blue to aqua.
 */
export function Logo({ className = "", variant = "full" }: LogoProps) {
  const stroke = `url(#${GRADIENT_ID.logo})`;

  return (
    <svg
      viewBox={variant === "full" ? "0 0 640 200" : "0 0 200 200"}
      className={className}
      role="img"
      aria-label="Quicc Tech"
    >
      <path
        d="M129.58,163.44 A70,70 0 1,1 163.44,129.58"
        fill="none"
        stroke={stroke}
        strokeWidth="20"
        strokeLinecap="round"
      />
      <circle cx="129.58" cy="163.44" r="9" fill="#22D3EE" />
      <circle cx="163.44" cy="129.58" r="9" fill="#1D4ED8" />

      {variant === "full" ? (
        <text
          x="210"
          y="124"
          fontFamily="var(--font-display), sans-serif"
          fontSize="58"
          fontWeight="700"
          letterSpacing="-1"
        >
          <tspan fill="#FFFFFF">Quicc</tspan>
          <tspan fill={stroke} dx="6">
            Tech
          </tspan>
        </text>
      ) : null}
    </svg>
  );
}
