import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";
import Journey from "@/components/sections/Journey";
import ClientLogos from "@/components/sections/ClientLogos";
import Testimonials from "@/components/sections/Testimonials";
import Calculator from "@/components/sections/Calculator";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Solutions />
      <Process />
      <Journey />
      <ClientLogos />
      <Testimonials />
      <Calculator />
      <WhyUs />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
