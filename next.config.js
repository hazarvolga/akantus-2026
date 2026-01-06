/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Hosting compatibility
  experimental: {
    serverComponentsExternalPackages: []
  },
  
  // Static export için gerekli konfigürasyon (lokalde kullanım için)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig