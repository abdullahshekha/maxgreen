import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We assess your energy needs, analyze your roof and location, and design a customized solar power solution for maximum efficiency and savings. No obligation, fully free.",
    highlights: ["Energy audit", "Roof assessment", "Custom system design", "ROI projection"],
  },
  {
    number: "02",
    title: "Installation",
    description:
      "Our certified technicians install high-quality solar panels, inverters, and wiring systems — ensuring safe setup, seamless grid connection, and zero disruption to your day.",
    highlights: ["Certified technicians", "Premium components", "NEPRA-compliant wiring", "Clean installation"],
  },
  {
    number: "03",
    title: "Monitoring & Maintenance",
    description:
      "We monitor system performance, provide regular inspections, and handle ongoing maintenance to keep your solar system running at peak efficiency for decades.",
    highlights: ["Real-time monitoring", "Regular inspections", "Proactive maintenance", "Performance reports"],
  },
];

const checklistItems = [
  { label: "Energy Usage Analysis", done: true },
  { label: "Roof Space Evaluation", done: true },
  { label: "Custom System Design", done: true },
  { label: "ROI Projection", done: false },
];

const installSteps = [
  { label: "Site Preparation", status: "done" },
  { label: "Panel Mounting", status: "done" },
  { label: "Electrical Wiring", status: "active" },
  { label: "Grid Connection", status: "pending" },
];

const chartBars = ["h-2", "h-4", "h-8", "h-12", "h-16", "h-[4.5rem]", "h-20", "h-[4.75rem]", "h-[4.25rem]", "h-14", "h-10", "h-5"];

const monitoringStats = [
  { label: "Output Today", value: "42.3 kWh", color: "text-green-400" },
  { label: "Monthly Savings", value: "PKR 1,900", color: "text-white" },
  { label: "CO₂ Offset", value: "18.6 kg", color: "text-green-300" },
];

function ConsultationMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
      {/* Browser chrome */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-gray-700 rounded-full px-3 py-1 text-xs text-gray-400 text-center truncate">
          maxgreenenergy.com.pk/assess
        </div>
      </div>
      {/* Screen */}
      <div className="bg-gray-50 p-5">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-4">
            Energy Assessment Report
          </p>
          <div className="space-y-0.5 mb-4">
            {checklistItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0"
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.done ? "bg-green-600" : "bg-gray-200"
                  }`}
                >
                  {item.done && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </div>
                <span
                  className={`text-sm font-medium flex-1 ${
                    item.done ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`text-xs font-semibold ${
                    item.done ? "text-green-600" : "text-gray-300"
                  }`}
                >
                  {item.done ? "Done" : "Pending"}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>Assessment Progress</span>
              <span className="text-green-600 font-bold">75%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-green-600 rounded-full" />
            </div>
          </div>
          <div className="mt-4 bg-green-950 rounded-lg px-4 py-3 flex justify-between items-center">
            <span className="text-green-400 text-xs font-semibold">Est. Monthly Savings</span>
            <span className="text-white font-extrabold text-sm">PKR 18,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstallationMockup() {
  return (
    <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl min-h-[400px]">
      <div className="bg-white rounded-2xl overflow-hidden p-5">
        <div className="flex justify-between items-center mb-5">
          <p className="text-sm font-extrabold text-gray-900">Installation Tracker</p>
          <span className="text-xs bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full">
            Day 3 of 5
          </span>
        </div>
        <div className="space-y-3 mb-5">
          {installSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold flex-shrink-0 ${
                  step.status === "done"
                    ? "bg-green-600 text-white"
                    : step.status === "active"
                    ? "border-2 border-green-600 text-green-600 bg-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {step.status === "done" ? (
                  <Check className="w-3 h-3" strokeWidth={3} />
                ) : (
                  i + 1
                )}
              </div>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    step.status === "done"
                      ? "w-full bg-green-600"
                      : step.status === "active"
                      ? "w-1/2 bg-green-400"
                      : "w-0"
                  }`}
                />
              </div>
              <span
                className={`text-xs font-medium w-32 text-right ${
                  step.status === "pending" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MonitoringMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
      {/* Title bar */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          System Online
        </div>
      </div>
      {/* Dashboard */}
      <div className="bg-gray-950 p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {monitoringStats.map((stat) => (
            <div key={stat.label} className="bg-gray-800 rounded-xl p-3">
              <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-sm font-extrabold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-3 font-semibold">
            Power Output &mdash; Today (kW)
          </p>
          <div className="flex items-end gap-1 h-20">
            {chartBars.map((barH, i) => (
              <div key={i} className={`flex-1 bg-green-600 rounded-t-sm opacity-90 ${barH}`} />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-600">6am</span>
            <span className="text-xs text-gray-600">12pm</span>
            <span className="text-xs text-gray-600">6pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals = [<ConsultationMockup key="01" />, <InstallationMockup key="02" />, <MonitoringMockup key="03" />];

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
              {/* Mockup visual */}
              <div className="w-full lg:w-1/2">{visuals[index]}</div>

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
