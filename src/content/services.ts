export type Service = {
  title: string;
  /** Supplied icon artwork under `/public/services`. */
  image: string;
  description: string;
  deliverables: string[];
  /**
   * Accent colour for this service, as a hex string. Drives the icon, the tile
   * behind it, the checkmarks and the card's glow, so each service reads as its
   * own colour rather than four identical blue cards.
   */
  accent: string;
};

/**
 * Prices deliberately live only in `src/content/pricing.ts` — the services
 * section describes scope, the pricing section quotes numbers.
 */
export const services: Service[] = [
  {
    title: "Mobile App Development",
    image: "/services/mob.png",
    description:
      "Cross-platform apps built once and shipped to both stores, with the backend and admin dashboard included.",
    deliverables: [
      "iOS Apps",
      "Android Apps",
      "Flutter Development",
      "UI/UX Design",
      "Backend APIs",
      "App Store Publishing",
    ],
    accent: "#22D3EE",
  },
  {
    title: "Website Development",
    image: "/services/web.png",
    description:
      "Fast, accessible sites your team can edit — from a five-page brochure site to a full storefront.",
    deliverables: [
      "Business Websites",
      "Corporate Websites",
      "Ecommerce",
      "WordPress",
      "Booking Systems",
      "Custom Web Apps",
    ],
    accent: "#3B82F6",
  },
  {
    title: "Landing Pages & Funnels",
    image: "/services/funnel.png",
    description:
      "Pages built around one action, wired to your CRM and instrumented so you can see what actually converts.",
    deliverables: [
      "Landing Pages",
      "Sales Funnels",
      "Lead Generation",
      "Product Launches",
      "Conversion Optimization",
      "A/B Testing",
    ],
    accent: "#A78BFA",
  },
  {
    title: "Custom Software",
    image: "/services/custom.png",
    description:
      "Internal tools and platforms that replace the spreadsheet currently holding your operation together.",
    deliverables: [
      "CRM Systems",
      "SaaS Platforms",
      "Marketplace Apps",
      "Delivery Platforms",
      "Business Automation",
      "Admin Dashboards",
    ],
    accent: "#34D399",
  },
];
