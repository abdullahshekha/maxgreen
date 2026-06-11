import Image from "next/image";

const clients = [
  { name: "Subway", src: "/images/clients/subway-client.png" },
  { name: "Soorty", src: "/images/clients/soorty-client.png" },
  { name: "Outfitters", src: "/images/clients/outfitters-client.jpg" },
  { name: "Zellbury", src: "/images/clients/zellbury-client.jpg" },
  { name: "The Lyceum", src: "/images/clients/the-lyceum-client.png" },
  { name: "Saya", src: "/images/clients/saya-client.jpg" },
  { name: "Karachi Public School", src: "/images/clients/karachi-public-school-client.png" },
  { name: "Karachi Broast", src: "/images/clients/karachi-broast-client.jpg" },
  { name: "JB Saeed", src: "/images/clients/jb.saeed-client.jpg" },
  { name: "Britlite", src: "/images/clients/britlite-client.png" },
];

// Duplicate for seamless infinite scroll
const allClients = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by Leading Brands Across Pakistan
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            From iconic restaurants to industrial factories — MaxGreen Energy proudly
            powers some of Pakistan&apos;s most respected organizations.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex gap-8 animate-marquee w-max">
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 w-36 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center px-4 hover:shadow-md transition-shadow"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
