import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: '.next-build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async headers() {
    return [
      {
        // Wyłącz cache dla bundli Next, aby uniknąć problemów z przestarzałymi chunkami/CSS lokalnie
        source: '/_next/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      {
        // Dodatkowe zabezpieczenie dla wszystkich ścieżek (tylko środowisko lokalne)
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
    ];
  },
};

export default nextConfig;
