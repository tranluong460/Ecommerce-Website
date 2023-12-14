/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "routine.vn",
      },
      {
        protocol: "https",
        hostname: "product.hstatic.net",
      },
    ],
  },
};

module.exports = nextConfig;
