
import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, Twitter, BookOpen, Users, Star } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

export interface InstructorProps {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  courses: number;
  students: number;
  rating: number;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  featured?: boolean;
  className?: string;
}

const instructors: InstructorProps[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior JavaScript Developer',
    bio: 'Full-stack developer with 10+ years of experience. Passionate about teaching web development and helping others build their dream applications.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&w=800',
    courses: 12,
    students: 34500,
    rating: 4.8,
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    featured: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'React & Frontend Expert',
    bio: 'Frontend specialist with focus on React ecosystem. 8+ years building scalable web applications and mentoring junior developers.',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&w=800',
    courses: 8,
    students: 21800,
    rating: 4.9,
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    featured: true,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Data Scientist & Python Expert',
    bio: 'Data scientist with expertise in machine learning and statistical analysis. PhD in Computer Science with focus on AI applications.',
    avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&w=800',
    courses: 5,
    students: 15300,
    rating: 4.7,
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    featured: true,
  },
];

const InstructorProfile = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    
    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.style.animationDelay = `${i * 150}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToCardRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            Learn from <span className="text-primary-600">Industry Experts</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Our instructors are experienced professionals who bring real-world knowledge and best practices to every course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.id}
              ref={(el) => addToCardRefs(el, index)}
              className="opacity-0"
            >
              <div className={cn(
                "bg-white rounded-xl overflow-hidden h-full flex flex-col border shadow-sm",
                "hover:shadow-lg transition-all duration-300"
              )}>
                <div className="relative">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-700 h-32"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                      <img
                        src={instructor.avatar}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-16 p-6 flex-grow flex flex-col">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-display font-semibold">{instructor.name}</h3>
                    <p className="text-sm text-gray-600">{instructor.title}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 text-center">{instructor.bio}</p>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    {instructor.social?.twitter && (
                      <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Twitter size={18} />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {instructor.social?.linkedin && (
                      <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Linkedin size={18} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {instructor.social?.github && (
                      <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="grid grid-cols-3 gap-2 text-center py-4 border-t border-b border-gray-100">
                      <div>
                        <div className="flex justify-center mb-1">
                          <BookOpen size={16} className="text-primary-600" />
                        </div>
                        <p className="text-sm font-medium">{instructor.courses}</p>
                        <p className="text-xs text-gray-500">Courses</p>
                      </div>
                      <div>
                        <div className="flex justify-center mb-1">
                          <Users size={16} className="text-primary-600" />
                        </div>
                        <p className="text-sm font-medium">{(instructor.students / 1000).toFixed(1)}K</p>
                        <p className="text-xs text-gray-500">Students</p>
                      </div>
                      <div>
                        <div className="flex justify-center mb-1">
                          <Star size={16} className="text-primary-600" />
                        </div>
                        <p className="text-sm font-medium">{instructor.rating.toFixed(1)}</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="secondary" fullWidth>
                        View Courses
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
