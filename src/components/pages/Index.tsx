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

const mentorsData = [
  {
    id: "mentor-1",
    name: "Dr. Sarah Johnson",
    role: "AI Research Scientist",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auhref=format&fit=crop&w=256",
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
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auhref=format&fit=crop&w=256",
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
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auhref=format&fit=crop&w=256",
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
        <OdinTalks />
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
