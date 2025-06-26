'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
import Modal from '@/components/components/component-template/Modal';

interface dsEliteProps {
  sectionClass?: String
}
const GenAIIITGFF = ({ sectionClass }: dsEliteProps) => {

  const [formOpen, setFormOpen] = useState(false)


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
              <div className="bg-primary-600 text-white px-3 py-3 w-full md:w-1/2 text-center flex flex-col justify-center items-center md:rounded-s-md rounded-s-none rounded-t-xs md:mb-0 mb-4">
                <img
                  src="https://strapi.odinschool.com/uploads/Group_5394_34e14bafe4.webp"
                  alt="Woman in Business Attire"
                  className="w-40 h-40 object-cover rounded-full mb-6"
                />
                <h3 className="text-sm md:text-md font-semibold">Upgrade your skill set & unlock new opportunities!</h3>
                <hr className="border-white border-opacity-30 my-4 w-2/3" />
                <p className="text-base md:text-sm">Upcoming Cohort</p>
                <p className="text-lg font-semibold mt-1">28 Jun 2025</p>
              </div>
              <PrimaryForm slug={'generative-ai-course-iitg'} isModal={false} buttonText={'Request a Callback'} sourceDomain='Course form' />
            </div>
          </div>
        </div>
      </div>




    </section>
  );
}


export default GenAIIITGFF;