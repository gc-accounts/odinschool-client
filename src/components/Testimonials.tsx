
import React, { useRef, useEffect } from 'react';
import { Star, Quote, Play, Briefcase, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const careerTestimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    previousRole: 'Marketing Specialist',
    currentRole: 'Senior Frontend Developer',
    company: 'Google',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&w=200',
    testimonial: "I was working in marketing for 5 years before deciding to switch careers. CodeMaster's curriculum helped me land my dream job.",
    rating: 5,
    salaryIncrease: "145%",
    timeToJob: "8 months",
    skills: ["JavaScript", "React"]
  },
  {
    id: 2,
    name: 'Emma Watson',
    previousRole: 'School Teacher',
    currentRole: 'Data Scientist',
    company: 'Microsoft',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&w=200',
    testimonial: "After 7 years as a teacher, I made the switch to tech. CodeMaster gave me the skills to excel in my new role.",
    rating: 5,
    salaryIncrease: "120%",
    timeToJob: "10 months",
    skills: ["Python", "Machine Learning"]
  },
  {
    id: 3,
    name: 'David Chen',
    previousRole: 'Sales Manager',
    currentRole: 'Backend Developer',
    company: 'Amazon',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&w=200',
    testimonial: "I wanted a more technical role. CodeMaster's project-based approach helped me build a strong portfolio.",
    rating: 5,
    salaryIncrease: "110%",
    timeToJob: "7 months",
    skills: ["Java", "Spring Boot"]
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: 'Sophia Chen',
    role: 'Data Scientist',
    company: 'Microsoft',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&w=200',
    testimonial: "The Python for Data Science course was exactly what I needed to advance my career.",
    rating: 5,
    videoThumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    videoUrl: "#"
  },
  {
    id: 2,
    name: 'John Davis',
    role: 'Frontend Developer',
    company: 'Facebook',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/800px-F_icon.svg.png',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&w=200',
    testimonial: "The React masterclass helped me level up my frontend skills and get noticed by recruiters.",
    rating: 5,
    videoThumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800',
    videoUrl: "#"
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'UX Designer',
    company: 'Apple',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&w=200',
    testimonial: "The UX/UI course provided practical insights that I apply daily in my work at Apple.",
    rating: 5,
    videoThumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800',
    videoUrl: "#"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            What Our <span className="text-primary-600">Students Say</span>
          </h2>
        </div>

        <div>
          <h3 className="heading-sm mb-4 text-center md:text-left">Video Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((testimonial) => (
              <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        <div className="mt-8 mb-12">
          <h3 className="heading-sm mb-4 text-center md:text-left">Career Transitions</h3>
          <div 
            ref={testimonialsRef} 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            {careerTestimonials.map((testimonial) => (
              <CareerTransitionCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>

          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="hover:bg-primary-50">
            View More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

interface CareerTestimonialProps {
  testimonial: {
    id: number;
    name: string;
    previousRole: string;
    currentRole: string;
    company: string;
    companyLogo: string;
    avatar: string;
    testimonial: string;
    rating: number;
    salaryIncrease: string;
    timeToJob: string;
    skills: string[];
  }
}

const CareerTransitionCard = ({ testimonial }: CareerTestimonialProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-0">
        <div className="bg-white p-4 ">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-semibold  text-base">{testimonial.name}</h4>
                <div className="flex items-center gap-1 text-sm">
                  <span className="line-through">{testimonial.previousRole}</span>
                  <svg width="18" height="6" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5H19V3.5H0V4.5Z" fill="currentColor"/>
                  </svg>
                  <span className="font-bold">{testimonial.currentRole}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-full p-1 h-7 w-7 justify-center">
              <img 
                src={testimonial.companyLogo} 
                alt={testimonial.company} 
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
          
          <p className="italic text-gray-500 text-sm ">{testimonial.testimonial}</p>
          

        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm font-medium">Now at:</p>
            <div className="flex items-center gap-1">
              <img 
                src={testimonial.companyLogo} 
                alt={testimonial.company} 
                className="w-4 h-4 object-contain"
              />
              <span className="font-bold text-sm">{testimonial.company}</span>
            </div>
          </div>
          
          
        </div>
      </CardContent>
    </Card>
  );
};

interface VideoTestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    companyLogo: string;
    avatar: string;
    testimonial: string;
    rating: number;
    videoThumbnail: string;
    videoUrl: string;
  }
}

const VideoTestimonialCard = ({ testimonial }: VideoTestimonialProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden bg-gray-800">
          <img 
            src={testimonial.videoThumbnail} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-primary-600 p-3 text-white shadow-lg hover:bg-primary-700 transition-colors cursor-pointer">
              <Play className="h-6 w-6" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                <div className="flex items-center gap-1 text-xs">
                  <span>{testimonial.role} at</span>
                  <div className="bg-white rounded-full p-0.5 h-4 w-4 flex items-center justify-center">
                    <img 
                      src={testimonial.companyLogo} 
                      alt={testimonial.company} 
                      className="w-3 h-3 object-contain"
                    />
                  </div>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start mb-3">
            <Quote size={16} className="text-primary-600 mr-2 shrink-0 mt-1" />
            <p className="italic text-gray-500 text-sm">{testimonial.testimonial}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <Button size="sm" variant="outline" className="text-xs py-1 h-7">
              Watch Video
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
