/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'nusmarchgradshow2022.s3.ap-southeast-1.amazonaws.com/',
      'd18eblg1a9ju11.cloudfront.net',
    ],
    loader: 'custom',
    // path: 'https://d18eblg1a9ju11.cloudfront.net/',
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
