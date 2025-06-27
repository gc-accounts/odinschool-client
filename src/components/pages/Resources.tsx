'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Calculator, FileText, Download, BookOpen, Video, Wrench } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Card, CardContent } from '@/components/components/ui/card';
import FeaturedCourses from '@/components/components/FeaturedCourses';
import CallbackForm from '@/components/components/CallbackForm';
import OrganizationLogos from '@/components/components/OrganizationLogos';
import Testimonials from '@/components/components/Testimonials';
import InstructorProfileHome from '@/components/components/InstructorProfileHome';
import { DsMentorsData } from '@/components/data/course-section/mentors/DsMentorsData';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const resourceLinks = [
    {
      title: 'Salary Calculator',
      description: 'Estimate your market value based on your job role, experience, education, and location.',
      icon: <Calculator className="h-12 w-12 text-primary-600" />,
      path: '/data-science/salary-calculator',
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
      path: '/projects-page',
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
      path: '/data-science-interview',
      cta: 'Practice Now'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">

          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <Wrench className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2 text-center">Resource Suite</h1>
            <p className="md:text-lg text-md text-center max-w-2xl mx-auto">
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
                    href={resource.path}
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
          <InstructorProfileHome data={DsMentorsData} />
          <CallbackForm />
          <OrganizationLogos />


        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
