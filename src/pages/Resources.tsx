import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Download, BookOpen, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import FeaturedCourses from '@/components/FeaturedCourses';
import CallbackForm from '@/components/CallbackForm';
import OrganizationLogos from '@/components/OrganizationLogos';
import InstructorProfile from '@/components/InstructorProfile';
import Testimonials from '@/components/Testimonials';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const resourceLinks = [
    {
      title: 'Salary Calculator',
      description: 'Estimate your market value based on your job role, experience, education, and location.',
      icon: <Calculator className="h-12 w-12 text-primary-600" />,
      path: '/salary-calculator',
      cta: 'Calculate Salary'
    },
    {
      title: 'Resume Builder',
      description: 'Create a professional resume in minutes with our easy-to-use builder tool.',
      icon: <FileText className="h-12 w-12 text-primary-600" />,
      path: '/resume-builder',
      cta: 'Build Resume'
    },
    {
      title: 'Free Resources',
      description: 'Download free templates, code snippets, and learning materials to accelerate your development journey.',
      icon: <Download className="h-12 w-12 text-primary-600" />,
      path: '/free-resources',
      cta: 'Browse Resources'
    },
    {
      title: 'Learning Hub',
      description: 'Access our collection of free beginner-friendly courses to help you build a strong foundation in coding.',
      icon: <BookOpen className="h-12 w-12 text-primary-600" />,
      path: '/learning-hub',
      cta: 'Start Learning'
    },
    {
      title: 'Virtual Interview Practice',
      description: 'Practice your interview skills with our AI-powered virtual interviewer and receive instant feedback.',
      icon: <Video className="h-12 w-12 text-primary-600" />,
      path: '/virtual-interview',
      cta: 'Practice Now'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Resource Suite</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Tools and resources to help you succeed in your tech career
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceLinks.map((resource) => (
              <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6">
                    {resource.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{resource.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {resource.description}
                  </p>
                  <Link 
                    to={resource.path}
                    className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-white font-medium hover:bg-primary-700 transition-colors"
                  >
                    {resource.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <FeaturedCourses />
          <Testimonials />
          <InstructorProfile />
          <CallbackForm />
          <OrganizationLogos />
          
          
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
