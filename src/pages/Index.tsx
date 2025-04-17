
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import InstructorProfile from '@/components/InstructorProfile';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CallbackForm from '@/components/CallbackForm';

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
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                Ready to <span className="text-primary-600">Get Started?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Request a callback from our team and start your coding journey today
              </p>
            </div>
            <CallbackForm />
          </div>
        </section>
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
