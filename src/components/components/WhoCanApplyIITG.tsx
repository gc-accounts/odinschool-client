'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';


interface dsEliteProps {
  sectionClass?: String
}
const WhoCanApplyIITG = ({ sectionClass }: dsEliteProps) => {
const [formOpen, setFormOpen] = useState(false)
  return (
    <section className={`${sectionClass ? sectionClass : ''} overflow-hidden relative`}>

      <div className='container'>

      <div className='grid md:grid-cols-12 items-end'>
        <div className='md:col-span-6'>
          <div className='pb-20'>
           <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2">Who can <span className='text-primary-600'>apply</span>?</h2>
           <p className='text-md'>Join this Certification Program in Applied Generative AI if you fulfill the following pre-requisites:</p>

           <ul className="md:text-md text-sm text-black space-y-2 my-6">
                       <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>A Bachelor's degree </span></li>
                       <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>A background in Mathematics or Computer Science (preferable) </span></li>
                      </ul>


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
              Request A Callback
            </Button>
          </div>
          <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
            <PrimaryForm buttonText='Request a Callback' slug={'generative-ai-course-iitg'} isModal={true} sourceDomain='Course form' />
          </Modal>
        </div>

</div>
        </div>
        <div className='md:col-span-2'></div>
        <div className='md:col-span-4'>
          <Image src='https://strapi.odinschool.com/uploads/Student_20images_4998bca8ab.webp' className='' alt='studentImage' width={300} height={100} />
        </div>
      </div>
      </div>




    </section>
  );
}


export default WhoCanApplyIITG;