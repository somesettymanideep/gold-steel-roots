import { Award, BadgeCheck, Boxes, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    Icon: Award,
    title: "71+ Years of Industry Experience",
    text: "Decades of experience and trusted relationships across industrial sectors.",
  },
  {
    Icon: BadgeCheck,
    title: "Authorised Brand Partnerships",
    text: "Partnering with trusted global and established brands to deliver dependable products.",
  },
  {
    Icon: Boxes,
    title: "Comprehensive Product Range",
    text: "Safety, welding, engineering machinery, power tools and industrial solutions under one roof.",
  },
  {
    Icon: HeartHandshake,
    title: "Reliable Quality & Customer Experience",
    text: "Committed to quality products, professional service and long-term customer relationships.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Why Us</p>
          <h2 className="heading-lg mt-4 text-ink">Why Choose Ganesh Trading Company?</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Experience, Quality and Reliability You Can Trust
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 110}
              className="card-industrial group flex flex-col p-7"
            >
              <span className="grid size-14 place-items-center rounded-md bg-gold/12 transition-colors duration-300 group-hover:bg-gold">
                <Icon
                  className="size-7 text-gold-dark transition-colors duration-300 group-hover:text-ink"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-display mt-6 text-base font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
