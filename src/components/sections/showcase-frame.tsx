import Image from "next/image";

import type { ShowcaseItem } from "@/content/work";

/** Fixed row height so both marquee rows line up. */
const FRAME_HEIGHT = 300;

const FRAME_WIDTH: Record<ShowcaseItem["kind"], number> = {
  browser: 460,
  dashboard: 460,
  phone: 250,
};

/**
 * One showcase tile.
 *
 * When `item.image` is set it renders that screenshot; otherwise it draws a
 * generated mock in the same visual language, so the strip looks complete
 * before real client screenshots exist. Dropping a file into `/public` and
 * setting `image` on the content entry is all it takes to swap one in.
 *
 * Images are intelligently scaled: fill container maintaining aspect ratio,
 * with proper object-fit to handle variable screenshot dimensions.
 */
export function ShowcaseFrame({ item }: { item: ShowcaseItem }) {
  const [start, mid, end] = item.palette;
  const width = FRAME_WIDTH[item.kind];

  return (
    <figure
      className="group/frame relative flex-none overflow-hidden rounded-2xl border border-white/10 transition-transform duration-500 ease-out will-change-transform hover:scale-[1.06] hover:border-white/25 hover:shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]"
      style={{
        width,
        height: FRAME_HEIGHT,
        background: `linear-gradient(140deg, ${start}, ${mid} 55%, ${end})`,
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />

      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={`${width}px`}
          priority={false}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-7">
          {item.kind === "phone" ? <PhoneMock /> : <ScreenMock kind={item.kind} />}
        </div>
      )}

      {/* Caption only surfaces on hover so the row reads as pure imagery. */}
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-linear-to-t from-ink-950/90 to-transparent px-4 pt-10 pb-4 opacity-0 transition-opacity duration-400 group-hover/frame:opacity-100">
        <span className="text-sm font-semibold tracking-tight">{item.title}</span>
        <span className="rounded-full border border-white/15 bg-ink-950/60 px-2.5 py-1 text-[11px] font-medium text-white/70">
          {item.category}
        </span>
      </figcaption>
    </figure>
  );
}

function ScreenMock({ kind }: { kind: "browser" | "dashboard" }) {
  return (
    <div className="w-full rounded-xl bg-linear-[150deg,rgba(255,255,255,0.26),rgba(255,255,255,0.06)] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.85)]">
      <div className="overflow-hidden rounded-lg border border-white/8 bg-ink-950/88">
        <div className="flex items-center gap-1.5 border-b border-white/6 px-3 py-2">
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="ml-2 h-1.5 w-24 rounded-full bg-white/10" />
        </div>

        {kind === "browser" ? <BrowserBody /> : <DashboardBody />}
      </div>
    </div>
  );
}

function BrowserBody() {
  return (
    <div className="flex flex-col gap-2.5 p-4">
      <span className="h-2.5 w-[58%] rounded-full bg-white/28" />
      <span className="h-1.5 w-[86%] rounded-full bg-white/12" />
      <span className="h-1.5 w-[72%] rounded-full bg-white/12" />
      <div className="mt-2 flex gap-2">
        <span className="h-8 flex-1 rounded-md bg-white/7" />
        <span className="h-8 flex-1 rounded-md bg-white/7" />
        <span className="h-8 flex-1 rounded-md bg-white/16" />
      </div>
    </div>
  );
}

function DashboardBody() {
  const bars = [38, 62, 45, 78, 55, 90, 68];

  return (
    <div className="grid grid-cols-[64px_1fr]">
      <div className="flex flex-col gap-1.5 border-r border-white/6 p-3">
        <span className="h-1.5 w-full rounded-full bg-white/22" />
        <span className="h-1.5 w-[70%] rounded-full bg-white/10" />
        <span className="h-1.5 w-[85%] rounded-full bg-white/10" />
        <span className="h-1.5 w-[60%] rounded-full bg-white/10" />
      </div>
      <div className="flex flex-col gap-2.5 p-3.5">
        <span className="h-2.5 w-[45%] rounded-full bg-white/28" />
        <div className="flex h-16 items-end gap-1.5">
          {bars.map((height, index) => (
            <span
              key={index}
              className={`flex-1 rounded-t-sm ${
                index > 4 ? "bg-aqua-400/70" : "bg-white/14"
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="h-full w-full max-w-[150px] rounded-[22px] bg-linear-[150deg,rgba(255,255,255,0.28),rgba(255,255,255,0.07)] p-1.5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.9)]">
      <div className="flex h-full flex-col gap-2.5 rounded-[17px] border border-white/8 bg-ink-950/90 p-3">
        <span className="mx-auto h-1 w-9 rounded-full bg-white/20" />
        <span className="h-2 w-[62%] rounded-full bg-white/26" />
        <div className="rounded-lg bg-linear-to-br from-brand-600/40 to-aqua-400/20 p-2.5">
          <span className="block h-1.5 w-[55%] rounded-full bg-white/35" />
          <span className="mt-2 block h-4 w-[70%] rounded-full bg-white/18" />
        </div>
        <span className="h-1.5 w-[80%] rounded-full bg-white/12" />
        <span className="h-1.5 w-[64%] rounded-full bg-white/12" />
        <span className="mt-auto h-7 rounded-lg bg-white/85" />
      </div>
    </div>
  );
}
