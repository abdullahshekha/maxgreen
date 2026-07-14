"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

const footerLinks = {
  Solutions: [
    { label: "Residential Solar", href: "/solar-system-for-home/" },
    { label: "Commercial Solar", href: "/commercial/" },
    { label: "Industrial Solar", href: "/industrial/" },
    { label: "Solar Geyser", href: "/solar-geyser/" },
  ],
  Company: [
    { label: "About Us", href: "/about/" },
    { label: "Projects", href: "/projects/" },
    { label: "Blogs", href: "/blogs/" },
    { label: "Contact Us", href: "/contact-us/" },
  ],
  Tools: [
    { label: "Solar Calculator", href: "#calculator" },
    { label: "Cost Estimator", href: "/cost-estimator/" },
    { label: "Get Free Quote", href: "#get-quote" },
  ],
  Locations: [
    { label: "Solar in Karachi", href: "/solar-solutions-company-karachi/" },
    { label: "Solar in Lahore", href: "/solar-solutions-lahore-company/" },
    { label: "Solar in Islamabad", href: "/solar-solutions-islamabad/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/MaxGreen-logo.png"
                alt="MaxGreen Energy"
                width={160}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert mb-5"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-gray-300">
              Pakistan&apos;s top rated solar energy company delivering reliable,
              affordable, and high-performance solar systems for homes and
              businesses across Karachi, Lahore &amp; Islamabad.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:+923000341048"
                onClick={() => trackConversion("phone_click")}
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-500" />
                +92 300 034 1048
              </a>
              <a
                href="mailto:sales@maxgreenenergy.com.pk"
                onClick={() => trackConversion("email_click")}
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-green-500" />
                sales@maxgreenenergy.com.pk
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <div>Karachi — DHA Phase 6 Bukhari Commercial</div>
                  <div>Lahore — DHA Phase 6 Fairways</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/18smy6akyA/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/maxgreenenergypakistan?igsh=dHJtc2VzeTE5c2Fs", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/maxenergypakistan/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} MaxGreen Energy (Pvt.) Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
