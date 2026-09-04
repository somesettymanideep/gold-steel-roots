import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { categories } from "@/components/site/Products";
import { mapDirectionsUrl, navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t-2 border-gold">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logo}
            alt="Ganesh Trading Company logo"
            width={320}
            height={51}
            loading="lazy"
            className="h-13 sm:h-15 w-auto rounded-md bg-white px-3 py-1.5 object-contain shadow-sm max-w-[270px]"
          />
          <p className="mt-5 text-sm leading-relaxed">
            Trusted distributor and stockist with 71+ years of industrial experience.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-[#FF0000] hover:text-white"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-[#1877F2] hover:text-white"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-gold uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-gold uppercase">
            Product Categories
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((cat) => (
              <li key={cat.name}>
                <a href="#products" className="transition-colors hover:text-gold">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-gold uppercase">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-gold">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                {siteConfig.address}
              </a>
            </li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
          <p className="text-white/50">
            Designed &amp; Developed by <span className="text-gold font-semibold">Ayrondigitalsolutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
