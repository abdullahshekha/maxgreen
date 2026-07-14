import Image from "next/image";

const partners = [
  { name: "GoodWe", src: "/images/technical-partners/GOODWE.png" },
  { name: "Sungrow", src: "/images/technical-partners/SUNGROW.png" },
  { name: "Dyness", src: "/images/technical-partners/DYNESS.png" },
  { name: "FoxESS", src: "/images/technical-partners/FOXESS.png" },
  { name: "Huawei", src: "/images/technical-partners/HUAWEI.png" },
  { name: "JA Solar", src: "/images/technical-partners/JASOLAR.png" },
  { name: "Pulontech", src: "/images/technical-partners/PULONTECH.png" },
  { name: "Soluna", src: "/images/technical-partners/SOLUNA.png" },
  { name: "Trina Solar", src: "/images/technical-partners/TRINASOLAR.png" },
  { name: "Aiko", src: "/images/technical-partners/AIKO.png" },
  { name: "Longi Solar", src: "/images/technical-partners/LONGISOLAR.png" },
  { name: "Jinko Solar", src: "/images/technical-partners/SOLAR-JINKO.png" },
];

// Duplicate for seamless infinite scroll
const allPartners = [...partners, ...partners];

export default function TechnicalPartners() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            Technical Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Powered by World Class Technology
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            We only install internationally certified panels, inverters, and
            batteries from globally trusted manufacturers, so you always know
            exactly what is on your roof.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex gap-8 animate-marquee-reverse w-max">
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="relative flex-shrink-0 w-36 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center px-4 hover:shadow-md hover:z-10 transition-shadow"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto transition-transform duration-300 hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
