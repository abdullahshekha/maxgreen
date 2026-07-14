"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

export default function ContactForm({ light = false }: { light?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Karachi",
    capacity: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleEstimate = (e: Event) => {
      const { capacity } = (e as CustomEvent<{ capacity: string }>).detail;
      setForm((prev) => ({ ...prev, capacity }));
    };
    window.addEventListener("solar-estimate", handleEstimate);
    return () => window.removeEventListener("solar-estimate", handleEstimate);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      trackConversion("lead_form_submit");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", city: "Karachi", capacity: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="get-quote" className={`py-20 sm:py-28 ${light ? "bg-white" : "bg-green-950"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className={`inline-block font-bold text-sm tracking-widest uppercase mb-3 ${light ? "text-green-600" : "text-green-400"}`}>
              Get In Touch
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 ${light ? "text-gray-900" : "text-white"}`}>
              Ready to Switch to Solar?
            </h2>
            <p className={`text-lg leading-relaxed mb-10 ${light ? "text-gray-500" : "text-green-300"}`}>
              Get a free, no-obligation consultation from our solar experts.
              We&apos;ll assess your needs and provide a detailed proposal within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
  {
                  label: "Phone",
                  value: "+92 300 034 1048",
                  href: "tel:+923000341048",
                  onClick: () => trackConversion("phone_click"),
                },
                {
                  label: "Email",
                  value: "sales@maxgreenenergy.com.pk",
                  href: "mailto:sales@maxgreenenergy.com.pk",
                  onClick: () => trackConversion("email_click"),
                },
                {
                  label: "Karachi Office",
                  value: "402, 44-C, Lane 5, Bukhari Commercial, Phase 6, DHA",
                  href: null,
                  onClick: undefined,
                },
                {
                  label: "Lahore Office",
                  value: "Building 101, Fairways, DHA Phase 6",
                  href: null,
                  onClick: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${light ? "bg-green-600" : "bg-green-400"}`} />
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wide mb-0.5 ${light ? "text-gray-400" : "text-green-500"}`}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        className={`font-semibold transition-colors ${light ? "text-gray-900 hover:text-green-600" : "text-white hover:text-green-300"}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={`font-semibold ${light ? "text-gray-900" : "text-white"}`}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  Our team will contact you within 24 hours with a detailed proposal.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-green-600 font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">
                  Get a Free Quote
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ahmed Khan"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      City *
                    </label>
                    <select
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    >
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">
                    Solar Capacity Required (kW)
                  </label>
                  <input
                    type="text"
                    name="capacity"
                    value={form.capacity}
                    onChange={handleChange}
                    placeholder="e.g. 5 kW or I'm not sure"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your property, current bill, or any questions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get a Free Quote
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  We&apos;ll get back to you within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
