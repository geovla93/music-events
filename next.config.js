/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    newNextLinkBehavior: true,
    images: { allowFutureImage: true },
  },
};
