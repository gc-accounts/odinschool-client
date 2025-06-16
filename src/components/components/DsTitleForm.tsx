import React from 'react'
import Image from 'next/image'
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
interface CardsProps {
  sectionClass?: string,
}

const DsTitleForm = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">

        
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-center gap-8 max-w-6xl mx-auto">
          {/* Left: Leaders */}
          <div className="lg:col-span-6">
            <div>
               <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Take a leap into your dream career with our <span className="text-primary-600">industry-aligned Course</span>
          </h2>
          <p className='text-md'>Start your journey towards a rewarding career today! </p>
            </div>
          </div>
          <div className='lg:col-span-1'></div>
          {/* Right: Callback Form */}
          <div className="lg:col-span-5">
            <div className="h-fit border-primary-600 rounded-lg">
              <PrimaryForm slug={'data-science-course'} isModal={false} buttonText={'Request a Callback'} sourceDomain='Course form' />
  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DsTitleForm;
