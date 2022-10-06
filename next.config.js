/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fonts.gstatic.com"],
  },
};

module.exports = nextConfig;
