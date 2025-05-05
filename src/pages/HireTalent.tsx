
import React from 'react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CallbackForm from '@/components/CallbackForm';
import OrganizationLogos from '@/components/OrganizationLogos';

const HireTalent = () => {
  const talents = [
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      experience: "3 years",
      education: "Computer Science, MIT",
      image: "/placeholder.svg",
    },
    {
      name: "Jessica Kim",
      role: "UX/UI Designer",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
      experience: "4 years",
      education: "Design, RISD",
      image: "/placeholder.svg",
    },
    {
      name: "Michael Johnson",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "SQL", "Data Visualization"],
      experience: "2 years",
      education: "Statistics, Stanford",
      image: "/placeholder.svg",
    },
    {
      name: "Sophia Williams",
      role: "Product Manager",
      skills: ["Product Strategy", "Agile", "Market Research", "Roadmapping"],
      experience: "5 years",
      education: "MBA, Harvard",
      image: "/placeholder.svg",
    },
  ];

  const benefits = [
    {
      title: "Quick Turn-Around Time",
      description: "Receive shortlisted profiles within 24 hours",
      icon: <Check className="h-8 w-8 text-primary-600" />,
    },
    {
      title: "High Acceptance Rate",
      description: "Hire job-ready candidates throughout the year",
      icon: <Check className="h-8 w-8 text-primary-600" />,
    },
    {
      title: "Zero Cost Hiring",
      description: "Hire the right talents at zero cost",
      icon: <Check className="h-8 w-8 text-primary-600" />,
    },
    {
      title: "Year-Round Availability",
      description: "Above 98% of OdinGrads accept job offers",
      icon: <Check className="h-8 w-8 text-primary-600" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Hire the right talent at zero cost</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Break away from the tradition of hunting for degrees. Onboard talents who have the right skill sets!
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Why should you hire from OdinSchool?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="#post-job">Request a Callback</a>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">Companies That Hire Our Graduates</h3>
              <div className="grid grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-500 font-medium">Company {index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a href="#testimonials" className="text-primary-600 hover:text-primary-700 font-medium">
                  See what employers say about our talent →
                </a>
              </div>
            </div>
          </div>

          <OrganizationLogos />
          
        </div>
      </main>
      <CallbackForm />
      <Footer />
    </>
  );
};

export default HireTalent;
