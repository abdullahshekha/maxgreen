import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";
import TrackedContactLink from "@/components/TrackedContactLink";

export const metadata: Metadata = {
  title: "Best Solar Company in Karachi | MaxGreen Energy",
  description:
    "Looking for a solar company in Karachi? MaxGreen designs and installs home, commercial and industrial solar systems. Free site survey and quote.",
  alternates: { canonical: "/solar-solutions-company-karachi" },
};

const services = [
  "Residential Solar Systems",
  "Commercial Solar Installation",
  "Industrial Solar Solutions",
  "Net Metering Application",
  "Site Assessment & System Design",
  "Solar Monitoring & Maintenance",
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
    description: "Over 2,100+ successful solar installations across Pakistan — serving Karachi neighbourhoods from DHA and Clifton to Gulshan-e-Iqbal and PECHS.",
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

const karachiGuides = [
  {
    title: "Commercial Solar in Karachi",
    description: "Offices, factories, warehouses, hospitals and more: how commercial solar works and what to check first.",
    href: "/blogs/commercial-solar-in-karachi-offices-factories-warehouses-hospitals/",
  },
  {
    title: "Net Metering in Karachi: K-Electric Process and 2026 Rules",
    description: "How the new export credit model works, system limits and the application steps.",
    href: "/blogs/net-metering-in-karachi-k-electric-process-and-2026-rules/",
  },
  {
    title: "How to Choose a Solar Company in Karachi",
    description: "Ten questions to ask about experience, equipment, net metering, warranty and after-sales support.",
    href: "/blogs/how-to-choose-a-solar-company-in-karachi/",
  },
  {
    title: "Solar Panels in Karachi: Humidity, Salt Air and Dust",
    description: "How Karachi's coastal climate affects panels, structures and inverters.",
    href: "/blogs/solar-panels-in-karachi-humidity-salt-air-and-dust/",
  },
  {
    title: "Top 10 Solar Companies in Karachi",
    description: "What to look for when comparing the main solar companies in the city.",
    href: "/blogs/top-10-solar-companies-in-karachi/",
  },
  {
    title: "Solar Geysers in Karachi",
    description: "Cut gas and electricity use for hot water with a solar geyser.",
    href: "/blogs/solar-geysers-in-karachi/",
  },
];

// Real Karachi installations, same facts as /projects (title, size, image).
const karachiProjects = [
  { title: "MM Oils – 1 MW (1,000 kW)", sector: "Industrial", image: "/images/projects/mm-oils-main.jpg", alt: "MM Oils 1 MW solar installation in Karachi" },
  { title: "Sheikh Tube Mill – 700 kW", sector: "Industrial, on-grid", image: "/images/projects/sheikh-tube-mill.png", alt: "Sheikh Tube Mill 700 kW on-grid solar system in Karachi" },
  { title: "Qaim Automotive – 260 kW", sector: "Industrial, on-grid", image: "/images/projects/qaim-automotive.jpg", alt: "Qaim Automotive 260 kW on-grid solar system in Karachi" },
  { title: "Hotel County Inn – 70 kW", sector: "Commercial, on-grid", image: "/images/projects/hotel-county-inn.jpeg", alt: "Hotel County Inn 70 kW on-grid solar system in Karachi" },
  { title: "GlaxoSmithKline (GSK) – 30 kW", sector: "Industrial, pharma", image: "/images/projects/gsk-1.jpg", alt: "GlaxoSmithKline 30 kW solar installation in Karachi" },
  { title: "Subway, Rashid Minhas Road – 25 kW", sector: "Commercial, on-grid", image: "/images/projects/subway.webp", alt: "Subway Rashid Minhas Road 25 kW on-grid solar system in Karachi" },
  { title: "Karachi Broast, Rashid Minhas Road – 20 kW", sector: "Commercial, on-grid", image: "/images/projects/karachi-broast.webp", alt: "Karachi Broast Rashid Minhas Road 20 kW on-grid solar system" },
  { title: "Karachi Public School, Malir Campus – 15 kW", sector: "Education", image: "/images/projects/kps-s.jpg", alt: "Karachi Public School Malir Campus 15 kW solar installation" },
  { title: "Karachi Public School, Second Campus – 15 kW", sector: "Education", image: "/images/projects/9.jpg", alt: "Karachi Public School second campus 15 kW solar installation" },
  { title: "Askari 2 Housing Project – 10 kW", sector: "Residential community", image: "/images/projects/askari-2.jpeg", alt: "Askari 2 housing project 10 kW solar installation in Karachi" },
];

// Karachi-specific FAQ. The visible text is also what goes into the page's FAQPage schema.
const karachiFaqs = [
  {
    question: "Do you handle K-Electric net metering applications?",
    answer:
      "Yes. We prepare and submit the application to K-Electric on your behalf and coordinate with the relevant authorities. Systems of 25 kW or below do not need NEPRA concurrence and are approved by K-Electric. Larger systems need NEPRA concurrence.",
  },
  {
    question: "How does exporting solar power to K-Electric work in 2026?",
    answer:
      "Since February 2026, NEPRA's Prosumer Regulations apply. Units K-Electric supplies to you are billed at your tariff, and units you export are bought at the national average energy purchase price, which is lower than the retail rate. A system sized to cover your daytime use saves the most.",
  },
  {
    question: "Is Karachi's coastal climate a problem for solar panels?",
    answer:
      "It makes the design matter more. Salt air corrodes poorly protected metal, dust lowers output, and heat reduces panel efficiency, so the mounting structure, cleaning schedule and inverter placement all need to suit Karachi conditions. Our guide to solar panels in Karachi covers each one.",
  },
  {
    question: "Which parts of Karachi do you serve?",
    answer:
      "Our Karachi office is in DHA Phase 6, and we serve clients across the city, from North Nazimabad to Defence and from Gulshan-e-Iqbal to PECHS.",
  },
  {
    question: "Do you install commercial and industrial solar systems in Karachi?",
    answer:
      "Yes. Our Karachi projects range from a 15 kW system at Karachi Public School to a 1 MW installation for MM Oils, and include restaurants, a hotel, a pharma plant and industrial plants. You can see them in the projects section above.",
  },
  {
    question: "How do I choose a solar company in Karachi?",
    answer:
      "Ask whether the company surveys your site before quoting, which panel and inverter models it uses, who honours the warranties, and who handles the K-Electric application. Our guide lists ten questions worth asking before you sign.",
  },
  {
    question: "Do you offer a free site assessment in Karachi?",
    answer:
      "Yes. We offer a free site assessment and custom system design, then give you a quotation based on your electricity bills and your roof.",
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
                "@id": "https://www.maxgreenenergy.com.pk/solar-solutions-company-karachi#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://www.maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://www.maxgreenenergy.com.pk/solar-solutions-company-karachi", name: "Solar in Karachi" } },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.maxgreenenergy.com.pk/#karachi",
                name: "MaxGreen Energy – Karachi",
                image: "https://www.maxgreenenergy.com.pk/images/MaxGreen-logo.png",
                url: "https://www.maxgreenenergy.com.pk/solar-solutions-company-karachi",
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
        title="Karachi&apos;s Top-Rated Solar Company"
        subtitle="MaxGreen Energy is DHA&apos;s No. 1 Choice, delivering custom solar systems for homes, businesses, and industries across the city."
        bgImage="/images/solar/karachi.jpeg"
        bgImageAlt="Solar panel installation in Karachi, Pakistan"
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
                With over 2,100+ installations completed across Pakistan, we understand the local grid infrastructure, K-Electric net metering processes, and rooftop conditions across Karachi&apos;s diverse neighbourhoods.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">402, 44-C, Lane 5, Bukhari Commercial Area, Phase 6, DHA, Karachi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <TrackedContactLink href="tel:+923000341048" type="phone" className="text-gray-700 text-sm hover:text-green-600">+92 300 034 1048</TrackedContactLink>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <TrackedContactLink href="mailto:sales@maxgreenenergy.com.pk" type="email" className="text-gray-700 text-sm hover:text-green-600">sales@maxgreenenergy.com.pk</TrackedContactLink>
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
          <p className="text-gray-500 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            These are Karachi installations we have completed, from 10 kW community and school systems to a 1 MW industrial plant.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {karachiProjects.map((p) => (
              <div key={p.title} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image src={p.image} alt={p.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-bold text-sm">{p.title}</div>
                  <div className="text-green-200 text-xs mt-0.5">{p.sector}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects/" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* K-Electric net metering: Karachi-specific content, facts from NEPRA Prosumer Regulations 2026 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              K-Electric
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Solar and K-Electric Net Billing in 2026
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Since February 2026, NEPRA&apos;s Prosumer Regulations govern how K-Electric customers export solar power. Units K-Electric supplies to you are billed at your tariff, and units you export are bought at the national average energy purchase price, which is lower than the retail rate. A system sized to cover your daytime use therefore saves the most.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Systems of 25 kW or below do not need NEPRA concurrence: K-Electric approves them and no concurrence fee applies.",
              "Systems above 25 kW need NEPRA concurrence, and systems of 250 kW or more need a load flow study.",
              "Solar capacity cannot exceed your sanctioned load, and the regulations name 3-phase and 11 kV consumers as eligible applicants.",
              "We prepare and submit the application to K-Electric on your behalf.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Link href="/blogs/net-metering-in-karachi-k-electric-process-and-2026-rules/" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700">
            Read the full K-Electric net metering guide →
          </Link>
        </div>
      </section>

      {/* Karachi guides (internal links to the content cluster) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Karachi Solar Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Guides for Solar in Karachi
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {karachiGuides.map((g) => (
              <Link key={g.href} href={g.href} className="block rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all">
                <h3 className="font-extrabold text-gray-900 text-base mb-2">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={karachiFaqs} />

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
