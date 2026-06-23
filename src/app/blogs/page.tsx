import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import BlogsList from "./BlogsList";

export const metadata: Metadata = {
  title: "Solar Energy Blogs & Guides | MaxGreen Energy",
  description:
    "Expert solar energy articles covering residential, commercial, and industrial solar systems in Pakistan. Learn about pricing, maintenance, net metering, and more.",
  openGraph: {
    title: "Solar Energy Blogs & Guides | MaxGreen Energy",
    description:
      "Expert solar energy articles covering residential, commercial, and industrial solar systems in Pakistan.",
    url: "https://maxgreenenergy.com.pk/blogs/",
  },
};

export default function BlogsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        breadcrumb="Blogs"
        title="Solar Energy Insights & Guides"
        subtitle="Expert articles on solar systems, pricing, maintenance, net metering, and more — helping you make the right energy decisions for your home or business."
      />
      <BlogsList />
      <Footer />
    </main>
  );
}
