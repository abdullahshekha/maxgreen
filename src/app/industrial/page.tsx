import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Factory, Zap, TrendingDown, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Industrial Solar Solutions in Pakistan | MaxGreen Energy",
  description:
    "MaxGreen Energy's industrial solar solutions scale from 5 kW to 100+ kW for factories, mills, warehouses. Reduce operating costs, improve sustainability &amp; ROI.",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Dramatically Reduce Operating Costs",
    description: "Industrial facilities are heavy energy consumers. Solar dramatically reduces your monthly electricity expenditure and shields you from tariff increases.",
  },
  {
    icon: Zap,
    title: "5 kW to 100+ kW Systems",
    description: "From small factories to large manufacturing plants, we design and install scalable solar systems that match your exact energy demand.",
  },
  {
    icon: Factory,
    title: "Grid-Tie &amp; Hybrid Options",
    description: "Connect directly to the grid with net metering or pair with battery storage for hybrid backup — keeping production running through outages.",
  },
  {
    icon: Award,
    title: "Fast Payback &amp; High ROI",
    description: "Industrial solar investments typically pay back in 2–4 years, after which your facility enjoys decades of near-free electricity generation.",
  },
];

const industries = [
  { name: "Textile Mills", icon: "🧵" },
  { name: "Food Processing", icon: "🍞" },
  { name: "Pharmaceutical", icon: "💊" },
  { name: "Steel &amp; Metals", icon: "⚙️" },
  { name: "Warehousing &amp; Logistics", icon: "📦" },
  { name: "Cold Storage", icon: "❄️" },
  { name: "Cement &amp; Construction", icon: "🏗️" },
  { name: "Chemical Plants", icon: "🧪" },
];

export default function IndustrialPage() {
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
                "@id": "https://maxgreenenergy.com.pk/industrial/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solutions/", name: "Solutions" } },
                  { "@type": "ListItem", position: 3, item: { "@id": "https://maxgreenenergy.com.pk/industrial/", name: "Industrial Solar" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Industrial Solar"
        breadcrumbHref="/solutions/"
        title="Industrial Solar Solutions"
        subtitle="Large-scale solar systems engineered for Pakistan&apos;s factories, mills, and warehouses — from 5 kW to 100+ kW."
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                For Industry
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Solar Empowerment for Industries
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Industrial electricity consumption is among the highest in Pakistan&apos;s energy mix. MaxGreen Energy provides scalable solar solutions that directly address your facility&apos;s energy costs — from small factories requiring 5 kW systems to large industrial complexes requiring 100 kW or more.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our team of engineers handles structural load calculations, system sizing, grid compliance, and NEPRA approval — delivering a complete, turnkey industrial solar solution from design to commissioning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get an Industrial Assessment
                </Link>
                <Link
                  href="/projects/"
                  className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-bold px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
                >
                  View Our Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/inner/image-2.png"
                alt="Industrial solar installation by MaxGreen Energy"
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
              Why Industrial Solar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Built for Heavy Energy Demands
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: b.title }} />
                    <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Industries We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Solar for Every Industrial Sector
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-2xl border border-gray-100 p-5 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <div className="font-bold text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: ind.name }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Reduce Your Industrial Energy Bill
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Our engineers will analyse your plant&apos;s load profile and design a system for maximum generation and minimum payback period.
          </p>
          <Link href="/contact-us/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Request an Industrial Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
