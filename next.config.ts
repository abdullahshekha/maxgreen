import type { NextConfig } from "next";

// Allow-list for the third parties the site actually uses: GA4 + Google Ads (gtag),
// Microsoft Clarity, Meta Pixel, reCAPTCHA v3, YouTube + Google Maps embeds. Inline scripts/styles
// are permitted because Next.js emits inline bootstrap scripts and we have no nonce setup.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://www.gstatic.com https://*.clarity.ms https://scripts.clarity.ms https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googleadservices.com https://*.doubleclick.net https://www.google.com https://*.google.com.pk https://*.clarity.ms https://www.facebook.com https://connect.facebook.net",
  "frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com https://td.doubleclick.net https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

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
      // Second batch of legacy WordPress URLs (2026-10-12). Cross-checked Search Console's
      // 90-day page list against live status codes again and found 77 more still-indexed
      // URLs returning 404 — 48 are blog posts that exist under /blogs/[slug]/ (same slug),
      // the rest map to the closest live page. Pre-migration casino-spam URLs are left as
      // 404 on purpose (not redirected).
      {
        source: "/solar-panel-mounting-angle-guide-in-karachi-for-maximum-efficiency",
        destination: "/blogs/why-proper-mounting-structures-matter-in-solar-panel-efficiency",
        permanent: true,
      },
      {
        source: "/top-10-solar-companies-in-lahore-pakistan",
        destination: "/blogs/top-10-solar-companies-in-lahore-pakistan",
        permanent: true,
      },
      {
        source: "/1000w-solar-panel-price-in-pakistan",
        destination: "/blogs/1000w-solar-panel-price-in-pakistan",
        permanent: true,
      },
      {
        source: "/3kw-solar-system-prices-karachi",
        destination: "/blogs/3kw-solar-system-prices-karachi",
        permanent: true,
      },
      {
        source: "/bh-smith-structure",
        destination: "/blogs/solar-structures",
        permanent: true,
      },
      {
        source: "/solar-structures",
        destination: "/blogs/solar-structures",
        permanent: true,
      },
      {
        source: "/tax-on-solar-panels-pakistan",
        destination: "/blogs/tax-on-solar-panels-pakistan",
        permanent: true,
      },
      {
        source: "/10-kw-solar-system-price-in-karachi-2026-guide-cost-roi-installation-details",
        destination: "/blogs/10-kw-solar-system-price-in-karachi-2026-guide",
        permanent: true,
      },
      {
        source: "/10kw-solar-system-price-pk",
        destination: "/blogs/10kw-solar-system-price-pk",
        permanent: true,
      },
      {
        source: "/15-kva-solar-system-price-in-pakistan",
        destination: "/blogs/15-kva-solar-system-price-in-pakistan",
        permanent: true,
      },
      {
        source: "/30-kw-solar-system-price-in-karachi-lahore-2026",
        destination: "/blogs/30-kw-solar-system-price-in-karachi-and-lahore-2026",
        permanent: true,
      },
      {
        source: "/550-watt-solar-panel-price-in-pakistan",
        destination: "/blogs/550-watt-solar-panel-price-in-pakistan",
        permanent: true,
      },
      {
        source: "/600-watt-solar-panel-price-in-pakistan",
        destination: "/blogs/600-watt-solar-panel-price-in-pakistan",
        permanent: true,
      },
      {
        source: "/700-watt-solar-panel-prices-in-pakistan",
        destination: "/blogs/700-watt-solar-panel-prices-in-pakistan",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/avoiding-peak-hour-electricity-charges-during-extreme-weather-in-karachi",
        destination: "/blogs/avoiding-peak-hour-electricity-charges-during-extreme-weather-in-karachi",
        permanent: true,
      },
      {
        source: "/best-solar-company-in-karachi-2024",
        destination: "/blogs/top-10-solar-companies-in-karachi",
        permanent: true,
      },
      {
        source: "/best-solar-panels-in-pakistan",
        destination: "/blogs/top-10-solar-panels-in-karachi",
        permanent: true,
      },
      {
        source: "/buying-and-installing-a-solar-geyser-in-lahore",
        destination: "/blogs/buying-and-installing-a-solar-geyser-in-lahore",
        permanent: true,
      },
      {
        source: "/category/solar-facts",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/category/solar-geyser",
        destination: "/solar-geyser",
        permanent: true,
      },
      {
        source: "/flexible-solar-panels-pakistan",
        destination: "/blogs/flexible-solar-panels-pakistan",
        permanent: true,
      },
      {
        source: "/how-do-i-read-my-electricity-bill-and-understand-my-usage",
        destination: "/blogs/how-do-i-read-my-electricity-bill-and-understand-my-usage",
        permanent: true,
      },
      {
        source: "/how-industrial-solar-solutions-are-reducing-energy-costs-nationwide",
        destination: "/blogs/how-industrial-solar-solutions-are-reducing-energy-costs-nationwide",
        permanent: true,
      },
      {
        source: "/how-lahores-manufacturing-sector-can-save-big-with-solar-solutions",
        destination: "/blogs/solar-system-for-textile-industry-in-lahore-complete-guide-2026",
        permanent: true,
      },
      {
        source: "/how-many-solar-panels-are-required-for-a-1-5-ton-ac",
        destination: "/blogs/how-many-solar-panels-are-required-for-a-1-5-ton-ac",
        permanent: true,
      },
      {
        source: "/how-solar-power-is-transforming-homes-in-pakistan",
        destination: "/blogs/how-solar-power-is-transforming-homes-in-pakistan",
        permanent: true,
      },
      {
        source: "/how-to-apply-for-a-solar-panel-scheme-in-pakistan",
        destination: "/blogs/how-to-apply-for-a-solar-panel-scheme-in-pakistan",
        permanent: true,
      },
      {
        source: "/how-to-clean-solar-panels",
        destination: "/blogs/how-to-clean-solar-panels",
        permanent: true,
      },
      {
        source: "/how-to-maintain-your-solar-setup-in-pakistans-weather",
        destination: "/blogs/how-to-maintain-your-solar-setup-in-pakistans-weather",
        permanent: true,
      },
      {
        source: "/how-to-reduce-electricity-bill",
        destination: "/blogs/can-a-solar-system-reduce-my-electricity-bill-to-zero",
        permanent: true,
      },
      {
        source: "/invest-in-your-future-solar-panels-at-lowest-price-ever",
        destination: "/blogs/invest-in-your-future-solar-panels-at-lowest-price-ever",
        permanent: true,
      },
      {
        source: "/lahore-domestic-solar-solutions",
        destination: "/blogs/lahore-domestic-solar-solutions",
        permanent: true,
      },
      {
        source: "/night-solar-panels-in-pakistan",
        destination: "/blogs/night-solar-panels-in-pakistan",
        permanent: true,
      },
      {
        source: "/on-grid-solar-inverters-goodwe-vs-sungrow-inverters",
        destination: "/blogs/on-grid-solar-inverters-goodwe-vs-sungrow-inverters",
        permanent: true,
      },
      {
        source: "/power-of-rooftop-solar",
        destination: "/blogs/power-of-rooftop-solar",
        permanent: true,
      },
      {
        source: "/residential-vs-commercial-solar-systems-which-one-fits-your-needs",
        destination: "/blogs/residential-vs-commercial-solar-systems-which-one-fits-your-needs",
        permanent: true,
      },
      {
        source: "/reverse-electricity-feeding",
        destination: "/blogs/net-metering-pakistan",
        permanent: true,
      },
      {
        source: "/rising-power-tariffs-in-pakistan-how-can-solar-power-help",
        destination: "/blogs/rising-power-tariffs-in-pakistan-how-can-solar-power-help",
        permanent: true,
      },
      {
        source: "/save-big-on-sui-gas-with-solar-geysers-in-pakistan",
        destination: "/solar-geyser",
        permanent: true,
      },
      {
        source: "/solar-ac-price-in-pakistan",
        destination: "/blogs/solar-ac-price-in-pakistan-2024",
        permanent: true,
      },
      {
        source: "/solar-battery-price-drops-pakistan",
        destination: "/blogs/solar-battery-price-drops-pakistan",
        permanent: true,
      },
      {
        source: "/solar-energy-and-the-future-of-pakistans-textile-industry",
        destination: "/blogs/solar-energy-and-the-future-of-pakistans-textile-industry",
        permanent: true,
      },
      {
        source: "/solar-geysers-in-karachi",
        destination: "/blogs/solar-geysers-in-karachi",
        permanent: true,
      },
      {
        source: "/solar-installation-services-solutions-for-warehouses-in-karachi",
        destination: "/blogs/solar-installation-services-solutions-for-warehouses-in-karachi",
        permanent: true,
      },
      {
        source: "/solar-panel-frame-in-pakistan",
        destination: "/blogs/solar-panel-frame-in-pakistan",
        permanent: true,
      },
      {
        source: "/solar-power-generation-summer-vs-winter",
        destination: "/blogs/solar-power-generation-summer-vs-winter",
        permanent: true,
      },
      {
        source: "/solar-quotation-in-pakistan",
        destination: "/blogs/solar-quotation-in-pakistan",
        permanent: true,
      },
      {
        source: "/solar-solution-for-gyms-in-karachi",
        destination: "/blogs/solar-solution-for-gyms-in-karachi",
        permanent: true,
      },
      {
        source: "/solar-solution-for-pharmacies-in-karachi-better-health-services",
        destination: "/blogs/solar-solution-for-pharmacies-in-karachi-better-health-services",
        permanent: true,
      },
      {
        source: "/solar-solutions-for-guest-houses-hotels-in-karachi",
        destination: "/blogs/solar-solutions-for-guest-houses-hotels-in-karachi",
        permanent: true,
      },
      {
        source: "/solar-solutions-for-hospitals-in-karachi-pakistan",
        destination: "/blogs/solar-solutions-for-hospitals-in-karachi-pakistan",
        permanent: true,
      },
      {
        source: "/solar-solutions-for-mosques-masjid-in-karachi",
        destination: "/blogs/solar-solutions-for-mosques-masjid-in-karachi",
        permanent: true,
      },
      {
        source: "/solar-solutions-for-petrol-pumps-in-karachi",
        destination: "/solar-solutions-company-karachi",
        permanent: true,
      },
      {
        source: "/solar-solutions-for-shopping-malls-karachi",
        destination: "/blogs/solar-solutions-for-shopping-malls-karachi",
        permanent: true,
      },
      {
        source: "/solar-system-calculation-for-home-pakistan",
        destination: "/cost-estimator",
        permanent: true,
      },
      {
        source: "/solar-system-on-installments-in-pakistan",
        destination: "/blogs/solar-system-on-installments-in-pakistan",
        permanent: true,
      },
      {
        source: "/tag/10kw-solar-system-price-in-pakistan",
        destination: "/blogs/10kw-solar-system-price-pk",
        permanent: true,
      },
      {
        source: "/tag/night-solar-panel-price-in-pakistan",
        destination: "/blogs/night-solar-panels-in-pakistan",
        permanent: true,
      },
      {
        source: "/tag/solar-energy",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/tag/solar-structure-karachi",
        destination: "/blogs/solar-structures",
        permanent: true,
      },
      {
        source: "/tag/top-10-solar-panels-in-karachi",
        destination: "/blogs/top-10-solar-panels-in-karachi",
        permanent: true,
      },
      {
        source: "/top-10-advantages-of-solar-energy-in-pakistan",
        destination: "/blogs/top-10-advantages-of-solar-energy-in-pakistan",
        permanent: true,
      },
      {
        source: "/top-10-best-solar-companies-in-pakistan",
        destination: "/blogs/top-10-solar-companies-in-karachi",
        permanent: true,
      },
      {
        source: "/top-10-renewable-energy-sources-in-pakistan",
        destination: "/blogs/top-10-renewable-energy-sources-in-pakistan",
        permanent: true,
      },
      {
        source: "/top-10-solar-inverters-pakistan",
        destination: "/blogs/top-10-solar-inverters-pakistan",
        permanent: true,
      },
      {
        source: "/top-10-solar-panels-in-karachi",
        destination: "/blogs/top-10-solar-panels-in-karachi",
        permanent: true,
      },
      {
        source: "/understanding-net-metering-how-it-works-and-why-it-matters",
        destination: "/blogs/understanding-net-metering-how-it-works-and-why-it-matters",
        permanent: true,
      },
      {
        source: "/whats-the-best-direction-for-solar-panels-to-face",
        destination: "/blogs/how-solar-panels-works",
        permanent: true,
      },
      {
        source: "/why-degradation-rate-is-important-when-choosing-solar-panels",
        destination: "/blogs/why-degradation-rate-is-important-when-choosing-solar-panels",
        permanent: true,
      },
      {
        source: "/why-proper-mounting-structures-matter-in-solar-panel-efficiency",
        destination: "/blogs/why-proper-mounting-structures-matter-in-solar-panel-efficiency",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
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
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
