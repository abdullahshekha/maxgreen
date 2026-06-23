"use client";

import Image from "next/image";
import { ArrowRight, Calculator, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-hero.jpeg"
          alt="Solar panels on a building"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-sm font-semibold tracking-wide">
              Top Rated Solar Company Across Pakistan
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            <span className="text-green-400">2100+</span> Projects across
            Pakistan installing Solar for{" "}
            <span className="text-green-400">Homes and Industries</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl">
            Maxgreen Energy with 9+ years of experience and top rated solar
            company in DHA provides custom NEPRA Compliant structures making
            sure your electricity bills drop to ZERO.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("get-quote")}
              className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your Savings
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
            {[
              { value: "2100+", label: "Solar Installations" },
              { value: "9+", label: "Years Experience" },
              { value: "3", label: "Cities Served" },
              { value: "2 Yrs", label: "Free After-Sales" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-green-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("solutions")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
