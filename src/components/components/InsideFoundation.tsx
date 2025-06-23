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
          <h2 className="text-3xl md:text-5xl font-display leading-tight text-gray-800">
            What's Inside the <span className='text-primary-600'>Foundational Course</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          {/* Left Text Content */}
          <div className="md:col-span-6">
            <p className='mb-2'>
              This course is your launchpad.
            </p>
            <p className='mb-2'>You might not master data science overnight — but you can start right.</p>
            <p>This course is designed to help you grasp the core building blocks so that when it’s time for the Data Science Elite Course, you walk in with clarity and confidence.</p>

             <ul className="text-black space-y-2 my-6">
                                   <li className='flex gap-1 mb-4'>
                                    <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                    <p>
                                    <span className='font-semibold'>Python Basics</span> 
                                    <br />Python is the force behind data, AI, and automation — and it’s in high demand. Whether to clean data, prep it for analysis or run the analytics, Python is your tool and companion.
                                    </p>
                                    </li>

                                     <li className='flex gap-1 mb-4'>
                                    <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                    <p>
                                    <span className='font-semibold'>SQL for Data</span> 
                                    <br />SQL is the language of databases. It’s how professionals access, shape, and use real data every day — across almost every industry.
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