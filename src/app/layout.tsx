import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono } from "next/font/google";

import { CursorFollower } from "@/components/chrome/cursor-follower";
import { PromoBanner } from "@/components/chrome/promo-banner";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { SvgDefs } from "@/components/ui/svg-defs";
import { site } from "@/content/site";

import "./globals.css";

// Geometric grotesque with a double-storey "a" and single-storey "g" — the
// closest Google-hosted match to the reference design's display face.
const figtree = Figtree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mobile app development",
    "website development",
    "custom software",
    "landing pages",
    "Flutter",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#06070a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll reveals render at opacity 0 and are animated in by JS, so
            without JS the page would be blank. Show everything instead. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-ink-950 text-white">
        <SvgDefs />
        <ScrollProgress />
        <CursorFollower />

        <PromoBanner />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
