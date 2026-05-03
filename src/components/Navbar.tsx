import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

const links = [
  { href: "#services", label: "Services", n: "01" },
  { href: "#portfolio", label: "Portfolio", n: "02" },
  { href: "#pricing", label: "Pricing", n: "03" },
  { href: "#contact", label: "Contact", n: "04" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-[1.5px] border-foreground">
      <nav className="grid grid-cols-2 md:grid-cols-6">
        <a href="#top" className="p-5 md:p-6 border-r-[1.5px] border-foreground flex items-center">
          <img
            src="/logo.png"
            alt={SITE.short}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden md:flex p-6 border-r-[1.5px] border-foreground items-center justify-between hover:bg-secondary transition-colors"
          >
            <span className="text-xs uppercase font-bold tracking-widest">{l.label}</span>
            <span className="text-xs text-primary font-bold">[{l.n}]</span>
          </a>
        ))}
        <button
          onClick={() => openWhatsApp(`Hi ${SITE.short}, I want to start a project.`)}
          className="hidden md:flex p-6 items-center justify-between bg-foreground text-background hover:bg-primary transition-colors group"
        >
          <span className="text-xs uppercase font-bold tracking-widest">Build My Project</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-5 flex items-center justify-end"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t-[1.5px] border-foreground bg-background"
          >
            <ul>
              {links.map((l) => (
                <li key={l.href} className="border-b-[1.5px] border-foreground">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between p-5"
                  >
                    <span className="text-sm uppercase font-bold tracking-widest">{l.label}</span>
                    <span className="text-xs text-primary font-bold">[{l.n}]</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setOpen(false);
                    openWhatsApp(`Hi ${SITE.short}, I want to start a project.`);
                  }}
                  className="w-full flex items-center justify-between p-5 bg-foreground text-background"
                >
                  <span className="text-sm uppercase font-bold tracking-widest">Build My Project</span>
                  <ArrowRight size={16} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
