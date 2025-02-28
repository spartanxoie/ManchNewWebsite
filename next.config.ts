import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "static.wixstatic.com"], // Add the Cloudinary domain here
  },
};

export default nextConfig;
