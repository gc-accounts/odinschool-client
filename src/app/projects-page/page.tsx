import FreeResources from '@/components/pages/FreeResources';
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Resources - Projects Page',
  description: 'Free Data Science projects including datasets and project files from OdinSchool!',
};

export default function FreeResourcesPage() {
  return <FreeResources />;
} 