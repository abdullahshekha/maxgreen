import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SurveyPopup from "@/components/SurveyPopup";
import WhatsappButton from "@/components/WhatsappButton";
import { GOOGLE_ADS_ID, GA4_ID, CLARITY_PROJECT_ID } from "@/lib/gtag";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

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
  alternates: {
    canonical: "/",
  },
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maxgreenenergy.com.pk/#organization",
  name: "MaxGreen Energy",
  image: "https://maxgreenenergy.com.pk/images/maxgreen-favicon.png",
  url: "https://maxgreenenergy.com.pk",
  telephone: "+92-300-0341048",
  email: "sales@maxgreenenergy.com.pk",
  areaServed: ["Karachi", "Lahore", "Islamabad", "Pakistan"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7931963,
    longitude: 67.0679557,
  },
  hasMap:
    "https://www.google.com/maps/place/MaxGreen+Energy+(Pvt.)+Ltd./@24.7931963,67.0679557,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f746afe5585:0x7526c738319786b0!8m2!3d24.7931963!4d67.0679557!16s%2Fg%2F11nxpb6869",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Building no. 402, 44-C, Lane 5, Bukhari Commercial, Phase 6, DHA",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Building no. 101, Fairways Commercial, Phase 6, Defence Raya Golf Resort, Sector M, DHA",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/18smy6akyA/?mibextid=wwXIfr",
    "https://www.instagram.com/maxgreenenergypakistan?igsh=dHJtc2VzeTE5c2Fs",
    "https://www.linkedin.com/company/maxenergypakistan/",
    "https://www.google.com/maps/place/MaxGreen+Energy+(Pvt.)+Ltd./@24.7931963,67.0679557,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f746afe5585:0x7526c738319786b0!8m2!3d24.7931963!4d67.0679557!16s%2Fg%2F11nxpb6869",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased font-montserrat">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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

        {/* Microsoft Clarity — session recordings and heatmaps */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>

        {/* reCAPTCHA v3 — invisible, scores every form submission for bot verification */}
        {RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        )}

        {children}

        {/* Survey Popup — shows after 5 seconds */}
        <SurveyPopup />

        {/* WhatsApp Floating Button */}
        <WhatsappButton />
      </body>
    </html>
  );
}
