import React from 'react'
import Image from 'next/image'
import { IbDataLeadersData } from '@/components/data/course-section/data-leaders/IbDataLeadersData';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
interface CardsProps {
  sectionClass?: string,
}

const DataLeadersForm = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Meet the Data Leaders Who Will <span className="text-primary-600">Shape Your Learning</span>
          </h2>
          {/* <p className="text-gray-600">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p> */}
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Leaders */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {IbDataLeadersData.map((leader, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className='w-full'
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="bg-primary-800 md:px-4 px-2 md:py-3 py-2 text-white text-center rounded-b-md">
                    <h3 className="md:text-md text-sm font-semibold">{leader.name}</h3>
                    <p className="text-xs mt-1">{leader.designation}</p>
                  </div>
                  <div className="py-3 text-center">
                    <Image
                      src={leader.logo}
                      alt={leader.company}
                      width={80}
                      height={40}
                      className="mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Callback Form */}
          <div className="lg:col-span-4">
            <div className="h-fit border-[3px] border-primary-600 rounded-lg">
              <PrimaryForm slug={'investment-banking-course'} isModal={false} buttonText={'Request a Callback'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataLeadersForm;
