import { getWebinar } from '@/components/utils/api/webinars';
import WebinarDetail from '@/components/pages/WebinarDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function WebinarDetailPage({ params }: PageProps) {
  const apiWebinar = await getWebinar("", params.slug);

  if (!apiWebinar) {
    notFound();
  }

  // Transform the API response to match our Webinar interface
  const webinar = {
    ...apiWebinar,
    status: apiWebinar.status as 'upcoming' | 'past',
    duration: Number(apiWebinar.duration) || 0,
    price: Number(apiWebinar.price) || 0,
  };

  return <WebinarDetail webinar={webinar} />;
} 