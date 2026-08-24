import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid size-13 place-items-center rounded-full bg-ink text-gold shadow-[var(--shadow-card-hover)] transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.phone}`}
        className="grid size-13 place-items-center rounded-full bg-gold text-ink shadow-[var(--shadow-card-hover)] transition-transform hover:-translate-y-1"
      >
        <Phone className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
