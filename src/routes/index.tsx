import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Partners } from "@/components/site/Partners";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Industries } from "@/components/site/Industries";
import { WhyUs } from "@/components/site/WhyUs";
import { LegacyBanner } from "@/components/site/LegacyBanner";
import { Contact } from "@/components/site/Contact";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { FloatingContact } from "@/components/site/FloatingContact";
import { siteConfig } from "@/lib/site-config";

const title =
  "Ganesh Trading Company | Industrial Safety, Welding & Engineering Solutions";
const description =
  "Ganesh Trading Company is a trusted industrial distributor and stockist with 71+ years of experience, offering safety equipment, fire equipment, welding solutions, engineering machinery, power tools and industrial products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: siteConfig.name,
          description,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: { "@type": "PostalAddress", streetAddress: siteConfig.address },
          openingHours: siteConfig.hours,
          slogan: siteConfig.tagline,
          foundingDate: "1955",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <About />
        <Products />
        <Industries />
        <WhyUs />
        <LegacyBanner />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
