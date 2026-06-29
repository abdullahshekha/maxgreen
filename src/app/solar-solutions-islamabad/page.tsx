import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Solar Solutions Company in Islamabad | MaxGreen Energy",
  description:
    "MaxGreen Energy offers trusted solar solutions in Islamabad — residential, commercial, and industrial solar systems with IESCO net metering support.",
};

const services = [
  "Residential Solar Systems",
  "Commercial Solar Installation",
  "Industrial Solar Solutions",
  "IESCO Net Metering Application",
  "Site Assessment &amp; System Design",
  "Solar Monitoring &amp; Maintenance",
  "Battery Storage Solutions",
  "After-Sales Support",
];

const reasons = [
  {
    title: "IESCO Net Metering Support",
    description: "We handle all IESCO net metering applications, technical documentation, and approvals — making the process seamless for Islamabad customers.",
  },
  {
    title: "Islamabad&apos;s Solar Climate",
    description: "Islamabad and Rawalpindi enjoy excellent solar irradiance year-round. Our systems are designed to maximise generation in the capital&apos;s climate.",
  },
  {
    title: "Premium Installations",
    description: "Serving Islamabad&apos;s discerning clientele, our installations combine premium Tier-1 components with clean, aesthetically superior installation standards.",
  },
  {
    title: "Full Turnkey Service",
    description: "From the initial site visit to system commissioning and monitoring setup — we handle every step of your solar journey in Islamabad.",
  },
];

export default function IslamabadPage() {
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
                "@id": "https://maxgreenenergy.com.pk/solar-solutions-islamabad/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solar-solutions-islamabad/", name: "Solar in Islamabad" } },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://maxgreenenergy.com.pk/#islamabad",
                name: "MaxGreen Energy – Islamabad",
                image: "https://maxgreenenergy.com.pk/images/MaxGreen-logo.png",
                url: "https://maxgreenenergy.com.pk/solar-solutions-islamabad/",
                telephone: "+923000341048",
                email: "sales@maxgreenenergy.com.pk",
                areaServed: "Islamabad",
                description: "MaxGreen Energy offers trusted solar solutions in Islamabad — residential, commercial, and industrial solar systems with IESCO net metering support.",
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Islamabad"
        title="Solar Solutions Company in Islamabad"
        subtitle="MaxGreen Energy brings trusted solar expertise to Islamabad — delivering clean, custom solar systems for homes, businesses, and industries across the capital."
        bgImage="/images/solar/islamabad.jpeg"
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Now Serving Islamabad
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                MaxGreen Energy Expands to Islamabad
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                MaxGreen Energy, Pakistan&apos;s trusted solar company with a decade of excellence, is now serving Islamabad and Rawalpindi. We bring the same quality installations, premium components, and customer-first approach that have made us the go-to solar company in Karachi and Lahore.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From F-sector homes in F-6 and F-10 to commercial plazas in Blue Area and industrial units in Islamabad&apos;s industrial zones — we design solar systems that deliver measurable savings and reliable performance.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
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
                src="/images/inner/image-3.png"
                alt="Solar installation in Islamabad by MaxGreen Energy"
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
              Services in Islamabad
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Complete Solar Services for Islamabad
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
              Why MaxGreen in Islamabad
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              The Right Solar Partner for Islamabad
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
            Get Solar Installed in Islamabad Today
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Free site assessment, custom system design, and professional installation — across Islamabad and Rawalpindi.
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
