import { Reveal } from "@/components/Reveal";

// Replace these with real partner logo images when available.
const partners = [
  { name: "Taparia", logo: "/partners/taparia.png" },
  { name: "De Neers", logo: "/partners/deneers.jpg" },
  { name: "ESAB" },
  { name: "Bosch" },
  { name: "Karam" },
  { name: "3M Safety" },
  { name: "Ador Welding", logo: "/partners/ador.jpg" },
  { name: "Makita" },
  { name: "Satyam Composites", logo: "/partners/satyam.png" },
  { name: "Eibenstock Positron", logo: "/partners/eibenstock.png" },
  { name: "Addison", logo: "/partners/addison.png" },
  { name: "Nilkamal", logo: "/partners/nilkamal.jpg" },
  { name: "Stanley Black & Decker", logo: "/partners/stanley.png" },
];

function LogoTile({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="group grid h-24 w-44 shrink-0 place-items-center rounded-md bg-card px-6">
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-16 max-w-[90%] object-contain"
        />
      ) : (
        <span className="font-display text-lg font-bold tracking-wide text-muted-foreground transition-colors group-hover:text-gold-dark text-center leading-tight">
          {name}
        </span>
      )}
    </div>
  );
}

export function Partners() {
  return (
    <section id="partners" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Trusted Brands</p>
          <h2 className="heading-lg mt-4 text-ink">Our Authorised Partners</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Partnering with trusted brands to deliver dependable industrial solutions.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-4">
          {[...partners, ...partners].map((partner, i) => (
            <LogoTile key={`${partner.name}-${i}`} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </Reveal>

      <div className="mt-12 text-center">
        <a href="#contact" className="btn-base btn-ghost-ink">
          View All Partners
        </a>
      </div>
    </section>
  );
}
