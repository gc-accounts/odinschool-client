
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Button from './Button';

export interface InstructorProps {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  companies: {
    name: string;
    logo: string;
  }[];
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
    companies: [
      {
        name: 'Google',
        logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?crop=entropy&w=100'
      },
      {
        name: 'Microsoft',
        logo: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?crop=entropy&w=100'
      },
      {
        name: 'Amazon',
        logo: 'https://images.unsplash.com/photo-1617952233714-78515f368490?crop=entropy&w=100'
      }
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'React & Frontend Expert',
    bio: 'Frontend specialist with focus on React ecosystem. 8+ years building scalable web applications and mentoring junior developers.',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&w=800',
    companies: [
      {
        name: 'Facebook',
        logo: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?crop=entropy&w=100'
      },
      {
        name: 'Airbnb',
        logo: 'https://images.unsplash.com/photo-1635350804108-7170f0ef2f9f?crop=entropy&w=100'
      },
      {
        name: 'Dropbox',
        logo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&w=100'
      }
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Data Scientist & Python Expert',
    bio: 'Data scientist with expertise in machine learning and statistical analysis. PhD in Computer Science with focus on AI applications.',
    avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&w=800',
    companies: [
      {
        name: 'IBM',
        logo: 'https://images.unsplash.com/photo-1610337673044-720471f83677?crop=entropy&w=100'
      },
      {
        name: 'Netflix',
        logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&w=100'
      },
      {
        name: 'Intel',
        logo: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?crop=entropy&w=100'
      }
    ],
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
                <div className="bg-gradient-to-r from-primary-500/90 to-primary-700 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden flex-shrink-0">
                      <img
                        src={instructor.avatar}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-display font-semibold line-clamp-1">{instructor.name}</h3>
                      <p className="text-primary-100 text-sm">{instructor.title}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-6">{instructor.bio}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Companies worked with:</h4>
                    <div className="flex items-center gap-4 mb-4">
                      {instructor.companies.map((company, idx) => (
                        <div key={idx} className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="w-full h-full object-cover"
                            title={company.name}
                          />
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      View Courses
                    </Button>
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
