import { MetadataRoute } from 'next';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_TOKEN = process.env.BACKEND_TOKEN;

if (!BACKEND_URL || !BACKEND_TOKEN) {
  throw new Error('Missing required environment variables. Please ensure BACKEND_URL and BACKEND_TOKEN are set.');
}

const axiosApi = axios.create({
  baseURL: `${BACKEND_URL}/graphql`, // This base URL is for GraphQL queries
  headers: {
    'Authorization': `Bearer ${BACKEND_TOKEN}`
  }
});

// Fetch Blogs using direct REST API call with pagination traversal
async function fetchBlogs() {
  const allBlogs: any[] = [];
  let currentPage = 1;
  let totalPages = 1; // Initialize to 1 to enter the loop at least once
  const perPage = 100; // This is likely your server's default max page size for this endpoint

  try {
    do {
      const blogApiUrl = `https://strapi.odinschool.com/api/odinschool-blogs?pagination[page]=${currentPage}&pagination[pageSize]=${perPage}`;

      const response = await axios.get(blogApiUrl, {
        headers: {
          'Authorization': `Bearer ${BACKEND_TOKEN}`
        }
      });

      const blogsOnPage = response.data?.data || [];
      allBlogs.push(...blogsOnPage.map((item: any) => ({
        postUrl: item.postUrl,
        publishedAt: item.publishDate,
        updatedAt: item.lastModifiedDate,
      })));

      // Update totalPages from the meta object in the response
      totalPages = response.data?.meta?.pagination?.pageCount || 1;

      currentPage++;
    } while (currentPage <= totalPages);

    return allBlogs;
  } catch (error) {
    console.error('Error fetching blogs from REST API:', error);
    return [];
  }
}

// Fetch Lessons using axios
// https://strapi.odinschool.com/api/course-modules?filters[course][$notNull]=true&populate=*
async function fetchLessons() {
  const allLessons: any[] = [];
  let currentPage = 1;
  let totalPages = 1; // Initialize to 1 to ensure the loop runs at least once
  const pageSize = 25; // As observed from your meta.pagination.pageSize

  try {
    do {
      const apiUrl = `https://strapi.odinschool.com/api/course-modules?filters[course][$notNull]=true&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`;

      const response = await axios.get(apiUrl, {
        // If you need authorization, uncomment and provide the token
        headers: {
          'Authorization': `Bearer ${BACKEND_TOKEN}`
        }
      });

      const lessonsOnPage = response.data?.data || [];
      allLessons.push(...lessonsOnPage);

      // Update totalPages from the meta object in the response
      totalPages = response.data?.meta?.pagination?.pageCount || 1;
      currentPage++;

    } while (currentPage <= totalPages);

    console.log(`Successfully fetched ${allLessons.length} lessons.`);
    return allLessons;
  } catch (error) {
    console.error('Error fetching lessons:', error);
    return []; // Return an empty array in case of an error
  }
}



// Fetch Courses
async function fetchCourses() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Courses($pagination: PaginationArg) {
          courses(pagination: $pagination) {
            url_slug
            publishedAt
            updatedAt
            is_learning_hub
          }
        }
      `,
      variables: { pagination: { pageSize: 1000, page: 1 } }
    });

    return response.data?.data?.courses || [];
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

// Fetch Webinars
async function fetchWebinars() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Webinars($pagination: PaginationArg) {
          webinars(pagination: $pagination) {
            slug
            publishedAt
            updatedAt
            is_odin_talk
          }
        }
      `,
      variables: { pagination: { pageSize: 1000, page: 1 } }
    });

    return response.data?.data?.webinars || [];
  } catch (error) {
    console.error('Error fetching webinars:', error);
    return [];
  }
}

// ✅ Fetch Events
async function fetchEvents() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Events($pagination: PaginationArg) {
          events(pagination: $pagination) {
            slug
            publishedAt
            updatedAt
          }
        }
      `,
      variables: { pagination: { pageSize: 1000, page: 1 } }
    });

    return response.data?.data?.events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// ✅ Fetch Masterclasses
async function fetchMasterclasses() {
  try {
    const response = await axiosApi.post('', {
      query: `
        query Masterclasses($pagination: PaginationArg) {
          masterclasses(pagination: $pagination) {
            slug
            publishedAt
            updatedAt
          }
        }
      `,
      variables: { pagination: { pageSize: 1000, page: 1 } }
    });

    return response.data?.data?.masterclasses || [];
  } catch (error) {
    console.error('Error fetching masterclasses:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.odinschool.com';

  const [blogs, courses, webinars, events, masterclasses, lessons] = await Promise.all([
    fetchBlogs(),
    fetchCourses(),
    fetchWebinars(),
    fetchEvents(),
    fetchMasterclasses(),
    fetchLessons()
  ]);

  const lessonPaths = lessons.map(lesson => ({
    url: `${baseUrl}/learning-hub/${lesson.course.url_slug}/${lesson.slug}`,
    lastModified: lesson.updatedAt || lesson.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPaths = blogs.map(blog => {
    // Modify postUrl: replace the original domain with https://www.odinschool.com/blog/
    const modifiedUrl = blog.postUrl ?
      blog.postUrl.replace(/^(http|https):\/\/[^/]+(\/blog\/.*)$/, `${baseUrl}$2`) :
      '';

    if (!modifiedUrl && blog.postUrl) {
      const slugMatch = blog.postUrl.match(/\/([^/]+)$/);
      if (slugMatch && slugMatch[1]) {
        return {
          url: `${baseUrl}/blog/${slugMatch[1]}`,
          lastModified: blog.updatedAt || blog.publishedAt || new Date().toISOString(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
      }
    }

    return {
      url: modifiedUrl,
      lastModified: blog.updatedAt || blog.publishedAt || new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  }).filter(blog => blog.url !== '');

  const coursePaths = courses.map(course => ({
    url: `${baseUrl}/${course.is_learning_hub ? 'learning-hub/' : ''}${course.url_slug}`,
    lastModified: course.updatedAt || course.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const webinarPaths = webinars.map(webinar => ({
    url: `${baseUrl}/${webinar.is_odin_talk ? 'odintalks/' : 'webinars/'}${webinar.slug}`,
    lastModified: webinar.updatedAt || webinar.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // ✅ Events
  const eventPaths = events.map(event => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: event.updatedAt || event.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  // ✅ Masterclasses
  const masterclassPaths = masterclasses.map(mc => ({
    url: `${baseUrl}/masterclass/${mc.slug}`,
    lastModified: mc.updatedAt || mc.publishedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  const redirectPaths = [
    '/scholarships',
    '/for-corporate',
    '/hire-odin-grades',
    '/contact-us',
    '/about-us',
    '/hire-from-us',
    '/home',
    '/terms-of-use',
    '/privacy-policy',
    '/learning-hub',
    '/become-a-mentor',
    '/job-fair/student-details',
    '/data-science-guide-pdf',
    '/university-programs',
    '/news-room',
    '/data-science-interview',
    '/events',
    '/resources',
    '/success-stories',
    '/online-mba-course-pune',
    '/full-stack-java-developer-bootcamp/application',
    '/mca-courses',
    '/mba-courses',
    '/courses',
    '/web-development-course',
    '/online-mba-course-mumbai',
    '/corporate/blogs',
    '/careers',
    '/odintalks',
    '/resume-builder',
    '/training-solution',
    '/college/one-on-one-interview-for-high-paying-jobs',
    '/corporate/blogs/for-corporate/how-to-conduct-a-skills-gap-analysis-a-step-by-step-guide',
    '/request-thank-you',
    '/datascience-application',
    '/applied-generative-ai-online-course',
    '/datascience-bootcamp/data-science-course',
    '/webinars',
    '/full-stack-java-developer-bootcamp/scholarship/application',
    '/sitemap',
    '/get-your-free-resource',
    '/career/roadmap-to-success',
    '/reviews',
    '/blog',
    '/data-science/career-opportunities',
    '/faqs',
    '/investment-banking-course',
    '/data-science-course',
    '/data-science-course/hyderabad',
    '/data-science-course/pune',
    '/data-science-course/bangalore',
    '/data-science-course/mumbai',
    '/data-science-course/chennai',
    '/data-science-elite-course',
    '/generative-ai-course-iitg',
    '/generative-ai-bootcamp',
    '/data-science-bridge-course',


  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const allPaths = [
    { url: baseUrl, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 1 },
    ...blogPaths,
    ...coursePaths,
    ...webinarPaths,
    ...eventPaths,
    ...masterclassPaths,
    ...redirectPaths,
    ...lessonPaths
  ];

  console.log('Generated sitemap summary:', {
    totalUrls: allPaths.length,
    blogUrls: blogPaths.length,
    courseUrls: coursePaths.length,
    webinarUrls: webinarPaths.length,
    eventUrls: eventPaths.length,
    masterclassUrls: masterclassPaths.length,
    redirectUrls: redirectPaths.length,
    lessonUrls: lessonPaths.length
  });



  return allPaths;
}