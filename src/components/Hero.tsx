import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

export const Hero = () => (
  <section id="top" className="grid grid-cols-1 md:grid-cols-4 border-b-[1.5px] border-foreground">
    <div className="md:col-span-3 p-6 md:p-12 lg:p-20 md:border-r-[1.5px] border-foreground bg-grid relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl"
      >
        <span className="inline-block px-2 py-1 border-[1.5px] border-primary text-primary text-[10px] font-bold uppercase mb-8 tracking-wider">
          Web Design & Development / Kanpur_UP
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] leading-[0.9] font-bold uppercase tracking-tighter">
          We build
          <br />
          websites
          <br />
          that grow <span className="text-primary">business</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 md:mt-20">
          <p className="text-base md:text-lg leading-relaxed font-medium text-foreground/80 max-w-md">
            A focused Kanpur studio building bold, conversion-led business, e-commerce and portfolio websites — without the agency markup.
          </p>
          <div className="flex flex-col justify-end gap-5">
            <div className="flex items-center gap-4 border-t-[1.5px] border-foreground pt-4">
              <span className="size-3 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] uppercase font-bold leading-tight tracking-wider">
                Newly launched studio
                <br />
                Now booking founding clients
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openWhatsApp(`Hi ${SITE.short}, I want a quote for a website.`)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-foreground text-background text-sm font-bold uppercase tracking-wider hover:bg-primary transition-colors"
              >
                Start on WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 px-6 py-3.5 border-[1.5px] border-foreground text-sm font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="grid grid-rows-3 border-t-[1.5px] md:border-t-0 border-foreground">
      <div className="p-6 border-b-[1.5px] border-foreground flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Location</span>
        <div className="text-sm font-medium mt-3">
          26.4499° N, 80.3319° E
          <br />
          {SITE.city}
        </div>
      </div>
      <div className="p-6 border-b-[1.5px] border-foreground flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Stack</span>
        <div className="text-sm font-medium mt-3">
          React · Next.js
          <br />
          E-commerce · CMS
          <br />
          SEO · Analytics
        </div>
      </div>
      <div className="p-6 bg-primary/5 flex flex-col justify-center items-center">
        <div className="size-16 border-[1.5px] border-primary rounded-full flex items-center justify-center animate-pulse">
          <div className="size-2 bg-primary rounded-full" />
        </div>
        <span className="mt-4 text-[10px] uppercase font-bold text-primary tracking-wider">
          Studio: Online
        </span>
      </div>
    </div>
  </section>
);
