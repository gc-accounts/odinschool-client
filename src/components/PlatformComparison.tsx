
import React, { useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonFeature {
  name: string;
  codemaster: boolean;
  competitor1: boolean;
  competitor2: boolean;
  competitor3: boolean;
  highlight?: boolean;
}

const PlatformComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const features: ComparisonFeature[] = [
    { 
      name: 'Expert-led live instruction', 
      codemaster: true, 
      competitor1: false, 
      competitor2: true, 
      competitor3: false,
      highlight: true
    },
    { 
      name: 'Personalized learning paths', 
      codemaster: true, 
      competitor1: true, 
      competitor2: false, 
      competitor3: false 
    },
    { 
      name: 'Industry-recognized certificates', 
      codemaster: true, 
      competitor1: true, 
      competitor2: true, 
      competitor3: true 
    },
    { 
      name: '24/7 mentor support', 
      codemaster: true, 
      competitor1: false, 
      competitor2: false, 
      competitor3: false,
      highlight: true
    },
    { 
      name: 'Real-world project assessments', 
      codemaster: true, 
      competitor1: true, 
      competitor2: false, 
      competitor3: true 
    },
    { 
      name: 'Job placement assistance', 
      codemaster: true, 
      competitor1: false, 
      competitor2: false, 
      competitor3: true 
    },
    { 
      name: 'Unlimited project reviews', 
      codemaster: true, 
      competitor1: false, 
      competitor2: false, 
      competitor3: false,
      highlight: true
    },
    { 
      name: 'Corporate training options', 
      codemaster: true, 
      competitor1: false, 
      competitor2: true, 
      competitor3: false 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (tableRef.current) observer.observe(tableRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="comparison" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Why Choose <span className="text-primary-600">CodeMaster</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how CodeMaster compares to other coding platforms and why we're the preferred choice for serious developers.
          </p>
        </div>

        <div 
          ref={tableRef} 
          className="overflow-x-auto opacity-0"
          style={{ animationDelay: '200ms' }}
        >
          <div className="min-w-max">
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <div className="bg-primary-50 rounded-lg p-4 text-center h-full flex flex-col items-center justify-center shadow-sm border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">CodeMaster</h3>
                  <span className="inline-block bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                    Our Platform
                  </span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-white rounded-lg p-4 text-center h-full flex flex-col items-center justify-center shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-600 mb-2">Competitor A</h3>
                  <span className="text-xs text-gray-500">Online Courses</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-white rounded-lg p-4 text-center h-full flex flex-col items-center justify-center shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-600 mb-2">Competitor B</h3>
                  <span className="text-xs text-gray-500">Bootcamp Style</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-white rounded-lg p-4 text-center h-full flex flex-col items-center justify-center shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-600 mb-2">Competitor C</h3>
                  <span className="text-xs text-gray-500">Enterprise Learning</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "grid grid-cols-5 gap-4 p-4 rounded-lg items-center",
                    feature.highlight ? "bg-primary-50 border border-primary-100" : "bg-white border border-gray-100"
                  )}
                >
                  <div className="col-span-1 font-medium">
                    {feature.name}
                    {feature.highlight && (
                      <span className="ml-2 inline-block bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full">
                        Key Feature
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 text-center">
                    {feature.codemaster ? 
                      <Check className="mx-auto text-primary-600" size={24} /> : 
                      <X className="mx-auto text-gray-300" size={24} />
                    }
                  </div>
                  <div className="col-span-1 text-center">
                    {feature.competitor1 ? 
                      <Check className="mx-auto text-gray-600" size={24} /> : 
                      <X className="mx-auto text-gray-300" size={24} />
                    }
                  </div>
                  <div className="col-span-1 text-center">
                    {feature.competitor2 ? 
                      <Check className="mx-auto text-gray-600" size={24} /> : 
                      <X className="mx-auto text-gray-300" size={24} />
                    }
                  </div>
                  <div className="col-span-1 text-center">
                    {feature.competitor3 ? 
                      <Check className="mx-auto text-gray-600" size={24} /> : 
                      <X className="mx-auto text-gray-300" size={24} />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied students who've accelerated their careers with CodeMaster
          </p>
          <a href="/courses" className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 bg-primary-600 text-white hover:bg-primary-700 shadow-sm text-base px-6 py-3">
            Browse Our Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparison;
