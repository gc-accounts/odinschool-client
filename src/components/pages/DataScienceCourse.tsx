'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';


const Navbar = dynamic(() => import('@/components/components/Navbar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const DsFF = dynamic(() => import('@/components/components/DsFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const Footer = dynamic(() => import('@/components/components/Footer'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const HelloBar = dynamic(() => import('@/components/components/HelloBar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });


const HowApply = dynamic(() => import('@/components/components/HowApply'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DsEliteFold = dynamic(() => import('@/components/components/DsEliteFold'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsCards = dynamic(() => import('@/components/components/DsCards'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const ProgramHighlights2 = dynamic(() => import('@/components/components/ProgramHighlights2'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsOverview = dynamic(() => import('@/components/components/DsOverview'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const Testimonials = dynamic(() => import('@/components/components/Testimonials'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const MoreJobs = dynamic(() => import('@/components/components/MoreJobs'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsCareerServices = dynamic(() => import('@/components/components/DsCareerServices'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const MultipleJobDrives = dynamic(() => import('@/components/components/MultipleJobDrives'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsCurriculum = dynamic(() => import('@/components/components/DsCurriculum'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsProjects = dynamic(() => import('@/components/components/DsProjects'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const PlatformComparison = dynamic(() => import('@/components/components/PlatformComparison'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsFeeModule = dynamic(() => import('@/components/components/DsFeeModule'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const InstructorProfileHome = dynamic(() => import('@/components/components/InstructorProfileHome'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const DsTitleForm = dynamic(() => import('@/components/components/DsTitleForm'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ToolsSection = dynamic(() => import('@/components/components/ToolsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});


const FAQsection = dynamic(() => import('@/components/components/FAQsection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Certification = dynamic(() => import('@/components/components/Certification'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const AboutCity= dynamic(() => import('@/components/components/AboutCity'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const CitySecondaryForm=dynamic(() => import('@/components/components/city-page/CitySecondaryForm'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});


import { dsFaqsData } from '@/components/data/course-section/faqs/dsFaqsData';
import { DaProgramHighlightsData, centerImage } from '@/components/data/course-section/program-highlights/DaProgramHighlightsData';
import { DsMoreJobsData } from '@/components/data/course-section/more-jobs/DsMoreJobsData';
import { DsMentorsData } from '@/components/data/course-section/mentors/DsMentorsData';
import { DsCertificateData } from '@/components/data/course-section/certificate/DsCertificateData';



const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

interface DataScienceCourseProps{
  slug?:string;
}
const DataScienceCourse = ({slug}:DataScienceCourseProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelloBar isPrimaryForm={true} slug='data-science-course' />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <DsFF sourceDomain={slug ? `${slug} City page` : 'Course form'} sectionClass="bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsEliteFold fontFamily={dmSerifDisplay.variable} sectionClass={'bg-[#021331] px-[20px] pt-[50px] pb-[50px] md:pb-[140px] md:px-[30px] md:pt-[70px]'} />
          <DsCards sectionClass="px-[20px] pt-[50px] pb-[0px] md:px-[30px] md:pb-[0px] md:pt-[0px]" />
          <ProgramHighlights2 sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:pt-[0px] md:pb-[70px]" data={DaProgramHighlightsData} centerImage={centerImage} />
          <OrganizationLogos sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/>
          <DsOverview sectionClass="bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <Testimonials title='Data Science Career Transitions!' subText='' sectionClass={'bg-white px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]'} />
          <MoreJobs 
          title='Data Scientist and More Jobs!' 
          subText='The continuous need for skilled professionals shows no signs of slowing down in the Data Science field. Upskill yourself to grab the best jobs!' 
          headerColor='text-white' 
          data={DsMoreJobsData} 
          sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsCareerServices sourceDomain={slug ? `${slug} City page` : 'Course form'} sectionClass="px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <MultipleJobDrives title='Multiple Job Drives Every Month' subText='' headerColor='text-white' sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsCurriculum title='Data Science Course Syllabus' description='An industry-aligned curriculum that will make you productive from day one. The curriculum is updated every month so you learn the skills that recruiters love. ' sourceDomain={slug ? `${slug} City page` : 'Course form'} sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <ToolsSection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsProjects sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <PlatformComparison fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <HowApply sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <DsFeeModule  sourceDomain={slug ? `${slug} City page` : 'Course form'} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
      <InstructorProfileHome fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsMentorsData} />
      <Certification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsCertificateData} />
      <DsTitleForm sourceDomain={slug ? `${slug} City page` : 'Course form'} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
      <StudentsTicker sectionClass="bg-white px-0 pb-[50px] md:px-0 md:pb-[70px]" />
      <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={dsFaqsData} />


      {slug && 
      <AboutCity slug={slug} sectionClass='bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'/>
      
      }

      {
        slug && <CitySecondaryForm slug={slug} sectionClass='bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'/>
      }
          
        
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DataScienceCourse;
