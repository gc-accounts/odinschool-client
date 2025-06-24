'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
import { useState } from 'react';

interface dsEliteProps {
  sectionClass?: String
}
const DsFoundationFF = ({ sectionClass }: dsEliteProps) => {

  return (
    <section className={`${sectionClass ? sectionClass : ' '} overflow-hidden text-white relative`}>
      <div className="container">

        <div className='grid md:grid-cols-12'>
          <div className='md:col-span-7'>
            <div className='mb-16'>
<h2 className="text-2xl font-semibold mb-4">
          Graduating in 2025 or later? 
        </h2>
        <h2 className="text-3xl md:text-5xl font-display mb-10 " style={{lineHeight: 1.2}}>
          This is for you if you're aiming for a career in <span className='text-primary-600'>Data Science and Analytics </span>
        </h2>
        <p className="text-md md:leading-2">Complete the Bridge Course and become eligible for the Data Science Elite Course </p>
         {/* <p className="md:text-3xl text-lg font-semibold md:leading-10">Boost your eligibility with our <br /><span className='text-red-600 font-normal line-through'>₹1599</span> <span className='text-green-600'>₹999</span> Foundation Course</p> */}


          <div className="flex flex-col sm:flex-row gap-4 delay-200 mt-6">
            <Link href='/course-checkout/data-science-bridge-course'>
            <Button
              size="lg"             
              variant="yellow"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
            >
              Enroll Now
            </Button>
            </Link>
          </div>


            </div>


          </div>
          <div className='md:col-span-1'></div>
          <div className='md:col-span-4 md:px-0 px-10 md:mt-0 mt-4 flex items-end'>
            <Image
                            src='https://strapi.odinschool.com/uploads/college_2_42a54a9e33.webp'
                            alt=''
                            width={200}
                            height={200}
                            className="w-full"
                            loading="eager"
                          />
          </div>
        </div>

  

      </div>
    </section>
  );
}


export default DsFoundationFF;