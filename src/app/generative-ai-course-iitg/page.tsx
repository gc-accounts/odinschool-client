// file: src/app/generative-ai-course-iitg/page.tsx
import React from 'react'
import AppliedGenerativeAICourseIITG from '@/components/pages/AppliedGenerativeAICourseIITG';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certification Program in Applied Generative AI | IIT Guwahati',
  description: 'Master Generative AI with IIT Guwahatis expert-led Certification Program in Applied Generative AI. 2-day campus visit included.',
  openGraph: {
    title: 'Certification Program in Applied Generative AI | IIT Guwahati',
    description: 'Master Generative AI with IIT Guwahatis expert-led Certification Program in Applied Generative AI. 2-day campus visit included.',
    type: 'website',
    url: 'https://odinschool.com/generative-ai-course-iitg',
    images: [
      {
        url: 'https://strapi.odinschool.com/uploads/ds_elite_og_image.webp',
        width: 1200,
        height: 630,
        alt: 'Data Science Elite Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certification Program in Applied Generative AI | IIT Guwahati',
    description: 'Master Generative AI with IIT Guwahatis expert-led Certification Program in Applied Generative AI. 2-day campus visit included.',
    images: ['https://strapi.odinschool.com/uploads/ds_elite_og_image.webp'],
  },
  keywords: [
    'Certification Program in Applied Generative AI',
    'Applied Generative AI IITG',
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
        `}
      </style>
      <AppliedGenerativeAICourseIITG organisations={[]} />
    </>
    
    
  );
};

export default page;
