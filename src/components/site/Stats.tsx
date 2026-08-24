import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 71, suffix: "+", label: "Years of Industry Experience" },
  { value: 1000, suffix: "+", label: "Industrial Products" },
  { text: "Multiple", label: "Authorised Brands" },
  { text: "Pan-Industry", label: "Solutions" },
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
    <section aria-label="Company statistics" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:gap-x-8 lg:px-8 lg:py-14">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              "px-2 text-center lg:px-6 lg:text-left " +
              (i > 0 ? "lg:border-l lg:border-border" : "")
            }
          >
            <p className="font-display text-4xl leading-none font-extrabold tracking-tight text-ink sm:text-5xl">
              {"value" in stat && typeof stat.value === "number" ? (
                <span className="text-gold-dark">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
              ) : (
                <span className="text-gold-dark">{stat.text}</span>
              )}
            </p>
            <p className="mx-auto mt-3 max-w-[16ch] text-sm font-semibold tracking-wide text-muted-foreground uppercase lg:mx-0">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
