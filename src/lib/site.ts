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
      bio: "Co-founder and developer at Krishika. Builds fast, modern websites with React and Tailwind — focused on clean code and work that converts.",
      photo: krishImg,
      skills: ["React", "Tailwind", "SEO"],
      since: "2025",
    },
    {
      name: "Vaishanavi",
      role: "Co-Founder · Designer",
      tag: "Design",
      bio: "Co-founder and designer at Krishika. Shapes brand identities and clean interfaces made to convert visitors into customers.",
      photo: vaishanaviImg,
      skills: ["UI/UX", "Branding", "Figma"],
      since: "2025",
    },
  ],
};

export type Founder = (typeof SITE.founders)[number];
