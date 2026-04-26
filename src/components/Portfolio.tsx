import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { title: "Lumen Cafe", tag: "Business", color: "from-amber-500/40 to-rose-500/30" },
  { title: "Aarav Studio", tag: "Portfolio", color: "from-indigo-500/40 to-fuchsia-500/30" },
  { title: "KanpurKart", tag: "E-commerce", color: "from-emerald-500/40 to-teal-500/30" },
  { title: "Nidhi Photography", tag: "Portfolio", color: "from-sky-500/40 to-violet-500/30" },
  { title: "Bharat Realty", tag: "Business", color: "from-orange-500/40 to-red-500/30" },
  { title: "Threadsy", tag: "E-commerce", color: "from-pink-500/40 to-purple-500/30" },
];

export const Portfolio = () => (
  <section id="portfolio" className="relative py-20 md:py-32 bg-card/30 border-y border-border">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="Recent work"
        subtitle="A glimpse of what we've shipped — fast, sharp, and conversion-ready."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-background cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60 group-hover:scale-110 transition-transform duration-700`} />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[11px] uppercase tracking-widest text-white/90">{p.tag}</span>
              <div className="flex items-end justify-between mt-1">
                <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
                <ArrowUpRight
                  className="text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all"
                  size={22}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);