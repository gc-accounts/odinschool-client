
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, GraduationCap, Building, CheckCircle } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Careers at EduPlatform - Join Our Team";
  }, []);

  const perks = [
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Collaborative Environment",
      description: "Work with talented professionals passionate about education and technology."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />,
      title: "Continuous Learning",
      description: "Access to our courses and learning resources for your professional development."
    },
    {
      icon: <Building className="h-10 w-10 text-primary-600" />,
      title: "Remote-First Culture",
      description: "Enjoy flexibility with our remote-first approach to work."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
      title: "Impactful Work",
      description: "Help shape the future of education and make a difference in learners' lives."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Curriculum Designer",
      department: "Education",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Join Our Mission to Transform Education
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                At EduPlatform, we're building the future of learning. Join our team of passionate educators, technologists, and innovators.
              </p>
              <Button size="lg" variant="secondary" className="text-primary-700 font-medium">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                Why Work With <span className="text-primary-600">EduPlatform</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join a team that values innovation, collaboration, and making a positive impact on education worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {perk.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                    <p className="text-gray-600">{perk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                Open <span className="text-primary-600">Positions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our current opportunities and find your perfect role
              </p>
            </div>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {position.location}
                          </div>
                          <div>{position.type}</div>
                        </div>
                      </div>
                      <Button className="mt-4 lg:mt-0">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Don't see a position that matches your skills?</p>
              <Button variant="outline">Send Us Your Resume</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
