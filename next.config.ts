import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Note: As of Next.js 14, Turbopack is enabled by default in development
  // The actual enabling happens in package.json scripts with the --turbo flag
};

export default nextConfig;
