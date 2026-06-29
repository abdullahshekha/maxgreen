import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sun, Users, Award, Zap } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About Us - MaxGreen Energy, Pakistan's Solar Innovators",
  description:
    "MaxGreen Energy brings 20+ years of combined solar expertise to Pakistan. We serve residential, commercial and industrial customers with highest-quality solar systems.",
};

const stats = [
  { icon: Sun, value: "2100+", label: "Solar Installations" },
  { icon: Award, value: "9+", label: "Years of Excellence" },
  { icon: Users, value: "3", label: "Cities Served" },
  { icon: Zap, value: "2 Years", label: "Free After-Sales Service" },
];

const values = [
  {
    title: "Quality Assurance",
    description:
      "We prioritize quality in every aspect of our work, ensuring our solar solutions meet the highest industry standards — from component selection to flawless installation.",
  },
  {
    title: "Innovation",
    description:
      "MaxGreen Energy stays at the forefront of solar technology, consistently exploring innovative solutions to optimize energy efficiency for our clients.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Our clients are at the heart of everything we do. We tailor solutions to your unique energy needs and provide exceptional support from consultation to post-installation.",
  },
  {
    title: "NEPRA-Compliant Standards",
    description:
      "All installations follow strict regulatory and safety guidelines, ensuring smooth NEPRA approvals, legal compliance, and seamless grid connection.",
  },
  {
    title: "Dedicated Project Management",
    description:
      "Every client gets a dedicated project manager who handles everything from consultation to system activation, ensuring clear communication at every step.",
  },
  {
    title: "Premium Components",
    description:
      "We use only Tier-1 solar panels and trusted inverter brands, backed by manufacturer warranties that protect your investment for decades.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We assess your energy needs, analyze your roof and location, and design a customized solar power solution for maximum efficiency and savings.",
  },
  {
    number: "02",
    title: "Installation",
    description:
      "Our certified technicians install high-quality solar panels, inverters, and wiring systems, ensuring safe setup and seamless grid connection.",
  },
  {
    number: "03",
    title: "Monitoring",
    description:
      "We monitor system performance, provide regular inspections, and handle ongoing maintenance to keep your solar system running at peak efficiency.",
  },
];

export default function AboutPage() {
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
                "@id": "https://maxgreenenergy.com.pk/about/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/about/", name: "About" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="About Us"
        title="Pakistan&apos;s Trusted Solar Innovators"
        subtitle="We are a leading solar company in Pakistan, specialising in residential, commercial, and industrial solar solutions — backed by 9 Years of experience."
        bgImage="/images/solar/about-us.jpeg"
      />

      {/* Who We Are */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Established with a Commitment to Excellence
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                MaxGreen Energy brings together a team of dedicated professionals with a wealth of experience in the solar industry. Our expertise spans the entire solar value chain — from system design and installation to maintenance and long-term support.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our vision is to be the foremost provider of innovative and reliable solar solutions, driving positive change in Pakistan&apos;s energy landscape. We aspire to contribute significantly to the country&apos;s sustainable development by promoting clean energy across residential, commercial, and industrial sectors.
              </p>
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Consultation
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/inner/27073.jpg"
                alt="MaxGreen Energy solar installation team"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-green-800/60 flex items-center justify-center mb-3 mx-auto">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-green-300 text-sm font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Why Choose MaxGreen Energy?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We don&apos;t just install solar — we build long-term energy partnerships that deliver real results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CheckCircle2 className="w-7 h-7 text-green-600 mb-4" />
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Our Simple 3-Step Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-extrabold text-xl mb-5 mx-auto shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}
