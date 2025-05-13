
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface CompanyProps {
  name: string;
  logo: string;
}

export interface InstructorProps {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  companies: CompanyProps[];
  featured: boolean;
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
    featured: true
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
    featured: true
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
    featured: true
  }
];

const InstructorProfile = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
          Meet our  <span className="text-primary-600"> mentors and speakers!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our instructors are active professionals with years of real-world experience in their fields
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
              <Link to={`/expert/${instructor.id}`}>
                <CardContent className="p-0">
                  <div className="h-7 bg-primary-600"></div>
                  <div className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={instructor.avatar} alt={instructor.name} />
                        <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{instructor.title}</p>
                      <p className="text-center text-gray-600 mb-4">{instructor.bio}</p>
                    </div>
                    
                    <div className="flex justify-center space-x-3 mb-4">
                      {instructor.companies.map((company, index) => (
                        <div 
                          key={index} 
                          className="w-8 h-8 rounded-full overflow-hidden border border-gray-200"
                          title={company.name}
                        >
                          <img 
                            src={company.logo} 
                            alt={company.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
