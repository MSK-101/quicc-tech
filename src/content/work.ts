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
    id: "field-service",
    title: "Field service app",
    category: "Mobile",
    kind: "phone",
    palette: ["#12203F", "#1B2E63", "#0E1730"],
  },
  {
    id: "corporate-site",
    title: "Corporate website",
    category: "Web",
    kind: "browser",
    palette: ["#0B2545", "#134074", "#081A2E"],
  },
  {
    id: "revenue-dashboard",
    title: "Revenue dashboard",
    category: "SaaS",
    kind: "dashboard",
    palette: ["#0F2A38", "#164C5E", "#0B1F2A"],
  },
  {
    id: "wallet-app",
    title: "Consumer wallet",
    category: "Fintech",
    kind: "phone",
    palette: ["#102A43", "#1D4ED8", "#0A1729"],
  },
  {
    id: "storefront",
    title: "Subscription storefront",
    category: "Ecommerce",
    kind: "browser",
    palette: ["#111C34", "#22456F", "#0B1220"],
  },
  {
    id: "ops-console",
    title: "Operations console",
    category: "Custom software",
    kind: "dashboard",
    palette: ["#0C1E2E", "#0E7490", "#08161F"],
  },
];

/** Bottom row — scrolls right to left. */
export const showcaseRowTwo: ShowcaseItem[] = [
  {
    id: "booking-platform",
    title: "Booking platform",
    category: "Web app",
    kind: "browser",
    palette: ["#0D1B33", "#1E3A8A", "#091124"],
  },
  {
    id: "delivery-tracker",
    title: "Delivery tracker",
    category: "Mobile",
    kind: "phone",
    palette: ["#0B2027", "#0F766E", "#071518"],
  },
  {
    id: "crm-suite",
    title: "CRM suite",
    category: "Custom software",
    kind: "dashboard",
    palette: ["#131A33", "#2563EB", "#0A0F1F"],
  },
  {
    id: "launch-funnel",
    title: "Product launch funnel",
    category: "Landing page",
    kind: "browser",
    palette: ["#0A2136", "#0891B2", "#06151F"],
  },
  {
    id: "health-intake",
    title: "Patient intake",
    category: "SaaS",
    kind: "dashboard",
    palette: ["#101B36", "#3B82F6", "#0A1020"],
  },
  {
    id: "loyalty-app",
    title: "Loyalty app",
    category: "Mobile",
    kind: "phone",
    palette: ["#141F3C", "#22D3EE", "#0A1122"],
  },
];
