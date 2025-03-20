
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
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-8 md:pr-8">
            <div ref={addToRefs} className="opacity-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 mb-6">
                <span className="text-xs font-medium">Master Coding Skills</span>
              </div>
              <h1 className="heading-xl text-balance">
                Learn to Code with Expert-Led
                <span className="text-primary-600"> Online Courses</span>
              </h1>
            </div>

            <p ref={addToRefs} className="body-lg text-gray-600 opacity-0 delay-100 max-w-xl">
              Elevate your programming skills with industry-focused courses designed by experienced developers. Start your journey from beginner to professional developer.
            </p>
            
            <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 opacity-0 delay-200">
              <Button 
                size="lg" 
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Browse Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                View Course Catalog
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
          
          <div ref={addToRefs} className="relative opacity-0 delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-400 to-primary-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-card p-6 rounded-2xl w-3/4 max-w-md backdrop-blur-md bg-white/50 shadow-lg border border-white/30">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                        <Code size={28} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg">Advanced JavaScript</h3>
                        <p className="text-sm text-gray-700">Master modern JavaScript concepts</p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-600 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <div className="mt-1 flex justify-between text-xs">
                      <span>6/10 modules complete</span>
                      <span className="font-medium">65%</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-5 left-5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-primary-100 z-0"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary-100 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
