import FAQ from '@/components/pages/FAQ';

import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to the most frequently asked questions about our Courses here.',
};


export default function FAQPage() {
  return <FAQ />;
} 