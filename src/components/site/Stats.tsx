import { useEffect, useRef, useState } from "react";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 71,
    suffix: "+",
    label: "Years of Industry Experience",
    image: "/stats/experience.png",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Industrial Products",
    icon: Package,
  },
  {
    text: "Multiple",
    label: "Authorised Brands",
    customIcon: () => (
      <svg viewBox="0 0 512 512" className="size-12 text-gold-dark fill-gold-dark" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 40c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216S375.3 40 256 40zm0 376c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z" fill="none" stroke="currentColor" strokeWidth="24" />
        <path d="M140 180l30 90h172l30-90-50 50-36-50-36 50-50-50z" fill="currentColor" />
        <text x="256" y="360" fontFamily="Montserrat, sans-serif" fontSize="56" fontWeight="900" textAnchor="middle" fill="currentColor" letterSpacing="2">BRAND</text>
      </svg>
    ),
  },
  {
    value: 100,
    suffix: "%",
    label: "Customer Satisfaction",
    image: "/stats/satisfaction.png",
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView<HTMLSpanElement>();

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Company statistics" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-y-0">
            {stats.map((stat, i) => {
              const Icon = "icon" in stat ? stat.icon : null;
              return (
                <div
                  key={stat.label}
                  className={cn(
                    "flex items-center gap-4 px-4 py-2 relative justify-center sm:justify-start",
                    i > 0 && "lg:border-l lg:border-zinc-200",
                    i % 2 !== 0 && "sm:border-l sm:border-zinc-200 lg:border-l-0"
                  )}
                >
                  {/* Icon circle */}
                  <div className="flex size-18 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold-dark p-0">
                    {"image" in stat && stat.image ? (
                      <img src={stat.image} alt="" className="size-12 object-contain" />
                    ) : "customIcon" in stat && stat.customIcon ? (
                      stat.customIcon()
                    ) : Icon ? (
                      <Icon className="size-10 stroke-[1.5]" />
                    ) : null}
                  </div>

                  {/* Text & Value container */}
                  <div className="flex flex-col">
                    <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-none">
                      {"value" in stat && typeof stat.value === "number" ? (
                        <CountUp target={stat.value} suffix={stat.suffix} />
                      ) : (
                        "text" in stat ? stat.text : ""
                      )}
                    </p>
                    <p className="text-[11px] sm:text-xs font-bold tracking-wider text-muted-foreground uppercase mt-2 leading-tight max-w-[16ch]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
