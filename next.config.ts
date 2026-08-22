import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverComponentsHmrCache: false, // Turn off aggressive HMR caching
  },
};

export default nextConfig;
