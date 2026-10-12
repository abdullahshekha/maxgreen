import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

// Shown after any lead form submission so analytics and ad platforms get a unique
// "completed" URL to count. Kept out of search results and the sitemap on purpose.
export const metadata: Metadata = {
  title: "Thank You - MaxGreen Energy",
  description: "We have received your request and our team will contact you shortly.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-green-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Thank You!</h1>
          <p className="text-lg text-green-300 mb-10">
            We have received your request. A member of our team will contact you shortly.
            For anything urgent, call or WhatsApp us on +92 300 034 1048.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="border border-green-400 text-green-300 hover:bg-green-900 font-bold px-6 py-3 rounded-full transition-colors"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
