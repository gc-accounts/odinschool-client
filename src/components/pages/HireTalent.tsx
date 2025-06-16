
import React, { useEffect } from 'react';
import { Check, UserRoundSearch } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/components/ui/tabs';
import CallbackForm from '@/components/components/CallbackForm';
import OrganizationLogos from '@/components/components/OrganizationLogos';
import EmployerTestimonials from '@/components/components/EmployerTestimonials';
import Image from 'next/image';
const HireTalent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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


  const jobs = [
    {
      id: 1,
      image_url: 'https://strapi.odinschool.com/uploads/6_current_company_9e1a7516fe.jpg'
    },
    {
      id: 2,
      image_url: 'https://strapi.odinschool.com/uploads/8_current_company_ab4b947ae4.jpg'
    },
    {
      id: 3,
      image_url: 'https://strapi.odinschool.com/uploads/TCS_100_X40_Individual_7ceeb6c515.webp'
    },
    {
      id: 4,
      image_url: 'https://strapi.odinschool.com/uploads/Deloitte_100_X40_1_1_ca02ecb519.webp'
    },
    {
      id: 5,
      image_url: 'https://strapi.odinschool.com/uploads/celebal_100_X40_ded943d1df.webp'
    },
    {
      id: 6,
      image_url: 'https://strapi.odinschool.com/uploads/Flipkart_200x80_grid_84fabff857.webp'
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br bg-primary-600 text-white">

          <div className="container mx-auto px-4">

            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <UserRoundSearch className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>

            <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">Hire the right talent at zero cost</h1>
            <p className="md:text-lg text-md text-center max-w-2xl mx-auto">
              Break away from the tradition of hunting for degrees. Onboard talents who have the right skill sets!
            </p>
          </div>


        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="md:text-4xl text-2xl font-bold mb-4">Why should you hire from OdinSchool?</h2>
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
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="#post-job">Request a Callback</a>
                </Button>
              </div> */}
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">Companies That Hire Our Graduates</h3>
              <div className="grid grid-cols-3 gap-6">
                {/* {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-500 font-medium">Company {index + 1}</span>
                  </div>
                ))} */}

                {
                  jobs.map((job) => {
                    return (
                      <div key={job.id} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-20">
                        {/* <span className="text-gray-500 font-medium">Company</span> */}
                        <Image
                          src={job.image_url}
                          alt={`image-${job.id}`}
                          width={100}
                          height={100}
                          objectFit='cover'

                          loading="lazy"
                        />

                      </div>
                    )
                  })
                }
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-primary-600 font-semibold">
                  and 600+
                </h4>
              </div>
            </div>
          </div>
        </div>
        <OrganizationLogos />
        <EmployerTestimonials />
      </main>
      <CallbackForm />
      <Footer />
    </>
  );
};

export default HireTalent;
