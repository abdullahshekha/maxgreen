"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much can I save by switching to solar energy in Pakistan?",
    answer:
      "Most homeowners and businesses can reduce electricity bills by 50–70%, depending on system size, energy consumption, and location. Our solar experts calculate exact savings based on your monthly bill and usage pattern.",
  },
  {
    question: "How long does solar panel installation take?",
    answer:
      "Typically, residential installations take 2–5 days after site survey and design approval. Larger commercial or industrial projects may take longer depending on system capacity and grid requirements.",
  },
  {
    question: "Do you provide net metering services?",
    answer:
      "Yes. We offer complete net metering assistance, including documentation, application processing, and coordination with the relevant authorities (NEPRA, LESCO, KESC) to ensure smooth approval.",
  },
  {
    question: "What is the lifespan of a solar system?",
    answer:
      "High-quality solar panels come with a 25-year performance warranty and can last even longer with proper maintenance. Inverters typically have a 5–10 year warranty depending on the brand.",
  },
  {
    question: "Is solar energy suitable for commercial and industrial use?",
    answer:
      "Absolutely. Solar systems are highly effective for factories, offices, schools, and commercial buildings, significantly reducing operational energy costs and improving long-term ROI.",
  },
  {
    question: "Do you serve both Karachi and Lahore?",
    answer:
      "Yes, MaxGreen Energy has offices in both Karachi (DHA Phase 6) and Lahore (DHA Phase 6) and provides full installation and after-sales services in both cities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know before making the switch to solar.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
