
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
