import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Solar Solutions Company in Lahore | MaxGreen Energy",
  description:
    "MaxGreen Energy is a trusted solar provider in Lahore, delivering tailored solar solutions for homes, businesses, and industries across the city.",
};

const services = [
  "Residential Solar Systems",
  "Commercial Solar Installation",
  "Industrial Solar Solutions",
  "Net Metering Application",
  "Site Assessment &amp; System Design",
  "Solar Monitoring &amp; Maintenance",
  "Battery Storage Solutions",
  "After-Sales Support",
];

const reasons = [
  {
    title: "Lahore LESCO Expertise",
    description: "Our Lahore-based team handles all LESCO net metering approvals, ensuring seamless grid connection and billing adjustments for your solar system.",
  },
  {
    title: "500+ Lahore Installations",
    description: "A growing portfolio of successful solar installations across Lahore — from DHA and Gulberg to Model Town and Johar Town.",
  },
  {
    title: "Dedicated Lahore Team",
    description: "A local installation crew and project manager based in Lahore ensures fast response times and on-site support when you need it.",
  },
  {
    title: "NEPRA &amp; LESCO Compliant",
    description: "We manage all regulatory approvals, LESCO applications, and documentation so you don&apos;t have to deal with any paperwork.",
  },
];

export default function LahorePage() {
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
                "@id": "https://maxgreenenergy.com.pk/solar-solutions-lahore-company/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solar-solutions-lahore-company/", name: "Solar in Lahore" } },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://maxgreenenergy.com.pk/#lahore",
                name: "MaxGreen Energy – Lahore",
                image: "https://maxgreenenergy.com.pk/images/MaxGreen-logo.png",
                url: "https://maxgreenenergy.com.pk/solar-solutions-lahore-company/",
                telephone: "+923000341048",
                email: "sales@maxgreenenergy.com.pk",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Building 101, Fairways, DHA Phase 6",
                  addressLocality: "Lahore",
                  addressCountry: "PK",
                },
                areaServed: "Lahore",
                description: "MaxGreen Energy is a trusted solar provider in Lahore, delivering tailored solar solutions for homes, businesses, and industries.",
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Lahore"
        title="Trusted Solar Solution in Lahore"
        subtitle="MaxGreen Energy is Lahore&apos;s trusted solar provider — delivering customised solar systems for homes, businesses, and industries across the city."
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Lahore&apos;s Solar Experts
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Trusted Solar Energy Company in Lahore
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                MaxGreen Energy is a trusted solar provider in Lahore, delivering tailored solar solutions for homes, businesses, and industries. Our Lahore office in DHA Phase 6 serves clients across the city — from DHA and Gulberg to Model Town, Johar Town, and Bahria Town.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We handle everything from site assessment and system design to LESCO net metering approvals and installation — backed by 2 years of free after-sales service.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Building 101, Fairways, DHA Phase 6, Lahore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="tel:+923000341048" className="text-gray-700 text-sm hover:text-green-600">+92 300 034 1048</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="mailto:sales@maxgreenenergy.com.pk" className="text-gray-700 text-sm hover:text-green-600">sales@maxgreenenergy.com.pk</a>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/inner/Rectangle-21718.png"
                alt="Solar installation in Lahore by MaxGreen Energy"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Services in Lahore
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Complete Solar Services for Lahore
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s} className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-3 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 text-sm font-semibold" dangerouslySetInnerHTML={{ __html: s }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Why MaxGreen in Lahore
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              The Best Solar Company in Lahore
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3" dangerouslySetInnerHTML={{ __html: r.title }} />
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="py-20 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Get Solar Installed in Lahore Today
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Free site assessment, custom system design, and professional installation — across Lahore.
          </p>
          <Link href="/contact-us/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
