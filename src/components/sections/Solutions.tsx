import { Home, Building2, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Home,
    title: "Residential Solar",
    subtitle: "For Homes",
    description:
      "Power your home with a customized solar system designed for maximum savings. Our team conducts a detailed energy assessment to deliver efficient rooftop solar installation across Karachi and Lahore.",
    benefits: [
      "50–70% reduction in electricity bills",
      "Custom system design per home",
      "Net metering assistance",
      "25-year panel performance warranty",
    ],
    href: "/residential",
    color: "from-green-500 to-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-100",
    iconBg: "bg-green-600",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    subtitle: "For Offices & Plazas",
    description:
      "Reduce operational costs with high-efficiency solar systems for offices, schools, and commercial buildings. We ensure professional installation, net metering support, and optimized ROI.",
    benefits: [
      "Significant OPEX reduction",
      "NEPRA-compliant installation",
      "Dedicated project manager",
      "Performance monitoring included",
    ],
    href: "/commercial",
    color: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    subtitle: "For Factories & Plants",
    description:
      "Large-scale solar solutions built for factories and industrial facilities. Engineered for maximum generation, grid compliance, and fast payback periods on high energy consumption.",
    benefits: [
      "Large-scale system design",
      "Grid-tie & hybrid options",
      "Maximum ROI engineering",
      "Full project management",
    ],
    href: "/industrial",
    color: "from-orange-500 to-orange-700",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-100",
    iconBg: "bg-orange-600",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Solar Solutions for Every Need
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether you&apos;re a homeowner, business owner, or industrial operator —
            MaxGreen has a solar solution engineered for your exact requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className={`relative rounded-2xl border ${solution.borderColor} ${solution.bgLight} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${solution.iconBg} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="mb-1 text-xs font-bold tracking-widest uppercase text-gray-400">
                  {solution.subtitle}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-8">
                  {solution.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-2 font-bold text-sm text-green-600 hover:text-green-700 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
