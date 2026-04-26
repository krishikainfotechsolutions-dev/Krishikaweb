import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { SITE } from "@/lib/site";

export const About = () => (
  <section id="about" className="relative py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        eyebrow="About"
        title="Two founders. One obsession: results."
        subtitle="A small Kanpur-based studio that ships sharp, conversion-focused websites — without the agency markup."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {SITE.founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ boxShadow: "var(--shadow-soft-glow)" }} />
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center mb-5">
              <span className="font-display font-bold text-primary text-lg">{f.initials}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">{f.name}</h3>
            <p className="text-sm text-primary mt-1">{f.role}</p>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{f.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);