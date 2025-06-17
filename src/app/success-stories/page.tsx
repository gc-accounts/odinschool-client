import React from 'react'
import SuccessStoriesNew from '@/components/pages/SuccessStoriesNew'
import SuccessStoriesComp from "@/components/pages/SuccessStories"
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Success Stories ',
  description:
    'Discover how OdinSchool alumni transformed their careers with in-demand skills. Read success stories of career growth and job placements. Get inspired!',
  openGraph: {
    title: 'Success Stories ',
    description:
      'Discover how OdinSchool alumni transformed their careers with in-demand skills. Read success stories of career growth and job placements. Get inspired!',
    type: 'website',
    url: 'https://www.odinschool.com/success-stories',
    images: [
      {
        url: 'https://strapi.odinschool.com/uploads/Naresh_babu_18_3215752714.webp',
        width: 1200,
        height: 630,
        alt: 'Success Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories ',
    description:
      'Discover how OdinSchool alumni transformed their careers with in-demand skills. Read success stories of career growth and job placements. Get inspired!',
    images: ['https://strapi.odinschool.com/uploads/Naresh_babu_18_3215752714.webp'],
  },
  keywords: [
    'Success Stories',
    'Industry backed',
    'online course',
    'real-world projects',
    'OdinSchool',
  ],
  authors: [{ name: 'OdinSchool' }],
  metadataBase: new URL('https://odinschool.com'),
};
const page = () => {

  return (
    <SuccessStoriesNew />
  )
}

export default page