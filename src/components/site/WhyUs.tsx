import { Handshake, Package, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

const features: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <span className="font-display text-2xl font-extrabold text-ink">71+</span>,
    title: "71+ Years of Industry Experience",
    text: "Decades of experience and trusted relationships across a wide range of industrial sectors.",
  },
  {
    icon: <Handshake className="size-8 text-ink" strokeWidth={1.5} aria-hidden="true" />,
    title: "Authorised Brand Partnerships",
    text: "Partnering with globally trusted and established brands to deliver reliable, high-performance products.",
  },
  {
    icon: <Package className="size-8 text-ink" strokeWidth={1.5} aria-hidden="true" />,
    title: "Comprehensive Product Range",
    text: "Safety equipment, welding solutions, engineering machinery, power tools and industrial products under one roof.",
  },
  {
    icon: <ShieldCheck className="size-8 text-ink" strokeWidth={1.5} aria-hidden="true" />,
    title: "Reliable Quality & Customer Experience",
    text: "Committed to quality products, professional service and long-term customer relationships.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-56 opacity-[0.18] lg:block"
        style={{
          backgroundImage: "radial-gradient(var(--gold) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-gold" aria-hidden="true">
              •
            </span>
            Why Choose Us
            <span className="text-gold" aria-hidden="true">
              •
            </span>
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </p>
          <h2 className="heading-lg mt-4 text-ink uppercase">
            Why Choose <span className="text-gold">Ganesh Trading Company?</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Experience, Quality and Reliability You Can Trust
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 110}
              className="card-industrial group flex flex-col items-center border-b-[3px] border-b-gold bg-gradient-to-b from-card to-surface p-8 text-center"
            >
              <span className="grid size-20 place-items-center rounded-full border-2 border-gold/70 bg-background transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                {icon}
              </span>
              <h3 className="font-display mt-6 text-sm font-bold tracking-wide text-ink uppercase">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <span className="gold-rule mt-6 block w-10" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
