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
      bio: "Founder and lead developer at Krishika. Builds fast, modern websites with React, Next.js and Tailwind — focused on clean code, performance, and shipping work that actually converts.",
      photo: krishImg,
      skills: ["React", "Next.js", "Node.js", "Tailwind", "Supabase", "SEO"],
      since: "2025",
    },
    {
      name: "Vaishanavi",
      role: "Co-Founder · Designer",
      tag: "Design",
      bio: "Co-founder and design lead at Krishika. Crafts bold brand identities and clean interfaces that turn visitors into customers — leads UI/UX and art direction on every project.",
      photo: vaishanaviImg,
      skills: ["UI/UX", "Branding", "Figma", "Webflow", "Motion", "Strategy"],
      since: "2025",
    },
  ],
};

export type Founder = (typeof SITE.founders)[number];
