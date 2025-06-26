import React from 'react';
import Image from 'next/image'; // Assuming you have next/image configured for optimization
import { CiCircleCheck } from 'react-icons/ci';


interface Props {
  sectionClass?: string;
}

const courseModules = [
  {
    id: 1,
    icon: 'https://strapi.odinschool.com/uploads/python_1_3333c6d3fc.webp',
    textBold: 'Python',
    textLight: '',
  },
  {
    id: 2,
    icon: 'https://strapi.odinschool.com/uploads/SQL_2_3888c82d16.webp',
    textBold: 'SQL',
    textLight: '',
  },
  {
    id: 3,
    icon: 'https://strapi.odinschool.com/uploads/statistics_13547e5bb5.webp',
    textBold: 'Statistics',
    textLight: '',
  },

];

const InsideFoundation = ({ sectionClass }: Props) => {
  return (
    <section className={`${sectionClass ?? ''}`}> {/* Light blue background */}

      <div className="container"> {/* Ensure content is above the pattern */}
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-6  text-gray-800">
            What’s Inside the <span className='text-primary-600'>Bridge Course</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          {/* Left Text Content */}
          <div className="md:col-span-6">
            <p className='mb-2'>
              This course is your launchpad.
            </p>
            <p className='mb-2'>You might not master data science overnight — but you’ll start the right way.</p>
            <p>Grasp the essentials now, so when you hit the Elite Course, you’re already warmed up and way more confident.</p>

             <ul className="text-black space-y-2 my-6">
                                   <li className='flex gap-1 mb-4'>
                                    <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                    <p>
                                    <span className='font-semibold'>Python Basics</span> 
                                    <br />From automation to AI — Python does it all. You’ll learn the syntax, logic, and the basics that power data science. Your go-to tool for wrangling data.
                                    </p>
                                    </li>

                                     <li className='flex gap-1 mb-4'>
                                    <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                    <p>
                                    <span className='font-semibold'>SQL for Data</span> 
                                    <br />Databases make the world run. SQL lets you talk to them. Learn how to extract, clean, and query real-world data — skills every data pro uses daily.
                                    </p>
                                    </li>


                                     <li className='flex gap-1 mb-4'>
                                    <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                    <p>
                                    <span className='font-semibold'>Statistics </span> 
                                    <br />Understand what data is telling you. Learn how to spot trends, measure impact, and apply logic in your mini project.
                                    </p>
                                    </li>
            

            

                                   
                                  </ul>
          </div>

          {/* Right Cards Section */}
          <div className='md:col-span-6'>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md grid grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <div
                  key={module.id}
                  className={`
                    flex flex-col items-center text-center px-4 py-2
                    ${index < courseModules.length - 1 ? 'border-r border-gray-300' : ''}
                    
                  `}
                >
                <div className="mb-3 w-16 h-16 relative"> {/* Container for image to control size */}
                  <Image
                    src={module.icon}
                    alt={`${module.textBold} icon`}
                    layout="fill" // Makes the image fill its parent container
                    objectFit="contain" // Ensures the entire image is visible
                  />
                </div>
                <h3 className="md:text-lg text-md text-gray-800 leading-tight">
                  <span className='font-semibold'>{module.textBold} </span>
                  <span>{module.textLight}</span></h3>
              </div>
            ))}
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsideFoundation;