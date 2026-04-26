import { motion } from "framer-motion";
import { Zap, Search, HeadphonesIcon, IndianRupee, Code2, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized builds that load in under 2 seconds." },
  { icon: Search, title: "SEO Built-in", desc: "Schema, meta, sitemap — Google-ready from day one." },
  { icon: HeadphonesIcon, title: "Real Support", desc: "Direct WhatsApp line. No tickets, no waiting." },
  { icon: IndianRupee, title: "Honest Pricing", desc: "Transparent starting prices. No hidden fees." },
  { icon: Code2, title: "Modern Stack", desc: "React, Next.js, Tailwind — production-grade code." },
  { icon: MapPin, title: "Local & Personal", desc: "Based in Kanpur. Meet us. Talk to the founders." },
];

export const WhyChooseUs = () => (
  <section className="relative py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading eyebrow="Why us" title="Built different. On purpose." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
          >
            <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center">
              <it.icon className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);