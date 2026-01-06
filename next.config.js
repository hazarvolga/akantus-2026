/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // ŞİMDİLİK KALDIR
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    serverExternalPackages: [], // gerekiyorsa burada kullan
  },
}

module.exports = nextConfig