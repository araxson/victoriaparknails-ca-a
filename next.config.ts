import type { NextConfig } from 'next'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  // Force static export for maximum SSG performance
  output: 'export',
  trailingSlash: true,
  
  // Disable server-side features not needed for static export
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
    // Optimize for gallery images
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'], // Removed unused @radix-ui/react-icons
  },
  
  // Optimize build performance for large galleries
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Force static rendering for all pages
  async generateBuildId() {
    return 'build-' + Date.now()
  },
}

export default withBundleAnalyzer(nextConfig)
