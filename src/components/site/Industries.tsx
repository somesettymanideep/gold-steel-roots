import {
  ArrowUpRight,
  Anvil,
  Building2,
  Car,
  Cpu,
  Factory,
  Flame,
  FlaskConical,
  Fuel,
  HardHat,
  Landmark,
  Mountain,
  Package,
  Pill,
  Plane,
  Radio,
  Route,
  Shield,
  ShieldCheck,
  Ship,
  Signpost,
  UtensilsCrossed,
  Wheat,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const industries = [
  { name: "Aerospace & Aviation", Icon: Plane },
  { name: "Automobile & Auto Ancillary", Icon: Car },
  { name: "Construction", Icon: HardHat },
  { name: "Cement Plant", Icon: Factory },
  { name: "Defence & Security", Icon: Shield },
  { name: "Electronics & IT", Icon: Cpu },
  { name: "Food & Beverage", Icon: UtensilsCrossed },
  { name: "Heavy Engineering", Icon: Anvil },
  { name: "Highway & Road", Icon: Route },
  { name: "Parking", Icon: Signpost },
  { name: "Mining", Icon: Mountain },
  { name: "Metallurgy", Icon: Flame },
  { name: "Oil & Gas", Icon: Fuel },
  { name: "Chemical", Icon: FlaskConical },
  { name: "Pharmaceutical", Icon: Pill },
  { name: "Power Transmission", Icon: Zap },
  { name: "Shipping", Icon: Ship },
  { name: "Telecom Tower", Icon: Radio },
  { name: "Sugar", Icon: Wheat },
  { name: "Tobacco", Icon: Package },
  { name: "Thermal Stations", Icon: Factory },
  { name: "Police Department", Icon: ShieldCheck },
  { name: "Temples", Icon: Landmark },
  { name: "Builders", Icon: Building2 },
];

export function Industries() {
  return (
    <section id="industries" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center !text-gold">Sectors We Support</p>
          <h2 className="heading-lg mt-4 text-white">Industries We Serve</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Supporting Critical Industries With Reliable Industrial Solutions
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ name, Icon }, i) => (
            <Reveal
              key={name}
              delay={(i % 4) * 80}
              className="group relative flex items-center gap-3 rounded-md border border-white/12 bg-white/4 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:bg-white/8 hover:shadow-[0_0_0_1px_var(--gold),0_16px_40px_oklch(0.742_0.152_76.5/0.18)]"
            >
              <Icon
                className="size-6 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="min-w-0 text-sm font-semibold text-white/90">{name}</span>
              <ArrowUpRight className="ml-auto size-4 shrink-0 text-white/30 transition-all duration-300 group-hover:text-gold" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
