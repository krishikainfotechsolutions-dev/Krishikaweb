import { motion } from "framer-motion";

interface Props {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ number, eyebrow, title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end"
  >
    <div className="md:col-span-5 flex items-baseline gap-4">
      <span className="font-bold text-primary text-sm">[{number}]</span>
      <span className="text-xs uppercase font-bold tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </span>
    </div>
    <div className="md:col-span-7">
      <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground max-w-xl">{subtitle}</p>
      )}
    </div>
  </motion.div>
);
