'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';


const features = [
  {
    id: 1,
    icon: 'https://strapi.odinschool.com/uploads/Workplace_20etiquette_20_fad3eeac5b.webp', // change to your icon path
    heading: 'Learn workplace skills!',
    description:
      'Your working style and behavior decide if you are a good cultural fit. Learn the right skills so you never feel out of place at work.',
  },
  {
    id: 2,
    icon: 'https://strapi.odinschool.com/uploads/Sell_20your_20skills_b9a5ca08d1.webp',
    heading: 'Sell your skills, and sell them well.',
    description:
      'You are halfway there if you have a great resume and an optimized online presence. Work with our experts to build your professional profiles.',
  },
  {
    id: 3,
    icon: 'https://strapi.odinschool.com/uploads/73_25_790d5b37f3.webp',
    heading: 'Attend mock interviews!',
    description:
      'Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions.',
  },
];

interface dsEliteProps {
  sectionClass?: String
}
const DsCareerServices = ({ sectionClass }: dsEliteProps) => {
const [formOpen, setFormOpen] = useState(false)
  return (
    <section className={`${sectionClass ? sectionClass : ''} overflow-hidden relative`}>

      <div className='container'>

      <div className='grid md:grid-cols-12 items-center'>
        <div className='md:col-span-6'>
          <div className='md:pb-0 pb-6'>
           <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">Career Services in a <span className='text-primary-600'>nutshell</span>?</h2>
           <p className='text-md'>Get ready for your dream job! Attend comprehensive industry readiness training with Career Services. </p>

           <ul className="md:text-md text-sm text-black space-y-2 my-6">
                       <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Communication and aptitude training  </span></li>
                       <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Mock interviews </span></li>
                       <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>100+ jobs available on our placement portal </span></li>
                       <li className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Workshops on workplace behavior </span></li>
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
            <PrimaryForm buttonText='Request a Callback' slug={'data-science-course'} isModal={true} sourceDomain='Course form' />
          </Modal>
        </div>

</div>
        </div>
        <div className='col-span-1'></div>
        <div className='md:col-span-5'>
         <div className="">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 relative">
        {/* Left card */}
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border">
            <img src={features[0].icon} alt="icon" className="w-100 h-100 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">{features[0].heading}</h3>
            <p className="text-gray-600 text-sm">{features[0].description}</p>
          </div>
        </div>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-4">
          {[features[1], features[2]].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-md text-center border"
            >
              <img src={item.icon} alt="icon" className="w-100 h-100 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
      </div>




    </section>
  );
}


export default DsCareerServices;