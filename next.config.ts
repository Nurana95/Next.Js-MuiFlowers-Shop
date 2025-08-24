import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['flagcdn.com', 'example.com'],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.usedExports = true;
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};


export default nextConfig;