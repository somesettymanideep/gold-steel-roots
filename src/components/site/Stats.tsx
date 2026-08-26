import { useEffect, useRef, useState } from "react";
import { Award, Package, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Stat = {
  value?: number;
  suffix?: string;
  text?: string;
  label: string[];
  icon: LucideIcon;
};

const stats: Stat[] = [
  { value: 71, suffix: "+", label: ["Years of", "Industry", "Experience"], icon: Award },
  { value: 1000, suffix: "+", label: ["Industrial", "Products"], icon: Package },
  { value: 100, suffix: "+", label: ["Authorised", "Brands"], icon: ShieldCheck },
  { value: 100, suffix: "%", label: ["Customer", "Satisfaction"], icon: Users },
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

function CountUp({ target, suffix }: { target: number; suffix?: string | undefined }) {
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

function Hexagon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative grid size-20 shrink-0 place-items-center sm:size-[5.5rem]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full text-gold" aria-hidden="true">
        <polygon
          points="50,4 92,27 92,73 50,96 8,73 8,27"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <Icon className="relative size-8 text-gold stroke-[1.5] sm:size-9" />
    </div>
  );
}

export function Stats() {
  return (
    <section aria-label="Company statistics" className="bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-ink shadow-[0_20px_50px_-20px_oklch(0_0_0_/_0.55)]">
          {/* subtle industrial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(120% 140% at 0% 50%, oklch(0.742 0.152 76.5 / 0.14), transparent 45%), radial-gradient(120% 140% at 100% 50%, oklch(0.742 0.152 76.5 / 0.10), transparent 45%)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-y-8 px-6 py-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-2 lg:px-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label.join(" ")}
                className={cn(
                  "flex items-center justify-center gap-4 px-2 sm:justify-start",
                  i > 0 && "lg:border-l lg:border-white/15",
                  i % 2 !== 0 && "sm:border-l sm:border-white/15 lg:border-l",
                )}
              >
                <Hexagon icon={stat.icon} />

                <div className="flex flex-col">
                  <p className="font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-gold sm:text-[1.75rem]">
                    {typeof stat.value === "number" ? (
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="mt-2 font-display text-[11px] font-bold uppercase leading-snug tracking-wide text-white sm:text-xs">
                    {stat.label.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* gold bottom accent */}
          <div
            aria-hidden="true"
            className="h-[3px] w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.742 0.152 76.5 / 0.35) 15%, oklch(0.85 0.16 85) 50%, oklch(0.742 0.152 76.5 / 0.35) 85%, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
