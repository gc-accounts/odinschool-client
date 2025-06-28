'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import Modal from '@/components/components/component-template/Modal';
import { formatDateToReadable } from '@/components/utils/formatDateToReadable';
import dynamic from 'next/dynamic';

const PrimaryForm = dynamic(() => import('@/components/components/course-details/PrimaryForm'), { 
  ssr: false // Ensure it's client-side rendered if it relies on browser APIs
});


interface dsEliteProps {
  sectionClass?: String;
   cohortDates?: { 
    cohort1?: string;
    cohort2?: string;
  };
}
const GenAIIITGFF = ({ sectionClass, cohortDates }: dsEliteProps) => {
const [formLoaded, setFormLoaded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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
          <div className='md:col-span-6'>
            <Image src='https://strapi.odinschool.com/uploads/eictlogo_a3cb0918ad.png' className='mb-3' alt='eictlogo' width={200} height={100} />
            <h1 className="text-3xl md:text-5xl ">Certification Program in <span className='text-primary-600 block mt-3'>Applied Generative AI</span></h1>
            <ul className="md:text-md text-sm text-black space-y-2 my-10">
              <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Get certified by E&ICT Academy, IIT Guwahati </span></li>
              <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>A visit to the prestigious IIT Guwahati Campus (for successful learners only)  </span></li>
            </ul>

            {/* CTA */}
            <div>
              <div className="flex flex-col sm:flex-row gap-4 delay-200 mt-10">
                <Button
                  size="lg"
                  variant="yellow"
                  icon={<ArrowRight className='ml-1' size={18} />}
                  iconPosition="right"
                  className='font-semibold'
                  onClick={() => setFormOpen(true)}
                >
                  Enquire Now
                </Button>
              </div>
              <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                <PrimaryForm buttonText='Enquire Now' slug={'generative-ai-course-iitg'} isModal={true} sourceDomain='Course form' />
              </Modal>

            </div>

          </div>

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
                          <PrimaryForm slug={'generative-ai-course-iitg'} isModal={false} buttonText={'Request a Callback'} sourceDomain='Course form' />
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


export default GenAIIITGFF;