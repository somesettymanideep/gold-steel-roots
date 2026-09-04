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
  socials: {
    youtube: "https://youtube.com/shorts/yZyC0IWsVs8?",
    instagram: "https://www.instagram.com/p/Dc0SlV6DszF/",
    facebook: "https://www.facebook.com/share/r/19FdwgP6U4/",
  },
};

export const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977326.629051073!2d78.91948084343262!3d16.891611061099066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fac71a3738e7%3A0xbd9a91d1186adcf7!2sGanesh%20Trading%20Co!5e0!3m2!1sen!2sin!4v1787650586345!5m2!1sen!2sin";

export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  siteConfig.mapQuery,
)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries We Serve", href: "#industries" },
  { label: "Our Partners", href: "#partners" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];
