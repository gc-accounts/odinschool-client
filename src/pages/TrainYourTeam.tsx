
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Award, Calendar, CheckCircle, Clock, Video, Server, Layout } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TrainYourTeam = () => {
  // Corporate training courses data
  const corporateTrainingCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Essential HTML, CSS, and JavaScript skills for your team",
      duration: "4 weeks",
      level: "Beginner",
      teamSize: "5-20 employees"
    },
    {
      id: 2,
      title: "Advanced React & State Management",
      description: "Building complex applications with React, Redux, and Context API",
      duration: "6 weeks",
      level: "Intermediate",
      teamSize: "5-15 employees"
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Complete web application development with Node.js, Express and MongoDB",
      duration: "8 weeks",
      level: "Advanced",
      teamSize: "5-12 employees"
    },
    {
      id: 4,
      title: "DevOps for Teams",
      description: "CI/CD pipelines, containerization, and cloud deployment strategies",
      duration: "5 weeks",
      level: "Intermediate to Advanced",
      teamSize: "4-10 employees"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Industry-Relevant Skills",
      description: "Our curriculum is designed with input from industry leaders to ensure your team learns practical, job-ready skills."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Team-Based Learning",
      description: "Collaborative projects that improve team dynamics while building technical expertise."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: "Custom Learning Paths",
      description: "Tailored training programs designed for your team's specific skill gaps and business objectives."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Flexible Scheduling",
      description: "Choose between intensive boot camps, part-time courses, or self-paced learning to fit your team's availability."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Immediate Application",
      description: "Project-based learning that allows your team to apply new skills to your actual business challenges."
    },
    {
      icon: <Video className="h-8 w-8 text-primary-600" />,
      title: "Live & Recorded Sessions",
      description: "All training sessions are available live and as recordings, ensuring no one misses out on learning."
    }
  ];

  // Technology stack offered
  const technologies = [
    { name: "JavaScript", icon: <Layout className="h-6 w-6" /> },
    { name: "React", icon: <Layout className="h-6 w-6" /> },
    { name: "Angular", icon: <Layout className="h-6 w-6" /> },
    { name: "Vue.js", icon: <Layout className="h-6 w-6" /> },
    { name: "Node.js", icon: <Server className="h-6 w-6" /> },
    { name: "Python", icon: <Server className="h-6 w-6" /> },
    { name: "Java", icon: <Server className="h-6 w-6" /> },
    { name: "PHP", icon: <Server className="h-6 w-6" /> },
    { name: "AWS", icon: <Server className="h-6 w-6" /> },
    { name: "Azure", icon: <Server className="h-6 w-6" /> },
    { name: "Docker", icon: <Server className="h-6 w-6" /> },
    { name: "Kubernetes", icon: <Server className="h-6 w-6" /> }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Empower Your Team with Coding Skills</h1>
              <p className="text-xl mb-8">Custom training solutions to upskill your workforce and drive innovation</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary-800 hover:bg-gray-100">
                  Request Training Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-800">
                  View Corporate Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Organizations Choose Us</h2>
              <p className="text-lg text-gray-600">
                Our corporate training programs are designed to deliver measurable results and ROI for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Courses */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Team Training Programs</h2>
              <p className="text-lg text-gray-600">
                Customizable courses designed for teams across various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corporateTrainingCourses.map(course => (
                <div key={course.id} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-500">Duration</span>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Level</span>
                      <p className="font-medium">{course.level}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Team Size</span>
                      <p className="font-medium">{course.teamSize}</p>
                    </div>
                  </div>
                  <Button className="w-full">Get Course Details</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Teach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Teach</h2>
              <p className="text-lg text-gray-600">
                Stay ahead with training in the most in-demand programming languages and frameworks
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                  {tech.icon}
                  <span className="mt-2 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Corporate Partners Say</h2>
              <p className="text-lg text-gray-600">
                Success stories from teams and organizations we've trained
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="mb-4 text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 italic">
                  "We trained our entire development team on React and modern JavaScript, resulting in a 40% boost in productivity and much cleaner codebase. The instructors were fantastic."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CTO, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="mb-4 text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 italic">
                  "The custom Python and data analysis training program was perfectly tailored to our team's needs. We're now able to automate processes that previously took days to complete."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Data Science Manager, AnalyticsPro</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="mb-4 text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 italic">
                  "We transitioned our team from traditional development to DevOps practices with this training. The hands-on approach and real-world projects made all the difference."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Jessica Rodriguez</h4>
                    <p className="text-sm text-gray-600">Engineering Director, CloudScale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upskill Your Team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our training consultants will work with you to design a custom learning program that meets your specific needs and objectives
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-800 hover:bg-gray-100">
                Schedule a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-800">
                Download Corporate Brochure
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white">
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
