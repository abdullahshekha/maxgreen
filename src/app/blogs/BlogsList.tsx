"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { blogs, type Blog, type BlogCategory } from "./data";

type FilterOption = "All" | BlogCategory;

const CATEGORIES: FilterOption[] = ["All", "Commercial", "Residential", "Industrial"];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getExcerpt(blog: Blog): string {
  const firstPara = blog.sections.find((s) => s.type === "p");
  const text = firstPara?.content ?? blog.metaDescription;
  return text.length > 140 ? text.slice(0, 137) + "..." : text;
}

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  Commercial: "bg-blue-100 text-blue-700",
  Residential: "bg-green-100 text-green-700",
  Industrial: "bg-orange-100 text-orange-700",
};

export default function BlogsList() {
  const [active, setActive] = useState<FilterOption>("All");

  const filtered =
    active === "All" ? blogs : blogs.filter((b) => b.category === active);

  const countFor = (cat: FilterOption) =>
    cat === "All" ? blogs.length : blogs.filter((b) => b.category === cat).length;

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                active === cat
                  ? "bg-green-600 text-white shadow-md shadow-green-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-700"
              }`}
            >
              {cat}
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  active === cat
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {countFor(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No blogs in this category yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                {/* Image */}
                <Link href={`/blogs/${blog.slug}`} className="block relative h-52 overflow-hidden">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[blog.category]}`}
                    >
                      <Tag className="w-3 h-3" />
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {blog.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="text-lg font-extrabold text-gray-900 mb-2 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {getExcerpt(blog)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(blog.date)}
                    </div>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-green-600 hover:text-green-700 group-hover:gap-2 transition-all"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
