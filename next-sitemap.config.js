/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
const axios = require('axios');

// Create axios instance with the same configuration
const axiosApi = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_BACKEND_URL || '') + '/graphql',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN || ''}`
  }
});

// Function to fetch all blogs
async function fetchBlogs() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Blogs($pagination: PaginationArg) {
          blogs(pagination: $pagination) {
            url_slug
            publishedAt
            updatedAt
          }
        }
      `,
      variables: {
        pagination: {
          pageSize: 1000, // Fetch a large number to get all blogs
          page: 1
        }
      }
    });
    return response.data.data.blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Function to fetch all courses
async function fetchCourses() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Courses($pagination: PaginationArg) {
          courses(pagination: $pagination) {
            url_slug
            publishedAt
            updatedAt
          }
        }
      `,
      variables: {
        pagination: {
          pageSize: 1000,
          page: 1
        }
      }
    });
    return response.data.data.courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

// Function to fetch all webinars
async function fetchWebinars() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Webinars($pagination: PaginationArg) {
          webinars(pagination: $pagination) {
            url_slug
            publishedAt
            updatedAt
          }
        }
      `,
      variables: {
        pagination: {
          pageSize: 1000,
          page: 1
        }
      }
    });
    return response.data.data.webinars;
  } catch (error) {
    console.error('Error fetching webinars:', error);
    return [];
  }
}

module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  siteUrl: 'https://odinschool-client.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  // Add additional sitemap configuration
  additionalPaths: async (config) => {
    // Fetch all dynamic content
    const [blogs, courses, webinars] = await Promise.all([
      fetchBlogs(),
      fetchCourses(),
      fetchWebinars()
    ]);

    // Create paths for blogs
    const blogPaths = blogs.map(blog => ({
      loc: `/blog/${blog.url_slug}`,
      lastmod: blog.updatedAt || blog.publishedAt || new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    // Create paths for courses
    const coursePaths = courses.map(course => ({
      loc: `/${course.url_slug}`,
      lastmod: course.updatedAt || course.publishedAt || new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }));

    // Create paths for webinars
    const webinarPaths = webinars.map(webinar => ({
      loc: `/webinars/${webinar.url_slug}`,
      lastmod: webinar.updatedAt || webinar.publishedAt || new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    // Include all redirect sources as additional paths
    const redirectPaths = [
      '/scholarships',
      '/academy/platform',
      '/for-corporate',
      '/hire-odin-grades',
      '/corder/order-details',
      '/-ab-variant-a5b78f2a-e8cf-42fa-8b05-58b97def8fc1',
      '/v3-contact-us',
      '/v3-about-us',
      '/v3-hire-from-us',
      '/v3-home',
      '/terms-of-use-v3',
      '/privacy-policy-v3',
      '/v3-faqs',
      '/courses/diploma-in-web-development',
      '/courses/diploma-in-full-stack-web-development',
      '/courses/diploma-in-data-science-analytics',
      '/courses/advanced-digital-marketing',
      '/courses/finance-and-analytics',
      '/courses/testing-and-qa',
      '/courses/data-analyst-course',
      '/courses/ai-analyst-course',
      '/test-2024',
      '/-ab-variant-326a498a-9260-4834-aa21-fbd72a8d9fb0',
      '/investment-banking-and-finance-operations-elite-cours/checkout'
    ].map(path => ({
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    }));

    // Combine all paths
    return [
      ...blogPaths,
      ...coursePaths,
      ...webinarPaths,
      ...redirectPaths,
    ];
  },
  // Exclude paths that are redirects to external sites
  exclude: [
    '/academy/platform', // redirects to learn.odinschool.com
    '/courses/data-analyst-course', // redirects to college.odinschool.com
    '/courses/ai-analyst-course', // redirects to college.odinschool.com
    '/test-2024', // redirects to dev.odinschool.com
  ],
};
