import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, User, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    n: "01",
    icon: Briefcase,
    title: "Business Websites Kanpur",
    desc: "Professional business websites for shops, clinics, agencies and local businesses in Kanpur. Mobile responsive, fast loading and SEO-ready to rank on Google.",
    points: ["Lead capture forms", "SEO optimized", "WhatsApp integration"],
  },
  {
    n: "02",
    icon: ShoppingCart,
    title: "E-commerce Stores",
    desc: "Complete online stores for Kanpur businesses — sell clothes, jewellery, food and more. Razorpay, UPI & COD payment support included.",
    points: ["Razorpay / UPI / COD", "Product management", "WhatsApp orders"],
  },
  {
    n: "03",
    icon: User,
    title: "Portfolio Websites",
    desc: "Stunning personal portfolio websites for freelancers, photographers and professionals in Kanpur. Stand out and win more clients online.",
    points: ["Custom design", "Animations", "Domain & hosting setup"],
  },
];

export const Services = () => (
  <section id="services" className="border-b-[1.5px] border-foreground bg-background">
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionHeading
        number="01"
        eyebrow="Web Design Services Kanpur"
        title="What we build"
        subtitle="Professional websites for every business in Kanpur — done with depth, not breadth."
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 border-t-[1.5px] border-foreground">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`group relative p-8 md:p-10 ${
            i < 2 ? "md:border-r-[1.5px]" : ""
          } ${i < services.length - 1 ? "border-b-[1.5px] md:border-b-0" : ""} border-foreground hover:bg-foreground hover:text-background transition-colors`}
        >
          <div className="flex items-start justify-between mb-10">
            <span className="text-3xl font-bold">{s.n}</span>
            <ArrowUpRight
              size={22}
              className="opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all"
            />
          </div>
          <div className="size-12 border-[1.5px] border-current grid place-items-center mb-6">
            <s.icon size={20} />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none">
            {s.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed opacity-70 max-w-xs">{s.desc}</p>
          <ul className="mt-6 pt-6 border-t-[1.5px] border-current/20 space-y-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider">
                <span className="size-1 bg-primary group-hover:bg-background rounded-full" /> {p}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
