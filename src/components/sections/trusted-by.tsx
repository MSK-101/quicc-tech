import { ClientMark } from "@/components/icons/client-marks";
import { Marquee } from "@/components/ui/marquee";
import { clients } from "@/content/clients";

/**
 * Client logo strip. The list is rendered twice inside one marquee copy so a
 * short list still fills a wide viewport — without that, the loop restarts
 * before the last name has cleared the screen and leaves a visible gap.
 */
export function TrustedBy() {
  const row = [...clients, ...clients];

  return (
    <section className="relative border-y border-white/6 bg-white/1 py-9">
      <p className="mb-6 px-6 text-center text-[13px] font-medium tracking-tight text-white/42">
        Trusted by startups, agencies, and growing businesses worldwide.
      </p>

      <Marquee direction="left" speed={55} gap={60} className="mask-edges">
        {row.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="group flex flex-none items-center gap-3 opacity-45 transition-opacity duration-300 hover:opacity-100"
          >
            <ClientMark
              name={client.mark}
              className="size-7 text-white/70 transition-colors duration-300 group-hover:text-aqua-400"
            />
            <span className="text-[17px] font-semibold tracking-tight whitespace-nowrap text-white/75">
              {client.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
