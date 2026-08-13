export type Project = {
  id: string;
  title: string;
  category: string;
  /** Path under `/public`. */
  image: string;
  /** Natural pixel size, so images reserve their space and never shift layout. */
  width: number;
  height: number;
};

/**
 * Featured work, in display order. The first `FEATURED_COUNT` (see
 * `portfolio.tsx`) are shown immediately; the rest appear behind the
 * "view all" toggle.
 *
 * To add a piece: drop the screenshot in `/public/showcase` and add an entry
 * with its natural pixel dimensions. Full-length page captures are preferred —
 * the grid shows the top of each image and the lightbox reveals the whole
 * thing.
 */
export const projects: Project[] = [
  {
    id: "boosted-host",
    title: "BoostedHost",
    category: "Web Hosting",
    image: "/showcase/2.png",
    width: 1024,
    height: 768,
  },
  {
    id: "theresa-moloney",
    title: "Theresa Moloney",
    category: "Coach Website",
    image: "/showcase/design.jpg",
    width: 1440,
    height: 2790,
  },
  {
    id: "booking-session",
    title: "Booking Session",
    category: "Booking App",
    image: "/showcase/Book Session.png",
    width: 1920,
    height: 1686,
  },
  {
    id: "golden-axis",
    title: "Golden Axis Visual",
    category: "Portfolio Site",
    image: "/showcase/screencapture-goldenaxisvisual-2026-07-31-00_14_08.png",
    width: 4112,
    height: 18576,
  },
  {
    id: "boosted-orbit",
    title: "BoostedHost Orbit",
    category: "Product Site",
    image: "/showcase/screencapture-boostedhost-orbit-2026-07-31-00_05_59.png",
    width: 4112,
    height: 19194,
  },
  {
    id: "coach-service",
    title: "Coach Services",
    category: "Service Page",
    image:
      "/showcase/screencapture-johncoachparis-service-page-2026-07-31-00_24_05.png",
    width: 4112,
    height: 11480,
  },
  {
    id: "design-project-one",
    title: "Design Project 1",
    category: "Web Design",
    image: "/showcase/Design.png",
    width: 1920,
    height: 3718,
  },
  {
    id: "design-project-two",
    title: "Design Project 2",
    category: "Web Design",
    image: "/showcase/Design (1).png",
    width: 1920,
    height: 3891,
  },
  {
    id: "hosted-client-area",
    title: "Client Area",
    category: "Customer Dashboard",
    image:
      "/showcase/screencapture-panel-boostedhost-clientarea-php-2026-07-31-00_11_08.png",
    width: 4112,
    height: 2948,
  },
];
