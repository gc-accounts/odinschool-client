
import React from 'react';
import { Users, Award, Clock, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BecomeAMentor = () => {
  const benefits = [
    {
      title: "Join our mission",
      description: "Help us bridge the growing skill gap",
      icon: <Users className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Give back",
      description: "Share your knowledge with aspirants",
      icon: <Award className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Identify talent",
      description: "Get early access to talents & hire them",
      icon: <Clock className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Become our brand ambassador",
      description: "Refer students and get rewarded",
      icon: <DollarSign className="h-10 w-10 text-primary-600" />,
    },
  ];


  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Fill out the application form with your professional background, areas of expertise, and why you want to mentor.",
    },
    {
      number: "02",
      title: "Interview",
      description: "Have a conversation with our team to discuss your experience and teaching approach.",
    },
    {
      number: "03",
      title: "Onboarding",
      description: "Complete our mentor training program to learn our platform and best practices for mentorship.",
    },
    {
      number: "04",
      title: "Start Mentoring",
      description: "Join OdinSchool as a mentor",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="pt-28 pb-16 md:pt-24 md:pb-4 bg-gradient-to-b from-primary-100 to-white">
          <div className="container mx-auto px-4">
            <h1 className="heading-xl font-bold text-center mb-4">Become a Mentor</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Share your expertise, inspire the next generation, and grow your professional network
            </p>
            <div className="flex justify-center mt-8 mb-12">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-gray-100">
                <a href="#apply">Apply Now</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Become a Mentor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Join our community of industry experts who are passionate about education and making a difference in students' careers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary-50 rounded-full p-4 inline-flex mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Becoming a mentor is a straightforward process. Here's what you can expect:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-primary-100">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div id="apply" className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Apply to Become a Mentor</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out the form below to start your application process. Our team will review your submission and get back to you within 5 business days.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., https://linkedin.com/in/yourname"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Position</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Senior Software Engineer at Google"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Select years of experience</option>
                  <option value="1-3">1-3 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="7-10">7-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Expertise (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["Web Development", "Mobile Development", "Data Science", "Machine Learning", "UX/UI Design", "Product Management"].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" id={`area-${index}`} className="mr-2" />
                      <label htmlFor={`area-${index}`}>{area}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to become a mentor?</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[150px]"
                  placeholder="Tell us why you're interested in mentoring and what you hope to contribute to our community"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Previous Teaching or Mentoring Experience</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[100px]"
                  placeholder="Describe any previous teaching or mentoring experience you have"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <Button size="lg" className="px-8">Submit Application</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BecomeAMentor;
