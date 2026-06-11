import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact MaxGreen Energy - Solar Experts in Pakistan",
  description:
    "Get in touch with MaxGreen Energy — Pakistan's trusted solar provider with offices in Karachi and Lahore. Connect via phone or email and begin your green energy journey.",
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://maxgreenenergy.com.pk/contact-us/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/contact-us/", name: "Contact Us" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Contact Us"
        title="Get in Touch With Us"
        subtitle="Our solar experts are ready to help. Reach out for a free consultation, site assessment, or any questions about going solar."
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
