import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import SolarCalculator from "@/components/sections/Calculator";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Solar Cost Estimator - Estimate System Size & Savings",
  description:
    "Use MaxGreen Energy's cost estimator to calculate your ideal solar system size, annual savings, and payback. Get a tailored quote based on your electricity usage.",
};

export default function CostEstimatorPage() {
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
                "@id": "https://maxgreenenergy.com.pk/cost-estimator/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/cost-estimator/", name: "Cost Estimator" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Cost Estimator"
        title="Solar Cost Estimator"
        subtitle="Enter your monthly electricity consumption and instantly get your recommended system size, projected savings, and payback period."
      />
      <SolarCalculator />
      <ContactForm />
      <Footer />
    </main>
  );
}
