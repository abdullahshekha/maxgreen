import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { blogs, getBlogBySlug, type BlogSection } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | MaxGreen Energy`,
    description: blog.metaDescription,
    openGraph: {
      title: `${blog.title} | MaxGreen Energy`,
      description: blog.metaDescription,
      url: `https://maxgreenenergy.com.pk/blogs/${blog.slug}/`,
      images: [{ url: `https://maxgreenenergy.com.pk${blog.featuredImage}`, alt: blog.title }],
      type: "article",
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  Commercial: "bg-blue-100 text-blue-700",
  Residential: "bg-green-100 text-green-700",
  Industrial: "bg-orange-100 text-orange-700",
};

function renderSection(section: BlogSection, index: number) {
  const { type, content } = section;

  switch (type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-10 mb-4">
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-xl font-extrabold text-gray-900 mt-8 mb-3">
          {content}
        </h3>
      );
    case "h4":
      return (
        <h4 key={index} className="text-lg font-bold text-gray-900 mt-6 mb-2">
          {content}
        </h4>
      );
    case "p":
      return (
        <p key={index} className="text-gray-600 text-base leading-relaxed mb-4">
          {content}
        </p>
      );
    case "ul": {
      const items = content.split(" || ").filter(Boolean);
      return (
        <ul key={index} className="space-y-2 mb-5 ml-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
              {item.trim()}
            </li>
          ))}
        </ul>
      );
    }
    case "ol": {
      const items = content.split(" || ").filter(Boolean);
      return (
        <ol key={index} className="space-y-2 mb-5 ml-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 text-base">
              <span className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {item.trim()}
            </li>
          ))}
        </ol>
      );
    }
    case "table": {
      const rows = content.split(" || ").filter(Boolean);
      const headers = rows[0].split(" | ").map((h) => h.trim());
      const dataRows = rows.slice(1).map((row) => row.split(" | ").map((c) => c.trim()));
      return (
        <div key={index} className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-green-950 text-white">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-5 py-3 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {dataRows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-5 py-3 ${ci === 0 ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const prev = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;
  const next = currentIndex > 0 ? blogs[currentIndex - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    datePublished: blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "MaxGreen Energy",
      url: "https://maxgreenenergy.com.pk",
    },
    image: `https://maxgreenenergy.com.pk${blog.featuredImage}`,
    url: `https://maxgreenenergy.com.pk/blogs/${blog.slug}/`,
    articleSection: blog.category,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-green-950 pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #92c31e 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-green-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-green-700">/</span>
            <Link href="/blogs/" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span className="text-green-700">/</span>
            <span className="text-green-200 line-clamp-1">{blog.title}</span>
          </nav>

          {/* Category */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5 ${CATEGORY_COLORS[blog.category]}`}
          >
            <Tag className="w-3 h-3" />
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-green-300">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(blog.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {blog.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-2">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-like">
          {blog.sections.map((section, i) => renderSection(section, i))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-green-950 p-8 sm:p-12 text-center">
          <span className="inline-block text-green-400 font-bold text-sm tracking-widest uppercase mb-3">
            Ready to Go Solar?
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Get Your Free Solar Survey Today
          </h3>
          <p className="text-green-300 mb-7 max-w-xl mx-auto">
            Our team will visit your site, assess your energy needs, and provide
            a custom NEPRA-compliant proposal — absolutely free.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            Book Free Survey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {prev && (
              <Link
                href={`/blogs/${prev.slug}`}
                className="group flex items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div className="min-w-0">
                  <div className="text-xs text-gray-400 mb-0.5">Previous</div>
                  <div className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug">
                    {prev.title}
                  </div>
                </div>
              </Link>
            )}
            {next && (
              <Link
                href={`/blogs/${next.slug}`}
                className={`group flex items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition-all ${!prev ? "sm:col-start-2" : ""}`}
              >
                <div className="min-w-0 flex-1 text-right">
                  <div className="text-xs text-gray-400 mb-0.5">Next</div>
                  <div className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug">
                    {next.title}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        )}

        {/* Back to blogs */}
        <div className="mt-8 text-center">
          <Link
            href="/blogs/"
            className="inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all blogs
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
