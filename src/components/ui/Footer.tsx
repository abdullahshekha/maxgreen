import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Residential Solar", href: "/residential" },
    { label: "Commercial Solar", href: "/commercial" },
    { label: "Industrial Solar", href: "/industrial" },
    { label: "Solar Geyser", href: "/solar-geyser" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ],
  Tools: [
    { label: "Solar Calculator", href: "#calculator" },
    { label: "Cost Estimator", href: "#calculator" },
    { label: "Get Free Quote", href: "#get-quote" },
  ],
  Locations: [
    { label: "Solar in Karachi", href: "/karachi" },
    { label: "Solar in Lahore", href: "/lahore" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
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
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Pakistan&apos;s trusted solar energy company delivering reliable,
              affordable, and high-performance solar systems for homes and
              businesses.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:+923000341048"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-600" />
                +92 300 034 1048
              </a>
              <a
                href="mailto:info@maxgreenenergy.com.pk"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-green-600" />
                info@maxgreenenergy.com.pk
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>DHA Phase 6, Karachi &amp; Lahore</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "https://www.facebook.com/MaxGreenEnergyPk/", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/maxgreen_energy/", label: "Instagram" },
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
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
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
                        className="text-sm hover:text-green-400 transition-colors"
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
        <div className="py-5 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
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
