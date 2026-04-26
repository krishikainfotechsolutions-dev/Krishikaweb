import { motion } from "framer-motion";
import { Zap, Search, Headphones, IndianRupee, Code2, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { n: "01", icon: Zap, title: "Lightning Fast", desc: "Optimized builds that load in under 2 seconds." },
  { n: "02", icon: Search, title: "SEO Built-in", desc: "Schema, meta, sitemap — Google-ready from day one." },
  { n: "03", icon: Headphones, title: "Real Support", desc: "Direct WhatsApp line. No tickets, no waiting." },
  { n: "04", icon: IndianRupee, title: "Honest Pricing", desc: "Transparent starting prices. No hidden fees." },
  { n: "05", icon: Code2, title: "Modern Stack", desc: "React, Next.js, Tailwind — production-grade code." },
  { n: "06", icon: MapPin, title: "Local & Personal", desc: "Based in Kanpur. Meet us. Talk to the founders." },
];

export const WhyChooseUs = () => (
  <section className="border-b-[1.5px] border-foreground bg-secondary">
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionHeading number="04" eyebrow="Why us" title="Built different. On purpose." />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-[1.5px] border-foreground">
      {items.map((it, i) => {
        const isLastCol = (i + 1) % 3 === 0;
        const isLastSmCol = (i + 1) % 2 === 0;
        const rowNotLast = i < items.length - 3;
        return (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`p-8 ${!isLastCol ? "lg:border-r-[1.5px]" : ""} ${
              !isLastSmCol ? "sm:border-r-[1.5px] lg:border-r-[1.5px]" : "sm:border-r-0 lg:border-r-[1.5px]"
            } ${rowNotLast ? "border-b-[1.5px]" : "border-b-[1.5px] lg:border-b-0"} border-foreground bg-background hover:bg-foreground hover:text-background transition-colors group`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 border-[1.5px] border-current grid place-items-center">
                <it.icon size={20} />
              </div>
              <span className="text-xs font-bold text-primary">[{it.n}]</span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tighter">{it.title}</h3>
            <p className="mt-2 text-sm opacity-70 leading-relaxed">{it.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);
