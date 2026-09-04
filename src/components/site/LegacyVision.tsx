import { Award, Calendar, Quote, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function LegacyVision() {
  return (
    <section id="legacy" className="border-t border-border bg-background py-20 lg:py-28">
      {/* Anchor alias for backwards compatibility */}
      <span id="founder" className="-top-24 block relative" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Our Legacy & Vision</p>
          <h2 className="heading-lg mt-4 text-ink">
            A Story of Trust, Family & Industrial Excellence
          </h2>
          <span className="gold-rule mx-auto mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From humble beginnings in 1952 Vijayawada to premier industrial distributors, our journey
            has been shaped by visionary brotherly leadership across two defining eras.
          </p>
        </Reveal>

        {/* Dual Era Showcase Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Era 1: 1952 Foundation */}
          <Reveal
            direction="left"
            className="card-industrial group flex flex-col justify-between overflow-hidden p-6 sm:p-8"
          >
            <div>
              {/* Badge & Timeline Marker */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold text-gold-dark">
                  <Calendar className="size-3.5" />
                  Established 1952
                </span>
                <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Vijayawada, Andhra Pradesh
                </span>
              </div>

              {/* Portrait Frame */}
              <div className="relative mt-6 overflow-hidden rounded-md border border-border bg-surface">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink/90 via-ink/80 to-ink/95">
                  {/* Decorative Vintage Overlay Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,157,2,0.15),transparent_70%)]" />
                  
                  <div className="relative flex size-full flex-col items-center justify-center p-6 text-center">
                    <div className="grid size-16 place-items-center rounded-full border-2 border-gold/40 bg-ink/70 text-gold shadow-md sm:size-20">
                      <Users className="size-8 sm:size-10 text-gold" aria-hidden="true" />
                    </div>
                    <p className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
                      The Founding Brothers
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
                      Pioneers of Ganesh Trading & Co • 1952
                    </p>
                    <span className="mt-3 inline-block rounded border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[11px] font-semibold text-gold">
                      First Generation Founders
                    </span>
                  </div>
                </div>

                <div className="border-t border-border/80 bg-card p-4 text-center">
                  <p className="text-xs italic text-muted-foreground">
                    "Built on honesty, personal relationships, and unwavering trade integrity."
                  </p>
                </div>
              </div>

              {/* Contextual Narrative */}
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  The Genesis in Vijayawada (1952)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  In <strong>1952</strong>, two visionary brothers laid the cornerstone of{" "}
                  <strong>Ganesh Trading & Co</strong> in the bustling commercial heart of
                  Vijayawada. Commencing operations at a time when industrial infrastructure in
                  Andhra Pradesh was in its infancy, they recognized the vital need for reliable
                  tools, engineering supplies, and authentic equipment.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Their founding ethos was straightforward yet profound: deliver genuine products,
                  stand uncompromisingly behind every commitment, and treat every customer as a
                  lifelong partner. This foundation earned them decades of deep-rooted goodwill.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border/60 pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-dark">
                <Award className="size-4" />
                <span>Foundational Legacy: 70+ Years of Enduring Trust</span>
              </div>
            </div>
          </Reveal>

          {/* Era 2: 1980 Leadership Handover */}
          <Reveal
            direction="right"
            delay={100}
            className="card-industrial group flex flex-col justify-between overflow-hidden p-6 sm:p-8"
          >
            <div>
              {/* Badge & Timeline Marker */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1 text-xs font-bold text-gold">
                  <Calendar className="size-3.5" />
                  Handover 1980
                </span>
                <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Second Generation Leadership
                </span>
              </div>

              {/* Portrait Frame */}
              <div className="relative mt-6 overflow-hidden rounded-md border border-border bg-surface">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink/90 via-ink/80 to-ink/95">
                  {/* Decorative Modern Overlay Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,157,2,0.18),transparent_70%)]" />

                  <div className="relative flex size-full flex-col items-center justify-center p-6 text-center">
                    <div className="grid size-16 place-items-center rounded-full border-2 border-gold bg-ink/80 text-gold shadow-md sm:size-20">
                      <Users className="size-8 sm:size-10 text-gold" aria-hidden="true" />
                    </div>
                    <p className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
                      Dharmendra Patel & Yatin Patel
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
                      Leadership Handover • 1980 to Present
                    </p>
                    <span className="mt-3 inline-block rounded border border-gold bg-gold px-2.5 py-0.5 text-[11px] font-bold text-ink">
                      Managing Leadership
                    </span>
                  </div>
                </div>

                <div className="border-t border-border/80 bg-card p-4 text-center">
                  <p className="text-xs italic text-muted-foreground">
                    "Modernizing industrial distribution while preserving our heritage of trust."
                  </p>
                </div>
              </div>

              {/* Contextual Narrative */}
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  Second Generation Expansion (1980)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  In <strong>1980</strong>, the business transitioned to the second generation under
                  the stewardship of brothers <strong>Dharmendra Patel</strong> and{" "}
                  <strong>Yatin Patel</strong>. Bringing visionary acumen and modern business
                  practices, they spearheaded a transformative period of growth and diversification.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Under Dharmendra and Yatin Patel’s guidance, Ganesh Trading & Co forged authorized
                  partnerships with premier national and international industrial brands, broadened
                  its catalogue into specialized Safety & Fire equipment, Welding machines, and
                  Pumps, and became an approved supplier for prestigious PSUs and government bodies.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border/60 pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-dark">
                <ShieldCheck className="size-4" />
                <span>Modernized Supply Chains & Tier-1 Brand Partnerships</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Unified Vision Statement & Principles */}
        <Reveal delay={150} className="mt-14 overflow-hidden rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-[var(--shadow-card)]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gold-dark uppercase">
                <Quote className="size-4" />
                <span>Our Enduring Vision</span>
              </div>
              <blockquote className="mt-3 font-display text-lg font-semibold leading-relaxed text-ink sm:text-xl">
                “Continuing the foundational principles established in 1952 by our founding
                brothers, our vision is to empower Indian industries with reliable safety, welding,
                and engineering solutions—combining multi-generational trust with cutting-edge
                industrial standards.”
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <p className="text-sm font-bold text-ink">
                  Dharmendra Patel & Yatin Patel
                  <span className="ml-2 font-normal text-muted-foreground">
                    • Ganesh Trading Company
                  </span>
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <p className="text-xs font-bold text-gold-dark uppercase tracking-wider">
                  Our Mission
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Zero compromise on industrial safety, providing prompt certified solutions for
                  every workshop and government institution.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <p className="text-xs font-bold text-gold-dark uppercase tracking-wider">
                  The GTC Promise
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  71+ years of proven dependability, authorized original products, and client
                  relationships that endure across decades.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
