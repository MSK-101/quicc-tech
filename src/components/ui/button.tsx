import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "solid" | "ghost";
type Size = "sm" | "md";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold whitespace-nowrap uppercase tracking-[0.02em] transition-[transform,box-shadow,background-image,background-color,border-color] duration-250 ease-out hover:-translate-y-0.5 active:translate-y-0";

const VARIANTS: Record<Variant, string> = {
  /** The reference design's action fill: deep blue lit by a cyan bloom. */
  primary:
    "bg-action text-white shadow-[0_12px_40px_-10px_rgba(37,99,235,0.7),inset_0_1px_0_rgba(255,255,255,0.22)] hover:bg-action-hover hover:shadow-[0_18px_56px_-10px_rgba(56,189,248,0.75),inset_0_1px_0_rgba(255,255,255,0.3)]",
  /** White on dark — used where the surface is already brand-coloured. */
  solid:
    "bg-white text-ink-950 shadow-[0_10px_36px_-12px_rgba(255,255,255,0.5)] hover:shadow-[0_18px_54px_-12px_rgba(255,255,255,0.7)]",
  /** Glass outline for secondary actions. */
  ghost:
    "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:border-white/30 hover:bg-white/10",
};

const SIZES: Record<Size, string> = {
  sm: "px-4.5 py-2.5 text-[13px]",
  md: "px-7 py-4 text-[15px]",
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  /**
   * Extra classes. Note that `BASE` already sets `inline-flex`, so passing
   * display utilities such as `hidden`/`lg:inline-flex` here is unreliable —
   * put responsive visibility on a wrapper element instead.
   */
  className?: string;
  children: ReactNode;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: Omit<ButtonBaseProps, "children">) {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
}

type ButtonLinkProps = ButtonBaseProps & ComponentPropsWithoutRef<"a">;

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}

type ButtonProps = ButtonBaseProps & ComponentPropsWithoutRef<"button">;

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonClasses({ variant, size, className })} disabled:pointer-events-none disabled:opacity-60`}
      {...props}
    >
      {children}
    </button>
  );
}

/** Small right-pointing arrow used inside buttons and links. */
export function ArrowRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
