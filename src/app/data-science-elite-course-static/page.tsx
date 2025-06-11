'use client'
import React, { useEffect } from 'react';
import { DsMentorsData } from '@/components/data/course-section/mentors/DsMentorsData';

import dynamic from 'next/dynamic';
import CardsFF from '@/components/components/CardsFF';
import DataLeadersForm from '@/components/components/DataLeadersForm';
import WhyJoin from '@/components/components/WhyJoin';
import Mentorship from '@/components/components/Mentorship';
import HiringSprints from '@/components/components/HiringSprints';
import HiringPartners from '@/components/components/HiringPartners';
import StudentsTicker from '@/components/components/StudentsTicker';
import ProgramHighlights from '@/components/components/ ProgramHighlights';
import ImageResponsive from '@/components/components/ImageResponsive';

import { DsEliteProgramHighlightsData } from '@/components/data/course-section/program-highlights/DsEliteProgramHighlightsData';
import ToolsSection from '@/components/components/ToolsSection';
import DsEliteProjects from '@/components/components/DsEliteProjects';
import CareerServices from '@/components/components/CareerServices1';
import { ProgramCurriculumData } from '@/components/data/ds-elite-static-data/ProgramCurriculumData';




const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});



const FeaturedCourses = dynamic(() => import('@/components/components/FeaturedCourses'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});


const Testimonials = dynamic(() => import('@/components/components/Testimonials'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const CallbackForm = dynamic(() => import('@/components/components/CallbackForm'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const NewsSection = dynamic(() => import('@/components/components/NewsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});



const JobsSection = dynamic(() => import('@/components/components/JobsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});



const OdinTalks = dynamic(() => import('@/components/components/OdinTalks'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const ExtrasSection1 = dynamic(() => import('@/components/components/ExtrasSection1'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const DsEliteFoldLight = dynamic(() => import('@/components/components/DSEliteFoldLight'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const InstructorProfileHome = dynamic(() => import('@/components/components/InstructorProfileHome'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});


const ProgramCurriculum = dynamic(() => import('@/components/components/ProgramCurriculum'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});


const DsEliteCourse = ({ organisations, featuredCourses, testimonials, odinTalks }) => {

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <DsEliteFoldLight sectionClass={'bg-[#fff] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <CardsFF sectionClass={'bg-[#fff] px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]'} />
        <DataLeadersForm sectionClass={'bg-fff px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]'} />
        <WhyJoin sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <Mentorship sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <HiringSprints sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <HiringPartners sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <StudentsTicker sectionClass={'bg-white px-[0px] pb-[50px] md:px-[0px] md:pb-[70px]'} />
        <ProgramHighlights sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
          data={DsEliteProgramHighlightsData} />

        <section className="bg-primary-50 px-[0px] py-[50px] md:px-[0px] md:py-[70px]">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
                Careers You'll <span className="text-primary-600">Be Ready For</span>
              </h2>
              <p className="text-gray-600">Grab the advantage of being a part of India's only Data Science course backed by top Indian companies
              </p>
            </div>
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

        <ProgramCurriculum data={ProgramCurriculumData} sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'data-science-elite-course'} />
        <ToolsSection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <DsEliteProjects sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <CareerServices slug={'data-science-elite-course'} sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />





        <OrganizationLogos organisations={organisations} />

        <FeaturedCourses courses={featuredCourses} />
        <Testimonials testimonials={testimonials} />
        <InstructorProfileHome data={DsMentorsData} />
        <JobsSection sectionClass={'px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <OdinTalks odinTalks={odinTalks} sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
      </main>
      <ExtrasSection1 />
      <NewsSection />
      <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
              Ready to <span className="text-primary-600">Get Started?</span>
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Request a callback from our team and begin your upskilling journey today.
            </p>
          </div>
          <CallbackForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DsEliteCourse;
