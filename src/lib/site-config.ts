export const siteConfig = {
  name: "Ganesh Trading Company",
  tagline: "Your Trusted Industrial Distributor & Stockist",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  email: "info@ganeshtradingcompany.com",
  address: "Industrial Estate, Main Road, Pune, Maharashtra 411001, India",
  hours: "Mon – Sat: 9:30 AM – 7:00 PM",
  // Replace with the exact business location — used for the embedded map and directions.
  mapQuery: "Industrial Estate, Pune, Maharashtra 411001, India",
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
