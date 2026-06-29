import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Solar Solutions Company in Karachi | MaxGreen Energy",
  description:
    "MaxGreen Energy is a trusted solar energy company in Karachi, delivering customized solar solutions for homes, businesses, and industries across the city.",
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
    title: "Local Karachi Expertise",
    description: "Our Karachi-based team understands the local grid infrastructure, KESC/K-Electric requirements, and weather conditions for optimum system design.",
  },
  {
    title: "Proven Track Record",
    description: "Over 2,100+ successful solar installations across Karachi — from DHA and Clifton to Gulshan-e-Iqbal and PECHS.",
  },
  {
    title: "Full NEPRA Compliance",
    description: "We handle all paperwork, approvals, and net metering applications with K-Electric on your behalf.",
  },
  {
    title: "Fast Installation",
    description: "Most residential systems are installed within 3–5 working days from deposit confirmation.",
  },
];

export default function KarachiPage() {
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
                "@id": "https://maxgreenenergy.com.pk/solar-solutions-company-karachi/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solar-solutions-company-karachi/", name: "Solar in Karachi" } },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://maxgreenenergy.com.pk/#karachi",
                name: "MaxGreen Energy – Karachi",
                image: "https://maxgreenenergy.com.pk/images/MaxGreen-logo.png",
                url: "https://maxgreenenergy.com.pk/solar-solutions-company-karachi/",
                telephone: "+923000341048",
                email: "sales@maxgreenenergy.com.pk",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "402, 44-C, Lane 5, Bukhari Commercial Area, Phase 6, DHA",
                  addressLocality: "Karachi",
                  addressCountry: "PK",
                },
                areaServed: "Karachi",
                description: "MaxGreen Energy is a trusted solar energy company in Karachi, delivering customized solar solutions for homes, businesses, and industries.",
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Karachi"
        title="MaxGreen Energy is DHA&apos;s No. 1 Choice and Karachi&apos;s Top-Rated Solar Company"
        subtitle="MaxGreen Energy is Karachi&apos;s trusted solar provider — delivering custom solar systems for homes, businesses, and industries across the city."
        bgImage="/images/solar/commercial.jpeg"
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Karachi&apos;s Solar Experts
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Trusted Solar Energy Company in Karachi
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                MaxGreen Energy is a trusted solar energy company in Karachi, delivering customized solar solutions for homes, businesses, and industries. Our Karachi office in DHA Phase 6 serves clients across the city — from North Nazimabad to Defence, Gulshan-e-Iqbal to PECHS.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                With over 2,100 installations in Karachi alone, we understand the local grid infrastructure, K-Electric net metering processes, and rooftop conditions across the city&apos;s diverse neighbourhoods.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">402, 44-C, Lane 5, Bukhari Commercial Area, Phase 6, DHA, Karachi</span>
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.06!2d67.0775!3d24.8146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a7446be5585%3A0x5526c768369786b0!2sMaxGreen%20Energy!5e0!3m2!1sen!2s!4v1234567890"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 lg:h-96"
                title="MaxGreen Energy Karachi Office"
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
              Services in Karachi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Complete Solar Services for Karachi
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
              Why MaxGreen in Karachi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              DHA and Askari No.1 Choice in Karachi
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects in Karachi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Solar Projects in Karachi
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/projects/gsk-1.jpg" alt="MM Oils 1 MW solar installation Karachi" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white font-bold text-sm">MM Oils – 1 MW (1,000 kW)</div>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/projects/kps-s.jpg" alt="Karachi Public School solar installation" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white font-bold text-sm">Karachi Public School – 15 kW</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/projects/" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="py-20 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Get Solar Installed in Karachi Today
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Free site assessment, custom system design, and professional installation — across Karachi.
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
