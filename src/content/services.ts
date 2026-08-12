import type { ServiceIconName } from "@/components/icons/service-icons";

export type Service = {
  title: string;
  icon: ServiceIconName;
  description: string;
  deliverables: string[];
  /** Tailwind gradient used for the icon tile. */
  iconGradient: string;
  /** Radial glow tinting the top-right of the card. */
  glow: string;
};

/**
 * Prices deliberately live only in `src/content/pricing.ts` — the services
 * section describes scope, the pricing section quotes numbers.
 */
export const services: Service[] = [
  {
    title: "Mobile App Development",
    icon: "phone",
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
    iconGradient: "from-brand-600/40 to-brand-600/10",
    glow: "rgba(37,99,235,0.35)",
  },
  {
    title: "Website Development",
    icon: "globe",
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
    iconGradient: "from-aqua-400/40 to-aqua-400/10",
    glow: "rgba(34,211,238,0.28)",
  },
  {
    title: "Landing Pages & Funnels",
    icon: "funnel",
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
    iconGradient: "from-brand-500/40 to-aqua-500/10",
    glow: "rgba(59,130,246,0.32)",
  },
  {
    title: "Custom Software",
    icon: "code",
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
    iconGradient: "from-brand-700/45 to-aqua-600/10",
    glow: "rgba(29,78,216,0.35)",
  },
];
