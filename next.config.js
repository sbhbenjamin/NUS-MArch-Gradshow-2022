/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    // domains: ['nusmarchgradshow2022.s3.ap-southeast-1.amazonaws.com'],
    loader: 'custom',
    path: 'https://nusmarchgradshow2022.s3.ap-southeast-1.amazonaws.com',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
