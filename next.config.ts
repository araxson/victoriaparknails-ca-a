import type { NextConfig } from 'next'

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
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Force static rendering for all pages
  async generateBuildId() {
    return 'build-' + Date.now()
  },
}

export default nextConfig
