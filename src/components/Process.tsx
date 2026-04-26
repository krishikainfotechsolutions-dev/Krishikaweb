import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Discovery", desc: "We talk on WhatsApp. Understand goals, audience and scope." },
  { n: "02", title: "Design", desc: "Bold, on-brand mockups crafted for conversion — not just looks." },
  { n: "03", title: "Develop", desc: "Pixel-perfect, fast code with modern stack and clean architecture." },
  { n: "04", title: "Launch", desc: "Domain, hosting, SEO setup — we handle the technical lift." },
  { n: "05", title: "Support", desc: "Post-launch tweaks and growth support whenever you need us." },
];

export const Process = () => (
  <section id="process" className="relative py-20 md:py-32 bg-card/30 border-y border-border">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        eyebrow="Process"
        title="From idea to live in days"
        subtitle="A focused 5-step process that keeps things sharp and shippable."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-primary md:-translate-x-1/2"
        />

        <ul className="space-y-10 md:space-y-14">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex gap-5 md:gap-0 md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="pl-16 md:pl-0 md:w-1/2 md:px-10">
                <span className="font-display text-primary text-sm font-semibold">{s.n}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);