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
};

export default nextConfig;
