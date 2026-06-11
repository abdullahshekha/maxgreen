import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrendingDown, ShieldCheck, BarChart3, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Commercial Solar Solutions in Pakistan | MaxGreen Energy",
  description:
    "MaxGreen Energy's commercial solar systems help businesses reduce energy costs, earn from excess power, and support sustainability with efficient, custom solutions.",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce OPEX",
    description: "Significantly cut your monthly operational electricity costs and protect your business from future tariff hikes.",
  },
  {
    icon: Zap,
    title: "Earn from Surplus Energy",
    description: "Generate more electricity than you consume? Sell surplus power back to the national grid through net metering.",
  },
  {
    icon: ShieldCheck,
    title: "NEPRA-Compliant Installation",
    description: "All commercial installations follow NEPRA regulations, ensuring smooth approvals and legal grid connection.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring",
    description: "Track your system&apos;s performance, energy generation, and savings in real-time through our monitoring portal.",
  },
];

const sectors = [
  { title: "Offices &amp; Plazas", icon: "🏢", description: "Reduce overhead for your office tower or commercial plaza with a high-efficiency rooftop solar system." },
  { title: "Schools &amp; Universities", icon: "🎓", description: "Power educational institutions with clean energy and reduce administration costs year-round." },
  { title: "Hospitals &amp; Clinics", icon: "🏥", description: "Ensure uninterrupted power for critical operations with hybrid solar and battery backup solutions." },
  { title: "Retail &amp; Shopping Malls", icon: "🛍️", description: "Offset high daytime energy consumption with daytime solar generation exactly when demand peaks." },
  { title: "Hotels &amp; Restaurants", icon: "🍽️", description: "Reduce running costs for HVAC-heavy hospitality businesses and improve sustainability credentials." },
  { title: "Warehouses &amp; Logistics", icon: "📦", description: "Large rooftop areas on warehouses translate directly to large solar systems and maximum savings." },
];

export default function CommercialPage() {
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
                "@id": "https://maxgreenenergy.com.pk/commercial/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solutions/", name: "Solutions" } },
                  { "@type": "ListItem", position: 3, item: { "@id": "https://maxgreenenergy.com.pk/commercial/", name: "Commercial Solar" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Commercial Solar"
        breadcrumbHref="/solutions/"
        title="Solar Solutions for Commercial"
        subtitle="Clean energy solutions designed for offices, schools, hospitals, and commercial buildings — reducing costs and improving sustainability."
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                For Businesses
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Solar Energy for Business Success
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Commercial solar is one of the most effective ways for businesses in Pakistan to combat rising electricity costs. MaxGreen Energy provides turnkey commercial solar solutions — from site assessment and system design to installation and ongoing monitoring.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our commercial systems are NEPRA-compliant, professionally installed by our certified team, and optimized for maximum ROI. With net metering, your business can even generate income from surplus solar power.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/cost-estimator/"
                  className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-bold px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
                >
                  Estimate Your System <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/inner/Mask-Group-3.png"
                alt="Commercial solar installation by MaxGreen Energy"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Business Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Why Businesses Choose MaxGreen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-extrabold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Commercial Solar Across Industries
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-extrabold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Ready to Lower Your Business&apos;s Energy Costs?
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Our commercial solar experts will assess your site and provide a detailed ROI analysis — at no cost.
          </p>
          <Link href="/contact-us/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Get a Free Commercial Assessment
          </Link>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
