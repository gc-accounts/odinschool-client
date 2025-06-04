
import Blog from '@/components/pages/Blog';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _context: any,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Blogs',
    description: 'Blogs',
    openGraph: {
      title: 'Blogs',
      description: 'Blogs',
      type: 'website',
      url: '/blog',
    },
  };
}

export default function BlogPage() {
  return <Blog />;
} 