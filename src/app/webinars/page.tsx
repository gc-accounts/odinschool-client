
import Webinars from '@/components/pages/Webinars';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _context: any,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Webinars',
    description: 'Odinschool - Webinars',
    openGraph: {
      title: 'Webinars',
      description: 'Odinschool - Webinars',
      type: 'website',
      url: '/webinars',
      images: '/webinars',
      siteName: 'Odinschool Webinars',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Webinars',
      description: 'Odinschool - Webinars',
      images: '/webinars',
    },
  };
}

export default function WebinarsPage() {
  return <Webinars />;
} 