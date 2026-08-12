import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { StarRating } from "@/components/ui/star-rating";
import {
  testimonialsRowOne,
  testimonialsRowTwo,
  type Testimonial,
} from "@/content/testimonials";

const allTestimonials = [...testimonialsRowOne, ...testimonialsRowTwo];

const averageRating =
  allTestimonials.reduce((total, item) => total + item.rating, 0) /
  allTestimonials.length;

const fiveStarCount = allTestimonials.filter(
  (item) => item.rating === 5,
).length;

/**
 * Two rows of reviews travelling in opposite directions, full-bleed so cards
 * bleed past both edges. Hovering a row holds it still.
 */
export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-white/1 py-28">
      <div className="mx-auto mb-12 max-w-[1240px] px-6 text-center lg:px-8">
        <Reveal>
          <span className="inline-block rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-aqua-300">
            CLIENT REVIEWS
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4.8vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
            What Clients Are Saying
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">
            <div className="flex items-center gap-2.5">
              <StarRating rating={averageRating} size={17} />
              <span className="font-semibold">
                {averageRating.toFixed(1)} average
              </span>
            </div>
            <span aria-hidden="true" className="h-4 w-px bg-white/15" />
            <span className="text-white/55">
              <strong className="font-semibold text-aqua-300">
                {fiveStarCount}
              </strong>{" "}
              five-star reviews
            </span>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-5">
        <Marquee direction="right" speed={40} gap={20} className="py-2">
          {testimonialsRowOne.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee direction="left" speed={40} gap={20} className="py-2">
          {testimonialsRowTwo.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-58 w-85 flex-none flex-col gap-4 rounded-2xl border border-white/8 bg-linear-[165deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015)] p-6 backdrop-blur-md transition duration-400 hover:-translate-y-1 hover:border-white/22">
      <StarRating rating={testimonial.rating} size={14} />

      <blockquote className="line-clamp-4 flex-1 text-[14.5px] leading-relaxed text-white/78 text-pretty">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3 border-t border-white/7 pt-4">
        <span className="grid size-9 flex-none place-items-center rounded-full border border-white/14 bg-linear-to-br from-brand-600 to-aqua-500 text-[12px] font-semibold text-white">
          {testimonial.initials}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-[13.5px] font-semibold tracking-[-0.015em]">
            {testimonial.name}
          </span>
          <span className="truncate text-[12px] text-white/42">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
