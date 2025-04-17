
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import InstructorProfile from '@/components/InstructorProfile';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "CodeMaster - Learn to Code with Expert-Led Online Courses";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCourses />
        <InstructorProfile />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
