/**
 * Client-facing site config.
 * Swap these values per client to reuse the same template.
 */
export const siteConfig = {
  name: "KK Barbershop",
  wordmark: "Barbershop",
  tagline: {
    it: "Stile. Precisione. Tradizione.",
    en: "Style. Precision. Tradition.",
  },
  phone: "+39 333 123 4567",
  phoneHref: "tel:+393331234567",
  whatsapp: "393331234567",
  email: "info@barbershop.demo",
  address: {
    it: "Via Roma 12, 20121 Milano",
    en: "Via Roma 12, 20121 Milan",
  },
  mapsUrl: "https://maps.google.com/?q=Via+Roma+12,+Milano",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  hours: [
    { dayKey: "monFri", open: "09:00", close: "20:00" },
    { dayKey: "sat", open: "09:00", close: "18:00" },
    { dayKey: "sun", open: null, close: null },
  ],
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
