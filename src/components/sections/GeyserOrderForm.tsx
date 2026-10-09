"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { ShoppingCart, CheckCircle, Loader2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";
import { isValidPkPhone } from "@/lib/phone";
import { getRecaptchaToken, RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

const MODELS = [
  { value: "150", label: "150 Liters (PKR 130,000)" },
  { value: "200", label: "200 Liters (PKR 145,000)" },
  { value: "300", label: "300 Liters (PKR 190,000)" },
];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  city: "Karachi",
  model: "150",
  quantity: "1",
  address: "",
  message: "",
  website: "", // honeypot, see ContactForm.tsx for why it is named "website"
};

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";

export default function GeyserOrderForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleModel = (e: Event) => {
      const { model } = (e as CustomEvent<{ model: string }>).detail;
      setForm((prev) => ({ ...prev, model }));
    };
    window.addEventListener("geyser-model", handleModel);
    return () => window.removeEventListener("geyser-model", handleModel);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phone = form.phone.replace(/\s+/g, "");
    if (!isValidPkPhone(phone)) {
      setErrorMessage("Enter a valid mobile number.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const selected = MODELS.find((m) => m.value === form.model);
      const recaptchaToken = await getRecaptchaToken("geyser_order_submit");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone,
          email: form.email,
          city: form.city,
          capacity: `Solar Geyser ${selected?.label ?? form.model} x ${form.quantity}`,
          message: `Delivery address: ${form.address}${form.message ? `\nNotes: ${form.message}` : ""}`,
          website: form.website,
          source: "solar-geyser-order",
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackConversion("lead_form_submit");
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setErrorMessage("Something went wrong. Please try again or call us directly.");
      setStatus("error");
    }
  };

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      <section id="place-order" className="py-20 sm:py-28 bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block font-bold text-sm tracking-widest uppercase mb-3 text-green-400">
                Order Online
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                Place Your Solar Geyser Order
              </h2>
              <p className="text-lg leading-relaxed mb-10 text-green-300">
                Choose your model and tell us where to deliver. Our team will call you to confirm
                your order, delivery and installation details.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Phone", value: "+92 300 034 1048" },
                  { label: "Email", value: "sales@maxgreenenergy.com.pk" },
                  { label: "Karachi Office", value: "402, 44-C, Lane 5, Bukhari Commercial, Phase 6, DHA" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-green-400" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide mb-0.5 text-green-500">
                        {item.label}
                      </div>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Order Received!</h3>
                  <p className="text-gray-500">
                    Our team will contact you shortly to confirm your order and delivery.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-green-600 font-semibold text-sm hover:underline"
                  >
                    Place another order
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    className="absolute -left-[9999px] w-px h-px overflow-hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <h3 className="text-xl font-extrabold text-gray-900 mb-6">Place Order</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Ahmed Khan" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Phone Number *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="0300 1234567" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">City *</label>
                      <select name="city" required value={form.city} onChange={handleChange} className={`${inputClass} bg-white`}>
                        <option value="Karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Model *</label>
                      <select name="model" required value={form.model} onChange={handleChange} className={`${inputClass} bg-white`}>
                        {MODELS.map((m) => (
                          <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Quantity *</label>
                      <input type="number" name="quantity" required min={1} max={20} value={form.quantity} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Delivery Address *</label>
                    <textarea name="address" required value={form.address} onChange={handleChange} rows={2} placeholder="House / building, street, area" className={`${inputClass} resize-none`} />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={2} placeholder="Roof access, preferred installation date, questions..." className={`${inputClass} resize-none`} />
                  </div>

                  {status === "error" && <p className="text-red-500 text-sm">{errorMessage}</p>}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Placing Order...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Place Order
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    No payment is taken online. We confirm your order by phone first.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
