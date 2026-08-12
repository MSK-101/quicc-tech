const STAR_PATH =
  "M8 1.6l1.94 3.93 4.34.63-3.14 3.06.74 4.32L8 11.5l-3.88 2.04.74-4.32L1.72 6.16l4.34-.63z";

type StarRatingProps = {
  /** Rating out of 5. Halves are supported, e.g. 4.5. */
  rating: number;
  /** Star size in pixels. */
  size?: number;
  className?: string;
};

/**
 * Five stars with a partially filled last star for half ratings. The filled
 * layer sits above the empty layer and is clipped to the rating percentage.
 */
export function StarRating({
  rating,
  size = 15,
  className = "",
}: StarRatingProps) {
  const clamped = Math.min(5, Math.max(0, rating));
  const fillPercent = (clamped / 5) * 100;

  const stars = (fill: string) =>
    Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className="shrink-0"
        aria-hidden="true"
      >
        <path d={STAR_PATH} fill={fill} />
      </svg>
    ));

  return (
    <div
      className={`relative inline-flex w-fit ${className}`}
      role="img"
      aria-label={`Rated ${clamped} out of 5`}
    >
      <div className="flex gap-[2px]">{stars("rgba(255,255,255,0.14)")}</div>
      <div
        className="absolute top-0 left-0 flex h-full gap-[2px] overflow-hidden"
        style={{ width: `${fillPercent}%` }}
        aria-hidden="true"
      >
        {stars("var(--color-gold-400)")}
      </div>
    </div>
  );
}
