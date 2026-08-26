import logo from "@/assets/ganesh-logo.jpg.asset.json";
import { categories } from "@/components/site/Products";
import { mapDirectionsUrl, navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t-2 border-gold">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logo.url}
            alt="Ganesh Trading Company logo"
            width={200}
            height={200}
            loading="lazy"
            className="h-20 w-auto rounded-sm bg-white p-1"
          />
          <p className="mt-5 text-sm leading-relaxed">
            Trusted distributor and stockist with 71+ years of industrial experience.
          </p>
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
