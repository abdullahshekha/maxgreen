import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Best Solar Company in Pakistan | MaxGreen Energy",
  description:
    "MaxGreen Energy delivers affordable, reliable solar solutions across Pakistan, offering expert consultation, installation, and monitoring for homes and businesses in Karachi and Lahore.",
  keywords: [
    "solar company Pakistan",
    "solar panels Karachi",
    "solar installation Lahore",
    "residential solar",
    "commercial solar",
    "net metering Pakistan",
    "MaxGreen Energy",
  ],
  openGraph: {
    title: "MaxGreen Energy — Pakistan's Trusted Solar Company",
    description:
      "High-performance solar systems for homes and businesses. Professional installation in Karachi & Lahore.",
    url: "https://maxgreenenergy.com.pk",
    siteName: "MaxGreen Energy",
    images: [
      {
        url: "/images/MaxGreen-logo.png",
        width: 1200,
        height: 630,
        alt: "MaxGreen Energy",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxGreen Energy — Pakistan's Trusted Solar Company",
    description:
      "High-performance solar systems for homes and businesses. Professional installation in Karachi & Lahore.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
