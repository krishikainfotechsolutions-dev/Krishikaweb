import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { openWhatsApp } from "@/lib/whatsapp";

const plans = [
  {
    n: "01",
    name: "Static",
    price: "₹6,500",
    note: "starting",
    desc: "Perfect for portfolios, landing pages and small businesses.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form (WhatsApp)",
      "Basic SEO setup",
      "1 round of revisions",
      "5–7 day delivery",
    ],
    highlight: false,
  },
  {
    n: "02",
    name: "Dynamic",
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
      "10–14 day delivery",
    ],
    highlight: true,
  },
];

export const Pricing = () => (
  <section id="pricing" className="border-b-[1.5px] border-foreground">
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionHeading
        number="03"
        eyebrow="Pricing"
        title="Honest pricing. Premium output."
        subtitle="Transparent starting prices. Final quote depends on scope — message us for an exact number in minutes."
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 border-t-[1.5px] border-foreground">
      {plans.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`relative p-8 md:p-12 ${
            i === 0 ? "md:border-r-[1.5px] border-b-[1.5px] md:border-b-0 border-foreground" : ""
          } ${p.highlight ? "bg-foreground text-background" : "bg-background"}`}
        >
          {p.highlight && (
            <span className="absolute top-0 right-0 px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
              Most Popular
            </span>
          )}
          <div className="flex items-baseline justify-between">
            <span className={`text-xs uppercase font-bold tracking-widest ${p.highlight ? "text-primary" : "text-primary"}`}>
              [{p.n}] {p.name}
            </span>
          </div>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-6xl md:text-7xl font-bold tracking-tighter">{p.price}</span>
            <span className="text-xs opacity-60 uppercase font-bold tracking-wider">{p.note}</span>
          </div>
          <p className="mt-4 text-sm opacity-70 max-w-sm">{p.desc}</p>

          <ul className="mt-8 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className={`mt-0.5 size-5 grid place-items-center border-[1.5px] ${p.highlight ? "border-primary text-primary" : "border-foreground"}`}>
                  <Check size={12} strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              openWhatsApp(`Hi! I'm interested in the "${p.name}" plan (${p.price}+). Share a custom quote?`)
            }
            className={`group mt-10 w-full inline-flex items-center justify-between px-5 py-4 font-bold uppercase tracking-wider text-sm transition-colors ${
              p.highlight
                ? "bg-primary text-primary-foreground hover:bg-background hover:text-foreground"
                : "bg-foreground text-background hover:bg-primary"
            }`}
          >
            Get this plan
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);
