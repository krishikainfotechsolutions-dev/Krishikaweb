import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

export const WhatsAppFloat = () => (
  <button
    aria-label="Chat on WhatsApp"
    onClick={() => openWhatsApp(`Hi ${SITE.short}, I'd like to discuss a website project.`)}
    className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-[0_10px_30px_-6px_hsl(51_100%_50%/0.6)] animate-glow-pulse hover:scale-110 transition-transform"
  >
    <MessageCircle size={24} fill="currentColor" />
  </button>
);