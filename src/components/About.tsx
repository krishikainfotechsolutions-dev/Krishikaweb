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
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-soft hover:shadow-elevated"
          >
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={f.photo}
                  alt={`${f.name} — ${f.role}`}
                  loading="lazy"
                  width={120}
                  height={120}
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/60 transition"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{f.name}</h3>
                <p className="text-sm text-primary mt-0.5">{f.role}</p>
              </div>
            </div>
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed">{f.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
