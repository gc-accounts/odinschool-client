import React from 'react';
import InvestmentBanking from '@/components/pages/InvestmentBanking'; // Corrected path based on your import
import { Metadata } from 'next';
import { getCourse } from '@/components/utils/api'; // Your API utility
import { Course } from '@/components/hooks/useCourseDetails'; // Import the Course interface

// Define metadata for SEO dynamically
export async function generateMetadata(): Promise<Metadata> {
  const courseSlug = 'investment-banking-course'; // The slug for this specific page
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
    title: 'Investment Banking & Finance Operations Elite Course',
    description: 'Industry-backed Investment Banking & Finance Operations course with live classes, hands-on projects, hiring sprints, career services, and mentor support — backed by Feemonk, Broadridge, FeeMonk and major finance partners.',
    openGraph: {
      title: 'Investment Banking & Finance Operations Elite Course',
      description: 'Industry-backed Investment Banking & Finance Operations course with live classes, hands-on projects, hiring sprints, career services, and mentor support — backed by Feemonk, Broadridge, FeeMonk and major finance partners.',
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
      title: 'Investment Banking & Finance Operations Elite Course',
      description: 'Industry-backed Investment Banking & Finance Operations course with live classes, hands-on projects, hiring sprints, career services, and mentor support — backed by Feemonk, Broadridge, FeeMonk and major finance partners.',
      images: [course.image || 'https://strapi.odinschool.com/uploads/default_course_image.webp'], // Fallback image
    },
    keywords: [
      course.title,
      course.level || '',
      ...(course.skills || []),
      ...(course.tags || []),
       'Investment Banking course',
    'Finance Operations training',
    'OdinSchool elite course',
    'live finance classes',
    'hands-on finance projects',
    'hiring sprints',
    'trade lifecycle',
    'KYC AML course',
    'NAV reconciliation training',
    'finance career support',
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

            .ib-program-curriculum .downloadBtn{
            color: #fff !important;
            border-color: #fff !important;
            }
            .ib-program-curriculum .downloadBtn:hover{
               color: #000 !important;
                border-color: #000 !important;
            }
        `}
      </style>
      <InvestmentBanking
        initialCourse={course}
      />
    </>
  );
};

export default Page;