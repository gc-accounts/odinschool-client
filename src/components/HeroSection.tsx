
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight, Code, Cpu, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  return (
    <section className="pt-24 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-8 md:pr-8">
            <div ref={addToRefs} className="opacity-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 mb-6">
                <span className="text-xs font-medium">Master Coding Skills</span>
              </div>
              <h1 className="heading-xl text-balance">Upskill Now! <span className="text-primary-600">Accelerate Your Career</span>
              </h1>
            </div>

            <p ref={addToRefs} className="body-lg text-gray-600 opacity-0 delay-100 max-w-xl">
              Gain practical, job-ready skills through industry-aligned courses with hands-on learning. Learn from top experts to stay current with the latest trends. Receive holistic career support and personalized guidance to achieve your goals.
            </p>
            
            <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 opacity-0 delay-200">
              <Button 
                size="lg" 
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Talk to an Expert
              </Button>
            </div>
            
            <div ref={addToRefs} className="grid grid-cols-3 gap-4 pt-4 opacity-0 delay-300">
              {[
                { 
                  icon: <Code size={20} className="text-primary-600" />, 
                  label: '100+ Courses', 
                  description: 'Wide variety of topics' 
                },
                { 
                  icon: <Trophy size={20} className="text-primary-600" />, 
                  label: 'Expert Instructors', 
                  description: 'Learn from the best' 
                },
                { 
                  icon: <Cpu size={20} className="text-primary-600" />, 
                  label: 'Hands-on Projects', 
                  description: 'Build your portfolio' 
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-3">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={addToRefs} className="wrap opacity-0 delay-200">
          <div>
              <div className="flex gap-8 items-end justify-center flex-row ">
                    <img
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79 "
                      alt="Student 1"
                      className="rounded-full w-80 h-80 object-cover"
                    />
              
                <img
                  src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82"
                  alt="Student 2"
                  className="rounded-3xl w-40 h-40 object-cover"
                />
              </div>
              <div className="flex gap-10 items-top justify-center flex-direction:row mt-8">
                <img
                
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                  alt="Student 3"
                  className="rounded-3xl w-40 h-40 object-cover"
                />
              
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Student 4"
                  className="rounded-full w-80 h-80 object-cover"
                />
                </div>
              </div>
              <div className="absolute -bottom-0 -right-6 w-28 h-28 rounded-full bg-primary-100 z-0"></div>
              <div className="absolute -top-0 -left-0 w-20 h-20 rounded-full bg-primary-100 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
