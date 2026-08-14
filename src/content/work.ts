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
 * Featured work, in display order — the files are numbered so the sequence here
 * matches the sequence on disk.
 *
 * The first few are shown immediately (see `FEATURED_COUNT` in `portfolio.tsx`,
 * which shows fewer on phones); the rest appear behind the "view all" toggle.
 *
 * To add a piece: drop the screenshot in `/public/showcase` as the next number
 * and add an entry with its natural pixel dimensions. Full-length page captures
 * are preferred — the grid shows the top of each image and the lightbox reveals
 * the whole thing.
 */
export const projects: Project[] = [
  {
    id: "one-day-or-day-one",
    title: "One Day or Day One",
    category: "Coaching Site",
    image: "/showcase/1.png",
    width: 1920,
    height: 3718,
  },
  {
    id: "boosted-host",
    title: "BoostedHost",
    category: "Web Hosting",
    image: "/showcase/2.png",
    width: 4112,
    height: 22634,
  },
  {
    id: "trenher",
    title: "TrenHer",
    category: "Fitness Coaching",
    image: "/showcase/3.jpeg",
    width: 1284,
    height: 2170,
  },
  {
    id: "investment-academy",
    title: "Investment Academy",
    category: "Landing Page",
    image: "/showcase/4.jpeg",
    width: 1284,
    height: 2421,
  },
  {
    id: "mindset-mastery",
    title: "Mindset Mastery",
    category: "Course Platform",
    image: "/showcase/5.jpeg",
    width: 1281,
    height: 2410,
  },
  {
    id: "theresa-moloney",
    title: "Theresa Moloney",
    category: "Coach Website",
    image: "/showcase/6.jpeg",
    width: 1284,
    height: 2411,
  },
  {
    id: "hormezis-longevity",
    title: "Hormezis Longevity",
    category: "Health Platform",
    image: "/showcase/7.jpeg",
    width: 1282,
    height: 2409,
  },
  {
    id: "boosted-orbit",
    title: "BoostedHost Orbit",
    category: "Product Site",
    image: "/showcase/8.png",
    width: 4112,
    height: 19194,
  },
  {
    id: "golden-axis",
    title: "Golden Axis Visual",
    category: "Portfolio Site",
    image: "/showcase/9.png",
    width: 4112,
    height: 18576,
  },
];
