export type Project = {
  id: string;
  title: string;
  category: string;
  /**
   * Path under `/public`. For a video entry this is the poster frame, shown in
   * the grid and before the clip starts playing.
   */
  image: string;
  /** Natural pixel size of `image`, so tiles reserve space and never shift layout. */
  width: number;
  height: number;
  /**
   * Present only on video entries. The tile plays it muted on hover and the
   * lightbox opens a full player with sound and controls.
   */
  video?: string;
};

/**
 * Featured work, in display order — the array order is the order on the page.
 *
 * Filenames are descriptive rather than numbered: the sequence lives here, so
 * numbering the files would only go stale the next time the order changes.
 *
 * To add a piece: put the asset in `/public/showcase` and add an entry with its
 * natural pixel dimensions. Full-length page captures and 4:3 mockup renders
 * both work — the grid shows the top of each and the lightbox reveals it whole.
 */
export const projects: Project[] = [
  {
    id: "daily-dish",
    title: "The Daily Dish",
    category: "Mobile App Showreel",
    image: "/showcase/showreel-poster.jpg",
    width: 1280,
    height: 720,
    video: "/showcase/showreel.mp4",
  },
  {
    id: "doctor-app",
    title: "Doctor",
    category: "Healthcare App",
    image: "/showcase/doctor-app.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "golden-platter",
    title: "Golden Platter",
    category: "Restaurant Website",
    image: "/showcase/17.jpg",
    width: 1440,
    height: 6151,
  },
  {
    id: "asian-dating",
    title: "DuoMatch",
    category: "Dating Platform",
    image: "/showcase/asian-dating.jpg",
    width: 1200,
    height: 7428,
  },
  {
    id: "ai-agent-app",
    title: "AURA",
    category: "AI Agent Mobile App",
    image: "/showcase/ai-agent-app.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "imjourny",
    title: "IMJourny",
    category: "AI Generator Website",
    image: "/showcase/14.jpg",
    width: 1440,
    height: 8249,
  },
  {
    id: "tecbar",
    title: "Tecbar",
    category: "Clothing Website",
    image: "/showcase/15.jpg",
    width: 1440,
    height: 4889,
  },
  {
    id: "rova-score",
    title: "Rova Score",
    category: "Sports App",
    image: "/showcase/rova-score.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "fashion-headwear",
    title: "Fashion",
    category: "Clothing Website",
    image: "/showcase/12.jpg",
    width: 1440,
    height: 6311,
  },
  {
    id: "marcell",
    title: "Marcell",
    category: "Restaurant Website",
    image: "/showcase/13.jpg",
    width: 1440,
    height: 7643,
  },
  {
    id: "laserclinics",
    title: "Laserclinics",
    category: "Skincare Clinic Website",
    image: "/showcase/16.jpg",
    width: 1440,
    height: 6781,
  },
  {
    id: "h9x",
    title: "h9x",
    category: "Fintech Platform",
    image: "/showcase/10.png",
    width: 1425,
    height: 5016,
  },
  {
    id: "thinkio",
    title: "Thinkio",
    category: "AI Assistant App",
    image: "/showcase/thinkio.jpg",
    width: 1600,
    height: 1200,
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
    id: "shoptok",
    title: "ShopTok",
    category: "Shopping App",
    image: "/showcase/shoptok.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "stocks-trend",
    title: "Stocks-Trend",
    category: "Investment Analysis",
    image: "/showcase/9.jpg",
    width: 1920,
    height: 3852,
  },
  {
    id: "herpath",
    title: "HerPath",
    category: "Ride-Booking App",
    image: "/showcase/herpath.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "one-day-or-day-one",
    title: "One Day or Day One",
    category: "Coaching Site",
    image: "/showcase/1.png",
    width: 1920,
    height: 3718,
  },
  {
    id: "ratem",
    title: "Ratem",
    category: "Football App",
    image: "/showcase/ratem.jpg",
    width: 1600,
    height: 1200,
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
    id: "wipeout",
    title: "WipeOut",
    category: "Cleaning Service App",
    image: "/showcase/wipeout.jpg",
    width: 1600,
    height: 1200,
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
    id: "iploy-job",
    title: "iPloy Job",
    category: "Job Listing App",
    image: "/showcase/iploy-job.jpg",
    width: 1600,
    height: 1200,
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
    id: "duomatch-app",
    title: "DuoMatch App",
    category: "Dating App",
    image: "/showcase/duomatch-app.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "veloura",
    title: "Veloura",
    category: "Boutique Store UI",
    image: "/showcase/veloura.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "handoff",
    title: "HandOff",
    category: "Delivery Platform",
    image: "/showcase/handoff.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "wedding-palette",
    title: "Wedding Palette",
    category: "Colour Generator App",
    image: "/showcase/wedding-palette.jpg",
    width: 1600,
    height: 1200,
  },
  {
    id: "training-app",
    title: "Training Modules",
    category: "E-Learning App",
    image: "/showcase/training-app.jpg",
    width: 1600,
    height: 1200,
  },
];
