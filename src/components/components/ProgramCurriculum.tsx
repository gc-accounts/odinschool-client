import React from 'react';
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { CiCircleCheck } from "react-icons/ci";
import { Button } from '@/components/components/ui/button';
import BrochureButton from '@/components/components/custom-component/BrochureButton';
interface ProgramCurriculumProps {
  sectionClass?: String;
  slug?: String;
  data: {
    program_title: string;
    points: string[];
    logo: string[];
  }[];
}

const ProgramCurriculum = ({ sectionClass, slug, data }: ProgramCurriculumProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-white'}`}>
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-display text-center font-bold mb-10 text-white">
          Program Curriculum
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow h-full flex flex-col justify-between">
              <div className='h-[240px] overflow-auto'>
                <h3 className="font-semibold text-xl mb-4 text-black">{item.program_title}</h3>
                <ul className="text-base text-black space-y-2 mb-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className='flex gap-1'><span><CiCircleCheck className='w-7 h-7 text-primary' /></span> <span>{point}</span></li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {item.logo.map((logoUrl, logoIndex) => (
                  <Image
                    key={logoIndex}
                    src={logoUrl}
                    alt="tool"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className='text-white font-medium text-xl text-center  mt-10 mb-5'>The curriculum includes both Mini Capstone and Capstone projects, providing students with practical application of their learning.</p>

        <BrochureButton slug={'data-science-elite-course'} />


      </div>
    </section >
  );
};

export default ProgramCurriculum;
