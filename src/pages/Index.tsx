
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import InstructorProfile from '@/components/InstructorProfile';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CallbackForm from '@/components/CallbackForm';
import OrganizationLogos from '@/components/OrganizationLogos';
import NewsSection from '@/components/NewsSection';
import PlatformComparison from '@/components/PlatformComparison';
import JobsSection from '@/components/JobsSection';
import CertificationSection from '@/components/CertificationSection';
import ToolsSection from '@/components/ToolsSection';

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
        <OrganizationLogos />
        <FeaturedCourses />
        <InstructorProfile />
        <NewsSection />
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
        <PlatformComparison />
        <JobsSection />
        <CertificationSection />
        <ToolsSection />
        
        {/* Additional Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                Explore More <span className="text-primary-600">Resources</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover additional tools and resources to enhance your learning journey
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Checkout Page */}
              <Link to="/course-checkout/1" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Course Checkout</h3>
                  <p className="text-gray-600 text-sm">Complete your enrollment and start learning today</p>
                </div>
              </Link>
              
              {/* Referral Program */}
              <Link to="/referral-program" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Referral Program</h3>
                  <p className="text-gray-600 text-sm">Invite friends and earn rewards together</p>
                </div>
              </Link>
              
              {/* Thank You Page */}
              <Link to="/thank-you" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Thank You</h3>
                  <p className="text-gray-600 text-sm">Your submission has been received</p>
                </div>
              </Link>
              
              {/* Success Stories/Reviews */}
              <Link to="/success-stories" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Success Stories</h3>
                  <p className="text-gray-600 text-sm">Read reviews from our successful students</p>
                </div>
              </Link>
              
              {/* Train Your Team */}
              <Link to="/train-your-team" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Train Your Team</h3>
                  <p className="text-gray-600 text-sm">Corporate training solutions for businesses</p>
                </div>
              </Link>
              
              {/* Hire Talent */}
              <Link to="/hire-talent" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Hire Talent</h3>
                  <p className="text-gray-600 text-sm">Connect with our skilled graduates</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
