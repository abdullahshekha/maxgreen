"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Sun, Loader2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

export default function SurveyPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    capacity: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("survey_dismissed")) return;
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("survey_dismissed", "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          city: form.city,
          capacity: form.capacity,
          message: "Requested via the free solar survey popup.",
          source: "survey-popup",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackConversion("lead_form_submit");
      setIsSubmitted(true);
      setStatus("idle");
      sessionStorage.setItem("survey_dismissed", "1");
    } catch {
      setStatus("error");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-up">
        {/* Green header band */}
        <div className="bg-green-950 px-8 pt-8 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-600/20 border border-green-400/30 mb-4">
            <Sun className="w-7 h-7 text-green-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-1">
            Get Your FREE Solar Survey
          </h2>
          <p className="text-green-300 text-sm">
            Professional site assessment — absolutely no cost.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Body */}
        <div className="px-8 py-7">
          {isSubmitted ? (
            <div className="text-center py-4">
              <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                We&apos;ll Be in Touch!
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Thank you! Our team will contact you shortly to schedule your
                free solar survey.
              </p>
              <button
                onClick={dismiss}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Full Name <span className="text-green-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmed Khan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none text-gray-900 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Phone Number <span className="text-green-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none text-gray-900 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  City <span className="text-green-600">*</span>
                </label>
                <select
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none text-gray-900 text-sm transition-colors bg-white"
                >
                  <option value="">Select your city</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Solar Capacity Required (kW){" "}
                  <span className="text-gray-400 font-normal">— Optional</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5 kW, 10 kW, Not sure"
                  value={form.capacity}
                  onChange={(e) =>
                    setForm({ ...form, capacity: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none text-gray-900 text-sm transition-colors"
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
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg mt-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Book My Free Survey"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                No spam. No commitments. Just a free expert visit.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
