import axios from 'axios';
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/pages/BlogDetail';
import { Metadata, ResolvingMetadata } from 'next';

interface PageProps {
  params: {
    slug: string[];
  };
}

// A dedicated function to fetch the post by slug from Strapi
async function getPostBySlug(slugPath: string) {
  // We construct the expected ending part of the URL.
  // e.g., /blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python
  const expectedUrlEnd = `/blog/${slugPath}`;

  try {
    const res = await axios.get('https://strapi.odinschool.com/api/odinschool-blogs', {
      params: {
        // Use Strapi's deep filtering to find the exact post
        filters: {
          postUrl: {
            // We are looking for a postUrl that ends with our specific slug path
            $endsWith: expectedUrlEnd,
          },
        },
        // We only need 1 result, so we limit the response
        pagination: {
          limit: 1,
        },
      },
    });

    // If Strapi returns data, it will be in an array. We take the first element.
    const blog = res.data?.data?.[0];
    return blog || null;

  } catch (error) {
    console.error("Error fetching blog post from Strapi:", error);
    return null;
  }
}

// UPDATED: Metadata generation now uses the new fetching function
export async function generateMetadata(
  { params }: PageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const slugPath = params.slug.join('/');
  const blog = await getPostBySlug(slugPath);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog could not be found.',
    };
  }

  // CORRECTED: Access all properties via blog
  return {
    title: blog.postTitle,
    description: blog.metaDescription,
    openGraph: {
      title: blog.postTitle,
      description: blog.metaDescription,
      url: `/blog/${slugPath}`,
      type: 'article',
      images: [
        {
          url: blog.featuredImageUrl,
          width: 1200,
          height: 630,
          alt: blog.postTitle,
        },
      ],
    },
  };
}

// UPDATED: The page component also uses the new fetching function
export default async function BlogDetailPage({ params }: PageProps) {
  const slugPath = params.slug.join('/');
  const blogData = await getPostBySlug(slugPath);

  // If no blog is found by Strapi, render the 404 page
  if (!blogData) {
    return notFound();
  }

  // CORRECTED: The data from Strapi v4 is nested under `attributes`
  const blog = blogData;

  // Transform into your internal BlogPost type
  const post = {
    id: blogData.id.toString(), // Pass the ID from the top level
    title: blog.postTitle,
    content: blog.postBody,
    excerpt: blog.metaDescription,
    coverImage: blog.featuredImageUrl,
    publishedAt: blog.publishDate,
    category: blog.postLanguage || 'General',
    author: {
      name: blog.author || 'Odin School Author',
      title: '',
      about: '',
    },
    tags: blog.tags?.split(',').map((tag: string) => tag.trim()) || [],
  };

  return <BlogDetail post={post} />;
}