/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bot.dialogflow.com'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 