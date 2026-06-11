const steps = [
  {
    number: 1,
    title: "Site Assessment",
    description: "Our engineers visit your site to evaluate roof structure, orientation, shading, and grid connection points.",
  },
  {
    number: 2,
    title: "System Design",
    description: "We design a tailored solar system optimized for your energy consumption, budget, and available space.",
  },
  {
    number: 3,
    title: "System Approval",
    description: "We handle all documentation and regulatory approvals with NEPRA and your local DISCO.",
  },
  {
    number: 4,
    title: "System Installation",
    description: "Certified technicians install your panels, inverters, and wiring to the highest safety standards.",
  },
  {
    number: 5,
    title: "Commissioning",
    description: "We test, activate, and commission the full system — verifying every component is performing correctly.",
  },
  {
    number: 6,
    title: "Net Metering",
    description: "We complete your net metering application so you can sell surplus energy back to the grid.",
  },
  {
    number: 7,
    title: "Performance Assurance",
    description: "Ongoing monitoring, reporting, and maintenance to ensure your system runs at peak efficiency for years.",
  },
];

export default function Journey() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            Solar Project Initiation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Smart &amp; Affordable Solar Installation
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A seamless 7-step journey from site assessment to guaranteed performance.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[6.5%] right-[6.5%] h-0.5 bg-green-100 z-0" />

            <div className="grid grid-cols-7 gap-2 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg group-hover:bg-green-500 transition-colors ring-4 ring-white">
                    {step.number < 10 ? `0${step.number}` : step.number}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-100" />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6 pl-2">
                  {/* Circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md z-10 ring-2 ring-white">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
