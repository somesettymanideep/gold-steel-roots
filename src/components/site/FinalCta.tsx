import ctaIndustrial from "@/assets/cta-industrial.jpg";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-28">
      <img
        src={ctaIndustrial}
        alt="Industrial machinery and safety equipment in a supplier warehouse"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.09_0_0/0.84)]" />

      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="heading-lg text-white">Looking for Reliable Industrial Products?</h2>
        <span className="gold-rule mx-auto mt-5 block" />
        <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
          Talk to Ganesh Trading Company for quality products, trusted brands and dependable
          industrial solutions.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-base btn-gold">
            Get a Quote
          </a>
          <a href="#contact" className="btn-base btn-ghost-light">
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
