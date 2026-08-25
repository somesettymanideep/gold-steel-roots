import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroPpeAsset from "@/assets/hero-ppe-fire.png.asset.json";
import heroRoadAsset from "@/assets/hero-road-safety.png.asset.json";
import heroWeldingAsset from "@/assets/hero-welding.png.asset.json";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: heroPpeAsset.url,
    alt: "Safety helmet, hi-vis vest, safety boots, gloves, goggles, respirator, fire extinguisher and first aid kit",
    eyebrow: "Safety & Fire Equipment",
    title: "Complete Personal Protective & Fire Safety Equipment",
    text: "Helmets, safety shoes, hand gloves, goggles, respirators, hi-vis jackets, fire extinguishers, hose reels and first aid kits — certified protection for every worksite.",
    primary: { label: "Explore Safety Range", href: "#products" },
    secondary: { label: "Get a Quote", href: "#contact" },
  },
  {
    image: heroRoadAsset.url,
    alt: "Road safety barricade, traffic cones, speed breaker, road studs and queue barriers on a highway",
    eyebrow: "Road Safety Products",
    title: "Road Safety & Traffic Management Solutions",
    text: "Traffic cones, barricades, speed breakers, road studs, delineators and retractable barriers to keep roads, plants and construction zones safe.",
    primary: { label: "View Road Safety", href: "#products" },
    secondary: { label: "Contact Us", href: "#contact" },
  },
  {
    image: heroWeldingAsset.url,
    alt: "Welding rectifier, transformer, inverter MIG/TIG welding machines, generator, electrodes and welding accessories",
    eyebrow: "Welding & Power Solutions",
    title: "Welding Machines, Consumables & Power Equipment",
    text: "Rectifiers, transformers, IGBT inverters, MIG/TIG machines, generators, electrodes, wires, torches and regulators from authorised brands.",
    primary: { label: "Welding Products", href: "#products" },
    secondary: { label: "Talk to Us", href: "#contact" },
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <section
      id="home"
      aria-label="Ganesh Trading Company highlights"
      className="relative isolate overflow-hidden bg-ink"
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
      <div className="relative h-[88vh] min-h-[560px] w-full sm:h-[92vh]">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1100ms] ease-out",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                width={1920}
                height={1088}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                className={cn(
                  "size-full object-cover",
                  i === index && "ken-burns",
                )}
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.09_0_0/0.92)_0%,oklch(0.09_0_0/0.78)_45%,oklch(0.09_0_0/0.45)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.09_0_0/0.85),transparent_55%)]" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p
                  className={cn(
                    "reveal reveal-up flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase",
                    i === index && "is-revealed",
                  )}
                  style={{ transitionDelay: "120ms" }}
                >
                  <span className="h-px w-10 bg-gold" />
                  {slide.eyebrow}
                </p>
                <h1
                  className={cn(
                    "reveal reveal-up heading-xl mt-5 text-white",
                    i === index && "is-revealed",
                  )}
                  style={{ transitionDelay: "240ms" }}
                >
                  {slide.title}
                </h1>
                <p
                  className={cn(
                    "reveal reveal-up mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg",
                    i === index && "is-revealed",
                  )}
                  style={{ transitionDelay: "380ms" }}
                >
                  {slide.text}
                </p>
                <div
                  className={cn(
                    "reveal reveal-up mt-9 flex flex-wrap gap-3",
                    i === index && "is-revealed",
                  )}
                  style={{ transitionDelay: "520ms" }}
                >
                  <a href={slide.primary.href} className="btn-base btn-gold">
                    {slide.primary.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                  <a href={slide.secondary.href} className="btn-base btn-ghost-light">
                    {slide.secondary.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-ink md:grid lg:left-6"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-ink md:grid lg:right-6"
        >
          <ChevronRight className="size-6" />
        </button>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-10 bg-gold" : "w-4 bg-white/45 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
