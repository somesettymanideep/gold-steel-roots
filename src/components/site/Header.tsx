import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/ganesh-logo.jpg.asset.json";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background transition-all duration-300",
        scrolled ? "shadow-[0_6px_24px_oklch(0_0_0/0.10)]" : "shadow-[0_1px_0_var(--border)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={cn(
            "flex shrink-0 items-center transition-all duration-300",
            scrolled ? "py-2" : "py-3",
          )}
          aria-label={`${siteConfig.name} home`}
        >
          <img
            src={logo.url}
            alt="Ganesh Trading Company logo"
            width={200}
            height={200}
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-13 sm:h-14" : "h-16 sm:h-20",
            )}
          />
        </a>

        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-gold-dark xl:flex"
          >
            <Phone className="size-4 text-gold-dark" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a href="#contact" className="btn-base btn-gold hidden !px-5 !py-3 sm:inline-flex">
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3 text-base font-semibold text-foreground/85 transition-colors last:border-0 hover:text-gold-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-gold mt-4 mb-2"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
