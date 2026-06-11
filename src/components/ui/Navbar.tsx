"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  {
    label: "Solutions",
    href: "/solutions/",
    children: [
      { label: "Residential Solar", href: "/solar-system-for-home/" },
      { label: "Commercial Solar", href: "/commercial/" },
      { label: "Industrial Solar", href: "/industrial/" },
    ],
  },
  {
    label: "Locations",
    href: "#",
    children: [
      { label: "Solar in Karachi", href: "/solar-solutions-company-karachi/" },
      { label: "Solar in Lahore", href: "/solar-solutions-lahore-company/" },
      { label: "Solar in Islamabad", href: "/solar-solutions-islamabad/" },
    ],
  },
  { label: "Projects", href: "/projects/" },
  { label: "Blogs", href: "/blogs/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/MaxGreen-logo.png"
              alt="MaxGreen Energy"
              width={208}
              height={62}
              className={`h-[3.25rem] w-auto object-contain transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isScrolled
                        ? "text-gray-700 hover:text-green-600"
                        : "text-white hover:text-green-300"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-green-600"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:+923000341048"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              +92 300 034 1048
            </a>
            <Link
              href="/contact-us/"
              className={`text-sm font-bold px-4 py-2.5 rounded-full border transition-all duration-200 ${
                isScrolled
                  ? "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-green-950"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/cost-estimator/"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Cost Estimator
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                  }
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+923000341048"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:text-green-600"
            >
              <Phone className="w-4 h-4" />
              +92 300 034 1048
            </a>
            <Link
              href="/contact-us/"
              onClick={() => setMobileOpen(false)}
              className="block text-center border border-green-600 text-green-600 text-sm font-bold px-5 py-3 rounded-full transition-colors hover:bg-green-600 hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/cost-estimator/"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-full transition-colors"
            >
              Cost Estimator
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
