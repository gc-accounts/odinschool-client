'use client'
import React, { useEffect } from 'react';
import HeroSection from '@/components/components/HeroSection';
import FeaturedCourses from '@/components/components/FeaturedCourses';
import InstructorProfile from '@/components/components/InstructorProfile';
import Testimonials from '@/components/components/Testimonials';
import Footer from '@/components/components/Footer';
import Navbar from '@/components/components/Navbar';
import CallbackForm from '@/components/components/CallbackForm';
import OrganizationLogos from '@/components/components/OrganizationLogos';
import NewsSection from '@/components/components/NewsSection';
import PlatformComparison from '@/components/components/PlatformComparison';
import JobsSection from '@/components/components/JobsSection';
import CertificationSection from '@/components/components/CertificationSection';
import FAQsection from '@/components/components/FAQsection';
import CollegeSpotlight from '@/components/components/CollegeSpotlight';
import OdinTalks from '@/components/components/OdinTalks';
import { ChevronRight, Code, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent } from '@/components/components/ui/card';
import ExtrasSection1 from '@/components/components/ExtrasSection1';
import DsEliteFold from '@/components/components/DsEliteFold';
import getCourseData from '@/components/utils/getCourseData';
import InstructorProfileHome from '@/components/components/InstructorProfileHome';
import { DsMentorsData } from '@/components/data/course-section/mentors/DsMentorsData';



const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OrganizationLogos />
        <DsEliteFold sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        <FeaturedCourses />
        <Testimonials />
        <InstructorProfileHome data={DsMentorsData} />
        <JobsSection />
        <OdinTalks sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
      </main>
      <ExtrasSection1 />
      <NewsSection />
      <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
              Ready to <span className="text-primary-600">Get Started?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

export default Index;
