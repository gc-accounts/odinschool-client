/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: {
  //   dirs: ['src'],
  //   ignoreDuringBuilds: true,
  // },

  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/scholarships',
        destination: '/college-scholarships',
        permanent: true
      },
      {
        source: '/academy/platform',
        destination: 'https://learn.odinschool.com/s/store/courses/datascience',
        permanent: true
      },
      {
        source: '/for-corporate',
        destination: '/hire-odin-grades',
        permanent: true
      },
      {
        source: '/hire-odin-grades',
        destination: '/hire-odin-grads',
        permanent: true
      },
      {
        source: '/corder/order-details',
        destination: '/order/order-details',
        permanent: true
      },
      {
        source: '/-ab-variant-a5b78f2a-e8cf-42fa-8b05-58b97def8fc1',
        destination: '/-ab-variant-f87842ff-42fe-408d-93ba-23a1ae551fbd',
        permanent: true
      },
      {
        source: '/v3-contact-us',
        destination: '/contact-us',
        permanent: true
      },
      {
        source: '/v3-about-us',
        destination: '/about-us',
        permanent: true
      },
      {
        source: '/v3-hire-from-us',
        destination: '/corporate/hire-odin-grads',
        permanent: true
      },
      {
        source: '/v3-home',
        destination: '/',
        permanent: true
      },
      {
        source: '/terms-of-use-v3',
        destination: '/terms-of-use',
        permanent: true
      },
      {
        source: '/privacy-policy-v3',
        destination: '/privacy-policy',
        permanent: true
      },
      {
        source: '/v3-faqs',
        destination: '/faqs',
        permanent: true
      },
      {
        source: '/courses/diploma-in-web-development',
        destination: '/full-stack-web-development',
        permanent: true
      },
      {
        source: '/courses/diploma-in-full-stack-web-development',
        destination: '/full-stack-web-development',
        permanent: true
      },
      {
        source: '/courses/diploma-in-data-science-analytics',
        destination: '/data-science-and-analytics',
        permanent: true
      },
      {
        source: '/courses/advanced-digital-marketing',
        destination: '/digital-marketing',
        permanent: true
      },
      {
        source: '/courses/finance-and-analytics',
        destination: '/finance-and-analytics',
        permanent: true
      },
      {
        source: '/courses/testing-and-qa',
        destination: '/quality-assurance-and-testing',
        permanent: true
      },
      {
        source: '/courses/data-analyst-course',
        destination: 'http://college.odinschool.com/data-analyst-course',
        permanent: true
      },
      {
        source: '/courses/ai-analyst-course',
        destination: 'http://college.odinschool.com/ai-analyst-course',
        permanent: true
      },
      {
        source: '/test-2024',
        destination: 'http://dev.odinschool.com/test-2025',
        permanent: true
      },
      {
        source: '/-ab-variant-326a498a-9260-4834-aa21-fbd72a8d9fb0',
        destination: '/data-science-course',
        permanent: true
      },
      {
        source: '/investment-banking-and-finance-operations-elite-cours/checkout',
        destination: '/investment-banking-and-finance-operations-elite-course/checkout',
        permanent: true
      }
    ];
  },

  // Uncoment to add domain whitelist
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //     },
  //   ]
  // },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
