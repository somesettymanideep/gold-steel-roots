export const siteConfig = {
  name: "Ganesh Trading Company",
  tagline: "Your Trusted Industrial Distributor & Stockist",
  phone: "+91 95929 19339",
  phoneHref: "tel:+919592919339",
  whatsapp: "919592919339",
  email: "info@ganeshtradingcompany.com",
  address: "No. 12-10-4/1, Door, Convent Rd, 1 Town, Tarapet, Vijayawada, Andhra Pradesh 520001, India",
  hours: "Mon – Sat: 9:30 AM – 7:00 PM",
  // Replace with the exact business location — used for the embedded map and directions.
  mapQuery: "No. 12-10-4/1, Convent Rd, 1 Town, Tarapet, Vijayawada, Andhra Pradesh 520001, India",
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.mapQuery,
)}&output=embed`;

export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  siteConfig.mapQuery,
)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries We Serve", href: "#industries" },
  { label: "Our Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];
