const testimonials = [
  {
    name: "Ms. Samana",
    videoId: "2epqFrG6_AU",
    role: "Residential Client",
    location: "Karachi",
  },
  {
    name: "Shahid Hussain",
    videoId: "1oGUvky7P7A",
    role: "Commercial Client",
    location: "Lahore",
  },
  {
    name: "Siraj Munir",
    videoId: "jKg9OdaLPbw",
    role: "Residential Client",
    location: "Karachi",
  },
  {
    name: "Aleeya Khan",
    videoId: "buWxf0DOeQI",
    role: "Residential Client",
    location: "Karachi",
  },
  {
    name: "Mr. Asad",
    videoId: "N2PTm7GSC88",
    role: "Commercial Client",
    location: "Lahore",
  },
  {
    name: "Mr. Zeeshan",
    videoId: "4l8hhIkwWbM",
    role: "Industrial Client",
    location: "Karachi",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-green-400 font-bold text-sm tracking-widest uppercase mb-3">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            What Our Customers Say
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto">
            Hear directly from homeowners, businesses, and industrial clients
            who&apos;ve made the switch to solar with MaxGreen Energy.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.videoId}
              className="bg-green-900/40 rounded-2xl overflow-hidden border border-green-800/40 hover:border-green-600/50 transition-all duration-300 group"
            >
              {/* YouTube embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${t.videoId}?rel=0&modestbranding=1`}
                  title={`${t.name} testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Client info */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-green-400 text-xs">
                    {t.role} &bull; {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
