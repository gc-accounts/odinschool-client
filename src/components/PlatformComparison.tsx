
import React, { useRef, useEffect } from 'react';
import { Check, X, Trophy, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ComparisonFeature {
  name: string;
  codemaster: boolean;
  others: boolean;
  highlight?: boolean;
}

const PlatformComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features: ComparisonFeature[] = [
    { 
      name: 'Expert-led live instruction', 
      codemaster: true, 
      others: false,
      highlight: true
    },
    { 
      name: 'Personalized learning paths', 
      codemaster: true, 
      others: false
    },
    { 
      name: 'Industry-recognized certificates', 
      codemaster: true, 
      others: true
    },
    { 
      name: '24/7 mentor support', 
      codemaster: true, 
      others: false,
      highlight: true
    },
    { 
      name: 'Real-world project assessments', 
      codemaster: true, 
      others: false
    },
    { 
      name: 'Job placement assistance', 
      codemaster: true, 
      others: false
    },
    { 
      name: 'Unlimited project reviews', 
      codemaster: true, 
      others: false,
      highlight: true
    },
    { 
      name: 'Corporate training options', 
      codemaster: true, 
      others: false
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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const codeMasterAdvantages = [
    {
      title: "Live Expert Instruction",
      description: "Learn directly from industry professionals with real-world experience",
      icon: <Trophy className="h-8 w-8 text-white" />
    },
    {
      title: "24/7 Mentor Support",
      description: "Get help whenever you need it with our always-available mentors",
      icon: <ThumbsUp className="h-8 w-8 text-white" />
    },
    {
      title: "Job Placement Focus",
      description: "Our curriculum is designed to help you land your dream tech job",
      icon: <Check className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Why Choose <span className="text-primary-600">CodeMaster</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how CodeMaster compares to other coding platforms and why we're the preferred choice for serious developers.
          </p>
        </div>

        {/* Key Advantages Cards */}
        <div className="mb-16 animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
          <Carousel className="w-full">
            <CarouselContent>
              {codeMasterAdvantages.map((advantage, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        <div className="bg-white/20 rounded-full p-4 mb-6">
                          {advantage.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                        <p className="text-white/90">
                          {advantage.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>

        {/* Main comparison table - redesigned with better visuals */}
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
          <Card className="overflow-hidden border shadow-lg">
            <CardContent className="p-0">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b">
                <div className="col-span-1 p-4 bg-gray-50 font-medium">Features</div>
                <div className="col-span-1 p-4 bg-primary-50 text-center font-bold text-primary-800">
                  CodeMaster
                </div>
                <div className="col-span-1 p-4 text-center font-medium text-gray-500">
                  Others
                </div>
              </div>

              {/* Table body */}
              <div className="divide-y">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "grid grid-cols-3",
                      feature.highlight ? "bg-primary-50" : "bg-white"
                    )}
                  >
                    <div className="col-span-1 p-4 flex items-center">
                      <span>
                        {feature.name}
                        {feature.highlight && (
                          <span className="ml-2 inline-block bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full">
                            Key Feature
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="col-span-1 p-4 flex justify-center items-center">
                      {feature.codemaster ? 
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                          <Check className="h-5 w-5 text-primary-600" />
                        </div> : 
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                      }
                    </div>
                    <div className="col-span-1 p-4 flex justify-center items-center">
                      {feature.others ? 
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <Check className="h-5 w-5 text-gray-600" />
                        </div> : 
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparison;
