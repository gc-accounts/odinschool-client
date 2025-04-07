
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Download, BookOpen, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Resources = () => {
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
            <h1 className="text-4xl font-bold text-center mb-4">Career Resources</h1>
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

          <div className="mt-16 bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Use Our Career Resources?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  <Calculator className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accurate Salary Insights</h3>
                <p className="text-gray-600">
                  Get data-driven salary estimates based on current industry standards and regional adjustments.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  <FileText className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Resume Templates</h3>
                <p className="text-gray-600">
                  Stand out with industry-specific resume templates designed to highlight your skills effectively.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  <BookOpen className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Self-Paced Learning</h3>
                <p className="text-gray-600">
                  Learn at your own pace with our comprehensive learning hub and structured educational resources.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  <Video className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interview Readiness</h3>
                <p className="text-gray-600">
                  Build confidence for your interviews with practice sessions and personalized feedback.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  <Download className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Curated Learning Materials</h3>
                <p className="text-gray-600">
                  Access high-quality resources that have been vetted by industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
