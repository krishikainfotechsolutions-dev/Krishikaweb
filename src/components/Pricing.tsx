import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { openWhatsApp } from "@/lib/whatsapp";

const plans = [
  {
    name: "Static Website",
    price: "₹6,500",
    note: "starting",
    desc: "Perfect for portfolios, landing pages and small businesses.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form (WhatsApp)",
      "Basic SEO setup",
      "1 round of revisions",
      "Delivered in 5–7 days",
    ],
    highlight: false,
  },
  {
    name: "Dynamic Website",
    price: "₹9,000",
    note: "starting",
    desc: "CMS-powered or e-commerce ready — built to grow with you.",
    features: [
      "Unlimited pages",
      "Admin / CMS panel",
      "Database integration",
      "Payment gateway ready",
      "Advanced SEO + analytics",
      "2 rounds of revisions",
      "Delivered in 10–14 days",
    ],
    highlight: true,
  },
];

export const Pricing = () => (
  <section id="pricing" className="relative py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        eyebrow="Pricing"
        title="Honest pricing. Premium output."
        subtitle="Transparent starting prices. Final quote depends on scope — message us for an exact number in minutes."
      />

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative p-7 md:p-8 rounded-2xl bg-card border ${
              p.highlight ? "border-primary glow-border" : "border-border"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-bold text-foreground">{p.price}</span>
              <span className="text-xs text-muted-foreground">{p.note}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                openWhatsApp(`Hi! I'm interested in the "${p.name}" plan (${p.price}+). Can you share a custom quote?`)
              }
              className={`mt-7 w-full py-3 rounded-full font-semibold transition ${
                p.highlight
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-secondary text-foreground border border-border hover:border-primary/60 hover:text-primary"
              }`}
            >
              Get this plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);