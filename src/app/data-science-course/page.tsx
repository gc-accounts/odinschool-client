import React from 'react'
import DataScienceCourse from '@/components/pages/DataScienceCourse'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science Course | Live Course with Job Assistance',
  description: 'Join our online Data Science Course with certification led by experts and 2 years of placement assistance.',
  openGraph: {
    title: 'Data Science Course | Live Course with Job Assistance',
    description: 'Join our online Data Science Course with certification led by experts and 2 years of placement assistance.',
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
    title: 'Data Science Course | Live Course with Job Assistance',
    description: 'Join our online Data Science Course with certification led by experts and 2 years of placement assistance.',
    images: ['https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp'],
  },
  keywords: [
    'Data Science Course',
    'Data Science certification',
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
       <DataScienceCourse organisations={[]}
    />
    </>
   
  );
};

export default page;
