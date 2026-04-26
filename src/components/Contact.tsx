import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { MessageCircle, Mail, MapPin, Phone, Send } from "lucide-react";
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

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something bold"
          subtitle="Tell us about your project. We reply in minutes on WhatsApp."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/60 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Fastest way to reach us</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-semibold">Call</div>
                <div className="text-sm text-muted-foreground">+91 {SITE.whatsapp.slice(2)}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                <Mail size={18} />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">{SITE.email}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-semibold">Based in</div>
                <div className="text-sm text-muted-foreground">{SITE.city}</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-background border border-border space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Your name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="mt-1.5 w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary outline-none transition text-foreground"
                placeholder="Krish Agarwal"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="mt-1.5 w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary outline-none transition text-foreground"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Project details</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={800}
                rows={4}
                className="mt-1.5 w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary outline-none transition text-foreground resize-none"
                placeholder="I need an e-commerce site for my clothing brand..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[0_0_30px_-8px_hsl(51_100%_50%/0.6)]"
            >
              Send via WhatsApp <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};