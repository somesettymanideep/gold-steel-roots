import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Ganesh Trading Company has been our trusted supplier for safety equipment and welding solutions for years. Their product quality and prompt service are unmatched in Vijayawada.",
    author: "Ramesh Kumar",
    role: "Plant Manager, Engineering Workshop",
  },
  {
    quote:
      "We rely on them for everything from fire safety gear to industrial power tools. Their team understands our requirements and always delivers the right products on time.",
    author: "Suresh Reddy",
    role: "Procurement Head, Manufacturing Unit",
  },
  {
    quote:
      "A dependable partner with decades of industrial expertise. Their guidance helped us choose the right machinery and safety equipment for our facility.",
    author: "Anil Sharma",
    role: "Operations Director, Construction Firm",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Testimonials</p>
          <h2 className="heading-lg mt-4 text-ink">What Our Clients Say</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Trusted by industries across Vijayawada and beyond.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-14 overflow-hidden">
        <div className="marquee-track flex w-max items-stretch gap-6 px-4 sm:px-6 lg:px-8">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.author}-${i}`}
              className="card-industrial relative w-[85vw] max-w-md shrink-0 p-8 sm:w-[45vw] lg:w-[30vw]"
            >
              <Quote
                className="absolute top-5 left-5 size-9 text-gold/25 sm:size-10"
                aria-hidden="true"
              />
              <blockquote className="relative z-10 text-base leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <div className="relative z-10 mt-6">
                <p className="font-display text-base font-bold text-ink">{t.author}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
