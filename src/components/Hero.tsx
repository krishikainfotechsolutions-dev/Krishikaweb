import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

const HeroScene = lazy(() => import("./HeroScene"));

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-24 md:pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 text-xs text-muted-foreground mb-6">
            <Sparkles size={14} className="text-primary" />
            Web studio · {SITE.city}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
            We build websites that{" "}
            <span className="text-primary">grow your business</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl text-balance">
            Bold, modern, premium websites engineered to convert. Static from{" "}
            <span className="text-foreground font-semibold">₹6,500</span> · Dynamic from{" "}
            <span className="text-foreground font-semibold">₹9,000</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() =>
                openWhatsApp(`Hi ${SITE.short}, I want to discuss a website project.`)
              }
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform shadow-[0_0_40px_-8px_hsl(51_100%_50%/0.6)]"
            >
              Start on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary/60 hover:text-primary transition"
            >
              View Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold">50+</span> Projects</div>
            <div><span className="text-foreground font-semibold">7 days</span> Avg delivery</div>
            <div><span className="text-foreground font-semibold">100%</span> Mobile-ready</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 h-[320px] sm:h-[400px] lg:h-[500px] relative"
        >
          <Suspense fallback={<div className="w-full h-full" />}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};