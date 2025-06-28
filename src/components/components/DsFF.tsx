// src/components/components/course-details/DsFF.tsx

'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import useEffect
import dynamic from 'next/dynamic';

// Keep the dynamic import for code splitting benefits, but it won't render the skeleton now.
// The skeleton will be rendered directly in the JSX.
const PrimaryForm = dynamic(() => import('@/components/components/course-details/PrimaryForm'), { 
  ssr: false // Ensure it's client-side rendered if it relies on browser APIs
});

import { CiCircleCheck } from 'react-icons/ci';
import { formatDateToReadable } from '@/components/utils/formatDateToReadable';

interface dsEliteProps {
  sectionClass?: String;
  sourceDomain?: string;
  cohortDates?: { 
    cohort1?: string;
    cohort2?: string;
  };
}

const DsFF = ({ sectionClass, sourceDomain, cohortDates }: dsEliteProps) => {
  const [formLoaded, setFormLoaded] = useState(false); // State to track if the form component is loaded and ready


  useEffect(() => {
    setFormLoaded(true); 
  }, []);


  // Define the skeleton component directly within DsFF for easier placement
  const FormSkeleton = () => (
     <div className="bg-white p-6 rounded-md shadow-md border-2 border-primary-600 flex flex-col items-center justify-center min-h-[400px] w-full">
      {/* First Name / Last Name Row */}
      <div className="w-full mb-3 grid grid-cols-2 gap-4">
        <div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2 animate-pulse"></div> {/* Label */}
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div> {/* Input field */}
        </div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2 animate-pulse"></div> {/* Label */}
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div> {/* Input field */}
        </div>
      </div>

      {/* Email */}
      <div className="w-full mb-3">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 animate-pulse"></div> {/* Label */}
        <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div> {/* Input field */}
      </div>

      {/* Phone */}
      <div className="w-full mb-3">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 animate-pulse"></div> {/* Label */}
        <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div> {/* Input field */}
      </div>

      {/* Select Work Experience Level Dropdown */}
      <div className="w-full mb-3">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div> {/* Label */}
        <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div> {/* Dropdown */}
      </div>

      {/* Privacy Policy Text */}
      <div className="h-2 bg-gray-200 rounded w-2/3 mb-6 animate-pulse"></div>

      {/* Request a Callback Button */}
      <div className="h-10 w-full bg-yellow-500 rounded animate-pulse"></div> {/* Changed to yellow-500 for better visual match */}
    </div>
  );


  return (
    <section className={`${sectionClass ? sectionClass : ' pb-[50px] md:pb-[70px] bg-white'} overflow-hidden relative`}>

      <div className='container'>

        <div className='grid md:grid-cols-12'>
          <div className='md:col-span-5'>
            <div className="mb-4 flex items-center gap-2 bg-primary-100 px-3 py-1 rounded-full inline-block w-fit">
              <div className='flex items-center justify-start'>
                <Image src="https://strapi.odinschool.com/uploads/google_icon_1c781f0daa.svg" alt="Google Reviews" width={20} height={20} className="w-4 h-4 mr-1" />
                <Image src="https://strapi.odinschool.com/uploads/4_7_Rating_21deb84380.svg" alt="Google Reviews" width={20} height={20} className="w-auto h-4" />
              </div>
              <Link href='https://www.google.com/search?q=odinschool+reviews&ei=nraqY-bdDYePseMPs7KXyAE&oq=odinschool&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMhIILhDHARCvARDIAxCwAxBDGAIyEgguEMcBENEDEMgDELADEEMYAjISCC4QxwEQrwEQyAMQsAMQQxgCMgwILhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQAFgAYPoPaAFwAXgAgAEAiAEAkgEAmAEAyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp#lrd=0x3bcb9397ba0bf25b:0xc3f248706b488093,1' target='_blank'>
                <span className="text-xs">4.6/5 | 1,539 Reviews</span>
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl  md:my-8 my-4">Data Science Course <span className='text-primary-600 block mt-3'></span></h1>

            <ul className=' delay-100 grid grid-cols-2 gap-4 mb-6'>
              <li className='flex gap-1 px-2 py-3 rounded-md  bg-primary-100'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full bg-primary-600 text-white' /></span> <span className='md:text-md text-sm'>Live instructor-led Classes </span></li>
              <li className='flex gap-1 px-2 py-3 rounded-md  bg-primary-100'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full bg-primary-600 text-white' /></span> <span className='md:text-md text-sm'>Job Application Portal </span></li>
              <li className='flex gap-1 px-2 py-3 rounded-md  bg-primary-100'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full bg-primary-600 text-white' /></span> <span className='md:text-md text-sm'>Project-based Learning</span></li>
              <li className='flex gap-1 px-2 py-3 rounded-md  bg-primary-100'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full bg-primary-600 text-white' /></span> <span className='md:text-md text-sm'>Industry Interaction  </span></li>
            </ul>

            <div className="mt-4 flex items-center justify-start gap-3">
              <p className='text-xs'>A Certified Member of</p>
              <Image src="https://strapi.odinschool.com/uploads/hysea_rc_f9ae5c4e82.webp" alt="HYSEA" className="h-6" width={70} height={20} />
              <Image src="https://strapi.odinschool.com/uploads/shrm_rc_7b33e51251.webp" alt="SHRM" className="h-6" width={70} height={20} />
            </div>

          </div>
          <div className='md:col-span-1'></div>

          <div className='md:col-span-6'>
            <div className="flex flex-col md:flex-row items-center justify-center bg-white overflow-hidden max-w-5xl mx-auto md:mt-0 mt-4">
              <div className="bg-primary-600 text-white px-3 py-3 mx-auto w-10/12 md:w-1/2 text-center flex flex-col justify-center items-center rounded-t-md md:rounded-t-none md:rounded-tl-md md:rounded-bl-md">
                <img
                  src="https://strapi.odinschool.com/uploads/Group_5394_34e14bafe4.webp"
                  alt="Woman in Business Attire"
                  className="w-40 h-40 object-cover rounded-full mb-6"
                  loading='eager'
                  width={100}
                  height={100}
                />
                <h3 className="text-sm md:text-md font-semibold">Upgrade your skill set & unlock new opportunities!</h3>
                <hr className="border-white border-opacity-30 my-4 w-2/3" />
                <p className="text-base md:text-sm">Upcoming Cohort</p>
                

                   {
                   cohortDates?.cohort1 &&
                   <p className="text-lg font-semibold mt-1">{formatDateToReadable(cohortDates?.cohort1)}</p>
                     }

               
              </div>
              
              {/* Conditional rendering of either the skeleton or the actual form */}
              {formLoaded ? (
                <PrimaryForm slug={'data-science-course'} isModal={false} buttonText={'Request a Callback'} sourceDomain={sourceDomain ? sourceDomain : 'Course form'} />
              ) : (
                <FormSkeleton />
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DsFF;