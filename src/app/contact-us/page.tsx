import Contact from '@/components/pages/Contact';

import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to Us | Contact Us',
  description: 'For any queries related to OdinSchool, OdinGrads, mentorship, or partnership opportunities, please reach out to us.',
};

export default function ContactPage() {
  return <Contact />;
} 