import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { getMentors } from '@/utils/api/mentor';

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
  expertise?: string[];
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
}

const InstructorProfile = () => {
  const [mentors, setMentors] = useState<InstructorProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true);
        const mentors = await getMentors(10, page);
        setMentors(mentors);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMentors();
  }, [page]);

  const LoadingSkeleton = () => (
    <Card className="border border-gray-200 overflow-hidden">
      <CardContent className="p-0">
        <div className="h-7 bg-gray-200"></div>
        <div className="p-6">
          <div className="flex flex-col items-center">
            <Skeleton className="h-24 w-24 rounded-full mb-4" />
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-20 w-full mb-4" />
          </div>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-8 h-8 rounded-full" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Meet our <span className="text-primary-600">mentors and speakers!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our instructors are active professionals with years of real-world experience in their fields
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Show loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : (
            // Show actual mentor cards
            mentors.map((instructor) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
