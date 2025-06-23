import React, { Suspense } from 'react'
import ThankYou from '@/components/pages/ThankYou';

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYou />
    </Suspense>
  )
}

export default Page