import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, User, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    n: "01",
    icon: Briefcase,
    title: "Business Websites",
    desc: "Authority sites that convert visitors into qualified leads. Fast, SEO-ready and easy to update.",
    points: ["Lead capture", "SEO setup", "CMS optional"],
  },
  {
    n: "02",
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Online stores tuned for conversions. Razorpay/UPI, inventory management and WhatsApp orders.",
    points: ["Razorpay / UPI", "Inventory", "WhatsApp orders"],
  },
  {
    n: "03",
    icon: User,
    title: "Portfolios",
    desc: "Premium personal sites that make recruiters and clients say yes. Custom design, animations, domain.",
    points: ["Custom design", "Animations", "Domain setup"],
  },
];

export const Services = () => (
  <section id="services" className="border-b-[1.5px] border-foreground bg-background">
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionHeading
        number="01"
        eyebrow="Services"
        title="What we build"
        subtitle="Three focused offerings — done with depth, not breadth."
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
