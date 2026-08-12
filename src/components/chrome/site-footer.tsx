import { SocialIcon } from "@/components/icons/social-icons";
import { Logo } from "@/components/ui/logo";
import { site, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/8 px-6 pt-16 pb-10 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <Logo className="h-14 w-auto" />
          <p className="max-w-xs text-[14.5px] leading-relaxed text-white/45">
            Custom mobile apps, websites, and software platforms for startups and
            growing businesses.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
          <span className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">
            GET IN TOUCH
          </span>
          <a
            href={`mailto:${site.email}`}
            className="text-[15px] font-medium tracking-tight text-white transition-colors hover:text-aqua-300"
          >
            {site.email}
          </a>

          <ul className="mt-1 flex gap-2.5">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-9.5 place-items-center rounded-[10px] border border-white/10 bg-white/3 text-white/55 transition-colors hover:border-aqua-400/50 hover:bg-white/10 hover:text-aqua-300"
                >
                  <SocialIcon name={social.icon} className="size-4.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1240px] border-t border-white/8 pt-6">
        <span className="text-[13px] text-white/35">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
