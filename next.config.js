/** @type {import('next').NextConfig} */
const env = {};

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "picsum.photos",
      "rukminim1.flixcart.com",
      "media.graphassets.com",
      "efdwsxatehjhvmlqjcyc.supabase.co",
    ],
  },
  env,
};

module.exports = nextConfig;
