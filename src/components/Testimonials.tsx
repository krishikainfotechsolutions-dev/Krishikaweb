import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { Quote } from "lucide-react";
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
    const id = setInterval(() => embla.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [embla]);

  return (
    <section className="border-b-[1.5px] border-foreground bg-secondary">
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <SectionHeading number="06" eyebrow="Clients" title="What people say" />

        <div className="overflow-hidden border-[1.5px] border-foreground bg-background" ref={ref}>
          <div className="flex">
            {items.map((t, i) => (
              <div
                key={i}
                className={`min-w-[85%] sm:min-w-[55%] lg:min-w-[40%] p-8 md:p-10 ${
                  i < items.length - 1 ? "border-r-[1.5px] border-foreground" : ""
                }`}
              >
                <Quote size={28} className="text-primary mb-5" strokeWidth={2.5} />
                <p className="text-base md:text-lg leading-relaxed font-medium">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t-[1.5px] border-foreground/20">
                  <div className="font-bold uppercase tracking-tight">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
