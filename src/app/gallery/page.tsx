import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Solar Installation Gallery | MaxGreen Energy Pakistan",
  description:
    "Explore MaxGreen Energy's gallery of solar installations — from residential to commercial and industrial projects.",
};

const images = [
  { src: "/images/gallery/141280255_3761391490610763_3387233819776720571_n.jpg", alt: "MaxGreen solar installation" },
  { src: "/images/gallery/151095551_3837310889685489_4310667464715404164_n.jpg", alt: "MaxGreen solar project" },
  { src: "/images/gallery/321435789_1779805325738262_6005205314212540954_n.jpg", alt: "Solar panel installation" },
  { src: "/images/gallery/416024326_788622783283508_7039702999602095031_n.jpg", alt: "Solar panels on rooftop" },
  { src: "/images/gallery/Screenshot-2024-01-23-at-11.56.32 PM.png", alt: "Solar system overview" },
  { src: "/images/gallery/Screenshot-2024-01-23-at-11.56.54 PM.png", alt: "Solar installation view" },
  { src: "/images/gallery/Screenshot-2024-01-23-at-11.57.35 PM.png", alt: "Rooftop solar panels" },
  { src: "/images/gallery/Screenshot-2024-01-23-at-11.59.07 PM-1.png", alt: "Solar energy system" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.27-PM.jpeg", alt: "MaxGreen solar installation" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.28-PM-2.jpeg", alt: "Solar panel array" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.28-PM.jpeg", alt: "Solar rooftop system" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.29-PM.jpeg", alt: "Solar installation Pakistan" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.31-PM.jpeg", alt: "Clean energy installation" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.32-PM-2.jpeg", alt: "Solar system installation" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.32-PM-3.jpeg", alt: "Rooftop solar Pakistan" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.43.32-PM.jpeg", alt: "Solar energy project" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.44.12-PM.jpeg", alt: "MaxGreen Energy project" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.47.59-PM-2.jpeg", alt: "Solar installation complete" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.47.59-PM-3.jpeg", alt: "Solar panels installed" },
  { src: "/images/gallery/WhatsApp-Image-2024-01-25-at-3.47.59-PM.jpeg", alt: "MaxGreen solar project" },
];

export default function GalleryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://maxgreenenergy.com.pk/gallery/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/gallery/", name: "Gallery" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Gallery"
        title="Inspiring Solar Projects"
        subtitle="A look at some of our 2000+ solar installations across Pakistan — homes, offices, schools, and industrial facilities."
      />

      {/* Gallery Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 8 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Ready to Add Your Home to Our Gallery?
          </h2>
          <p className="text-green-300 text-lg mb-8">
            Join thousands of satisfied MaxGreen customers and start your clean energy journey today.
          </p>
          <Link href="/contact-us/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
