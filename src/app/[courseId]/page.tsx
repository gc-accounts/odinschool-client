import { getCourse } from "@/components/utils/api"
import CourseDetail from "@/components/pages/CourseDetail"
import { notFound } from "next/navigation"

interface Props {
  params: {
    courseId: string
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { courseId } = params;
  console.log('courseId', courseId);

  // Fetch course data on the server
  const courses = await getCourse("", courseId)
  const course = courses[0]

  if (!course) {
    notFound()
  }

  return (
    <div>
      <CourseDetail courseId={courseId} initialCourse={course} />
    </div>
  )
}
