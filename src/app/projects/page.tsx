import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Zap } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Solar Projects - 14 MW+ Installations by MaxGreen Energy",
  description:
    "Explore MaxGreen Energy's portfolio of 14 MW+ solar installations across Pakistan — residential, commercial and industrial projects in Karachi, Lahore and Islamabad.",
};

const projects = [
  {
    title: "MM Oils – 1 MW Industrial Installation",
    category: "Industrial",
    location: "Karachi",
    size: "1,000 kW (1 MW)",
    image: "/images/projects/gsk-1.jpg",
    description:
      "A landmark 1 Megawatt industrial solar installation for MM Oils in Karachi — one of MaxGreen&apos;s largest projects to date, delivering massive energy cost savings and full grid integration.",
  },
  {
    title: "Karachi Public School – Malir Campus",
    category: "Commercial / Education",
    location: "Karachi",
    size: "15 kW",
    image: "/images/projects/kps-s.jpg",
    description:
      "A 15 kW on-grid solar system installed at KPS Malir Campus, reducing the school&apos;s electricity bills and providing a sustainable energy model for the institution.",
  },
  {
    title: "GlaxoSmithKline (GSK)",
    category: "Industrial / Pharma",
    location: "Karachi",
    size: "30 kW",
    image: "/images/projects/gsk-1.jpg",
    description:
      "A high-capacity commercial solar installation for GSK Pakistan, enabling the pharmaceutical giant to reduce its carbon footprint and operational energy costs.",
  },
  {
    title: "Karachi Public School – Second Campus",
    category: "Commercial / Education",
    location: "Karachi",
    size: "15 kW",
    image: "/images/projects/9.jpg",
    description:
      "Expanding our work with Karachi Public Schools, this installation brings clean solar energy to the second campus, continuing MaxGreen&apos;s commitment to educational institutions.",
  },
  {
    title: "Askari 2 Housing Project",
    category: "Residential / Community",
    location: "Karachi",
    size: "10 kW",
    image: "/images/projects/askari-2.jpeg",
    description:
      "A residential community solar project at Askari 2, demonstrating how neighbourhood-level solar adoption can dramatically reduce collective energy bills.",
  },
  {
    title: "Commercial Complex Installation",
    category: "Commercial",
    location: "Pakistan",
    size: "25 kW",
    image: "/images/projects/Rectangle-21731.png",
    description:
      "A modern commercial solar system delivering clean energy for a multi-unit commercial complex, with full net metering integration and monitoring.",
  },
  {
    title: "Rooftop Solar System",
    category: "Commercial / Office",
    location: "Pakistan",
    size: "20 kW",
    image: "/images/projects/Rectangle-21732-3.png",
    description:
      "A premium rooftop solar installation demonstrating MaxGreen&apos;s commitment to clean, professional installations that meet the highest technical and aesthetic standards.",
  },
];

export default function ProjectsPage() {
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
                "@id": "https://maxgreenenergy.com.pk/projects/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/projects/", name: "Projects" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Projects"
        title="Our Solar Projects"
        subtitle="From residential rooftops to industrial-scale installations — explore our growing portfolio of 14 MW+ in completed solar projects across Pakistan."
        bgImage="/images/solar/industrial.jpeg"
      />

      {/* Stats Banner */}
      <section className="bg-green-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "14 MW+", label: "Total Capacity Installed" },
              { value: "2100+", label: "Solar Installations" },
              { value: "3", label: "Cities Served" },
              { value: "9+", label: "Years of Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-green-300 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-gray-100 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
                    <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" />{project.size}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Get in touch with our team for a free site assessment and customised solar proposal.
          </p>
          <Link href="/contact-us/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
