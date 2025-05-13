import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ExtrasSection1 = () => {
  const resources = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Instructor-Led Classes",
      description: "Explore the latest trends in technology and software development"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Career Hands-on Projects and Labs",
      description: "Access resources to accelerate your tech career growth"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Community A Dedicated Job Application Portal",
      description: "Join our community of learners and expand your knowledge"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Everything you need to take your career to the next level
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          There's no time like the present to upskill your career. Start your upskilling journey now to grab the best opportunities in the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {resources.map((resource) => (
            <div key={resource.id} className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4 w-full h-48">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mb-2">{resource.title}</h3>
            </div>
          ))}
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