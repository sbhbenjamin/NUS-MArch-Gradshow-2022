/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    // loader: 'custom',
    // path: 'https://res.cloudinary.com/datxbbgwb/image/upload/q_5,fl_lossy,f_auto/',
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
