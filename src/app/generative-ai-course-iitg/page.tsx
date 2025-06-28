// app/courses/data-science-course/page.tsx
import React from 'react';
import AppliedGenerativeAICourseIITG from '@/components/pages/AppliedGenerativeAICourseIITG'; // Corrected path based on your import
import { Metadata } from 'next';
import { getCourse } from '@/components/utils/api'; // Your API utility
import { Course } from '@/components/hooks/useCourseDetails'; // Import the Course interface

// Define metadata for SEO dynamically
export async function generateMetadata(): Promise<Metadata> {
  const courseSlug = 'generative-ai-course-iitg'; // The slug for this specific page
  const response = await getCourse("", courseSlug);
  const course: Course | null = response && response[0] ? response[0] : null;

  if (!course) {
    // Fallback metadata if course is not found
    return {
      title: 'Course Not Found ',
      description: 'The requested course could not be found.',
      robots: 'noindex, nofollow', // Prevent indexing if the page content isn't valid
    };
  }

  return {
    title: 'Certification Program in Applied Generative AI | IIT Guwahati',
    description: 'Master Generative AI with IIT Guwahatis expert-led Certification Program in Applied Generative AI. 2-day campus visit included.',
    openGraph: {
      title: 'Certification Program in Applied Generative AI | IIT Guwahati',
      description: 'Master Generative AI with IIT Guwahatis expert-led Certification Program in Applied Generative AI. 2-day campus visit included.',
      type: 'website',
      url: `https://odinschool.com/courses/${course.url_slug || course.slug}`,
      images: [
        {
          url: course.image || 'https://strapi.odinschool.com/uploads/default_course_image.webp', // Fallback image
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Certification Program in Applied Generative AI | IIT Guwahati',
      description: 'Master Generative AI with IIT Guwahatis expert-led Certification Program in Applied Generative AI. 2-day campus visit included.',
      images: [course.image || 'https://strapi.odinschool.com/uploads/default_course_image.webp'], // Fallback image
    },
    keywords: [
      course.title,
      course.level || '',
      ...(course.skills || []),
      ...(course.tags || []),
      'Certification Program in Applied Generative AI',
    'Applied Generative AI IITG',
    'online course',
    'real-world projects',
    'OdinSchool',
    ],
    authors: [{ name: 'OdinSchool' }],
    metadataBase: new URL('https://odinschool.com'),
  };
}

// Main page component - NOW AN ASYNC SERVER COMPONENT
const Page = async () => {
  const courseSlug = 'data-science-course'; // The specific slug for this page

  const response = await getCourse("", courseSlug);
  const course: Course | null = response && response[0] ? response[0] : null;

  if (!course) {
    // Handle case where course data is not found
    return (
      <div className="flex flex-col min-h-screen items-center justify-center text-center py-16">
        <h1 className="text-4xl font-bold text-red-600">Course Not Found</h1>
        <p className="text-lg mt-4">We could not find the details for the Data Science course. Please try again later or contact support.</p>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .primaryFormCustom {
            border: 3px solid #1a6cf7;
          }
          .downloadBtn{
            color: #000;
            border-color: #000;
          }
        `}
      </style>
      <AppliedGenerativeAICourseIITG
        initialCourse={course}
      />
    </>
  );
};

export default Page;