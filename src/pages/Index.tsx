import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Portfolio } from "@/components/Portfolio";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
