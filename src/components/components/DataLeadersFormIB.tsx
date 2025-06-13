import React from 'react'
import Image from 'next/image'
import { IbDataLeadersData } from '@/components/data/course-section/data-leaders/IbDataLeadersData';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
interface CardsProps {
  sectionClass?: string,
}

const DataLeadersForm = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ?? 'px-4 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Meet the Data Leaders Who Will <span className="text-primary-600">Shape Your Learning</span>
          </h2>
        </div>

        {/* Grid Layout */}
        {/* Flex Layout for Leaders + Form */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left: Leaders */}
          <div className="w-full lg:w-1/2">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {IbDataLeadersData.map((leader, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="w-full"
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
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-fit border-[3px] border-primary-600 rounded-lg">
              <PrimaryForm
                slug={'investment-banking-course'}
                isModal={false}
                buttonText={'Request a Callback'}
              />
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default DataLeadersForm;
