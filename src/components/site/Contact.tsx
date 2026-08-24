import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/components/site/Industries";
import { categories } from "@/components/site/Products";
import { mapDirectionsUrl, mapEmbedUrl, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const details = [
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Address", value: siteConfig.address, href: mapDirectionsUrl },
    { icon: Clock, label: "Business Hours", value: siteConfig.hours },
  ];

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(get("phone"))) next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Enter a valid email address.";
    if (get("message").length < 10) next.message = "Please describe your requirement (10+ characters).";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="left">
          <p className="eyebrow">Contact Us</p>
          <h2 className="heading-lg mt-4 text-ink">Let's Discuss Your Industrial Requirements</h2>
          <span className="gold-rule mt-5 block" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you need safety equipment, welding solutions, engineering machinery, power tools
            or industrial supplies, our team is ready to help.
          </p>

          <ul className="mt-9 space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-ink text-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-base font-semibold text-ink transition-colors hover:text-gold-dark"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-semibold text-ink">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <a href="#contact-form" className="btn-base btn-ink mt-9">
            Request a Quote
          </a>
        </Reveal>

        <Reveal direction="right" className="card-industrial p-6 sm:p-8">
          <span id="contact-form" className="block scroll-mt-28" />
          <h3 className="font-display text-xl font-bold text-ink">Send Us Your Enquiry</h3>
          <p className="mt-2 text-sm text-muted-foreground">We will get back to you shortly.</p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-semibold text-ink">
                Full Name
              </label>
              <input id="name" name="name" className={cn(fieldClass, "mt-2")} placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-semibold text-ink">
                Company Name
              </label>
              <input id="company" name="company" className={cn(fieldClass, "mt-2")} placeholder="Company" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-ink">
                Phone Number
              </label>
              <input id="phone" name="phone" type="tel" className={cn(fieldClass, "mt-2")} placeholder="+91 ..." />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-ink">
                Email Address
              </label>
              <input id="email" name="email" type="email" className={cn(fieldClass, "mt-2")} placeholder="you@company.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="industry" className="text-sm font-semibold text-ink">
                Industry
              </label>
              <select id="industry" name="industry" className={cn(fieldClass, "mt-2")} defaultValue="">
                <option value="">Select industry</option>
                {industries.map((industry) => (
                  <option key={industry.name} value={industry.name}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="requirement" className="text-sm font-semibold text-ink">
                Product / Requirement
              </label>
              <select id="requirement" name="requirement" className={cn(fieldClass, "mt-2")} defaultValue="">
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={cn(fieldClass, "mt-2 resize-y")}
                placeholder="Tell us about your requirement, quantities and timelines."
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-base btn-gold w-full sm:w-auto">
                Send Enquiry
              </button>
              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "mt-4 text-sm font-semibold",
                  sent ? "text-gold-dark" : "text-transparent",
                )}
              >
                {sent
                  ? "Thank you — your enquiry has been recorded. We will get back to you shortly."
                  : "placeholder"}
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <Reveal delay={100} className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-md border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Ganesh Trading Company location map"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border-0 sm:h-[460px]"
          />
          <div className="pointer-events-auto absolute bottom-4 left-4 max-w-xs rounded-md bg-background/95 p-5 shadow-[var(--shadow-card-hover)] backdrop-blur">
            <p className="font-display text-base font-bold text-ink">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.tagline}</p>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-gold-dark hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
