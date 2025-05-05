
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Award, Calendar, CheckCircle, Clock, Video, Server, Layout } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TrainYourTeam = () => {

  // Benefits data
  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Customization",
      description: [
        "Understand your specific learning goals",
        "Design outcomes tailored to your needs"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Delivery",
      description: [
        "Live instructor-led interactive classes",
        "Sessions handled by industry experts"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: "Evaluation",
      description: [
        "Regular assignments and quizzes",
        "Structured assessments for tracking progress"
      ]
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Support",
      description: [
        "Ongoing support from SMEs",
        "Doubt clarification and mentoring"
      ]
    }
  ];
  // Technology stack offered
  const technologies = [
    { name: "Enhanced Workforce Productivity", icon: <Layout className="h-6 w-6" /> },
    { name: "Increased Employee Retention Rate", icon: <Layout className="h-6 w-6" /> },
    { name: "Improved Expertise and Efficiency", icon: <Layout className="h-6 w-6" /> },
  
  ];

    // role
    const role = [
      { name: "Data Engineer", icon: <Layout className="h-6 w-6" /> },
      { name: "Data Analyst", icon: <Layout className="h-6 w-6" /> },
      { name: "Data Visualization", icon: <Layout className="h-6 w-6" /> },
      { name: "ML Engineer", icon: <Layout className="h-6 w-6" /> },
      { name: "Data Scientist", icon: <Server className="h-6 w-6" /> },
      { name: "AI/ML for Leaders", icon: <Server className="h-6 w-6" /> },
    ];
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-1xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Outcome-driven training solutions that help you develop your most valuable asset - Your People!</h1>
              <div className="mt-10">
                <Button size="lg" 
                   onClick={() => document.getElementById('train')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-primary-800 font-bold hover:bg-gray-100">
                  Train your Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Join OdinSchool in the reskilling revolution */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join OdinSchool in the reskilling revolution</h2>
              <p className="text-lg text-gray-600">
              Train your workforce in the skills you need. Give them the opportunity to expand their skill sets while you get to reap the benefits!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <ul className="text-gray-600 list-disc list-outside pl-5 text-left">
                  {benefit.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Role-based training</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {role.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                  {tech.icon}
                  <span className="mt-2 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Teach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Train your team to meet your goals</h2>
              <p className="text-lg text-gray-600">
                At OdinSchool, we understand that skills are the cornerstone of a company's success. Our training programs are highly customized to your specific skilling needs.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 ">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow  flex flex-col items-center w-[200px]">
                  {tech.icon}
                  <span className="mt-2 font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
          {/* Contact Form */}
          <section id="train" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="ABC Corporation"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="team_size" className="block mb-2 text-sm font-medium text-gray-700">
                        Team Size
                      </label>
                      <select
                        id="team_size"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 employees</option>
                        <option value="6-20">6-20 employees</option>
                        <option value="21-50">21-50 employees</option>
                        <option value="51-100">51-100 employees</option>
                        <option value="101+">101+ employees</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                        Training Needs & Goals
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Please describe your team's current skill level and what you'd like to achieve through training"
                      ></textarea>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">Submit Training Request</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default TrainYourTeam;
