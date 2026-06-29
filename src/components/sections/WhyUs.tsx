import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "MM Oils — 1 MW Industrial Installation",
    badge: "Industrial · 1,000 kW (1 MW)",
    points: [
      "1 MW large-scale industrial solar system installed",
      "NEPRA-compliant design with full grid integration",
      "Substantial reduction in monthly energy expenditure",
      "Complete turnkey service from design to commissioning",
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
  {
    title: "DHA Phase 6 — Residential Installations",
    badge: "Residential · 6–20 kW",
    points: [
      "Custom rooftop designs per property",
      "NEPRA-compliant structures throughout",
      "Electricity bills dropped to ZERO",
      "2 years free after-sales service",
    ],
  },
  {
    title: "Commercial & Office Buildings",
    badge: "Commercial / Office · 20–50 kW",
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
              Proven Results All Over Pakistan
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              With 9+ years of experience and 2100+ completed projects, MaxGreen
              Energy has delivered custom NEPRA-compliant solar systems for
              homes, schools, factories, and commercial buildings — making
              electricity bills drop to ZERO.
            </p>

            {/* Single Pakistan-wide stat */}
            <div className="rounded-2xl bg-green-950 p-6 text-center mb-8">
              <div className="text-4xl font-extrabold text-white mb-1">2100+</div>
              <div className="text-green-300 text-sm font-semibold">Projects All Over Pakistan</div>
            </div>

            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Project cards */}
          <div className="space-y-4">
            {projects.map((project) => (
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
