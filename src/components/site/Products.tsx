import { ArrowRight } from "lucide-react";
import catRoad from "@/assets/cat-road.jpg";
import catSafety from "@/assets/cat-safety.jpg";
import catWelding from "@/assets/cat-welding.jpg";
import catTools from "@/assets/cat-tools.jpg";
import catMachinery from "@/assets/cat-machinery.jpg";
import catPumps from "@/assets/cat-pumps.jpg";
import { Reveal } from "@/components/Reveal";

export const categories = [
  {
    name: "Road & Traffic Safety Equipment",
    image: catRoad,
    alt: "Traffic cones and barricades on a highway safety work zone",
    description: "Highway and work-zone safety products for contractors and civic projects.",
    items: [
      "Traffic Cones",
      "Barricades",
      "Cat Eyes",
      "Speed Breakers",
      "Delineators",
      "Queue Managers",
    ],
  },
  {
    name: "Safety & Fire Equipment",
    image: catSafety,
    alt: "Hard hat, safety gloves, goggles, ear protection and fire extinguishers",
    description: "Complete personal protective equipment and fire fighting solutions.",
    items: [
      "Leather, Rubber, Cotton & PVC Gloves",
      "Helmets",
      "Gum Boots & Industrial Shoes",
      "Nose & Dust Masks",
      "Goggles & Ear Plugs",
      "Safety Jackets",
      "First Aid Kits",
      "Fire Fighting Equipment",
    ],
  },
  {
    name: "Welding Solutions",
    image: catWelding,
    alt: "MIG welding machine with sparks in an industrial workshop",
    description: "Welding machines, consumables and gas cutting equipment.",
    items: [
      "Electrodes",
      "Welding Transformers",
      "Generators & Rectifiers",
      "MIG / TIG Welding Machines",
      "Gas Cutting Equipment",
      "MIG Wire & Filler Wire",
    ],
  },
  {
    name: "Cutting & Power Tools",
    image: catTools,
    alt: "Cordless drill, angle grinder and circular saw on a workbench",
    description: "Professional power tools, cutting tools and branded hand tools.",
    items: [
      "Drilling Machines",
      "Angle Grinders",
      "Chop & Circular Saws",
      "Routers & Jig Saws",
      "End Mills, Milling Cutters",
      "Reamers & Taps",
      "Hand Tools — Taparia",
      "Hand Tools — De Neers",
    ],
  },
  {
    name: "Engineering Machinery & Tools",
    image: catMachinery,
    alt: "Engineering workshop with lathes, compressors and bench grinders",
    description: "Workshop machinery, compressors and allied engineering tools.",
    items: [
      "Wood Surface Planers & Lathes",
      "Air & Painting Compressors",
      "Marble & Stone Polishing Machines",
      "Papad & Popcorn Machines",
      "Masonry Drills & Tile Cutter Blades",
      "Wire Brushes & Rivet Guns",
      "Bench Grinders",
      "Paints & Emery Papers",
    ],
  },
  {
    name: "Pumps & Spray Systems",
    image: catPumps,
    alt: "Barrel hand pumps, grease guns and spray guns on a workshop bench",
    description: "Lubrication, transfer pumps, spray systems and test materials.",
    items: [
      "Barrel Hand Pumps",
      "Rotary, Piston & Lever Type Pumps",
      "Grease Guns & Dip Rods",
      "Spray Guns",
      "D.P.T. Test Materials",
      "Anticipators",
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Product Range</p>
          <h2 className="heading-lg mt-4 text-ink">Our Product Range</h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Complete Industrial Solutions Under One Roof
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.name}
              as="article"
              delay={(i % 3) * 110}
              className="card-industrial group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.09_0_0/0.6),transparent_60%)]" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {cat.items.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-bold tracking-widest text-gold-dark uppercase">
                  {cat.items.length}+ Product Lines
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 self-start border-b-2 border-transparent pb-1 text-sm font-bold text-ink transition-all group-hover:border-gold group-hover:text-gold-dark"
                >
                  Explore Products
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
