// In the `app/data-science-course/[id]/page.tsx` file
import React from 'react'
import { notFound } from 'next/navigation'
import DataScienceCourse from '@/components/pages/DataScienceCourse'
import Head from 'next/head'

// Server-side metadata handling
const metadataMapping = {
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
}

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  const slug = params.id
  const courseMeta = metadataMapping[slug]

  if (!courseMeta) {
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
    }
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
    ],
    authors: [{ name: 'OdinSchool' }],
    metadataBase: new URL('https://odinschool.com'),
  }
}

const Page = ({ params }: { params: { id: string } }) => {
  const slug = params.id

  // Handle invalid slug
  if (!slug || !metadataMapping[slug]) {
    notFound()
  }

  // Using Head for client-side metadata rendering
  return (
    <>
      <Head>
        <title>{metadataMapping[slug].title}</title>
        <meta name="description" content={metadataMapping[slug].description} />
        <meta property="og:title" content={metadataMapping[slug].title} />
        <meta property="og:description" content={metadataMapping[slug].description} />
        <meta property="og:url" content={metadataMapping[slug].url} />
        <meta property="og:image" content={metadataMapping[slug].imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadataMapping[slug].title} />
        <meta name="twitter:description" content={metadataMapping[slug].description} />
        <meta name="twitter:image" content={metadataMapping[slug].imageUrl} />
      </Head>

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
      <DataScienceCourse slug={slug} />
    </>
  )
}

export default Page
