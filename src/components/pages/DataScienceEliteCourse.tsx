'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';

import CardsFF from '@/components/components/CardsFF';
import DataLeadersForm from '@/components/components/DataLeadersForm';
import WhyJoin from '@/components/components/WhyJoin';
import Mentorship from '@/components/components/Mentorship';
import HiringSprints from '@/components/components/HiringSprints';
import HiringPartners from '@/components/components/HiringPartners';
import ProgramHighlights from '@/components/components/ ProgramHighlights';
import ImageResponsive from '@/components/components/ImageResponsive';
import ToolsSection from '@/components/components/ToolsSection';
import DsEliteProjects from '@/components/components/DsEliteProjects';
import CareerServices from '@/components/components/CareerServices1';
import ProgramCurriculum from '@/components/components/ProgramCurriculum';
import SuccessStoriesOD from '@/components/components/SuccessStoriesOD';
import FAQsection from '@/components/components/FAQsection';
import Certification from '@/components/components/Certification';
import DsEliteFeeModule from '@/components/components/DsEliteFeeModule';

import { ProgramCurriculumData } from '@/components/data/ds-elite-static-data/ProgramCurriculumData';
import { DsEliteProgramHighlightsData } from '@/components/data/course-section/program-highlights/DsEliteProgramHighlightsData';
import { dsEliteFaqsData } from '@/components/data/course-section/faqs/dsEliteFaqsData';
import { DsEliteCertificateData } from '@/components/data/course-section/certificate/DsEliteCertificateData';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

// Lazy-loaded components
const Navbar = dynamic(() => import('@/components/components/Navbar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const Footer = dynamic(() => import('@/components/components/Footer'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const DsEliteFoldLight = dynamic(() => import('@/components/components/DSEliteFoldLight'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const DataScienceEliteCourse = ({ organisations }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>


      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <DsEliteFoldLight sectionClass="bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <CardsFF sectionClass="bg-[#fff] px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]" />
          <DataLeadersForm sectionClass="bg-white px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]" />
          <WhyJoin sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <Mentorship sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <HiringSprints sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <HiringPartners sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <StudentsTicker sectionClass="bg-white px-0 pb-[50px] md:px-0 md:pb-[70px]" />
          <ProgramHighlights
            sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            data={DsEliteProgramHighlightsData}
          />

          {/* Careers Section */}
          <section className="bg-primary-50 px-0 py-[50px] md:px-0 md:py-[70px]">
            <div className="container mx-auto text-center max-w-4xl mb-10">
              <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
                Careers You'll <span className="text-primary-600">Be Ready For</span>
              </h2>
              <p className="text-gray-600">
                Grab the advantage of being a part of India's only Data Science course backed by top Indian companies
              </p>
            </div>
            <ImageResponsive
              desktopSrc="https://strapi.odinschool.com/uploads/DS_Elite_infographic_20_4_897944f1db.webp"
              mobileSrc="https://strapi.odinschool.com/uploads/DS_Elite_infographic_20_5_4276df33e1.webp"
              alt="Careers You’ll Be Ready For"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl"
              loading="lazy"
              priority={false}
              fetchPriority="low"
            />
          </section>

          <ProgramCurriculum
            data={ProgramCurriculumData}
            sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            slug="data-science-elite-course"
          />
          <ToolsSection sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsEliteProjects sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <CareerServices slug="data-science-elite-course" sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <SuccessStoriesOD sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <Certification sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsEliteCertificateData} />
          <DsEliteFeeModule sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <OrganizationLogos sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" organisations={organisations} />
          <FAQsection sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={dsEliteFaqsData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DataScienceEliteCourse;
