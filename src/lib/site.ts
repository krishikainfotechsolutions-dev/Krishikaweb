import krishImg from "@/assets/founder-krish.jpg";
import vaishanaviImg from "@/assets/founder-vaishanavi.jpg";

export const SITE = {
  name: "Krishika Infotech Solutions",
  short: "Krishika",
  city: "Kanpur, India",
  // International format, no '+'. Update to receive WhatsApp leads.
  whatsapp: "917428863727",
  email: "krishikainfotechsolutions@gmail.com",
  founders: [
    {
      name: "Krish Agarwal",
      role: "Co-Founder · Developer",
      tag: "Engineering",
      bio: "Builds fast, scalable web experiences using React, Next.js and modern tooling. Obsessed with clean code, performance and turning business goals into shipped product.",
      photo: krishImg,
      skills: ["React", "Next.js", "Node.js", "Tailwind", "Supabase", "SEO"],
      since: "2023",
    },
    {
      name: "Vaishanavi",
      role: "Co-Founder · Designer",
      tag: "Design",
      bio: "Crafts bold visual identities and intuitive interfaces that turn visitors into customers. Leads brand, UI/UX and the art direction across every project.",
      photo: vaishanaviImg,
      skills: ["UI/UX", "Branding", "Figma", "Webflow", "Motion", "Strategy"],
      since: "2023",
    },
  ],
};

export type Founder = (typeof SITE.founders)[number];
