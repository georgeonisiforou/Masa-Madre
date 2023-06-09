/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  // env: {
  //   SANITY_DATASET: process.env.SANITY_DATASET,
  //   SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  // },
};

module.exports = nextConfig;
