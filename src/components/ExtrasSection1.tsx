import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ExtrasSection1 = () => {
  const resources = [
    {
      id: 1,
      image: "https://strapi.odinschool.com/uploads/Live_instructor_led_5186610ca9.webp",
      title: "Instructor-Led Classes",
      description: "Explore the latest trends in technology and software development"
    },
    {
      id: 2,
      image: "https://strapi.odinschool.com/uploads/Hands_on_labs_c697eba9a8.webp",
      title: "Hands-on Projects and Labs",
      description: "Access resources to accelerate your tech career growth"
    },
    {
      id: 3,
      image: "https://strapi.odinschool.com/uploads/500_hiring_organisations_c7884faed5.webp",
      title: " 500+ Hiring Organizations ",
      description: "Join our community of learners and expand your knowledge"
    },
    {
      id: 3,
      image: "https://strapi.odinschool.com/uploads/Admissions_portal_a48e2e9db2.webp",
      title: " A Dedicated Job Application Portal ",
      description: "Join our community of learners and expand your knowledge"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className='max-w-4xl mx-auto'>

   

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Everything you need to take your career to the next level
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          There's no time like the present to upskill your career. Start your upskilling journey now to grab the best opportunities in the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-md">
          {resources.map((resource) => (
            <div key={resource.id} className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4 w-full h-48">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mb-2 font-semibold">{resource.title}</h3>
            </div>
          ))}
        </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="px-6">
            <Link to="/resources">View PL-300 Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection1;