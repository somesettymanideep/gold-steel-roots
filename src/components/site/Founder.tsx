import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Founder() {
  return (
    <section id="founder" className="bg-background py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Founder Image Column */}
          <div className="lg:col-span-5">
            <Reveal direction="left" className="relative mx-auto max-w-sm">
              {/* Decorative background grid and borders */}
              <div className="absolute -top-4 -left-4 -z-10 size-full rounded-md border-2 border-gold/30" />
              <div className="absolute -bottom-4 -right-4 -z-10 size-full rounded-md border-2 border-gold" />
              
              <div className="overflow-hidden rounded-md bg-card shadow-[var(--shadow-card-hover)]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=750"
                  alt="Shri Dwarka Prasad Gupta - Founder of Ganesh Trading Company"
                  width={600}
                  height={750}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                />
                <div className="bg-ink p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-white">
                    Shri Dwarka Prasad Gupta
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    Founder
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Founder Message Column */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <span className="eyebrow">Our Legacy & Vision</span>
              <h2 className="heading-lg mt-4 text-ink">
                Honoring Our Founder's Pioneering Vision
              </h2>
              <span className="gold-rule mt-5 block" />
              
              <div className="relative mt-8 rounded-lg bg-surface p-6 sm:p-8 border-l-4 border-gold">
                <Quote className="absolute -top-3 -right-1 size-12 rotate-180 text-gold/10" aria-hidden="true" />
                <blockquote className="relative z-10 font-display text-base font-medium italic leading-relaxed text-ink sm:text-lg">
                  "Quality is not an act, it is a habit. We must build relationships based on trust, deliver products that secure lives, and always stand by the commitments we make to our partners and industries."
                </blockquote>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                In 1955, under the visionary leadership of Shri Dwarka Prasad Gupta, Ganesh Trading Company embarked on its journey to bring world-class industrial products to Vijayawada. Built on the pillars of integrity, reliability, and unparalleled customer service, he transformed a modest trading house into a leading distributor.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Today, his principles continue to guide us as we adapt to modern industrial demands. We carry forward his legacy of trust and dedication, ensuring our partners receive only the finest safety, welding, and engineering solutions.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
