"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { PortfolioLightbox } from "@/components/sections/portfolio-lightbox";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/content/work";
import { EASE } from "@/lib/motion";

/**
 * How many pieces are visible on desktop before the visitor asks for more.
 *
 * Four fills the opening block exactly: the wide showreel takes two columns
 * of the first row and the tall Doctor tile takes the third column of both,
 * leaving two cells for the pieces that follow.
 */
const FEATURED_COUNT = 4;

/** Phones stack one per row, so they show fewer before the "view all" button. */
const MOBILE_COUNT = 3;

/**
 * Work shown as a grid of real screenshots rather than a carousel.
 *
 * Every card renders the top of a full-length page capture, so the work is
 * legible at a glance with no interaction required. Clicking a card opens the
 * complete capture; the remaining pieces are one button away.
 */
export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const featured = projects.slice(0, FEATURED_COUNT);
  const remaining = projects.slice(FEATURED_COUNT);

  return (
    // overflow-hidden contains the background glow below, which is far wider
    // than a phone viewport and would otherwise scroll the whole page sideways.
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/6 px-6 py-28 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.16),transparent_65%)] blur-[60px]"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeading
          index="02"
          label="FEATURED WORK"
          accent="brand"
          align="center"
          title="Projects That Drive Results"
          description="Explore websites, apps, and digital platforms we've designed, developed, and launched. Click any project to see its design, features, and overall structure."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 0.06}
              className={[
                cardSpan(project),
                // Phones show only MOBILE_COUNT until "view all" is pressed;
                // the rest are hidden by CSS so there is no hydration flash
                // from measuring the viewport in JS.
                !showAll && index >= MOBILE_COUNT ? "hidden sm:block" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <ProjectCard
                project={project}
                onOpen={() => setOpenIndex(index)}
              />
            </Reveal>
          ))}

          <AnimatePresence initial={false}>
            {showAll
              ? remaining.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
                    className={cardSpan(project)}
                  >
                    <ProjectCard
                      project={project}
                      onOpen={() => setOpenIndex(FEATURED_COUNT + index)}
                    />
                  </motion.div>
                ))
              : null}
          </AnimatePresence>
        </div>

        {remaining.length > 0 ? (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowAll((open) => !open)}
              aria-expanded={showAll}
            >
              {showAll
                ? "Show fewer projects"
                : `View all ${projects.length} projects`}
            </Button>
          </div>
        ) : null}
      </div>

      <PortfolioLightbox
        projects={projects}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}

/**
 * Grid placement for one card.
 *
 * Most pieces sit in a single 4:5 cell. The two featured shapes break out of
 * it: landscape footage spans two columns, and a portrait composition spans
 * two rows so it is shown standing up rather than cropped to a letterbox.
 */
function cardSpan(project: Project) {
  if (project.feature === "wide") return "sm:col-span-2";
  if (project.feature === "tall") return "sm:row-span-2 sm:h-full";
  return "";
}

/** The aspect the media box holds at each breakpoint, per feature shape. */
function mediaShape(project: Project) {
  if (project.feature === "wide") return "aspect-video";
  if (project.feature === "tall") return "aspect-[4/5] sm:aspect-auto sm:h-full";
  return "aspect-[4/5]";
}

/** What slice of the viewport this card's image occupies, for srcset picking. */
function imageSizes(project: Project) {
  if (project.feature === "wide") return "(max-width: 1024px) 100vw, 820px";
  return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px";
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isVideo = Boolean(project.video);
  const isTall = project.feature === "tall";
  const previewsInView = isVideo && !prefersReducedMotion;

  // The showreel plays itself, silently, while it is on screen, and stops the
  // moment it is not — a still tile among screenshots reads as another
  // screenshot. Nothing is fetched until the first play, so a visitor who
  // never scrolls this far pays nothing for it.
  useEffect(() => {
    const video = videoRef.current;
    if (!previewsInView || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Playback can be refused outright (low power mode, a data saver).
            // The poster stays up and the lightbox still works, so there is
            // nothing to recover from.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [previewsInView]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900 text-left transition duration-400 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] ${
        isTall ? "sm:h-full" : ""
      }`}
    >
      {/* A 4:5 window onto the top of the capture — enough to read the hero of
          each page without letting a 19,000px-tall image set the height. The
          two featured shapes opt out: landscape footage keeps its own 16:9,
          and the portrait tile fills the two rows it spans. */}
      <div className={`relative overflow-hidden ${mediaShape(project)}`}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          fill
          sizes={imageSizes(project)}
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
            // Page captures and the portrait composition both read from the
            // top down; only the landscape clip wants its middle.
            project.feature === "wide" ? "object-center" : "object-top"
          }`}
        />

        {isVideo ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            // Revealed only once frames are actually on screen, so the poster
            // is never replaced by an empty box while the file loads.
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/10 to-transparent" />

        {isVideo ? (
          <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-ink-950/70 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md">
            <svg viewBox="0 0 16 16" className="size-2.5" aria-hidden="true">
              <path d="M5 3.5l7 4.5-7 4.5z" fill="currentColor" />
            </svg>
            Video
          </span>
        ) : null}

        <span className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-white/20 bg-ink-950/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
            <path
              d="M6 2.5H2.5V6M10 13.5h3.5V10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-[17px] font-bold tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="truncate text-[13px] text-white/55">{project.category}</p>
        </div>
        <span className="flex-none text-[12px] font-semibold text-aqua-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {isVideo ? "Play" : "View"}
        </span>
      </div>
    </button>
  );
}
