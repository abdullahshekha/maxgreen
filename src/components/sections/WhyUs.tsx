import Link from "next/link";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const kProjects = [
  {
    title: "GlaxoSmithKline (GSK)",
    badge: "Industrial / Pharma · 30 kW",
    points: [
      "30 kW on-grid industrial solar system",
      "NEPRA-compliant design & installation",
      "Full performance monitoring setup",
      "Significant reduction in operational energy costs",
    ],
  },
  {
    title: "Karachi Public School — 2 Campuses",
    badge: "Commercial / Education · 15 kW each",
    points: [
      "15 kW system installed per campus",
      "Net metering fully integrated",
      "Sustainable energy model for institutions",
      "Consistent electricity bill savings every month",
    ],
  },
  {
    title: "Askari 2 Residential Community",
    badge: "Residential / Community · 10 kW",
    points: [
      "Community-level rooftop solar project",
      "Custom NEPRA-compliant structure",
      "Net metering approved & activated",
      "2 years free after-sales service included",
    ],
  },
];

const lProjects = [
  {
    title: "DHA Phase 6 — Residential Installations",
    badge: "Residential · 5–20 kW",
    points: [
      "Custom rooftop designs per property",
      "NEPRA-compliant structures throughout",
      "Electricity bills dropped to ZERO",
      "2 years free after-sales service",
    ],
  },
  {
    title: "Commercial & Office Buildings",
    badge: "Commercial / Office · 15–30 kW",
    points: [
      "Offices, plazas & commercial units served",
      "Full net metering support provided",
      "Dedicated project manager assigned",
      "Performance monitoring included",
    ],
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Why MaxGreen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Proven Results Across Karachi &amp; Lahore
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              With 9+ years of experience and 2100+ completed projects, MaxGreen
              Energy has delivered custom NEPRA-compliant solar systems for
              homes, schools, factories, and commercial buildings — making
              electricity bills drop to ZERO.
            </p>

            {/* City stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { city: "Karachi", stat: "1500+", label: "Installations" },
                { city: "Lahore", stat: "600+", label: "Installations" },
              ].map((item) => (
                <div
                  key={item.city}
                  className="rounded-2xl bg-green-950 p-5 text-center"
                >
                  <div className="flex items-center justify-center gap-1 text-green-400 text-xs font-bold tracking-widest uppercase mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.city}
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-0.5">
                    {item.stat}
                  </div>
                  <div className="text-green-300 text-xs font-semibold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Project cards by city */}
          <div className="space-y-8">
            {/* Karachi */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-bold text-sm tracking-widest uppercase">
                  Karachi Projects
                </span>
              </div>
              <div className="space-y-4">
                {kProjects.map((project) => (
                  <div
                    key={project.title}
                    className="p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-200 group"
                  >
                    <h4 className="font-extrabold text-gray-900 mb-1">
                      {project.title}
                    </h4>
                    <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full mb-3">
                      {project.badge}
                    </span>
                    <ul className="space-y-1.5">
                      {project.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Lahore */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-bold text-sm tracking-widest uppercase">
                  Lahore Projects
                </span>
              </div>
              <div className="space-y-4">
                {lProjects.map((project) => (
                  <div
                    key={project.title}
                    className="p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-200 group"
                  >
                    <h4 className="font-extrabold text-gray-900 mb-1">
                      {project.title}
                    </h4>
                    <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full mb-3">
                      {project.badge}
                    </span>
                    <ul className="space-y-1.5">
                      {project.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 font-bold text-sm text-green-600 hover:text-green-700 transition-colors"
            >
              View all our projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
