
import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, Twitter, BookOpen, Users, Star, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-primary-50">
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
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-primary-500/90 to-primary-700 p-6 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden flex-shrink-0">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-display font-semibold line-clamp-1">{instructor.name}</h3>
                    <div className="flex items-center gap-2 text-primary-100">
                      <Briefcase size={14} />
                      <p className="text-sm line-clamp-1">{instructor.title}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-6">{instructor.bio}</p>
                  
                  <div className="mt-auto space-y-5">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <BookOpen size={18} className="text-primary-600 mx-auto mb-1" />
                        <p className="text-sm font-medium">{instructor.courses}</p>
                        <p className="text-xs text-gray-500">Courses</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <Users size={18} className="text-primary-600 mx-auto mb-1" />
                        <p className="text-sm font-medium">{(instructor.students / 1000).toFixed(1)}K</p>
                        <p className="text-xs text-gray-500">Students</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <Star size={18} className="text-primary-600 mx-auto mb-1" />
                        <p className="text-sm font-medium">{instructor.rating.toFixed(1)}</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        {instructor.social?.twitter && (
                          <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" 
                             className="text-gray-400 hover:text-primary-600 transition-colors w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full">
                            <Twitter size={16} />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {instructor.social?.linkedin && (
                          <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" 
                             className="text-gray-400 hover:text-primary-600 transition-colors w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full">
                            <Linkedin size={16} />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {instructor.social?.github && (
                          <a href={instructor.social.github} target="_blank" rel="noopener noreferrer" 
                             className="text-gray-400 hover:text-primary-600 transition-colors w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full">
                            <Github size={16} />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                      </div>
                      
                      <Button variant="outline" className="text-sm px-3 py-1 h-auto">
                        View Courses
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
