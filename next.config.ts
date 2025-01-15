import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'www.mathworks.com',
      },
      {
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
