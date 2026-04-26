import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="grid grid-cols-1 md:grid-cols-4 border-t-[1.5px] border-foreground">
    <div className="md:col-span-3 p-6 md:border-r-[1.5px] border-foreground border-b-[1.5px] md:border-b-0">
      <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
        <span className="text-[10px] uppercase font-bold text-primary tracking-wider">
          ● New Studio
        </span>
        <span className="text-sm font-bold uppercase tracking-tight">
          {SITE.name}
        </span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {SITE.city} · Web Design & Development
        </span>
      </div>
    </div>
    <div className="p-6 flex items-center justify-end">
      <span className="text-[10px] font-bold uppercase tracking-wider">
        © {new Date().getFullYear()} {SITE.short.toUpperCase()}
      </span>
    </div>
  </footer>
);
