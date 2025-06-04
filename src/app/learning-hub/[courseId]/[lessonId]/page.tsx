import FreeCourseDetail from '@/components/pages/FreeCourseDetail';
import { getLearningHubCourse } from '@/components/utils/api/learning_hub';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: {
    courseId: string
    lessonId: string
  }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { courseId, lessonId } = params;
  const course = await getLearningHubCourse("", courseId);

  const currentLesson = course.modules.find((module: any) => module.slug === lessonId);
  const metadata: Metadata = {
    title: course.title + '->' + currentLesson.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: 'website',
      url: `/learning-hub/${courseId}/${lessonId}`,
      images: course.image ? [course.image] : undefined,
      siteName: 'Odinschool Learning Hub',
    },
  };
  return metadata;
}

export default async function FreeCourseDetailPage({ params }: Props) {
  const { courseId, lessonId } = params;

  // Fetch course data on the server
  const course = await getLearningHubCourse("", courseId);

  if (!course) {
    notFound();
  }

  return <FreeCourseDetail courseId={courseId} initialCourse={course} lessonId={lessonId} />;
} 