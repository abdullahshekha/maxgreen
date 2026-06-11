import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We assess your energy needs, analyze your roof and location, and design a customized solar power solution for maximum efficiency and savings. No obligation, fully free.",
    image: "/images/Consultation.png",
    highlights: ["Energy audit", "Roof assessment", "Custom system design", "ROI projection"],
  },
  {
    number: "02",
    title: "Installation",
    description:
      "Our certified technicians install high-quality solar panels, inverters, and wiring systems — ensuring safe setup, seamless grid connection, and zero disruption to your day.",
    image: "/images/Installation.png",
    highlights: ["Certified technicians", "Premium components", "NEPRA-compliant wiring", "Clean installation"],
  },
  {
    number: "03",
    title: "Monitoring & Maintenance",
    description:
      "We monitor system performance, provide regular inspections, and handle ongoing maintenance to keep your solar system running at peak efficiency for decades.",
    image: "/images/Maintenance.png",
    highlights: ["Real-time monitoring", "Regular inspections", "Proactive maintenance", "Performance reports"],
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Our 3-Step Process
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Going solar has never been simpler. We handle everything from the
            first conversation to long-term performance monitoring.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl aspect-video">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain p-6"
                  />
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-extrabold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="text-green-600 font-extrabold text-6xl sm:text-7xl opacity-10 leading-none mb-2 font-montserrat">
                  {step.number}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {step.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-green-600" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
