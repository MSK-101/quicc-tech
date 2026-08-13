export type ShowcaseKind = "browser" | "phone" | "dashboard";

export type ShowcaseItem = {
  id: string;
  title: string;
  category: string;
  kind: ShowcaseKind;
  /** Gradient stops behind the frame, from top-left to bottom-right. */
  palette: [string, string, string];
  /**
   * Path to a real screenshot under `/public`. When set it replaces the
   * generated mock frame, so swapping in real work is a one-line change.
   */
  image?: string;
};

/** Top row — scrolls left to right. */
export const showcaseRowOne: ShowcaseItem[] = [
  {
    id: "boosted-host",
    title: "BoostedHost",
    category: "Web Hosting",
    kind: "browser",
    palette: ["#1a1a1a", "#2d2d2d", "#0a0a0a"],
    image: "/showcase/2.png",
  },
  {
    id: "theresa-moloney",
    title: "Theresa Moloney",
    category: "Coach Website",
    kind: "browser",
    palette: ["#f5e6e1", "#e8cfc9", "#f9f0ed"],
    image: "/showcase/design.jpg",
  },
  {
    id: "booking-platform",
    title: "Booking Session",
    category: "Booking App",
    kind: "browser",
    palette: ["#f5f5f5", "#ffffff", "#e8e8e8"],
    image: "/showcase/Book Session.png",
  },
  {
    id: "design-portfolio",
    title: "Design Project 1",
    category: "Design",
    kind: "browser",
    palette: ["#1a1a2e", "#16213e", "#0f3460"],
    image: "/showcase/Design.png",
  },
  {
    id: "design-portfolio-2",
    title: "Design Project 2",
    category: "Design",
    kind: "browser",
    palette: ["#fafafa", "#f0f0f0", "#e5e5e5"],
    image: "/showcase/Design (1).png",
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    category: "Analytics",
    kind: "dashboard",
    palette: ["#1a2332", "#2a3f5f", "#0f1419"],
    image: "/showcase/results:sales.png",
  },
];

/** Bottom row — scrolls right to left. */
export const showcaseRowTwo: ShowcaseItem[] = [
  {
    id: "pipelines-process",
    title: "Pipelines Process",
    category: "Workflow",
    kind: "browser",
    palette: ["#0a1428", "#1a3a52", "#051018"],
    image: "/showcase/pipelines:process.png",
  },
  {
    id: "hosted-client-area",
    title: "Client Area",
    category: "Dashboard",
    kind: "dashboard",
    palette: ["#1a2332", "#2a3f5f", "#0f1419"],
    image: "/showcase/screencapture-panel-boostedhost-clientarea-php-2026-07-31-00_11_08.png",
  },
  {
    id: "boosted-orbit",
    title: "BoostedHost Orbit",
    category: "Management",
    kind: "browser",
    palette: ["#1a1a1a", "#2d2d2d", "#0a0a0a"],
    image: "/showcase/screencapture-boostedhost-orbit-2026-07-31-00_05_59.png",
  },
  {
    id: "golden-axis",
    title: "Golden Axis Visual",
    category: "Portfolio",
    kind: "browser",
    palette: ["#f5f5f5", "#ffffff", "#e8e8e8"],
    image: "/showcase/screencapture-goldenaxisvisual-2026-07-31-00_14_08.png",
  },
  {
    id: "coach-service",
    title: "Coach Services",
    category: "Service Page",
    kind: "browser",
    palette: ["#f5e6e1", "#e8cfc9", "#f9f0ed"],
    image: "/showcase/screencapture-johncoachparis-service-page-2026-07-31-00_24_05.png",
  },
  {
    id: "main-dashboard",
    title: "Main Dashboard",
    category: "Analytics",
    kind: "dashboard",
    palette: ["#1a2332", "#2a3f5f", "#0f1419"],
    image: "/showcase/sales.png",
  },
];
