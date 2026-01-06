/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Production optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Hosting compatibility - Next.js 15 için güncellenmiş
  serverExternalPackages: []
}

module.exports = nextConfig