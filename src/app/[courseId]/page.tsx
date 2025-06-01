"use client"

import { useParams } from "next/navigation"
import CourseDetail from "@/components/pages/CourseDetail"


export default function CourseDetailPage() {
  const { courseId } = useParams()

  return (
    <div>
      <CourseDetail courseId={courseId} />
    </div>
  )
}
