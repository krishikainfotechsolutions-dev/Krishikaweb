import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { n: "01", title: "Lumen Cafe", tag: "Business", color: "from-amber-400 to-orange-500" },
  { n: "02", title: "Aarav Studio", tag: "Portfolio", color: "from-indigo-500 to-fuchsia-500" },
  { n: "03", title: "KanpurKart", tag: "E-commerce", color: "from-emerald-500 to-teal-600" },
  { n: "04", title: "Nidhi Photo", tag: "Portfolio", color: "from-sky-500 to-violet-600" },
  { n: "05", title: "Bharat Realty", tag: "Business", color: "from-orange-500 to-rose-600" },
  { n: "06", title: "Threadsy", tag: "E-commerce", color: "from-pink-500 to-purple-600" },
];

export const Portfolio = () => (
  <section id="portfolio" className="border-b-[1.5px] border-foreground">
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <SectionHeading
        number="02"
        eyebrow="What We Build"
        title="The kind of sites we ship"
        subtitle="We just launched — these are the categories we specialise in. Be one of our first founding clients and your project lives here."
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-[1.5px] border-foreground">
      {projects.map((p, i) => {
        const colEnd = (i + 1) % 3 !== 0;
        const rowNotLast = i < projects.length - 3;
        return (
          <motion.a
            href="#"
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group relative aspect-[4/3] overflow-hidden ${
              colEnd ? "lg:border-r-[1.5px]" : ""
            } ${(i + 1) % 2 !== 0 ? "sm:border-r-[1.5px] lg:border-r-[1.5px]" : "sm:border-r-0"} ${
              rowNotLast ? "border-b-[1.5px]" : ""
            } border-foreground bg-secondary`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-90 group-hover:scale-110 transition-transform duration-700`} />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />

            <div className="absolute top-5 left-5 px-2 py-1 bg-background border-[1.5px] border-foreground text-[10px] uppercase font-bold tracking-wider">
              [{p.n}] {p.tag}
            </div>
            <div className="absolute top-5 right-5 size-10 bg-background text-foreground border-[1.5px] border-foreground grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45 transition-all">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 bg-background border-t-[1.5px] border-foreground">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tighter leading-none text-foreground">
                {p.title}
              </h3>
            </div>
          </motion.a>
        );
      })}
    </div>
  </section>
);
