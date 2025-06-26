import VirtualInterview from '@/components/pages/VirtualInterview';

import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Science Simulated Interview',
  description: 'Test yourself for a Data Science role with OdinSchool’s simulated interview | Are you ready for a career in Data Science?',
};


export default function VirtualInterviewPage() {
  return <VirtualInterview />;
} 