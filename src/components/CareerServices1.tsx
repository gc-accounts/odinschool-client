import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareerServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            <span className="text-primary-600">Career Services</span> in a nutshell
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get ready for your dream job! Attend comprehensive industry readiness training with Career Services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: <Code className="h-10 w-10 text-primary-600" />,
              title: "Learn workplace skills",
              description: "Your working style and behavior decide if you are a good cultural fit. Learn the right skills so you never feel out of place at work."
            },
            {
              icon: <Brain className="h-10 w-10 text-primary-600" />,
              title: "Sell your skills, and sell them well",
              description: "You are halfway there if you have a great resume and an optimized online presence. Work with our experts to build your professional profiles."
            },
            {
              icon: <Rocket className="h-10 w-10 text-primary-600" />,
              title: "Attend mock interviewst",
              description: "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions."
            },
            {
              icon: <Rocket className="h-10 w-10 text-primary-600" />,
              title: "Attend mock interviewst",
              description: "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions."
            },
            {
              icon: <Rocket className="h-10 w-10 text-primary-600" />,
              title: "Attend mock interviewst",
              description: "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions."
            }
            
            
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="mx-auto flex items-center justify-center h-16 w-16 bg-primary-50 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
        
        
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/odintalks">Request Callback</Link>
          </Button>
        </div>
        <div className="mt-16 bg-white p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm animate-on-scroll ">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">How do I enroll in this program?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured learning path takes you from beginner to certified professional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Apply", },
              { step: "2", title: "Data Talk to A Counsellor", },
              { step: "3", title: "Review Your Eligibility",  },
              { step: "4", title: "Get Started", }
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
                </div>
                {index < 3 && (
                  <div className="absolute top-6 left-[50%] w-auto h-0.5 bg-primary-200 hidden md:block"></div>
                )}
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default CareerServices;