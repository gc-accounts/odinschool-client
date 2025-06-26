'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = dynamic(() => import('@/components/components/Navbar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const Footer = dynamic(() => import('@/components/components/Footer'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const PlatformComparison = dynamic(() => import('@/components/components/PlatformComparison'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const FAQsection = dynamic(() => import('@/components/components/FAQsection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Certification = dynamic(() => import('@/components/components/Certification'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});



import { dwFaqsData } from '@/components/data/course-section/faqs/dwFaqsData';
import { WdCertificateData } from '@/components/data/course-section/certificate/WdCertificateData';
import SuccessfullyPlaced from '@/components/components/SuccessfullyPlaced';
import { CiCircleCheck } from 'react-icons/ci';
import CareerServices from '@/components/components/CareerServices1';
import WdCurriculum from '@/components/components/WdCurriculum';
import WdProjects from '@/components/components/WdProjects';



const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

interface Props{
  slug?:string;
}
const WebDevelopmentCourse = ({slug}:Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>

          <section className="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">

           <div className="mb-4 flex items-center gap-2 bg-primary-100 px-3 py-1 rounded-full inline-block w-fit">
            <div className='flex items-center justify-start'>
            <Image src="https://strapi.odinschool.com/uploads/google_icon_1c781f0daa.svg" alt="Google Reviews" width={20} height={20} className="w-4 h-4 mr-1" />
            <Image src="https://strapi.odinschool.com/uploads/4_7_Rating_21deb84380.svg" alt="Google Reviews" width={20} height={20} className="w-auto h-4" />
            </div>
            <Link href='https://www.google.com/search?q=odinschool+reviews&ei=nraqY-bdDYePseMPs7KXyAE&oq=odinschool&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMhIILhDHARCvARDIAxCwAxBDGAIyEgguEMcBENEDEMgDELADEEMYAjISCC4QxwEQrwEQyAMQsAMQQxgCMgwILhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQAFgAYPoPaAFwAXgAgAEAiAEAkgEAmAEAyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp#lrd=0x3bcb9397ba0bf25b:0xc3f248706b488093,1' target='_blank'>
            <span className="text-xs">4.6/5 | 1,539 Reviews</span>
            </Link>
          </div>
           <h2 className="text-3xl md:text-5xl  md:my-8 my-4">React Web Development Course</h2>

          {/* Course Description */}
          <p className="text-md text-gray-700 mt-4 max-w-md">
            A 3-month hands-on course for front-end web and mobile development using HTML5, CSS, JavaScript, ReactJS, and ES6
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-primary-50 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <svg className="w-8 h-8 mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-4m-2 4h4m6 0v-4m-2 4h4M9 13H5c-1.104 0-2 .896-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4c0-1.104-.896-2-2-2h-4m0 0V9a2 2 0 00-2-2H9c-1.104 0-2 .896-2 2v4m-2 0H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-2"></path>
              </svg>
              <span className="font-semibold text-gray-800">Interactive learning</span>
            </div>
            <div className="bg-primary-50 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <svg className="w-8 h-8 mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
              <span className="font-semibold text-gray-800">Real-time projects</span>
            </div>
            <div className="bg-primary-50 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <svg className="w-8 h-8 mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-4m0 0l4 4m-4-4v-4m0-4l4-4m-4 4l-4-4m4 4V4"></path>
              </svg>
              <span className="font-semibold text-gray-800">Labs for practice</span>
            </div>
            <div className="bg-primary-50 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <svg className="w-8 h-8 mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              <span className="font-semibold text-gray-800">Regular assessments</span>
            </div>
          </div>

            <div className="mt-4 flex items-center justify-start gap-3">
                      <p className='text-xs'>A Certified Member of</p>
                      <Image src="https://strapi.odinschool.com/uploads/hysea_rc_f9ae5c4e82.webp" alt="HYSEA" className="h-6" width={70} height={20} />
                      <Image src="https://strapi.odinschool.com/uploads/shrm_rc_7b33e51251.webp" alt="SHRM" className="h-6" width={70} height={20} />
                    </div>
        </div>

        {/* Right Section - Student Image and Info Box */}
        <div className="flex flex-col items-center lg:items-end justify-center relative min-h-[300px] lg:min-h-full">

          {/* Info Box */}
          <div className="relative bg-primary-600 rounded-xl p-6 sm:p-8 lg:p-10 text-white shadow-xl w-full max-w-sm lg:max-w-md mt-16 lg:mt-0">
            <p className="text-base text-md font-medium leading-relaxed text-center">
              Registrations are closed
            </p>
            {/* <Link href=''>
              <button className="mt-6 w-full py-3 px-6 bg-yellow-400 text-purple-900 font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Know more
            </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl  md:my-8 my-4">Course Overview</h2>
        <p className="text-md text-gray-700 mt-4">
           This program offers a holistic learning experience, delving into crucial areas such as application programming interfaces (APIs), user experience design, and the creation and deployment of modern web applications. Whether you are embarking on a new career path, transitioning to a different role, or seeking to enhance your existing skill set, our personalized support and abundant resources ensure a rewarding learning journey. Combining theoretical knowledge with hands-on practice, you will develop the ability to craft visually captivating and interactive user interfaces for web applications.
          </p>
      </div>
    </section>

    <OrganizationLogos sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/>
    <SuccessfullyPlaced sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />


    <section className="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
      <div className="container text-center">

        <h2 className="text-3xl md:text-5xl  md:my-8 my-4 text-center">What's in it for you?</h2>
        <p className="text-md text-gray-700 mt-4 text-center">
           Embark on a transformative journey in front-end web development with our comprehensive course, designed to empower your career.
          </p>
        <div className='grid grid-cols-12'>
          <div className='md:col-span-6'>
             


          <ul className="text-black space-y-2 my-6">
                                             <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>Daily/weekly release of interactive and engaging learning resources</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>Micro-level assessments</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>Hands-on coding exercises and projects to reinforce learning</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>A dedicated Success Mentor</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>Masterclasses led by industry experts</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>Career Services</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>1 year LMS access</p>
                                              </li>

                                              <li className='flex gap-1 mb-4'>
                                              <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                                              <p>Certificate of accomplishment</p>
                                              </li>


                                           
                                            </ul>
          </div>
          <div className='md:col-span-3'></div>
          <div className='md:col-span-3'>
            <Image alt='' src='https://strapi.odinschool.com/uploads/RWD_20image_1bb20f3495.webp' width={100} height={100} className='w-full' />
          </div>

        </div>
       
      </div>
    </section>
    <CareerServices fontFamily={dmSerifDisplay.variable} slug="" sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
    <WdCurriculum title='The most in-demand skills
in a single curriculum!' description='An industry-aligned curriculum tailor-made for your job readiness.
The curriculum is updated every month so you learn the skills that recruiters love.' sectionClass="bg-white px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]" />
<WdProjects sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
<PlatformComparison fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
<Certification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={WdCertificateData} />
<FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={dwFaqsData} />
<StudentsTicker sectionClass="bg-white px-0 pb-[50px] md:px-0 md:pb-[70px]" />


        </main>
        <Footer />
      </div>
    </>
  );
};

export default WebDevelopmentCourse;
