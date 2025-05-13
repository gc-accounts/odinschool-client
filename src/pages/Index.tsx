
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
import FAQsection from '@/components/FAQsection';
import CollegeSpotlight from '@/components/CollegeSpotlight';
import { ChevronRight, Code, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ExtrasSection1 from '@/components/ExtrasSection1';

const mentorsData = [
  {
    id: "mentor-1",
    name: "Dr. Sarah Johnson",
    role: "AI Research Scientist",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256",
    expertise: ["Machine Learning", "Natural Language Processing", "Neural Networks"],
    bio: "Dr. Sarah Johnson is a leading researcher in artificial intelligence with over 15 years of experience. She has published numerous papers on deep learning applications.",
    education: "Ph.D. in Computer Science, Stanford University",
    accomplishments: [
      "Led team that developed breakthrough NLP model",
      "Author of 'Deep Learning: The Next Frontier'",
      "Recipient of the ACM Computing Innovation Fellowship"
    ]
  },
  {
    id: "mentor-2",
    name: "Michael Chen",
    role: "Senior Software Engineer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=256",
    expertise: ["Cloud Architecture", "DevOps", "Microservices"],
    bio: "Michael Chen specializes in cloud-native applications and infrastructure automation. He has helped numerous organizations modernize their tech stacks.",
    education: "M.S. in Computer Engineering, UC Berkeley",
    accomplishments: [
      "Microsoft Certified Azure Solutions Architect",
      "Creator of popular open-source deployment tool",
      "Speaker at KubeCon and CloudNativeCon"
    ]
  },
  {
    id: "mentor-3",
    name: "Priya Patel",
    role: "Data Science Director",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=256",
    expertise: ["Big Data Analytics", "Recommendation Systems", "Statistical Modeling"],
    bio: "Priya leads data science initiatives focused on improving content recommendations and user experience through advanced analytics.",
    education: "Ph.D. in Statistics, MIT",
    accomplishments: [
      "Developed Netflix's content classification algorithm",
      "Published research on personalization at scale",
      "Adjunct Professor at UCLA"
    ]
  },
];
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
        <Testimonials />
        <InstructorProfile />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
               Odintalks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Listen to subject matter experts, industry practitioners, and thought leaders talk about the latest trends, technologies, hiring processes, and more in our free OdinTalks sessions.
              </p>
            </div>
            
            
              <div className="container mx-auto py-12 px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mentorsData.map((mentor) => (
                        <Link key={mentor.id} to={`/mentor/${mentor.id}`}>
                          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="aspect-[4/3] relative">
                              <img 
                                src={mentor.image} 
                                alt={mentor.name}
                                className="w-full h-full object-cover" 
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                                <p className="text-white/90">{mentor.role}</p>
                              <p className="text-gray-600">{mentor.company}</p>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
            
            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/odintalks">Explore OdinTalks</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                Explore More <span className="text-primary-600">Resources</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover additional tools and resources to enhance your learning journey
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
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
              
         
              <Link to="/reviews" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Student Reviews</h3>
                  <p className="text-gray-600 text-sm">Read reviews from our successful students</p>
                </div>
              </Link>
              
             
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
              
            
              <Link to="/news" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Tech News</h3>
                  <p className="text-gray-600 text-sm">Stay updated with the latest industry news</p>
                </div>
              </Link>
              
              
              <Link to="/college-students" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">College Students</h3>
                  <p className="text-gray-600 text-sm">Special programs for university students</p>
                </div>
              </Link>
              
             
              <Link to="/blog" className="group">
                <div className="bg-gray-100 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">Blog</h3>
                  <p className="text-gray-600 text-sm">Coding tutorials and industry insights</p>
                </div>
              </Link>
            </div>
          </div>
        </section> */}
      </main>
      <ExtrasSection1 />
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
      <Footer />
    </div>
  );
};

export default Index;
