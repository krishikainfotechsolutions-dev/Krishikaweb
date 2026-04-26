import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="grid grid-cols-1 md:grid-cols-4">
    <div className="md:col-span-3 p-6 md:border-r-[1.5px] border-foreground border-b-[1.5px] md:border-b-0">
      <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
          Client Log:
        </span>
        {["TextileHub", "Kanpur Logistics", "Ganga Exports", "Upper Crust", "Threadsy"].map((c) => (
          <span key={c} className="text-sm font-bold opacity-50 uppercase tracking-tight">
            {c}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 flex items-center justify-end">
      <span className="text-[10px] font-bold uppercase tracking-wider">
        © {new Date().getFullYear()} {SITE.name.toUpperCase()}
      </span>
    </div>
  </footer>
);
