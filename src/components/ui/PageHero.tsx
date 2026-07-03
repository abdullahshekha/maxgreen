import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  breadcrumb: string;
  breadcrumbHref?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({ breadcrumb, breadcrumbHref, title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section className="relative bg-green-950 pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background photo */}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
      )}
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, #92c31e 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-900/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm text-green-400/70 mb-5">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          {breadcrumbHref ? (
            <Link href={breadcrumbHref} className="hover:text-green-400 transition-colors">{breadcrumb}</Link>
          ) : (
            <span className="text-green-400">{breadcrumb}</span>
          )}
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-green-300/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
