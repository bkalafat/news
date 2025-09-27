/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // App Router is stable in Next.js 14, no need for experimental flag
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      }
    ]
  },
  typescript: {
    // TypeScript strict mode support
    ignoreBuildErrors: false,
  },
  eslint: {
    // ESLint strict mode
    ignoreDuringBuilds: false,
  }
}

module.exports = nextConfig
