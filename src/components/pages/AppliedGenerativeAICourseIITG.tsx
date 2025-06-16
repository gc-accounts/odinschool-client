'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';


const CardsFF = dynamic(() => import('@/components/components/CardsFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DataLeadersForm = dynamic(() => import('@/components/components/DataLeadersForm'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const WhyJoin = dynamic(() => import('@/components/components/WhyJoin'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Mentorship = dynamic(() => import('@/components/components/Mentorship'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const HiringSprints = dynamic(() => import('@/components/components/HiringSprints'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const HiringPartners = dynamic(() => import('@/components/components/HiringPartners'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ProgramHighlights = dynamic(() => import('@/components/components/ProgramHighlights'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ImageResponsive = dynamic(() => import('@/components/components/ImageResponsive'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ToolsSection = dynamic(() => import('@/components/components/ToolsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DsEliteProjects = dynamic(() => import('@/components/components/DsEliteProjects'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const CareerServices = dynamic(() => import('@/components/components/CareerServices1'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ProgramCurriculum = dynamic(() => import('@/components/components/ProgramCurriculum'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const SuccessStoriesOD = dynamic(() => import('@/components/components/SuccessStoriesOD'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const FAQsection = dynamic(() => import('@/components/components/FAQsection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Certification = dynamic(() => import('@/components/components/Certification'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DsEliteFeeModule = dynamic(() => import('@/components/components/DsEliteFeeModule'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});


import { GenAIIITGCurriculumData } from '@/components/data/curriculum/GenAIIITGCurriculumData';
import { GenAIIITGProgramHighlightsData } from '@/components/data/course-section/program-highlights/GenAIIITGProgramHighlightsData';
import { genAiiitgFaqsData } from '@/components/data/course-section/faqs/genAiiitgFaqsData';
import { GenAIIITGCertificateData } from '@/components/data/course-section/certificate/GenAIIITGCertificateData';
import { GenAIIITGMentorsData } from '@/components/data/course-section/mentors/GenAIIITGMentorsData';
import { GenAIIITGMoreJobsData } from '@/components/data/course-section/more-jobs/GenAIIITGMoreJobsData';

import HowApply from '@/components/components/HowApply';
import GenAIIITGFF from '@/components/components/GenAIIITGFF';
import WhyLearn from '@/components/components/WhyLearn';
import MoreJobs from '@/components/components/MoreJobs';
import GenAIIITGProgramCurriculum from '@/components/components/GenAIIITGProgramCurriculum';
import RealWorldProjects from '@/components/components/RealWorldProjects';
import WhoCanApplyIITG from '@/components/components/WhoCanApplyIITG';
import InstructorProfileHome from '@/components/components/InstructorProfileHome';
import GenAIIITGFeeModule from '@/components/components/GenAIIITGFeeModule';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

// Lazy-loaded components
const Navbar = dynamic(() => import('@/components/components/Navbar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const Footer = dynamic(() => import('@/components/components/Footer'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });


const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const HelloBar = dynamic(() => import('@/components/components/HelloBar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const AppliedGenerativeAICourseIITG = ({ organisations }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelloBar isPrimaryForm={true} slug='generative-ai-course-iitg' />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <GenAIIITGFF sectionClass="bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <section className="">
            <ImageResponsive
              desktopSrc="https://strapi.odinschool.com/uploads/iit_G_building_20_1_9695a67d89.webp"
              mobileSrc="https://strapi.odinschool.com/uploads/iit_G_building_20_1_9695a67d89.webp"
              alt="gen-ai building"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl"
              loading="lazy"
              priority={false}
              fetchPriority="low"
            />
          </section>
          <WhyLearn sectionClass="bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <ProgramHighlights
            sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            data={GenAIIITGProgramHighlightsData}
          />
          <MoreJobs 
          title='AI Engineer and More Jobs!'
          subText='The continuous need for skilled professionals shows no signs of slowing down in the Generative AI field. Upskill yourself to grab the best jobs!' 
          headerColor='text-black' 
          data={GenAIIITGMoreJobsData} 
          sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <GenAIIITGProgramCurriculum 
          title='A curriculum designed for outcomes'
          subText='Elevate your skills by learning a cutting-edge Generative AI curriculum designed by E&ICT Academy, IIT Guwahati.'   
          data={GenAIIITGCurriculumData}
            sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            slug="generative-ai-course-iitg"
            />
           <RealWorldProjects sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> 
           <WhoCanApplyIITG sectionClass="bg-primary-50 px-[20px] pt-[50px] md:px-[30px] md:pt-[70px]" />
           <CareerServices fontFamily={dmSerifDisplay.variable} slug="generative-ai-course-iitg" 
           sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <Certification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={GenAIIITGCertificateData} />
           <InstructorProfileHome fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={GenAIIITGMentorsData} />
           <HowApply sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <GenAIIITGFeeModule sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
           <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={genAiiitgFaqsData} />

        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppliedGenerativeAICourseIITG;
