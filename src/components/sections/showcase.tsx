import { ShowcaseFrame } from "@/components/sections/showcase-frame";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { showcaseRowOne, showcaseRowTwo } from "@/content/work";

/**
 * Full-bleed work showcase.
 *
 * Two rows travel in opposite directions and run the full width of the
 * viewport with no container gutter or edge fade, so the imagery reaches both
 * edges. Hovering a row freezes it (see `Marquee`) while the hovered tile
 * scales up (see `ShowcaseFrame`).
 */
export function Showcase() {
  return (
    <section id="work" className="relative border-t border-white/6 py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.16),transparent_65%)] blur-[60px]"
      />

      <div className="relative mx-auto mb-12 max-w-[1240px] px-6 lg:px-8">
        <SectionHeading
          index="02"
          label="FEATURED WORK"
          accent="brand"
          title="Work that earns its keep"
          description="A running showcase of apps, sites and platforms we have shipped. Hover any tile to hold the row still and take a closer look."
        />
      </div>

      <div className="relative flex flex-col gap-6">
        <Marquee direction="right" speed={45} gap={24} className="py-6">
          {showcaseRowOne.map((item) => (
            <ShowcaseFrame key={item.id} item={item} />
          ))}
        </Marquee>

        <Marquee direction="left" speed={45} gap={24} className="py-6">
          {showcaseRowTwo.map((item) => (
            <ShowcaseFrame key={item.id} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
