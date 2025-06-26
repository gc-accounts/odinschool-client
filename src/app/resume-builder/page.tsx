import ResumeBuilder from '@/components/pages/ResumeBuilder';
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Builder | Data Science',
  description: 'Create a winning resume effortlessly with our Data Science Resume Builder.',
};

export default function ResumeBuilderPage() {
  return <ResumeBuilder />;
} 