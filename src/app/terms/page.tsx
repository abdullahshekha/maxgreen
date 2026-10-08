import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service - MaxGreen Energy",
  description:
    "The terms that apply when you use the MaxGreen Energy website, request a quotation or use our online solar calculator.",
  alternates: { canonical: "/terms/" },
};

const sections = [
  {
    title: "1. Acceptance of These Terms",
    body: [
      "By using maxgreenenergy.com.pk (the “Site”) you agree to these Terms of Service. If you do not agree, please do not use the Site. These terms govern use of the Site only. A signed quotation or installation agreement with MaxGreen Energy (Pvt.) Ltd. (“MaxGreen”) governs any solar system we supply or install for you, and prevails over these terms if the two conflict.",
    ],
  },
  {
    title: "2. Information on the Site",
    body: [
      "We work to keep the Site accurate and current, but content such as system sizes, project details, specifications and blog articles is provided for general information and may change without notice. Nothing on the Site is a binding offer, engineering advice or a guarantee of results.",
    ],
  },
  {
    title: "3. Solar Calculator and Estimates",
    body: [
      "The online calculator and any capacity or savings figures it shows are indicative estimates based on the inputs you provide and general assumptions, including an average electricity rate. Your actual system size, cost and savings depend on your roof, shading, consumption pattern, tariffs, equipment chosen, weather and net metering approval. A formal quotation follows a site survey by our team.",
    ],
  },
  {
    title: "4. Quotation Requests and Enquiries",
    body: [
      "Submitting a form, calling us or messaging us on WhatsApp is a request for information. It does not create a contract. A contract is formed only when both parties sign a written quotation or agreement. Please give accurate, complete contact details so we can reach you.",
    ],
  },
  {
    title: "5. Acceptable Use",
    body: ["When using the Site you agree not to:"],
    list: [
      "Submit false, misleading or abusive information, or enquiries on behalf of someone else without their permission.",
      "Use bots, scripts or other automated means to submit forms or scrape content.",
      "Attempt to disrupt, probe or gain unauthorised access to the Site or its systems.",
      "Use the Site for any unlawful purpose.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "The MaxGreen name and logo, and the text, photographs, graphics, project images and design of the Site, belong to MaxGreen or its licensors and are protected by law. Third-party brand names and logos shown on the Site, such as technical partners and clients, belong to their respective owners. You may view the Site for personal use. You may not copy, republish or exploit its content for commercial purposes without our written permission.",
    ],
  },
  {
    title: "7. Third-Party Links and Services",
    body: [
      "The Site may link to or embed third-party services, such as YouTube, Google Maps and social media. We do not control them and are not responsible for their content or practices.",
    ],
  },
  {
    title: "8. Disclaimer of Warranties",
    body: [
      "The Site is provided “as is” and “as available”. We do not promise that it will always be available, error-free or free of harmful components, although we take reasonable care to keep it secure.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, MaxGreen is not liable for any indirect or consequential loss arising from your use of, or inability to use, the Site, or from reliance on its content or calculator estimates. Nothing in these terms limits liability that cannot lawfully be limited.",
    ],
  },
  {
    title: "10. Privacy",
    body: [
      "How we handle personal information is explained in our Privacy Policy, which forms part of these terms.",
    ],
    link: true,
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may revise these terms at any time by posting the updated version on this page. The “Last updated” date shows the latest revision. Continued use of the Site after a change means you accept the revised terms.",
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      "These terms are governed by the laws of Pakistan. Any dispute relating to them is subject to the jurisdiction of the courts of Karachi.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        breadcrumb="Terms of Service"
        title="Terms of Service"
        subtitle="The terms that apply when you use our website."
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-10">Last updated: 8 October 2026</p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="text-gray-500 text-lg leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg leading-relaxed mb-4">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.link && (
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Read our{" "}
                    <Link href="/privacy/" className="text-green-600 font-semibold hover:text-green-700 underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">13. Contact Us</h2>
            <ul className="space-y-2 text-gray-500 text-lg">
              <li>MaxGreen Energy (Pvt.) Ltd.</li>
              <li>Email: sales@maxgreenenergy.com.pk</li>
              <li>Phone: +92 300 034 1048</li>
              <li>Karachi: DHA Phase 6 Bukhari Commercial</li>
              <li>Lahore: DHA Phase 6 Fairways</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
