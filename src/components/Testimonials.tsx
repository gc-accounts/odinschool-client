
import React, { useRef, useEffect } from 'react';
import { Star, Quote, Play, Briefcase, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    previousRole: 'Marketing Specialist',
    currentRole: 'Senior Frontend Developer',
    company: 'Google',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&w=200',
    testimonial: "I was working in marketing for 5 years before deciding to switch careers. CodeMaster's structured curriculum and mentor support helped me master React and land my dream job at Google within 8 months.",
    rating: 5,
    salaryIncrease: "145%",
    timeToJob: "8 months",
    skills: ["JavaScript", "React", "Redux", "TypeScript", "UI/UX"]
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Data Scientist',
    company: 'Microsoft',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&w=200',
    testimonial: "The Python for Data Science course was exactly what I needed to advance my career. The instructors break down complex concepts into easy-to-understand modules, and the projects helped build my portfolio.",
    rating: 5,
    videoThumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    videoUrl: "#" // In a real implementation, this would be a link to the video
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
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Discover how our courses have helped students advance their careers and achieve their goals in the tech industry.
          </p>
        </div>

        <div 
          ref={testimonialsRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0"
          style={{ animationDelay: '200ms' }}
        >
          {/* Career Transition Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary-800 to-primary-700 p-6 text-white">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={testimonials[0].avatar}
                        alt={testimonials[0].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonials[0].name}</h4>
                      <div className="flex items-center gap-2 text-primary-100">
                        <span className="line-through">{testimonials[0].previousRole}</span>
                        <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5H19V3.5H0V4.5Z" fill="currentColor"/>
                        </svg>
                        <span className="font-bold">{testimonials[0].currentRole}</span>
                      </div>
                      <p className="text-sm mt-1">at <span className="font-bold">{testimonials[0].company}</span></p>
                    </div>
                  </div>
                  <div className="text-white">
                    <Briefcase size={24} />
                  </div>
                </div>
                
                <p className="text-base italic mb-6">"{testimonials[0].testimonial}"</p>
                
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1" />
                    <p className="font-bold text-lg">{testimonials[0].salaryIncrease}</p>
                    <p className="text-xs text-primary-100">Salary Increase</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <Award className="w-5 h-5 mx-auto mb-1" />
                    <p className="font-bold text-lg">{testimonials[0].timeToJob}</p>
                    <p className="text-xs text-primary-100">Time to Job</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <Star className="w-5 h-5 mx-auto mb-1" />
                    <p className="font-bold text-lg">{testimonials[0].rating}.0</p>
                    <p className="text-xs text-primary-100">Course Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h5 className="font-semibold mb-2">Skills Acquired:</h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonials[0].skills.map((skill, i) => (
                    <span key={i} className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Success Story
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Video Testimonial Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden bg-gray-800">
                <img 
                  src={testimonials[1].videoThumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-primary-600 p-4 text-white shadow-lg hover:bg-primary-700 transition-colors cursor-pointer">
                    <Play className="h-8 w-8" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={testimonials[1].avatar}
                        alt={testimonials[1].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonials[1].name}</h4>
                      <p className="text-sm">{testimonials[1].role} at {testimonials[1].company}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Quote size={20} className="text-primary-600 mr-2" />
                  <p className="italic text-gray-700">{testimonials[1].testimonial}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Button size="sm">
                    Watch Video
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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

export default Testimonials;
