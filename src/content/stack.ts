import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiDart,
  SiDocker,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiGreensock,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShopify,
  SiStripe,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

export type TechItem = {
  name: string;
  /** Brand icon. Omit to fall back to the `abbr` monogram tile. */
  Icon?: IconType;
  /** Brand colour, used for the icon and the hover glow. */
  color: string;
  /** Monogram shown when no brand icon is bundled. */
  abbr?: string;
};

export type TechGroup = {
  label: string;
  items: TechItem[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Mobile",
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
      { name: "Dart", Icon: SiDart, color: "#0175C2" },
      { name: "Swift", Icon: SiSwift, color: "#F05138" },
      { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
      { name: "Expo", Icon: SiExpo, color: "#FFFFFF" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    label: "Web & Frontend",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "GSAP", Icon: SiGreensock, color: "#0AE448" },
      { name: "Framer Motion", Icon: SiFramer, color: "#3B82F6" },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", Icon: SiPhp, color: "#8892BF" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E535AB" },
      { name: "Prisma", Icon: SiPrisma, color: "#5A67D8" },
    ],
  },
  {
    label: "Commerce & CMS",
    items: [
      { name: "WordPress", Icon: SiWordpress, color: "#3858E9" },
      { name: "WooCommerce", Icon: SiWoocommerce, color: "#96588A" },
      { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
      { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
    ],
  },
  {
    label: "Cloud & Delivery",
    items: [
      { name: "AWS", color: "#FF9900", abbr: "AWS" },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
    ],
  },
];
