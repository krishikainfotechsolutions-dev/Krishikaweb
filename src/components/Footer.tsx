import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 grid place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold text-sm">K</span>
        <span className="font-display font-semibold">{SITE.name}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Crafted in {SITE.city}.
      </p>
    </div>
  </footer>
);