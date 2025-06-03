import { MetadataRoute } from 'next';
import axios from 'axios';

// Validate required environment variables
const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_TOKEN = process.env.BACKEND_TOKEN;

if (!BACKEND_URL || !BACKEND_TOKEN) {
  throw new Error(
    'Missing required environment variables. Please ensure BACKEND_URL and BACKEND_TOKEN are set in your environment.'
  );
}

// Create axios instance with the same configuration
const axiosApi = axios.create({
  baseURL: `${BACKEND_URL}/graphql`,
  headers: {
    'Authorization': `Bearer ${BACKEND_TOKEN}`
  }
});

// Function to fetch all blogs
async function fetchBlogs() {
  try {
    console.log('Fetching blogs...');
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
          pageSize: 1000,
          page: 1
        }
      }
    });

    if (!response.data?.data?.blogs) {
      console.error('Invalid blog response structure:', JSON.stringify(response.data, null, 2));
      return [];
    }

    const blogs = response.data.data.blogs;
    console.log(`Successfully fetched ${blogs.length} blogs`);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        data: JSON.stringify(error.response?.data, null, 2),
        errors: error.response?.data?.errors?.map((err: any) => ({
          message: err.message,
          extensions: err.extensions,
          locations: err.locations,
        })),
        config: {
          url: error.config?.url,
          headers: {
            ...error.config?.headers,
            Authorization: error.config?.headers?.Authorization ? '[REDACTED]' : undefined,
          },
          data: JSON.parse(error.config?.data || '{}'),
        }
      });
    }
    return [];
  }
}

// Function to fetch all courses
async function fetchCourses() {
  try {
    console.log('Fetching courses...');
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

    if (!response.data?.data?.courses) {
      console.error('Invalid courses response structure:', JSON.stringify(response.data, null, 2));
      return [];
    }

    const courses = response.data.data.courses;
    console.log(`Successfully fetched ${courses.length} courses`);
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        data: JSON.stringify(error.response?.data, null, 2),
        errors: error.response?.data?.errors?.map((err: any) => ({
          message: err.message,
          extensions: err.extensions,
          locations: err.locations,
        })),
        config: {
          url: error.config?.url,
          headers: {
            ...error.config?.headers,
            Authorization: error.config?.headers?.Authorization ? '[REDACTED]' : undefined,
          },
          data: JSON.parse(error.config?.data || '{}'),
        }
      });
    }
    return [];
  }
}

// Function to fetch all webinars
async function fetchWebinars() {
  try {
    console.log('Fetching webinars...');
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

    if (!response.data?.data?.webinars) {
      console.error('Invalid webinars response structure:', JSON.stringify(response.data, null, 2));
      return [];
    }

    const webinars = response.data.data.webinars;
    console.log(`Successfully fetched ${webinars.length} webinars`);
    return webinars;
  } catch (error) {
    console.error('Error fetching webinars:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        data: JSON.stringify(error.response?.data, null, 2),
        errors: error.response?.data?.errors?.map((err: any) => ({
          message: err.message,
          extensions: err.extensions,
          locations: err.locations,
        })),
        config: {
          url: error.config?.url,
          headers: {
            ...error.config?.headers,
            Authorization: error.config?.headers?.Authorization ? '[REDACTED]' : undefined,
          },
          data: JSON.parse(error.config?.data || '{}'),
        }
      });
    }
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  console.log('Starting sitemap generation...');
  console.log('Environment variables:', {
    hasBackendUrl: !!BACKEND_URL,
    hasBackendToken: !!BACKEND_TOKEN,
    backendUrl: BACKEND_URL,
  });

  const baseUrl = 'https://odinschool-client.vercel.app';

  // Fetch all dynamic content
  const [blogs, courses, webinars] = await Promise.all([
    fetchBlogs(),
    fetchCourses(),
    fetchWebinars()
  ]);

  console.log('Fetched content summary:', {
    blogsCount: blogs.length,
    coursesCount: courses.length,
    webinarsCount: webinars.length,
  });

  // Create paths for blogs
  const blogPaths = blogs.map(blog => ({
    url: `${baseUrl}/blog/${blog.url_slug}`,
    lastModified: blog.updatedAt || blog.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Create paths for courses
  const coursePaths = courses.map(course => ({
    url: `${baseUrl}/${course.url_slug}`,
    lastModified: course.updatedAt || course.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Create paths for webinars
  const webinarPaths = webinars.map(webinar => ({
    url: `${baseUrl}/webinars/${webinar.url_slug}`,
    lastModified: webinar.updatedAt || webinar.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Include all redirect sources as additional paths
  const redirectPaths = [
    '/scholarships',
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
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const allPaths = [
    // Add the homepage
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogPaths,
    ...coursePaths,
    ...webinarPaths,
    ...redirectPaths,
  ];

  console.log('Generated sitemap summary:', {
    totalUrls: allPaths.length,
    blogUrls: blogPaths.length,
    courseUrls: coursePaths.length,
    webinarUrls: webinarPaths.length,
    redirectUrls: redirectPaths.length,
  });

  return allPaths;
} 