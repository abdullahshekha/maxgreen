import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SurveyPopup from "@/components/SurveyPopup";
import WhatsappButton from "@/components/WhatsappButton";
import { GOOGLE_ADS_ID, GA4_ID } from "@/lib/gtag";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxgreenenergy.com.pk"),
  title: "Best Solar Company in Pakistan | MaxGreen Energy",
  description:
    "MaxGreen Energy — 9+ years, 2100+ projects. Top rated solar company in DHA providing custom NEPRA-compliant systems for homes and businesses in Karachi, Lahore & Islamabad.",
  keywords: [
    "solar company Pakistan",
    "solar panels Karachi",
    "solar installation Lahore",
    "residential solar Pakistan",
    "commercial solar Pakistan",
    "net metering Pakistan",
    "MaxGreen Energy",
    "best solar company DHA",
  ],
  icons: {
    icon: "/images/maxgreen-favicon.png",
    shortcut: "/images/maxgreen-favicon.png",
    apple: "/images/maxgreen-favicon.png",
  },
  openGraph: {
    title: "MaxGreen Energy — Top Rated Solar Company Across Pakistan",
    description:
      "9+ years, 2100+ projects. Custom NEPRA-compliant solar systems making your electricity bills drop to ZERO.",
    url: "https://maxgreenenergy.com.pk",
    siteName: "MaxGreen Energy",
    images: [
      {
        url: "/images/maxgreen-favicon.png",
        width: 1200,
        height: 1200,
        alt: "MaxGreen Energy",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxGreen Energy — Top Rated Solar Company Across Pakistan",
    description:
      "9+ years, 2100+ projects. Custom NEPRA-compliant solar systems for homes and businesses.",
    images: ["/images/maxgreen-favicon.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased font-montserrat">
        {/* Google tag (gtag.js) — powers GA4 analytics and Google Ads conversion tracking */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        {children}

        {/* Survey Popup — shows after 5 seconds */}
        <SurveyPopup />

        {/* WhatsApp Floating Button */}
        <WhatsappButton />
      </body>
    </html>
  );
}
