import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building2, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Solar Solutions in Pakistan - Residential, Commercial & Industrial | MaxGreen Energy",
  description:
    "Explore MaxGreen Energy's tailored solar solutions for homes, businesses, and industries. Achieve energy independence with our expert installation and support.",
};

const solutions = [
  {
    icon: Home,
    title: "Residential Solar",
    subtitle: "For Homes",
    href: "/solar-system-for-home/",
    description:
      "Power your home with a customized solar system designed for maximum savings. Our team conducts a detailed energy assessment to deliver efficient rooftop solar installation across Pakistan.",
    benefits: ["50–70% reduction in bills", "Custom system design", "Net metering assistance", "25-year warranty"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    subtitle: "For Offices & Plazas",
    href: "/commercial/",
    description:
      "Reduce operational costs with high-efficiency solar systems for offices, schools, and commercial buildings. Professional installation, net metering support, and optimized ROI.",
    benefits: ["Significant OPEX reduction", "NEPRA-compliant setup", "Dedicated project manager", "Performance monitoring"],
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    subtitle: "For Factories & Plants",
    href: "/industrial/",
    description:
      "Large-scale solar solutions built for factories and industrial facilities from 5 kW to 100+ kW. Engineered for maximum generation, grid compliance, and fast payback.",
    benefits: ["5 kW–100+ kW systems", "Grid-tie & hybrid options", "Maximum ROI engineering", "Full project management"],
  },
];

const benefits = [
  { title: "Cost Savings", description: "Reduce electricity bills by up to 70% and earn through net metering by selling surplus energy back to the grid." },
  { title: "Environmental Impact", description: "Zero carbon emissions from solar energy help create a greener Pakistan and reduce your environmental footprint." },
  { title: "Energy Independence", description: "Generate your own clean electricity and become independent from grid outages and rising utility prices." },
  { title: "Long-Term Investment", description: "Solar systems pay for themselves in 3–5 years and continue generating free electricity for 25+ years." },
];

export default function SolutionsPage() {
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
                "@id": "https://maxgreenenergy.com.pk/solutions/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/solutions/", name: "Solutions" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Solutions"
        title="Solar Installation in Pakistan"
        subtitle="Our expertise in solar energy technology ensures you get the most efficient and reliable solar solutions, whether you&apos;re a homeowner or a business owner."
        bgImage="/images/solar/residential.jpeg"
      />

      {/* Solution Cards */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Solar Solutions for Every Need
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Whether you&apos;re a homeowner, business owner, or industrial operator — MaxGreen has a solar solution engineered for your exact requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">{s.subtitle}</div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="inline-flex items-center gap-2 font-bold text-sm text-green-600 hover:text-green-700 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Benefits of Going Solar
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all">
                <CheckCircle2 className="w-7 h-7 text-green-600 mb-4" />
                <h3 className="font-extrabold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Ready to Switch to Solar?
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Get a free site assessment and customised solar proposal from our experts.
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
