import { SITE } from "./site";

export function openWhatsApp(message: string) {
  const safe = message.slice(0, 800);
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(safe)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}