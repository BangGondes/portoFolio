import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["example.com"], // Update with actual domains
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  i18n: {
    locales: ["en", "es"], // Add locales
    defaultLocale: "en",
  },

  experimental: {
    // You can add other experimental features here if needed
  },
};

export default nextConfig;
