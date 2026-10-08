import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy - MaxGreen Energy",
  description:
    "How MaxGreen Energy collects, uses and protects the personal information you share through our website, quote forms and contact channels.",
  alternates: { canonical: "/privacy/" },
};

const sections = [
  {
    title: "1. Who We Are",
    body: [
      "MaxGreen Energy (Pvt.) Ltd. (“MaxGreen”, “we”, “us”) is a solar energy company serving residential, commercial and industrial customers in Karachi, Lahore and Islamabad. This policy explains how we handle personal information collected through maxgreenenergy.com.pk (the “Site”).",
    ],
  },
  {
    title: "2. Information We Collect",
    body: ["We collect only what we need to respond to your enquiry and run the Site."],
    list: [
      "Details you submit through our quote form, free survey pop-up and contact page: your name, phone number, city, and optionally your email address, the solar capacity you need and any message you write.",
      "Details you share when you call, email or message us on WhatsApp.",
      "Technical and usage data collected automatically: pages visited, approximate location, device and browser type, referring page, and interactions such as clicks on our phone, email and WhatsApp links.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    list: [
      "To contact you about your enquiry, prepare a quotation and arrange a site survey.",
      "To send an acknowledgement to the email address you provide.",
      "To keep a record of enquiries so that no request is lost.",
      "To understand how visitors use the Site and to measure and improve our advertising.",
      "To protect the Site against spam and abuse.",
    ],
  },
  {
    title: "4. How Your Enquiry Is Handled",
    body: [
      "When you submit a form, the details are emailed to our sales team and are also saved to a secure Google Sheet that only authorised MaxGreen staff can access. This backup exists so that your enquiry is not lost if one system is unavailable. If you give us your email address, we also send you an automatic confirmation.",
    ],
  },
  {
    title: "5. Analytics, Advertising and Security Tools",
    body: ["The Site uses the following third-party services, which may set cookies or collect usage data in line with their own privacy policies:"],
    list: [
      "Google Analytics 4, to measure traffic and how visitors use the Site.",
      "Google Ads conversion tracking, to measure which advertisements lead to enquiries, calls, emails and WhatsApp chats.",
      "Microsoft Clarity, which records anonymised session replays and heatmaps so we can find usability problems.",
      "Google reCAPTCHA v3, which scores interactions invisibly to detect spam and bots.",
      "YouTube, when you play an embedded video, and Google Maps, when a map is shown.",
    ],
    after:
      "You can limit tracking by adjusting your browser cookie settings, using a tracking-protection extension, or using Google’s opt-out tools. Blocking these services will not stop you from using the Site.",
  },
  {
    title: "6. Sharing Your Information",
    body: [
      "We do not sell your personal information. We share it only with service providers that help us operate the Site and handle enquiries (such as our email host, Google for spreadsheet storage, and Vercel, our website host), and where we are required to do so by law or by a competent authority. These providers may process data outside Pakistan.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We keep enquiry details for as long as needed to follow up, deliver and support your solar system, and meet our legal and accounting obligations. We delete or anonymise information we no longer need.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use reasonable technical and organisational measures to protect your information, including encrypted connections, restricted access to enquiry records and server-side handling of form data. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "9. Your Choices and Rights",
    body: [
      "You may ask us to tell you what personal information we hold about you, to correct it, or to delete it. You may also ask us to stop contacting you about a quotation. To make a request, email us at the address below and we will respond within a reasonable time.",
    ],
  },
  {
    title: "10. Children",
    body: [
      "The Site is intended for adults who are considering a solar installation. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "11. Third-Party Links",
    body: [
      "The Site links to other websites, including our social media pages. We are not responsible for the content or privacy practices of those websites.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this policy from time to time. The “Last updated” date at the top of this page shows when it last changed. Continued use of the Site after an update means you accept the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        subtitle="How we collect, use and protect your information."
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
                {section.after && (
                  <p className="text-gray-500 text-lg leading-relaxed">{section.after}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              For any question about this policy or your personal information:
            </p>
            <ul className="space-y-2 text-gray-500 text-lg">
              <li>MaxGreen Energy (Pvt.) Ltd.</li>
              <li>Email: sales@maxgreenenergy.com.pk</li>
              <li>Phone: +92 300 034 1048</li>
              <li>Karachi: DHA Phase 6 Bukhari Commercial</li>
              <li>Lahore: DHA Phase 6 Fairways</li>
            </ul>
            <p className="text-gray-500 text-lg leading-relaxed mt-4">
              See also our{" "}
              <Link href="/terms/" className="text-green-600 font-semibold hover:text-green-700 underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
