/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.alser.kz'], // Добавляем домен "cdn.alser.kz"
  },
};

module.exports = nextConfig;
