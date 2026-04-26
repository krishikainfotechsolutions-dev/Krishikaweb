import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`max-w-2xl mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg text-balance">{subtitle}</p>
    )}
  </motion.div>
);