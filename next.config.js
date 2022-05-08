/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['strapi.luciabet.site', 'localhost']
  }
}

module.exports = nextConfig
