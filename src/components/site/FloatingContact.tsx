import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.031 2c-5.516 0-9.99 4.474-9.99 9.99 0 1.763.459 3.42 1.258 4.87L2 22l5.282-1.385c1.402.766 2.999 1.205 4.698 1.205 5.515 0 9.99-4.474 9.99-9.99C21.97 6.474 17.546 2 12.03 2zm4.743 14.162c-.226.636-1.305 1.214-1.802 1.282-.475.066-.975.097-2.65-.583-2.143-.872-3.506-3.056-3.615-3.2-1.077-1.439-1.806-3.118-1.806-4.882 0-1.782.932-2.73 1.266-3.082.3-.318.825-.436 1.246-.436.136 0 .256.006.357.012.3.013.447.03.64.442.247.533.844 2.062.918 2.213.072.152.122.33.022.529-.1.2-.15.318-.3.491-.15.172-.315.385-.45.517-.15.145-.307.304-.132.6.176.297.785 1.293 1.685 2.093.748.665 1.38 1.045 1.678 1.173.3.129.475.109.65-.091.176-.2.756-.879.957-1.18.2-.3.4-.251.675-.152.274.1.1.2.918.423s1.58.743 1.854.879c.274.135.457.2.523.315.066.115.066.666-.16 1.302z" />
  </svg>
);

export function FloatingContact() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={cn(
          "grid size-13 place-items-center rounded-full bg-ink text-gold shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:bg-gold hover:text-ink",
          showScroll
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-75 pointer-events-none"
        )}
      >
        <ArrowUp className="size-6" aria-hidden="true" />
      </button>

      {/* WhatsApp Button (Green Theme) */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-card-hover)] transition-transform hover:-translate-y-1 hover:bg-[#20ba5a]"
      >
        <WhatsAppIcon className="size-7" aria-hidden="true" />
      </a>

      {/* Phone Button */}
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
