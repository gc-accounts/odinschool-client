'use client';

import FreeCourseDetail from '@/components/pages/FreeCourseDetail';
import { getLearningHubCourse } from '@/components/utils/api/learning_hub';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    courseId: string
    lessonId: string
  }
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