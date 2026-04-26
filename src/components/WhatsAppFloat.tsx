import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

export const WhatsAppFloat = () => (
  <button
    aria-label="Chat on WhatsApp"
    onClick={() => openWhatsApp(`Hi ${SITE.short}, I'd like to discuss a website project.`)}
    className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full text-white grid place-items-center shadow-[0_12px_30px_-6px_hsl(142_70%_45%/0.55)] animate-glow-pulse hover:scale-110 transition-transform"
    style={{ backgroundColor: "hsl(142 70% 45%)" }}
  >
    <MessageCircle size={24} fill="currentColor" />
  </button>
);