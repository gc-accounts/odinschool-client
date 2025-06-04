import { getBlog } from '@/components/utils/api/blog';
import BlogDetail from '@/components/pages/BlogDetail';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getBlog("", params.id);
  if (!post) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog could not be found.',
    };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'website',
      url: `/blog/${params.id}`,
    },
  };
}
export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getBlog("", params.id);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
} 