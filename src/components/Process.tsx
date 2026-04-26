import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Discovery", desc: "We talk on WhatsApp. Understand goals, audience and scope." },
  { n: "02", title: "Design", desc: "Bold, on-brand mockups crafted for conversion — not just looks." },
  { n: "03", title: "Develop", desc: "Pixel-perfect, fast code with modern stack and clean architecture." },
  { n: "04", title: "Launch", desc: "Domain, hosting, SEO setup — we handle the technical lift." },
  { n: "05", title: "Support", desc: "Post-launch tweaks and growth support whenever you need." },
];

export const Process = () => (
  <section id="process" className="border-b-[1.5px] border-foreground">
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionHeading
        number="05"
        eyebrow="Process"
        title="From idea to live in days"
        subtitle="A focused 5-step process that keeps things sharp and shippable."
      />

      <div className="grid grid-cols-1 md:grid-cols-5 border-[1.5px] border-foreground">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`p-6 ${i < steps.length - 1 ? "border-b-[1.5px] md:border-b-0 md:border-r-[1.5px]" : ""} border-foreground bg-background hover:bg-primary hover:text-primary-foreground transition-colors group`}
          >
            <div className="flex items-baseline justify-between mb-12 md:mb-20">
              <span className="text-2xl font-bold">{s.n}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                Step
              </span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tighter leading-none">
              {s.title}
            </h3>
            <p className="mt-3 text-xs opacity-70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
