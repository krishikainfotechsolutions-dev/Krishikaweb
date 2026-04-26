import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SITE, type Founder } from "@/lib/site";
import { openWhatsApp } from "@/lib/whatsapp";

export const About = () => {
  const [active, setActive] = useState<Founder | null>(null);

  return (
    <section id="about" className="border-b-[1.5px] border-foreground">
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <SectionHeading
          number="00"
          eyebrow="The Founders"
          title="Two people. Built in Kanpur."
          subtitle="A small studio with no middlemen. You talk to the people who design and code your site."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t-[1.5px] border-foreground">
        {SITE.founders.map((f, i) => (
          <motion.button
            key={f.name}
            onClick={() => setActive(f)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative text-left ${
              i === 0 ? "md:border-r-[1.5px] border-foreground" : ""
            } overflow-hidden bg-secondary hover:bg-foreground transition-colors`}
          >
            {/* Big photo */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={f.photo}
                alt={`${f.name} — ${f.role}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-5 left-5 flex items-center gap-2 px-2 py-1 bg-background border-[1.5px] border-foreground text-[10px] uppercase font-bold tracking-wider">
                <span className="size-1.5 bg-primary rounded-full" />
                {f.tag}
              </div>
              <div className="absolute top-5 right-5 size-12 bg-primary text-primary-foreground border-[1.5px] border-foreground grid place-items-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-2 bg-background border-t-[1.5px] border-foreground">
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Click to read full bio →
                </span>
              </div>
            </div>

            {/* Caption row */}
            <div className="p-6 md:p-8 group-hover:text-background transition-colors">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                  {f.name}
                </h3>
                <span className="text-xs font-bold text-primary shrink-0">[0{i + 1}]</span>
              </div>
              <p className="mt-3 text-sm uppercase font-bold tracking-widest text-primary">
                {f.role}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <FounderDialog founder={active} onClose={() => setActive(null)} />
    </section>
  );
};

const FounderDialog = ({
  founder,
  onClose,
}: {
  founder: Founder | null;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {founder && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-foreground/70 backdrop-blur-sm grid place-items-center p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-background border-[1.5px] border-foreground shadow-elevated max-h-[90vh] overflow-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 size-10 grid place-items-center bg-foreground text-background hover:bg-primary transition-colors"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto md:min-h-[500px] border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-foreground overflow-hidden bg-secondary">
              <img
                src={founder.photo}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 px-3 py-1.5 bg-background border-[1.5px] border-foreground text-[10px] uppercase font-bold tracking-wider">
                Founder · Since {founder.since}
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                {founder.tag}
              </span>
              <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95]">
                {founder.name}
              </h3>
              <p className="mt-2 text-sm uppercase font-bold tracking-widest text-muted-foreground">
                {founder.role}
              </p>

              <div className="my-7 h-px bg-foreground/20" />

              <p className="text-base leading-relaxed text-foreground/80">{founder.bio}</p>

              <div className="mt-7">
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Skills
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {founder.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 border-[1.5px] border-foreground text-xs font-bold uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  openWhatsApp(
                    `Hi ${founder.name}, I saw your profile on the ${SITE.short} site and wanted to chat about a project.`
                  )
                }
                className="mt-auto pt-7 group inline-flex items-center justify-between gap-3 w-full"
              >
                <span className="flex-1 px-5 py-4 bg-foreground text-background font-bold uppercase tracking-wider text-sm flex items-center gap-3 group-hover:bg-primary transition-colors">
                  <MessageCircle size={16} /> Message {founder.name.split(" ")[0]}
                  <ArrowUpRight size={16} className="ml-auto group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
