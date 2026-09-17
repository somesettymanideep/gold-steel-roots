import { Reveal } from "@/components/Reveal";

interface Client {
  name: string;
  category: string;
  logo: string;
}

const clients: Client[] = [
  {
    name: "Government of Andhra Pradesh",
    category: "Government Body",
    logo: "/clients/ap-govt.png",
  },
  {
    name: "Andhra Pradesh Police",
    category: "Law Enforcement",
    logo: "/clients/ap-police.png",
  },
  {
    name: "NTPC Limited",
    category: "Public Sector Enterprise",
    logo: "/clients/ntpc.webp",
  },
  {
    name: "NCC Limited",
    category: "Infrastructure & Construction",
    logo: "/clients/ncc.png",
  },
  {
    name: "MEIL",
    category: "Infrastructure & Engineering",
    logo: "/clients/meil.png",
  },
  {
    name: "BVSR Constructions",
    category: "Highways & Infrastructure",
    logo: "/clients/bvsr.png",
  },
  {
    name: "ATCON India",
    category: "Civil & Rail Infrastructure",
    logo: "/clients/atcon.png",
  },
  {
    name: "Nippon Koei India",
    category: "Engineering & Consultancy",
    logo: "/clients/nippon-koei.png",
  },
  {
    name: "Gruner Infra",
    category: "Infrastructure & Development",
    logo: "/clients/gruner-infra.png",
  },
  {
    name: "Larsen & Toubro (L&T)",
    category: "Engineering & Construction",
    logo: "/clients/larsen-toubro.png",
  },
  {
    name: "Sandhya Agro Exports",
    category: "Agro Commodities & Exports",
    logo: "/clients/sandhya-agro.png",
  },
  {
    name: "Wadpack",
    category: "Packaging Solutions",
    logo: "/clients/wadpack.png",
  },
  {
    name: "UT Lamination Welding",
    category: "Electrical Steel & Lamination",
    logo: "/clients/ut-lamination.png",
  },
  {
    name: "Papayya India",
    category: "Precision Engineering",
    logo: "/clients/papayya.png",
  },
  {
    name: "The Andhra Sugars Limited",
    category: "Sugar, Chemicals & Industrial",
    logo: "/clients/andhra-sugars.png",
  },
  {
    name: "BSR Infratech",
    category: "Infrastructure & Construction",
    logo: "/clients/bsr-infratech.png",
  },
  {
    name: "A.P. Endowments Department",
    category: "Government Department",
    logo: "/clients/ap-endowments.png",
  },
];

function getLogoUrl(logo: string) {
  if (logo.startsWith("/")) {
    const base = import.meta.env.BASE_URL || "/";
    const cleanBase = base.endsWith("/") ? base : `${base}/`;
    return `${cleanBase}${logo.slice(1)}`;
  }
  return logo;
}

function ClientCard({ client }: { client: Client }) {
  const logoUrl = getLogoUrl(client.logo);

  return (
    <div className="group relative flex h-36 w-56 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-card-hover)] sm:h-40 sm:w-64 sm:p-5">
      <div className="flex h-20 w-full items-center justify-center sm:h-22">
        <img
          src={logoUrl}
          alt={`${client.name} logo`}
          className="max-h-16 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-2 text-center">
        <p className="font-display text-xs font-bold leading-tight text-ink transition-colors group-hover:text-gold-dark sm:text-sm">
          {client.name}
        </p>
        <span className="mt-1 block text-[11px] font-medium text-muted-foreground">
          {client.category}
        </span>
      </div>
    </div>
  );
}

export function Clients() {
  // Repeating the clients to build a seamless continuous loop for the autoplay slider
  const displayClients = [
    ...clients,
    ...clients,
  ];

  return (
    <section id="clients" className="border-t border-border/70 bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Our Clients</p>
          <h2 className="heading-lg mt-4 text-ink">Trusted by Leading Organisations</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Proud supplier and partner to government bodies, public sector enterprises, and leading
            industrial manufacturers across the region.
          </p>
        </Reveal>

        {/* Autoplay Slider with pause on hover */}
        <Reveal delay={120} className="marquee-container mt-14 overflow-hidden">
          <div
            className="marquee-track flex w-max items-center gap-5 py-3 hover:[animation-play-state:paused]"
            title="Autoplaying slider — hover to pause"
          >
            {/* Duplicated set for seamless -50% CSS infinite marquee autoplay */}
            {[...displayClients, ...displayClients].map((client, index) => (
              <ClientCard key={`${client.name}-${index}`} client={client} />
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="inline-block size-2 animate-pulse rounded-full bg-gold" />
          <span>Autoplaying client showcase • Hover any logo to pause</span>
        </div>
      </div>
    </section>
  );
}
