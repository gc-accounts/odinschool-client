import React from 'react';
import { Card, CardContent } from '@/components/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/components/ui/accordion";
import { DsCurriculumData } from '@/components/data/curriculum/DsCurriculumData';
import { CiCircleCheck } from 'react-icons/ci';
import { Rocket } from 'lucide-react';
import BrochureButton from '@/components/components/custom-component/BrochureButton';


interface Props {
  sectionClass?: string;
}


const DsCurriculum = ({ sectionClass }: Props) => {

  return (
    <section className={`bg-primary-50 py-12 px-4 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-display mb-4 text-gray-900">
            Data Science <span className="text-primary-600">Course Syllabus</span>
          </h2>
          <p className="text-md text-gray-600">An industry-aligned curriculum that will make you productive from day one. The curriculum is updated every month so you learn the skills that recruiters love. </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8'>
          <div className='md:col-span-8 w-full'>

         <div className="">
      {DsCurriculumData.map((module) => (
        <div key={module.id} className="mb-4 md:mb-6 bg-white w-full p-5 rounded-md border border-primary-600">
          <h2 className="font-semibold mb-4 text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full w-fit">{module.module}</h2>

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
              <h2 className='text-xl font-semibold mb-4'>Prep well for your dream career </h2>
              <p className='mb-10 text-md'>Attend comprehensive industry-readiness training along with your technical training. </p>
              <p className='font-semibold'>Learn Data Science while you: </p>

               <ul className="md:text-md text-sm text-black space-y-2 my-6">
                <li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Clarify doubts live</span>
</li>
<li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Receive project presentation guidance and evaluation</span>
</li>
<li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Interact with industry veterans</span>
</li>
<li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Attend communication and aptitude training</span>
</li>
<li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Take quizzes</span>
</li>
<li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Build and optimize your resume and other professional profiles</span>
</li>
<li className='flex gap-1'>
  <span className='mr-2'>
    <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
  </span>
  <span>Learn workplace behavioral skills</span>
</li>

               </ul>
            </div>
          </div>
        </div>

        <div>
          <BrochureButton slug={'data-science-course'} isPrimaryButton={true} isBrochureButton={true} primaryButtonText='Request a Callback' parentClass='w-full flex md:flex-row flex-col md:gap-6 gap-2 justify-center items-center' />
        </div>

       
      </div>
    </section>
  );
}


export default DsCurriculum;