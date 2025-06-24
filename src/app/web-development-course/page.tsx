import React from 'react'
import WebDevelopmentCourse from '@/components/pages/WebDevelopmentCourse'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'React Web Development Course | Online Classes with placement support',
  description: 'Enroll in our online web development course. Become a front-end web developer with job assistance in just 90 days. Start your coding journey now!',
  openGraph: {
    title: 'React Web Development Course | Online Classes with placement support',
    description: 'Enroll in our online web development course. Become a front-end web developer with job assistance in just 90 days. Start your coding journey now!',
    type: 'website',
    url: 'https://odinschool.com/courses/web-development-course',
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
    title: 'React Web Development Course | Online Classes with placement support',
    description: 'Enroll in our online web development course. Become a front-end web developer with job assistance in just 90 days. Start your coding journey now!',
    images: ['https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp'],
  },
  keywords: [
    'Web Development Course',
    'online course',
    'real-world projects',
    'OdinSchool',
  ],
  authors: [{ name: 'OdinSchool' }],
  metadataBase: new URL('https://odinschool.com'),
};

const page = () => {
  return (
    <>
       <WebDevelopmentCourse />
    </>
   
  );
};

export default page;
