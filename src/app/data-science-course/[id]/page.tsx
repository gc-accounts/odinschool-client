// app/data-science-course/[id]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import DataScienceCourse from '@/components/pages/DataScienceCourse';
import { Metadata } from 'next'; // Import Metadata for generateMetadata
import { getCourse } from '@/components/utils/api'; // Your API utility
import { Course } from '@/components/hooks/useCourseDetails'; // Import the Course interface

// Server-side metadata handling for dynamic routes
const metadataMapping: Record<string, {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}> = {
  mumbai: {
    title: 'Data Science Course with Job Assistance in Mumbai | OdinSchool',
    description: 'Enroll for the Data Science Course in Mumbai. With this Data Science course, gain hands-on experience for Data Science jobs with placement assistance.',
    url: 'https://odinschool.com/courses/data-science-course/mumbai',
    imageUrl: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
  },
  pune: {
    title: 'Data Science Course with Job Assistance in Pune | OdinSchool',
    description: 'Enroll for the Data Science Course in Pune. Gain hands-on experience and placement assistance for Data Science jobs in Pune.',
    url: 'https://odinschool.com/courses/data-science-course/pune',
    imageUrl: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
  },
  bangalore: {
    title: 'Data Science Course with Job Assistance in Bangalore | OdinSchool',
    description: 'Join the Data Science Course in Bangalore. Equip yourself with the skills for Data Science jobs and get placement support.',
    url: 'https://odinschool.com/courses/data-science-course/bangalore',
    imageUrl: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
  },
  hyderabad: {
    title: 'Data Science Course with Job Assistance in Hyderabad | OdinSchool',
    description: 'Enroll for the Data Science Course in Hyderabad. Get hands-on experience and job placement assistance for Data Science careers.',
    url: 'https://odinschool.com/courses/data-science-course/hyderabad',
    imageUrl: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
  },
  chennai: {
    title: 'Data Science Course with Job Assistance in Chennai | OdinSchool',
    description: 'Enroll for the Data Science Course in Chennai. Gain practical skills and get job placement assistance for Data Science roles.',
    url: 'https://odinschool.com/courses/data-science-course/chennai',
    imageUrl: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
  },
};

// generateMetadata for dynamic routes
export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  const citySlug = params.id;
  const courseMeta = metadataMapping[citySlug];

  if (!courseMeta) {
    // Fallback metadata if city slug is not recognized
    return {
      title: 'Data Science Course | OdinSchool',
      description: 'Explore the Data Science Course with hands-on experience and placement assistance.',
      openGraph: {
        title: 'Data Science Course | OdinSchool',
        description: 'Explore the Data Science Course with hands-on experience and placement assistance.',
        type: 'website',
        url: 'https://odinschool.com/courses/data-science-course',
        images: [
          {
            url: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
            width: 1200,
            height: 630,
            alt: 'Data Science Course',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Data Science Course | OdinSchool',
        description: 'Explore the Data Science Course with hands-on experience and placement assistance.',
        images: ['https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp'],
      },
      robots: 'noindex, nofollow', // Prevent indexing unknown slugs
      metadataBase: new URL('https://odinschool.com'),
    };
  }

  return {
    title: courseMeta.title,
    description: courseMeta.description,
    openGraph: {
      title: courseMeta.title,
      description: courseMeta.description,
      type: 'website',
      url: courseMeta.url,
      images: [
        {
          url: courseMeta.imageUrl,
          width: 1200,
          height: 630,
          alt: 'Data Science Course',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: courseMeta.title,
      description: courseMeta.description,
      images: [courseMeta.imageUrl],
    },
    keywords: [
      'Data Science Course',
      'Data Science certification',
      'online course',
      'real-world projects',
      'OdinSchool',
      citySlug, // Add city slug to keywords
    ],
    authors: [{ name: 'OdinSchool' }],
    metadataBase: new URL('https://odinschool.com'),
  };
};

// Main page component for dynamic routes - NOW AN ASYNC SERVER COMPONENT
const Page = async ({ params }: { params: { id: string } }) => {
  const citySlug = params.id;

  // Check if the city slug is valid, otherwise return notFound()
  if (!citySlug || !metadataMapping[citySlug]) {
    notFound();
  }

  // Fetch the general Data Science Course data (as getCourse doesn't return city-specific content)
  // You might want to call a different API here if you have city-specific course content
  const courseSlug = 'data-science-course'; // The main course slug
  const response = await getCourse("", courseSlug);
  const course: Course | null = response && response[0] ? response[0] : null;

  if (!course) {
    // If the general course data is not found, render a specific message or notFound()
    return (
      <div className="flex flex-col min-h-screen items-center justify-center text-center py-16">
        <h1 className="text-4xl font-bold text-red-600">Course Data Not Found</h1>
        <p className="text-lg mt-4">Could not load the main Data Science course details for {citySlug}.</p>
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
      <DataScienceCourse
        initialCourse={course} // Pass the fetched general course data
        citSlug={citySlug}    // Pass the dynamic city slug
      />
    </>
  );
};

export default Page;