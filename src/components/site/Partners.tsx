import { Reveal } from "@/components/Reveal";

const partners = [
  { name: "Ador Welding", logo: "/partners/ador.jpg" },
  { name: "Addison", logo: "/partners/addison.png" },
  { name: "Stanley Black & Decker", logo: "/partners/stanley.png" },
  { name: "Growskey Enterprises" },
  { name: "KPT Sales & Services Ltd.", logo: "/partners/kpt.png" },
  { name: "Sprayfill India Pvt. Ltd." },
  { name: "Taparia", logo: "/partners/taparia.png" },
  { name: "De Neers", logo: "/partners/deneers.jpg" },
  { name: "Satyam Composites", logo: "/partners/satyam.png" },
  { name: "Eibenstock Positron", logo: "/partners/eibenstock.png" },
  { name: "Nilkamal", logo: "/partners/nilkamal.jpg" },
];

function LogoTile({ name, logo }: { name: string; logo?: string | undefined }) {
  const logoUrl = logo
    ? logo.startsWith("/")
      ? `${import.meta.env.BASE_URL}${logo.slice(1)}`
      : logo
    : undefined;

  return (
    <div className="group grid h-24 w-40 shrink-0 place-items-center rounded-md border border-border bg-card px-5 transition-all duration-300 hover:border-gold hover:shadow-[var(--shadow-card-hover)] sm:w-44">
      {logoUrl ? (
        <img
          src={logoUrl}
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

        <Reveal delay={120} className="marquee-container mt-12 overflow-hidden">
          <div className="marquee-track-slow flex w-max items-center gap-4">
            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <LogoTile key={`${partner.name}-${i}`} name={partner.name} logo={partner.logo} />
            ))}
          </div>
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
