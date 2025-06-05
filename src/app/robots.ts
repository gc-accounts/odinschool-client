import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.odinschool.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', // Disallow API routes
        '/admin/', // Disallow admin routes
        '/private/', // Disallow private routes
        '/*.json$', // Disallow JSON files
        '/*.xml$', // Disallow XML files except sitemap
        '/_next/', // Disallow Next.js system files
        '/static/', // Disallow static files
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
} 