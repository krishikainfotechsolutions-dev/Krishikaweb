import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 md:pt-32 pb-16 overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-70" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center w-full">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur text-xs text-muted-foreground mb-6 shadow-soft"
        >
          <Sparkles size={13} className="text-primary" />
          Web studio · {SITE.city}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance text-foreground"
        >
          We build websites that{" "}
          <span className="relative inline-block">
            <span className="text-primary">grow your business</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9 Q 75 2, 150 6 T 298 4"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
        >
          Bold, modern, premium websites engineered to convert. Static from{" "}
          <span className="text-foreground font-semibold">₹6,500</span> · Dynamic from{" "}
          <span className="text-foreground font-semibold">₹9,000</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() =>
              openWhatsApp(`Hi ${SITE.short}, I want to discuss a website project.`)
            }
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.03] transition-transform shadow-primary"
          >
            Start on WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/60 hover:text-primary transition shadow-soft"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span><span className="text-foreground font-semibold">4.9/5</span> client rating</span>
          </div>
          <div><span className="text-foreground font-semibold">50+</span> Projects shipped</div>
          <div><span className="text-foreground font-semibold">7 days</span> Avg delivery</div>
        </motion.div>
      </div>
    </section>
  );
};
