import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { openWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(800),
});

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `New enquiry from ${SITE.short} site:\n\nName: ${r.data.name}\nPhone: ${r.data.phone}\n\n${r.data.message}`;
    openWhatsApp(text);
    toast({ title: "Opening WhatsApp", description: "Send the message to reach us instantly." });
  };

  const inputCls =
    "w-full px-4 py-3.5 bg-background border-[1.5px] border-foreground text-foreground focus:outline-none focus:bg-secondary transition";

  return (
    <section id="contact" className="border-b-[1.5px] border-foreground">
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <SectionHeading
          number="07"
          eyebrow="Contact"
          title="Let's build something bold"
          subtitle="Tell us about your project. We reply in minutes on WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 border-[1.5px] border-foreground">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-foreground bg-foreground text-background"
          >
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "Fastest way", href: `https://wa.me/${SITE.whatsapp}` },
              { icon: Phone, label: "Call", value: `+91 ${SITE.whatsapp.slice(2)}` },
              { icon: Mail, label: "Email", value: SITE.email },
              { icon: MapPin, label: "Studio", value: SITE.city },
            ].map((c, i, arr) => (
              <a
                key={c.label}
                href={c.href || "#"}
                target={c.href ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-5 p-6 ${
                  i < arr.length - 1 ? "border-b-[1.5px] border-background/20" : ""
                } hover:bg-primary transition-colors group`}
              >
                <div className="size-12 border-[1.5px] border-background grid place-items-center shrink-0">
                  <c.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                    {c.label}
                  </div>
                  <div className="font-bold mt-0.5">{c.value}</div>
                </div>
                <ArrowRight
                  size={16}
                  className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 p-6 md:p-10 space-y-5 bg-background"
          >
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                Your name
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className={`mt-2 ${inputCls}`}
                placeholder="Krish Agarwal"
              />
              {errors.name && <p className="text-xs text-destructive mt-1.5 font-bold uppercase tracking-wider">{errors.name}</p>}
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                Phone
              </label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className={`mt-2 ${inputCls}`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-xs text-destructive mt-1.5 font-bold uppercase tracking-wider">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                Project details
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={800}
                rows={4}
                className={`mt-2 ${inputCls} resize-none`}
                placeholder="I need an e-commerce site for my clothing brand..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1.5 font-bold uppercase tracking-wider">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-between gap-3 px-5 py-4 bg-foreground text-background font-bold uppercase tracking-wider text-sm hover:bg-primary transition-colors"
            >
              Send via WhatsApp
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
