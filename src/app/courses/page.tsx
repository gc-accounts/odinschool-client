
import CoursesComp from "@/components/pages/Courses";
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _context: any,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Courses',
    description: 'Courses',
    openGraph: {
      title: 'Courses',
      description: 'Courses',
      type: 'website',
      url: '/courses',
    },
  };
}

export default function CoursesPage() {
  return (
    <CoursesComp />
  );
} 