'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';

// Lazy-loaded components
const Navbar = dynamic(() => import('@/components/components/Navbar'), { 
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> 
});

const DsFoundationFF = dynamic(() => import('@/components/components/DsFoundationFF'), { 
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> 
});

const CardsFF = dynamic(() => import('@/components/components/CardsFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const WhyFoundation = dynamic(() => import('@/components/components/WhyFoundation'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Eligibility = dynamic(() => import('@/components/components/Eligibility'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const InsideFoundation = dynamic(() => import('@/components/components/InsideFoundation'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DsFoundationCurriculum = dynamic(() => import('@/components/components/DsFoundationCurriculum'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DsFoundationFeeModule = dynamic(() => import('@/components/components/DsFoundationFeeModule'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), { 
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> 
});

const FAQsection = dynamic(() => import('@/components/components/FAQsection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Footer = dynamic(() => import('@/components/components/Footer'), { 
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> 
});


import { dsFoundationFaqsData } from '@/components/data/course-section/faqs/dsFoundationFaqsData';
import { DsFoundationCardsData } from '@/components/data/course-section/cards-ff/DsFoundationCardsData';


const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});


const DataScienceFoundationCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <DsFoundationFF sectionClass="bg-[#021331] px-[20px] pt-[50px] md:px-[30px] md:pt-[70px]" />
          <CardsFF data={DsFoundationCardsData} sectionClass="bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <WhyFoundation sectionClass="bg-primary-50 px-[20px] pt-[50px] md:px-[30px] md:pt-[70px]" />
          <Eligibility sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <InsideFoundation sectionClass="bg-primary-100 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsFoundationCurriculum title='A Curriculam for hands on Learning' description='content...' sourceDomain='' sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsFoundationFeeModule sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <StudentsTicker sectionClass="bg-primary-50 px-0 pb-[50px] md:px-0 md:pb-[70px]" />
          <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={dsFoundationFaqsData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DataScienceFoundationCourse;
