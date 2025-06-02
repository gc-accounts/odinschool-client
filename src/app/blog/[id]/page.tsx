import { getBlog } from '@/components/utils/api/blog';
import BlogDetail from '@/components/pages/BlogDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getBlog("", params.id);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
} 