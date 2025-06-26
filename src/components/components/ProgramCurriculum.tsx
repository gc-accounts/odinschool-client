import React from 'react';
import Image from 'next/image';
import { CiCircleCheck } from "react-icons/ci";
import { Button } from '@/components/components/ui/button';
import BrochureButton from '@/components/components/custom-component/BrochureButton';

interface ProgramCurriculumProps {
  sectionClass?: string;
  slug?: string;
  title?: string;
  subText?: string;
  data: {
    module: string;
    subModules: {
      program_title: string;
      points: string[];
      logo: string[];
    }[];
  }[];
}

const ProgramCurriculum = ({ sectionClass, slug, data, title, subText }: ProgramCurriculumProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-white'}`}>
      <div className="container">
        <div className='mb-10'>
          <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-6 text-center text-white">
            {title}
          </h2>
          <p className='text-md text-center text-white'>{subText}</p>
        </div>

        {data.map((moduleData, moduleIndex) => (
          <div key={moduleIndex}>
            <h3 className="text-2xl md:text:lg font-semibold text-white text-center mt-10 mb-6">{moduleData.module}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduleData.subModules.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow h-full flex flex-col justify-between">
                  <div className='h-[240px] overflow-auto'>
                    <h3 className="font-semibold md:text-lg text-md mb-4 text-black">{item.program_title}</h3>
                    <ul className="md:text-md text-sm text-black space-y-2 mb-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className='flex gap-1'>
                          <span className='mr-2'>
                            <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
                          </span>
                          <span>{point}</span>
                        </li>
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
          </div>
        ))}

        <p className='text-white font-medium text-xl text-center mt-10 mb-5'>
          The curriculum includes both Mini Capstone and Capstone projects, providing students with practical application of their learning.
        </p>

        <BrochureButton slug={'data-science-elite-course'} isPrimaryButton={true} isBrochureButton={true} primaryButtonText='Request a Callback' parentClass='w-full flex md:flex-row flex-col md:gap-6 gap-2 justify-center items-center' />
      </div>
    </section>
  );
};

export default ProgramCurriculum;
