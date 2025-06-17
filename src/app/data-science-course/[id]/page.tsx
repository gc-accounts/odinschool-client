'use client'

import React from 'react'
import { usePathname, notFound } from 'next/navigation'
import DataScienceCourse from '@/components/pages/DataScienceCourse'

const validSlugs = ['mumbai', 'pune', 'bangalore', 'hyderabad', 'chennai']

const Page = () => {
  const pathName = usePathname()
  const slug = pathName.split('/').pop()

  // Handle invalid slug
  if (!validSlugs.includes(slug || '')) {
    notFound() // Trigger Next.js 404 page
  }

  return (
    <div>
      <DataScienceCourse slug={slug!} />
    </div>
  )
}

export default Page
