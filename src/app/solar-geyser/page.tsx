import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Download, Phone, Wifi, ShieldCheck, Droplets, Flame, Layers, Sun, Wrench, TrendingDown, Leaf, Zap } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import GeyserOrderForm from "@/components/sections/GeyserOrderForm";
import PlaceOrderButton from "@/components/PlaceOrderButton";
import TrackedContactLink from "@/components/TrackedContactLink";

export const metadata: Metadata = {
  title: "Solar Geyser Price in Pakistan | MaxGreen Energy",
  description:
    "Solar geysers from PKR 130,000: 150L, 200L and 300L with stainless steel tank, 60 mm insulation and WiFi controller. Order online from MaxGreen Energy.",
  alternates: { canonical: "/solar-geyser" },
};

const models = [
  {
    liters: "150",
    spec: "150L / 40 Gallon / 15 Tube",
    suited: "Ideal for 2 to 3 people",
    price: "PKR 130,000",
  },
  {
    liters: "200",
    spec: "200L / 52 Gallon / 20 Tube",
    suited: "Perfect for 3 to 4 people",
    price: "PKR 145,000",
  },
  {
    liters: "300",
    spec: "300L / 80 Gallon / 30 Tube",
    suited: "Designed for 5 to 6 people",
    price: "PKR 190,000",
  },
];

const modelFeatures = ["60 mm insulation", "Digital controller (WiFi)", "Magnesium rod"];

const features = [
  { icon: Flame, title: "Incoloy 800 Element", description: "Durable electric backup element for cloudy days." },
  { icon: Layers, title: "60 mm PU Insulation", description: "Keeps water hot through the night and winter mornings." },
  { icon: Wifi, title: "WiFi Control", description: "Digital controller you can manage from your phone." },
  { icon: Droplets, title: "Stainless Steel Tank", description: "Corrosion resistant tank built for long service life." },
  { icon: ShieldCheck, title: "Magnesium Anode", description: "Protects the tank from scale and corrosion." },
  { icon: Sun, title: "24/7 Hot Water", description: "Solar heating by day with a reliable supply around the clock." },
];

const benefits = [
  { icon: TrendingDown, title: "Save on Energy Bills", description: "Hot water without the heavy bill. Runs on solar energy and can cut your monthly utility costs by up to 80%." },
  { icon: Wrench, title: "Low Maintenance", description: "Fewer parts and longer life, with professional setup and after-sales support from MaxGreen." },
  { icon: Leaf, title: "Eco-Friendly", description: "Harness clean, renewable solar energy for everyday hot water." },
  { icon: Zap, title: "Power Independence", description: "No more relying on the grid or gas for hot water." },
];

const faqs = [
  {
    q: "What is the price of a solar geyser in Pakistan?",
    a: "MaxGreen solar geysers are priced at PKR 130,000 for the 150 liter model, PKR 145,000 for the 200 liter model and PKR 190,000 for the 300 liter model. Prices can change with exchange rates and taxes, so our team confirms the current price when you place an order.",
  },
  {
    q: "Which solar geyser size do I need?",
    a: "The 150 liter model suits 2 to 3 people, the 200 liter model suits 3 to 4 people and the 300 liter model suits 5 to 6 people. If your household sits between two sizes, the larger tank is usually the safer choice.",
  },
  {
    q: "Does a solar geyser work in winter and on cloudy days?",
    a: "Yes. The tubes collect less heat in winter and on cloudy days, so every MaxGreen model includes an Incoloy 800 electric backup element and a digital controller that tops up the water when the sun is not enough.",
  },
  {
    q: "Is a solar geyser better than a gas geyser in Pakistan?",
    a: "A solar geyser does not depend on gas pressure, which often drops in winter, and it avoids the ventilation and carbon monoxide concerns of gas appliances. The trade-off is a higher upfront price and the need for sunny roof space.",
  },
  {
    q: "Can I control the geyser from my phone?",
    a: "Yes. MaxGreen solar geysers come with a digital controller with WiFi, so you can manage the heater from your phone.",
  },
  {
    q: "How is the tank protected from scale and corrosion?",
    a: "The tank is stainless steel and each model includes a magnesium rod (anode) that protects it from scale and corrosion, which helps in areas with hard water.",
  },
  {
    q: "Does MaxGreen install the solar geyser?",
    a: "Yes. MaxGreen provides professional setup and after-sales service. We are the sole distributor for these solar geysers in Sindh, so call us on 0300 0341048 to confirm availability if you are outside Sindh.",
  },
  {
    q: "How do I order a solar geyser?",
    a: "Use the Place Order form on this page. Choose your model and enter your delivery details, and our team will call you to confirm your order, delivery and installation.",
  },
];

const comparison = [
  ["Energy source", "Sun, with electric backup", "Natural gas or LPG", "Grid electricity"],
  ["Running cost", "Lowest", "Low to moderate, depends on gas supply", "Highest of the three"],
  ["Works when gas supply is low", "Yes", "No", "Yes"],
  ["Upfront cost", "Highest", "Lowest to moderate", "Low to moderate"],
  ["Safety", "No gas, no combustion", "Needs ventilation, carbon monoxide risk", "Needs proper earthing"],
];

const guides = [
  { href: "/blogs/solar-geyser-price-in-pakistan", title: "Solar Geyser Price in Pakistan" },
  { href: "/blogs/solar-geyser-vs-gas-geyser-vs-electric-geyser-pakistan", title: "Solar vs Gas vs Electric Geyser" },
  { href: "/blogs/what-size-solar-geyser-do-i-need-in-pakistan", title: "What Size Solar Geyser Do You Need?" },
  { href: "/blogs/how-does-a-solar-geyser-work-evacuated-tube-pakistan", title: "How a Solar Geyser Works" },
  { href: "/blogs/does-a-solar-geyser-work-in-winter-and-cloudy-weather-pakistan", title: "Solar Geysers in Winter and on Cloudy Days" },
  { href: "/blogs/solar-geysers-in-karachi", title: "Solar Geysers in Karachi" },
  { href: "/blogs/buying-and-installing-a-solar-geyser-in-lahore", title: "Buying and Installing a Solar Geyser in Lahore" },
];

export default function SolarGeyserPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.maxgreenenergy.com.pk/solar-geyser#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://www.maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://www.maxgreenenergy.com.pk/solar-geyser", name: "Solar Geyser" } },
                ],
              },
              ...models.map((m) => ({
                "@type": "Product",
                name: `MaxGreen Solar Water Heater ${m.liters} Liters`,
                description: `${m.spec}. ${m.suited}. 60 mm insulation, digital WiFi controller, magnesium rod.`,
                image: "https://www.maxgreenenergy.com.pk/images/solar-geyser/solar-geyser-roof.png",
                url: "https://www.maxgreenenergy.com.pk/solar-geyser",
                category: "Solar water heater",
                brand: { "@type": "Brand", name: "MaxGreen Energy" },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "PKR",
                  price: m.price.replace(/[^0-9]/g, ""),
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                  url: "https://www.maxgreenenergy.com.pk/solar-geyser",
                  seller: { "@id": "https://www.maxgreenenergy.com.pk/#organization" },
                },
              })),
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Solar Geyser"
        title="Solar Geysers in Pakistan"
        subtitle="Efficient hot water solutions powered by the sun. Reliable solar water heaters, installed and supported by MaxGreen Energy."
        bgImage="/images/solar-geyser/solar-geyser-roof.webp"
        bgImageAlt="Solar geyser water heater on a rooftop in Pakistan"
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Advanced Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                For Everyday Comfort
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                A perfect solar water heater solution, using the sun&apos;s energy to efficiently heat water for domestic and industrial purposes. Runs completely on solar energy and helps you save up to 80% on monthly utility bills.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                MaxGreen Energy doesn&apos;t stop at installation. With 2100+ solar installations and 9+ years of experience, we provide end-to-end system guidance, professional setup, and dedicated after-sales service so your solar geyser keeps performing season after season. We are the sole distributor in Sindh only.
              </p>
              <div className="flex flex-wrap gap-4">
                <PlaceOrderButton className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                  Place Order
                </PlaceOrderButton>
                <a
                  href="/downloads/MaxGreen-Solar-Geyser-Guide.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-bold px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
                >
                  <Download className="w-4 h-4" /> Download Product Guide
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/solar-geyser/solar-geyser-roof.png"
                alt="MaxGreen solar water heater with stainless steel tank"
                width={700}
                height={380}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Our Models
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Solar Water Heater Sizes
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choose the capacity that fits your household. Download the product guide for full specifications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((m) => (
              <div key={m.liters} className="bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-50">
                  <Image
                    src="/images/solar/solar-geyser.jpg"
                    alt={`${m.liters} liter solar water heater`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span className="text-green-600 font-bold text-xs tracking-widest uppercase">Solar Water Heater</span>
                <div className="text-4xl font-extrabold text-gray-900 mt-1 mb-1">{m.liters} Liters</div>
                <div className="text-sm text-gray-500 font-semibold mb-1">{m.spec}</div>
                <div className="text-sm text-gray-500 mb-5">{m.suited}</div>
                <ul className="space-y-2 mb-6">
                  {modelFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-extrabold text-green-600 mt-auto mb-5">{m.price}</div>
                <div className="flex flex-col gap-3">
                  <PlaceOrderButton
                    model={m.liters}
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-200"
                  >
                    Place Order
                  </PlaceOrderButton>
                  <TrackedContactLink
                    href="tel:+923000341048"
                    type="phone"
                    className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 font-bold px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </TrackedContactLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MaxGreen / features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Why MaxGreen Energy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Built for Reliable Hot Water
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              ISO and PS certified components, professional installation, and dedicated after-sales service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-extrabold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Benefits of Solar Geysers
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A comfortable lifestyle without depending on the grid or gas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-extrabold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why solar geyser in Pakistan */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              Hot Water in Pakistan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Why Choose a Solar Geyser Over Gas or Electric?
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Gas pressure often drops in winter, exactly when hot water matters most, and running an electric geyser every day adds a large load to your electricity bill. A solar geyser uses the sun for most of the heating, with an electric backup for cloudy days.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-green-950 text-white">
                <tr>
                  <th className="px-5 py-3 font-bold">Factor</th>
                  <th className="px-5 py-3 font-bold">Solar geyser</th>
                  <th className="px-5 py-3 font-bold">Gas geyser</th>
                  <th className="px-5 py-3 font-bold">Electric geyser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, ri) => (
                  <tr key={row[0]} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`px-5 py-3 ${ci === 0 ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Solar Geyser Questions, Answered
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-gray-100 px-6 py-5">
                <summary className="cursor-pointer list-none font-bold text-gray-900 text-sm sm:text-base flex items-start justify-between gap-4">
                  {f.q}
                  <span className="text-green-600 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Solar Geyser Guides
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {guides.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="block rounded-xl border border-gray-100 px-5 py-4 font-semibold text-green-700 hover:bg-green-50 hover:border-green-200 transition-colors">
                  {g.title} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GeyserOrderForm />
      <Footer />
    </main>
  );
}
