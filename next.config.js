/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'nusmarchgradshow2022.s3.ap-southeast-1.amazonaws.com/',
      'd18eblg1a9ju11.cloudfront.net',
    ],
    loader: 'custom',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  basePath: '/2022',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/2022',
        permanent: true,
        basePath: false,
      },
    ];
  },
};
