import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Zap, Leaf, TrendingDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Solar System for Home in Pakistan | MaxGreen Energy",
  description:
    "MaxGreen Energy offers custom residential solar systems to cut bills, sell surplus power via net metering, and light your home sustainably with smart, eco-conscious solutions.",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Electricity Bills",
    description: "Cut your monthly electricity bills by up to 70% — even in peak summer months — with a properly sized home solar system.",
  },
  {
    icon: Zap,
    title: "Net Metering",
    description: "Sell surplus solar energy back to the grid and earn credits on your DISCO bill through NEPRA-approved net metering.",
  },
  {
    icon: Leaf,
    title: "Zero Carbon Emission",
    description: "Generate clean, renewable energy for your home and reduce your household&apos;s carbon footprint significantly.",
  },
  {
    icon: CheckCircle2,
    title: "Energy Independence",
    description: "Protect yourself from load-shedding and rising tariff rates by generating your own electricity at home.",
  },
];

const packages = [
  { size: "6 kW", usage: "1 AC + Other Appliances", monthlyUnits: "720 units", description: "Ideal for small homes with moderate energy consumption." },
  { size: "10 kW", usage: "3 AC + Other Appliances", monthlyUnits: "1,200 units", description: "Perfect for medium-sized homes with regular air conditioner use." },
  { size: "15 kW", usage: "4 AC + Other Appliances", monthlyUnits: "1,800 units", description: "Suited for large homes or small offices with heavy appliance loads." },
  { size: "20 kW+", usage: "6 AC + Other Appliances", monthlyUnits: "2,400+ units", description: "Custom systems for villa-sized homes or high-consumption households." },
];

export default function ResidentialPage() {
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
                "@id": "https://maxgreenenergy.com.pk/solar-system-for-home/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solutions/", name: "Solutions" } },
                  { "@type": "ListItem", position: 3, item: { "@id": "https://maxgreenenergy.com.pk/solar-system-for-home/", name: "Solar System for Home" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Residential Solar"
        breadcrumbHref="/solutions/"
        title="Solar System for Home"
        subtitle="Power your home with clean, affordable solar energy. Custom residential systems designed to cut bills and provide energy independence."
        bgImage="/images/solar/solar-system-for-home.jpeg"
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Clean Energy Era
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Home Solar System: A Greener Tomorrow
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                The world is transitioning to renewable energy, and Pakistan is no exception. Solar energy is now one of the most cost-effective ways to power your home — giving you freedom from rising utility tariffs and load-shedding.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                MaxGreen Energy designs and installs residential solar systems tailored specifically to your home&apos;s energy consumption, roof type, and budget. From consultation to installation to after-sales support — we handle everything.
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
                src="/images/inner/residential-main.jpeg"
                alt="Residential solar installation by MaxGreen Energy"
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
              Key Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Why Go Solar at Home?
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

      {/* Packages */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              System Sizes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Find the Right System for Your Home
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We design custom solar systems based on your actual consumption. These common sizes give you a starting point.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.size} className="rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl font-extrabold text-green-600 mb-1">{pkg.size}</div>
                <div className="text-sm text-gray-500 font-semibold mb-1">{pkg.usage}</div>
                <div className="text-xs text-green-700 font-bold bg-green-50 rounded-full inline-block px-3 py-1 mb-4">~{pkg.monthlyUnits}/month</div>
                <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Not sure which size fits? Use our{" "}
            <Link href="/cost-estimator/" className="text-green-600 font-semibold underline">
              free Cost Estimator
            </Link>{" "}
            or{" "}
            <Link href="/contact-us/" className="text-green-600 font-semibold underline">
              speak with our team
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
