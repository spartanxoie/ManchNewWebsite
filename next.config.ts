import type { NextConfig } from 'next';
import type { Configuration, ResolveOptions } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "static.wixstatic.com"],
  },
  webpack: (config: Configuration) => {
    // Type assertion to allow custom aliases
    (config.resolve as ResolveOptions).alias = {
      ...config.resolve?.alias,
      '@': 'public',
    };

    return config;
  }
};

export default nextConfig;
