import React from 'react'
import InvestmentBanking from '@/components/pages/InvestmentBanking'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Banking & Finance Operations Elite Course | OdinSchool',
  description:
    'Industry-backed Investment Banking & Finance Operations course with live classes, hands-on projects, hiring sprints, career services, and mentor support — backed by Feemonk, Broadridge, FeeMonk and major finance partners.',
  openGraph: {
    title: 'Investment Banking & Finance Operations Elite Course | OdinSchool',
    description:
      'Master investment banking workflows, trade lifecycle, KYC/AML, NAV calculations and more through live sessions, case projects and hiring sprints — backed by Feemonk, Broadridge.',
    type: 'website',
    url: 'https://www.odinschool.com/investment-banking-course',
    images: [
      {
        url: 'https://www.odinschool.com/static/ib_ops_og_image.webp',
        width: 1200,
        height: 630,
        alt: 'Investment Banking & Finance Operations Elite Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Banking & Finance Operations Elite Course | OdinSchool',
    description:
      'Live, hands-on Investment Banking & Finance Ops course: real-world projects, hiring sprints, and career support backed by industry leaders.',
    images: ['https://www.odinschool.com/static/ib_ops_og_image.webp'],
  },
  keywords: [
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
  metadataBase: new URL('https://www.odinschool.com'),
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

    <InvestmentBanking organisations={[]} />

        </>

  )
}

export default page