
import Blog from '@/components/pages/Blog';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _context: any,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Blog | OdinSchool',
    description: 'A dedicated blog for all career aspirants looking to launch, grow and revamp their careers in Data Science and Generative AI',
    openGraph: {
      title: 'Blog | OdinSchool',
      description: 'A dedicated blog for all career aspirants looking to launch, grow and revamp their careers in Data Science and Generative AI',
      type: 'website',
      url: '/blog',
    },
  };
}

export default function BlogPage() {
  return <Blog />;
} 