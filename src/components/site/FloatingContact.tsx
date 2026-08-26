import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.004 0h-.008C7.174 0 .001 7.176.001 16c0 3.5 1.128 6.744 3.046 9.377L1.05 31.35l6.176-1.974A15.92 15.92 0 0 0 16.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.926.32-5.596-1.202-4.695-1.944-7.72-6.714-7.955-7.026-.236-.312-1.902-2.532-1.902-4.83s1.168-3.426 1.638-3.906c.386-.394 1.024-.574 1.636-.574.198 0 .374.01.532.018.47.02.706.048.916.55.262.63 1.148 2.798 1.254 3.022.11.224.22.528.068.822-.142.304-.268.44-.492.698-.224.258-.436.456-.66.732-.204.24-.434.498-.176.944.258.436 1.146 1.888 2.454 3.052 1.688 1.502 3.056 1.982 3.548 2.186.366.152.802.116.068.822 1.07-.294 1.324-.664 1.582-1.028.256-.37.554-.334.94-.19.394.136 2.552 1.202 2.982 1.416.43.214.714.318.822.5.106.182.106 1.04-.28 2.13z" />
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
