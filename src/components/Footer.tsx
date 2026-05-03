import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer>
    <div className="grid grid-cols-1 md:grid-cols-4 border-t-[1.5px] border-foreground">
      <div className="md:col-span-3 p-6 md:border-r-[1.5px] border-foreground border-b-[1.5px] md:border-b-0">
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          <span className="text-[10px] uppercase font-bold text-primary tracking-wider">
            ● Web Design Company Kanpur
          </span>
          <span className="text-sm font-bold uppercase tracking-tight">
            {SITE.name}
          </span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Kanpur Nagar, UP · Web Design & Development
          </span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground max-w-xl leading-relaxed">
          Krishika Infotech Solutions — Best web design and development company in Kanpur. 
          We build business websites, e-commerce stores and portfolio sites for local businesses across Kanpur Nagar, 
          Uttar Pradesh. Affordable pricing starting ₹6,500. Call: +91-7428863727
        </p>
      </div>
      <div className="p-6 flex items-center justify-end">
        <span className="text-[10px] font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} {SITE.short.toUpperCase()}
        </span>
      </div>
    </div>

    {/* SEO Content Block - Crawlable by Google */}
    <div className="border-t-[1.5px] border-foreground bg-secondary px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-4xl">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Web Design & Development Services in Kanpur
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          <strong>Krishika Infotech Solutions</strong> is the leading <strong>web design company in Kanpur</strong>. 
          We specialize in building professional, mobile-responsive and SEO-friendly websites for all types of 
          businesses in <strong>Kanpur Nagar, Uttar Pradesh</strong>. Whether you need a simple business website, 
          a full <strong>e-commerce store</strong>, or a personal portfolio — we deliver fast, affordable and 
          high-quality websites starting at just ₹6,500.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          We serve clients across Kanpur including Swaroop Nagar, Civil Lines, Kidwai Nagar, Govind Nagar, 
          Kakadeo, Kalyanpur, Armapur, Shyam Nagar and all areas of Kanpur Nagar. Our services include 
          <strong> static website design</strong>, <strong>dynamic website development</strong>, 
          <strong> e-commerce website</strong> with payment gateway, WhatsApp Business integration, 
          Google SEO setup, and complete website maintenance.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "Web Design Kanpur","Website Development Kanpur","E-commerce Website Kanpur",
            "Business Website Kanpur","Affordable Website Kanpur","SEO Kanpur",
            "Web Developer Kanpur","Portfolio Website Kanpur","Restaurant Website Kanpur",
            "Jewellery Shop Website","Best Web Company Kanpur","Website Price Kanpur"
          ].map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-1 border border-foreground/20 text-muted-foreground rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
