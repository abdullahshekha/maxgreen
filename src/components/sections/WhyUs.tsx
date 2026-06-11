import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Customized Solar System Design",
    description:
      "We analyze your electricity usage, roof space, and budget to create a tailored solar solution — not a one-size-fits-all package.",
  },
  {
    title: "NEPRA-Compliant Installation Standards",
    description:
      "All installations follow strict regulatory and safety guidelines ensuring smooth NEPRA approvals and legal compliance.",
  },
  {
    title: "Ongoing Technical Support",
    description:
      "Our relationship doesn't end after installation. We provide maintenance guidance and performance monitoring for the long haul.",
  },
  {
    title: "High ROI & Faster Payback Period",
    description:
      "Our high-efficiency systems are engineered to maximize savings, helping you recover your investment in record time.",
  },
  {
    title: "Dedicated Project Manager for Every Client",
    description:
      "From consultation to activation, a dedicated expert handles your project ensuring clear communication at every step.",
  },
  {
    title: "Premium Components & 25-Year Warranty",
    description:
      "We only use Tier-1 solar panels and trusted inverter brands, backed by manufacturer warranties that protect your investment.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header */}
          <div>
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Why MaxGreen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Why Thousands Trust MaxGreen Energy
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We don&apos;t just install solar systems — we design long-term energy
              solutions that reduce electricity bills, increase property value,
              and provide energy independence for generations.
            </p>
            <a
              href="#get-quote"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Consultation
            </a>
          </div>

          {/* Right: Features list */}
          <div className="space-y-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-200 group"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{reason.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
