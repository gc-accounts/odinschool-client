
import React, { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Software Engineer',
    company: 'TechCorp',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&w=200',
    testimonial: "I've tried many coding platforms, but this one truly stands out. The courses are structured perfectly, and I was able to land my dream job after completing the React specialization.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Frontend Developer',
    company: 'DesignHub',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&w=200',
    testimonial: "The JavaScript course was exactly what I needed to advance my career. The instructors explain complex concepts in a way that's easy to understand, and the projects helped build my portfolio.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Data Analyst',
    company: 'AnalyticsPro',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&w=200',
    testimonial: "I started with zero knowledge of Python, but the step-by-step approach made learning enjoyable. Now I'm confidently working with data in my new role.",
    rating: 4,
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Full-Stack Developer',
    company: 'WebSolutions',
    avatar: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?crop=entropy&w=200',
    testimonial: "The comprehensive curriculum and supportive community have been invaluable. I've grown more in three months than I did in a year of self-study.",
    rating: 5,
  },
  {
    id: 5,
    name: 'James Wilson',
    role: 'Mobile Developer',
    company: 'AppWorks',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&w=200',
    testimonial: "The React Native course exceeded my expectations. The instructor's expertise and clear explanations helped me transition from web to mobile development seamlessly.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Olivia Taylor',
    role: 'UI/UX Designer',
    company: 'Creative Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&w=200',
    testimonial: "As a designer looking to understand coding better, these courses were perfect. The integration of design principles with coding practices was exactly what I needed.",
    rating: 4,
  },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 opacity-0"
          style={{ animationDelay: '200ms' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={cn(
                "bg-white rounded-xl p-6 shadow-sm border",
                "hover:shadow-md transition-all duration-300 h-full flex flex-col"
              )}
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-primary-600">
                    <Quote size={20} />
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 text-sm italic">"{testimonial.testimonial}"</p>
                </div>
              </div>
              
              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={cn(
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      )} 
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
