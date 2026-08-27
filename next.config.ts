import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maxgreenenergy.com.pk",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Leftover WordPress "trashed" slug still ranking for "solar air conditioner
        // price in pakistan" (2.4K monthly searches) — preserve that ranking equity
        // by pointing it at the renamed, live post instead of a dead end.
        source: "/blogs/__trashed-3",
        destination: "/blogs/solar-ac-price-in-pakistan-2024",
        permanent: true,
      },
      // Legacy flat WordPress blog permalinks (no /blogs/ prefix) — still indexed and
      // earning impressions in Search Console, but 404ing since the migration moved
      // this content under /blogs/[slug]/ without leaving redirects behind. Found via
      // cross-referencing GSC's indexed-page list against live status codes (2026-08-27)
      // — these didn't surface in the original Semrush audit crawl since they're no
      // longer linked internally, only still indexed from before the migration.
      {
        source: "/net-metering-pakistan",
        destination: "/blogs/net-metering-pakistan",
        permanent: true,
      },
      {
        source: "/solar-financing-pakistan",
        destination: "/blogs/solar-financing-pakistan",
        permanent: true,
      },
      {
        source: "/how-solar-panels-works",
        destination: "/blogs/how-solar-panels-works",
        permanent: true,
      },
      {
        source: "/lead-acid-vs-lithium-batteries-for-solar-in-pakistan",
        destination: "/blogs/lead-acid-vs-lithium-batteries-for-solar-in-pakistan",
        permanent: true,
      },
      {
        source: "/solar-solution-for-commercial-building-in-lahore",
        destination: "/blogs/solar-solution-for-commercial-building-in-lahore",
        permanent: true,
      },
      {
        source: "/solar-solution-for-factories-energy-solutions-for-industrial-karachi",
        destination:
          "/blogs/solar-solution-for-factories-energy-solutions-for-industrial-karachi",
        permanent: true,
      },
      {
        source: "/solar-solutions-in-karachi",
        destination: "/blogs/solar-solutions-in-karachi",
        permanent: true,
      },
      {
        source: "/can-a-solar-system-reduce-my-electricity-bill-to-zero",
        destination: "/blogs/can-a-solar-system-reduce-my-electricity-bill-to-zero",
        permanent: true,
      },
      {
        source: "/calculate-solar-solution-cost-lahore",
        destination: "/blogs/calculate-solar-solution-cost-lahore",
        permanent: true,
      },
      {
        source: "/green-energy-solutions-in-karachi",
        destination: "/blogs/green-energy-solutions-in-karachi",
        permanent: true,
      },
      {
        source: "/5kw-solar-system-price",
        destination: "/blogs/5kw-solar-system-price",
        permanent: true,
      },
      {
        source: "/solar-services-in-karachi",
        destination: "/blogs/solar-services-in-karachi",
        permanent: true,
      },
      {
        source: "/top-10-solar-companies-in-karachi",
        destination: "/blogs/top-10-solar-companies-in-karachi",
        permanent: true,
      },
      // No exact-match live post for these three — redirected to the closest relevant
      // live page instead of a 404.
      {
        source: "/best-solar-companies-in-pakistan-for-home-installations",
        destination: "/solar-system-for-home",
        permanent: true,
      },
      {
        source: "/best-solar-company-in-lahore",
        destination: "/blogs/top-10-solar-companies-in-lahore-pakistan",
        permanent: true,
      },
      {
        source: "/how-hybrid-solar-systems-provide-backup-during-power-outages",
        destination: "/blogs/on-grid-off-grid-hybrid-solar-power-system",
        permanent: true,
      },
      // Old WordPress tag-archive and news-listing pages — no single-post equivalent,
      // so these point at the blog listing rather than a specific post.
      {
        source: "/tag/top-10-best-solar-companies-in-pakistan",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/tag/top-10-best-solar-in-karachi",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/news-insight",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self'; upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
