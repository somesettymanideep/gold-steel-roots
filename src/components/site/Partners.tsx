import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const partners = [
  { name: "Ador Welding", logo: "/partners/ador.jpg" },
  { name: "Addison", logo: "/partners/addison.png" },
  { name: "Stanley Black & Decker", logo: "/partners/stanley.png" },
  { name: "Growskey Enterprises" },
  { name: "KPT Sales & Services Ltd." },
  { name: "Sprayfill India Pvt. Ltd." },
  { name: "Taparia", logo: "/partners/taparia.png" },
  { name: "De Neers", logo: "/partners/deneers.jpg" },
  { name: "Satyam Composites", logo: "/partners/satyam.png" },
  { name: "Eibenstock Positron", logo: "/partners/eibenstock.png" },
  { name: "Nilkamal", logo: "/partners/nilkamal.jpg" },
  { name: "ESAB" },
  { name: "Bosch" },
  { name: "Karam" },
  { name: "3M Safety" },
  { name: "Makita" },
];

function LogoTile({ name, logo }: { name: string; logo?: string | undefined }) {
  return (
    <div className="group grid h-24 w-40 shrink-0 place-items-center rounded-md border border-border bg-card px-5 transition-all duration-300 hover:border-gold hover:shadow-[var(--shadow-card-hover)] sm:w-44">
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-14 max-w-[90%] object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-center font-display text-base font-bold leading-tight tracking-wide text-muted-foreground transition-colors group-hover:text-gold-dark">
          {name}
        </span>
      )}
    </div>
  );
}

export function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 4,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 200), behavior: "smooth" });
  };

  return (
    <section id="partners" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Trusted Brands</p>
          <h2 className="heading-lg mt-4 text-ink">Our Authorised Partners</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Partnering with trusted brands to deliver dependable industrial solutions.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative mt-12">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous partners"
            disabled={!canScroll.left}
            className="absolute top-1/2 -left-2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-ink shadow-[var(--shadow-card)] transition-colors hover:border-gold hover:bg-gold hover:text-ink disabled:opacity-40 sm:-left-4"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <div
            ref={trackRef}
            onScroll={update}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-2"
          >
            {partners.map((partner) => (
              <div key={partner.name} className="snap-start">
                <LogoTile name={partner.name} logo={partner.logo} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next partners"
            disabled={!canScroll.right}
            className="absolute top-1/2 -right-2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-ink shadow-[var(--shadow-card)] transition-colors hover:border-gold hover:bg-gold hover:text-ink disabled:opacity-40 sm:-right-4"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </Reveal>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-base btn-ghost-ink">
            View All Partners
          </a>
        </div>
      </div>
    </section>
  );
}
