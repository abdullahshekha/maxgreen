import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sun, Award, Users } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Syed Taha Alam Shah - Co-Founder, MaxGreen Energy",
  description:
    "Syed Taha Alam Shah is the Co-Founder of MaxGreen Energy, a leading solar energy company delivering innovative and sustainable energy solutions across Pakistan.",
};

export default function TahaAlamAuthorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: "Syed Taha Alam Shah",
                jobTitle: "Co-Founder, MaxGreen Energy",
                worksFor: { "@type": "Organization", name: "MaxGreen Energy" },
                url: "https://maxgreenenergy.com.pk/author/taha-alam/",
                image: "https://maxgreenenergy.com.pk/images/team/taha-alam.jpeg",
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://maxgreenenergy.com.pk/author/taha-alam/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, item: { "@id": "https://maxgreenenergy.com.pk", name: "Home" } },
                  { "@type": "ListItem", position: 2, item: { "@id": "https://maxgreenenergy.com.pk/blogs/", name: "Blogs" } },
                  { "@type": "ListItem", position: 3, item: { "@id": "https://maxgreenenergy.com.pk/author/taha-alam/", name: "Syed Taha Alam Shah" } },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <PageHero
        breadcrumb="Taha Alam"
        breadcrumbHref="/blogs/"
        title="Syed Taha Alam Shah"
        subtitle="Co-Founder, MaxGreen Energy | Renewable Energy Expert"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <Image
                src="/images/team/taha-alam.jpeg"
                alt="Syed Taha Alam Shah - Co-Founder, MaxGreen Energy"
                width={400}
                height={400}
                className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { icon: Sun, value: "9+", label: "Years Experience" },
                  { icon: Award, value: "2100+", label: "Projects" },
                  { icon: Users, value: "3", label: "Cities Served" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-3">
                      <Icon className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-lg font-extrabold text-gray-900">{stat.value}</div>
                      <div className="text-[11px] text-gray-500">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-2">
              <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
                Co-Founder, MaxGreen Energy | Renewable Energy Expert
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                About Syed Taha Alam Shah
              </h2>
              <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
                <p>
                  Syed Taha Alam Shah is the Co-Founder of MaxGreen Energy, a leading solar energy company committed to delivering innovative and sustainable energy solutions across Pakistan. With years of experience in the renewable energy sector, he has been instrumental in helping homeowners, businesses, and industries reduce energy costs through high-quality solar power systems.
                </p>
                <p>
                  His expertise includes residential, commercial, and industrial solar solutions, net metering, energy management, project planning, and the latest advancements in clean energy technologies. Throughout his career, he has worked closely with clients to design efficient solar systems that deliver long-term performance and value.
                </p>
                <p>
                  As an author at MaxGreen Energy, Syed Taha Alam Shah shares practical insights, industry knowledge, and expert guidance on solar energy, renewable technologies, energy efficiency, and sustainability. His articles are based on real-world industry experience and are written to help readers make informed decisions about adopting solar power.
                </p>
                <p>
                  When he is not leading renewable energy projects, Syed stays up to date with emerging technologies and industry trends, ensuring that the information shared through MaxGreen Energy remains accurate, relevant, and valuable.
                </p>
              </div>

              <Link
                href="/blogs/"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 mt-8"
              >
                Read Articles by Taha Alam
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
