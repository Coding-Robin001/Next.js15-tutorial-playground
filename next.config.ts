import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 disables ESLint blocking the build
  },
  images: {
    domains: ["upload.wikimedia.org"], // 👈 allow external images from Wikipedia
  },
};

export default nextConfig;
