import { Sun, Users, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Sun,
    value: "2000+",
    label: "Solar Installations",
    description: "Homes & businesses powered",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Excellence",
    description: "Trusted since 2014",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Cities Serving",
    description: "Karachi, Lahore & more",
  },
  {
    icon: Users,
    value: "2 Years",
    label: "Free After-Sales Service",
    description: "Post-installation support",
  },
];

export default function Stats() {
  return (
    <section className="bg-green-950 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-800/60 flex items-center justify-center mb-3 group-hover:bg-green-700 transition-colors">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-green-300 font-semibold text-sm mb-0.5">
                  {stat.label}
                </div>
                <div className="text-green-600 text-xs">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
