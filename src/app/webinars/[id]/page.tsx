import { getWebinar } from '@/components/utils/api/webinars';
import WebinarDetail from '@/components/pages/WebinarDetail';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import Footer from '@/components/components/Footer';
interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const apiWebinar = await getWebinar("", params.id);
  if (!apiWebinar) {
    return {
      title: 'Webinar Not Found',
      description: 'The requested webinar could not be found.',
    };
  }
  if (!apiWebinar.title || !apiWebinar.description) {
    return {
      title: 'Webinar Details',
      description: 'Webinar information',
    };
  }

  const metadata: Metadata = {
    title: apiWebinar.title,
    description: apiWebinar.description,
    openGraph: {
      title: apiWebinar.title,
      description: apiWebinar.description,
      type: 'website',
      url: `/webinars/${params.id}`,
      images: apiWebinar.image ? [apiWebinar.image] : undefined,
      siteName: 'Odinschool Webinars',
    },
    twitter: {
      card: 'summary_large_image',
      title: apiWebinar.title,
      description: apiWebinar.description,
      images: apiWebinar.image ? [apiWebinar.image] : undefined,
    },
    alternates: {
      canonical: `/webinars/${params.id}`,
    }
  };
  return metadata;
}
export default async function WebinarDetailPage({ params }: PageProps) {
  const apiWebinar = await getWebinar("", params.id);

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

  return <>
    <WebinarDetail webinar={webinar} />

    <Footer />
  </>
} 