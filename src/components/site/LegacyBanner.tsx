import bannerLegacy from "@/assets/banner-legacy.jpg";
import { Reveal } from "@/components/Reveal";

export function LegacyBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-32">
      <img
        src={bannerLegacy}
        alt="Industrial warehouse stocked with machinery and safety equipment"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.09_0_0/0.92),oklch(0.09_0_0/0.62))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="left" className="max-w-3xl">
          <p className="eyebrow !text-gold">Our Legacy</p>
          <h2 className="heading-lg mt-4 text-white">71+ Years of Industrial Excellence</h2>
          <span className="gold-rule mt-5 block" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            A legacy built on trust, quality and dependable industrial solutions.
          </p>
          <a href="#contact" className="btn-base btn-gold mt-8">
            Partner With Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
