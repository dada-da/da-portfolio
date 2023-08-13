/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.freebiesupply.com',
        port: '',
        pathname: '/logos/large/**',
      },
    ],
  },
};

module.exports = nextConfig;
