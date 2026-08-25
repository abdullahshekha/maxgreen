import type { MetadataRoute } from "next";
import { blogs } from "./blogs/data";

const BASE_URL = "https://maxgreenenergy.com.pk";

const staticRoutes = [
  "",
  "/about",
  "/solutions",
  "/solar-system-for-home",
  "/commercial",
  "/industrial",
  "/projects",
  "/gallery",
  "/contact-us",
  "/cost-estimator",
  "/solar-solutions-company-karachi",
  "/solar-solutions-lahore-company",
  "/solar-solutions-islamabad",
  "/author/taha-alam",
  "/blogs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}/`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
