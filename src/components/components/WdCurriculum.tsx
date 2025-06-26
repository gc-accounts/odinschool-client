import React from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardContent } from '@/components/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/components/ui/accordion";
import { WdCurriculumData } from '@/components/data/curriculum/WdCurriculumData';
import { Rocket } from 'lucide-react';
import { CiCircleCheck } from 'react-icons/ci';


interface Props {
  sectionClass?: string;
  sourceDomain?:string;
  title?: string;
  description?: string;
}


const WdCurriculum = ({ sectionClass,sourceDomain, title, description }: Props) => {
  const pathname = usePathname(); // Correct

  return (
    <section className={`bg-primary-50 py-12 px-4 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2 text-gray-900">
            {title}
          </h2>
          <p className="text-md text-gray-600">
            {description}</p>
        </div>




        <div className='mx-auto'>
<div className='grid grid-cols-12 gap-6'>
          <div className='md:col-span-8'>

         <div className="">
      {WdCurriculumData.map((module) => (
        <div key={module.id} className="mb-4 md:mb-6 bg-white w-full p-5 rounded-md border border-primary-600">
          {/* <h2 className="font-semibold mb-4 text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full w-fit">{module.module}</h2> */}

          <Accordion type="single" className="w-full" collapsible>
            {module.submodules.map((sub, idx) => (
              <AccordionItem value={`item-${module.id}-${idx}`} key={idx}>
                <AccordionTrigger className="text-left">
                  <span className="text-base font-medium">{sub.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700">
                    {sub.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p>{sub.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>

          </div>
          <div className='md:col-span-4 w-full'>
            <div className="mb-6 bg-primary-100 w-full p-5 rounded-md">
              <h2 className="flex items-center font-semibold mb-4 text-sm border border-primary-500 bg-primary-100 text-primary-700 px-3 py-1 rounded-full w-fit">
                <span className='mr-2'><Rocket className='md:w-6 md:h-6 w-5 h-5' /></span> <span>Accelerate your career growth!</span></h2>
              <h2 className='text-xl font-semibold mb-4'>Let us help you become an industry asset </h2>
              <p className='mb-10 text-md'>Attend comprehensive job readiness training along with your technical training.</p>
              <p className='font-semibold'>Learn React Web Development while you: </p>

               <ul className="md:text-md text-sm text-black space-y-2 my-6">
                <li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>interact with industry veterans</span>
</li>

 <li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>attend communication and aptitude training</span>
</li>


 <li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>take quizzes
</span>
</li>

 <li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>build and optimize your resume
</span>
</li>

 <li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>learn workplace behavioral skills
</span>
</li>



               </ul>
            </div>
          </div>
        </div>

        </div>
        

         {/* {pathname === '/data-science-course' && (
        <div>
          <BrochureButton
            slug={'data-science-course'}
            isPrimaryButton={true}
            isBrochureButton={true}
            primaryButtonText='Request a Callback'
            primaryFormSourceDomain={sourceDomain ? sourceDomain : 'Course form'}
            parentClass='w-full flex md:flex-row flex-col md:gap-6 gap-2 justify-center items-center'
          />
        </div>
      )} */}

       
      </div>
    </section>
  );
}


export default WdCurriculum;