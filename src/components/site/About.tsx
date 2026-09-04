import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const highlights = [
  "71+ Years of Experience",
  "Trusted Industrial Supplier",
  "Authorised Brand Partnerships",
  "Comprehensive Product Range",
  "Quality-Assured Products",
];

export function About() {
  return (
    <section id="about" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="left" className="relative">
          <div className="absolute -top-5 -left-5 hidden h-32 w-32 border-t-4 border-l-4 border-gold sm:block" />
          <div className="absolute -right-5 -bottom-5 hidden h-32 w-32 border-r-4 border-b-4 border-gold sm:block" />
          <img
            src={`${import.meta.env.BASE_URL}about-company.jpg`}
            alt="Ganesh Trading Company product showcase, 71 years of trust, and business highlights"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-md object-cover shadow-[var(--shadow-card-hover)]"
          />
        </Reveal>

        <Reveal direction="right">
          <p className="eyebrow">About Ganesh Trading Company</p>
          <h2 className="heading-lg mt-4 text-ink">
            Over Seven Decades of Trust, Quality & Industrial Expertise
          </h2>
          <span className="gold-rule mt-5 block" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Ganesh Trading Company is a trusted distributor and stockist with over 71 years of
            industry experience. We provide a comprehensive range of safety equipment, fire
            equipment, welding solutions, engineering machinery, cutting and power tools, pumps,
            spray systems and industrial products.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            With a commitment to quality, reliability and customer satisfaction, we serve businesses
            and industries across diverse sectors with dependable products and professional service.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold/15">
                  <Check className="size-3.5 text-gold-dark" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
