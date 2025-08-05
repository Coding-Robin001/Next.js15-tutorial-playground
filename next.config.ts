import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 disables ESLint blocking the build
  },
  /* config options here */
};

export default nextConfig;
