import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote: "Krishika delivered our store in a week. Sales started in the first month. Genuinely premium work at a fair price.",
    name: "Rohan Mehta",
    role: "Founder, Threadsy",
  },
  {
    quote: "The design is bold and feels expensive. Our enquiries doubled after the redesign.",
    name: "Priya Sharma",
    role: "Owner, Lumen Cafe",
  },
  {
    quote: "Krish and Vaishanavi were responsive on WhatsApp and shipped fast. Highly recommended.",
    name: "Aarav Singh",
    role: "Photographer",
  },
  {
    quote: "Clean code, fast loading, looks great on mobile. Exactly what we wanted.",
    name: "Neha Verma",
    role: "Bharat Realty",
  },
];

export const Testimonials = () => {
  const [ref, embla] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [embla]);

  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="Clients" title="What people say" />

        <div className="overflow-hidden" ref={ref}>
          <div className="flex gap-5">
            {items.map((t, i) => (
              <div
                key={i}
                className="min-w-[85%] sm:min-w-[55%] lg:min-w-[33%] p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex gap-0.5 text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};