import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, User } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Professional sites that establish authority and turn visitors into qualified leads.",
    points: ["Lead capture", "SEO-ready", "CMS optional"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    desc: "Sell online with fast, mobile-first stores tuned for conversions and easy management.",
    points: ["Razorpay / UPI", "Inventory", "WhatsApp orders"],
  },
  {
    icon: User,
    title: "Portfolio Websites",
    desc: "Premium personal & creative portfolios that make recruiters and clients say yes.",
    points: ["Custom design", "Animations", "Domain setup"],
  },
];

export const Services = () => (
  <section id="services" className="relative py-20 md:py-32 bg-card/30 border-y border-border">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        eyebrow="Services"
        title="What we build"
        subtitle="Three focused offerings — done with depth, not breadth."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-7 rounded-2xl bg-background border border-border hover:border-primary/60 transition-all duration-300 hover:-translate-y-1"
            style={{ transition: "transform .3s, border-color .3s, box-shadow .3s" }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ boxShadow: "0 0 0 1px hsl(var(--primary) / 0.4), 0 0 40px -8px hsl(var(--primary) / 0.4)" }} />
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center mb-5 group-hover:rotate-6 transition-transform">
              <s.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-5 space-y-1.5">
              {s.points.map((p) => (
                <li key={p} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);