
import React from 'react';
import { UserCheck, Users, Briefcase, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
      title: "Vetted Talent",
      description: "All candidates have completed rigorous assessments and real-world projects to verify their skills.",
      icon: <UserCheck className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Diverse Candidate Pool",
      description: "Access professionals from various backgrounds, bringing fresh perspectives to your team.",
      icon: <Users className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Industry Ready",
      description: "Our graduates are trained on current technologies and methodologies used in the industry.",
      icon: <Briefcase className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Continued Support",
      description: "We provide ongoing mentorship to our graduates even after they join your company.",
      icon: <Award className="h-10 w-10 text-primary-600" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Hire Top Tech Talent</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Connect with skilled professionals who have completed our rigorous training programs
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Hire From EduPlatform?</h2>
              <p className="text-gray-600 mb-6">
                Our graduates are not just technically proficient but also equipped with the soft skills necessary to thrive in today's workplace. We pride ourselves on producing well-rounded professionals who can contribute from day one.
              </p>
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
                  <a href="#post-job">Post a Job</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#talent-pool">Browse Talent</a>
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
          
          <div id="talent-pool" className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Talent</h2>
              <Button variant="outline">View All Candidates</Button>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="developers">Developers</TabsTrigger>
                <TabsTrigger value="designers">Designers</TabsTrigger>
                <TabsTrigger value="data">Data Professionals</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {talents.map((talent, index) => (
                  <Card key={index}>
                    <CardHeader className="p-4 pb-0 flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src={talent.image} alt={talent.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{talent.name}</CardTitle>
                        <p className="text-sm text-gray-600">{talent.role}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Experience</p>
                        <p className="font-medium">{talent.experience}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Education</p>
                        <p className="font-medium">{talent.education}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {talent.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-primary-50 text-primary-700 text-xs rounded-full px-2 py-1">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">View Profile</Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="developers">
                <div className="text-center p-8 bg-gray-100 rounded-lg">
                  <p>Developer profiles would be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="designers">
                <div className="text-center p-8 bg-gray-100 rounded-lg">
                  <p>Designer profiles would be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="data">
                <div className="text-center p-8 bg-gray-100 rounded-lg">
                  <p>Data professional profiles would be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="product">
                <div className="text-center p-8 bg-gray-100 rounded-lg">
                  <p>Product professional profiles would be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div id="post-job" className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-4">Post a Job</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out the form below to post a job opening. Our team will review your submission and connect you with suitable candidates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
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
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Senior Frontend Developer"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[150px]"
                  placeholder="Describe the job role, requirements, and responsibilities"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., San Francisco, CA or Remote"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Select employment type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="md:col-span-2 text-center">
                <Button size="lg" className="px-8">Submit Job Posting</Button>
              </div>
            </div>
          </div>
          
          <div id="testimonials" className="bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to find your next star employee?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies who have found skilled, motivated talent through EduPlatform.
            </p>
            <Button asChild size="lg">
              <a href="#post-job">Post a Job Now</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HireTalent;
