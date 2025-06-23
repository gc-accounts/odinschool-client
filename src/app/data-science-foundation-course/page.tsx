// file: src/app/data-science-elite-course/page.tsx
import React from 'react'
import DataScienceFoundationCourse from '@/components/pages/DataScienceFoundationCourse'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science Foundation Course | OdinSchool',
  description:
    'Industry-backed program with multiple hiring sprints. Learn Data Science through live training, real-world projects, and career support — backed by Swiggy, PhonePe, Nuvoretail, 4Seer Technologies, and VenAnalytics.',
  openGraph: {
    title: 'Data Science Foundation Course | OdinSchool',
    description:
      'Learn Data Science through live training, real-world projects, and career support — backed by Swiggy, PhonePe, Nuvoretail, 4Seer Technologies, and VenAnalytics.',
    type: 'website',
    url: 'https://odinschool.com/courses/data-science-elite-course',
    images: [
      {
        url: 'https://strapi.odinschool.com/uploads/ds_elite_og_image.webp',
        width: 1200,
        height: 630,
        alt: 'Data Science Foundation Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Science Foundation Course | OdinSchool',
    description:
      'Industry-backed Data Science course by OdinSchool with hiring support, live training, and real-world projects.',
    images: ['https://strapi.odinschool.com/uploads/ds_elite_og_image.webp'],
  },
  keywords: [
    'Data Science Foundation Course',
    'Industry backed',
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
    <DataScienceFoundationCourse
      organisations={[]}
    />
  );
};

export default page;
