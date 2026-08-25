import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      id="testimonials"
      className="bg-surface py-20 lg:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        const end = e.changedTouches[0]?.clientX;
        if (start == null || end == null) return;
        if (Math.abs(end - start) > 45) go(end < start ? index + 1 : index - 1);
        touchStart.current = null;
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Testimonials</p>
          <h2 className="heading-lg mt-4 text-ink">What Our Clients Say</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Trusted by industries across Vijayawada and beyond.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className="w-full shrink-0 px-2 sm:px-4"
                  aria-hidden={i !== index}
                  role="group"
                  aria-roledescription="slide"
                >
                  <div className="card-industrial relative mx-auto max-w-3xl p-8 text-center sm:p-12">
                    <Quote
                      className="absolute top-6 left-6 size-10 text-gold/25 sm:size-12"
                      aria-hidden="true"
                    />
                    <blockquote className="relative z-10 text-lg leading-relaxed text-ink sm:text-xl">
                      “{t.quote}”
                    </blockquote>
                    <div className="relative z-10 mt-8">
                      <p className="font-display text-base font-bold text-ink">{t.author}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-ink shadow-[var(--shadow-card)] transition-colors hover:border-gold hover:text-gold-dark sm:grid lg:-left-14"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-ink shadow-[var(--shadow-card)] transition-colors hover:border-gold hover:text-gold-dark sm:grid lg:-right-14"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-10 bg-gold" : "w-4 bg-ink/25 hover:bg-ink/45",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
