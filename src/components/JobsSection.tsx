
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Building, DollarSign, Search } from 'lucide-react';

const JobsSection = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      salary: '$80k - $120k',
      skills: ['JavaScript', 'React', 'CSS'],
      badgeText: 'New',
      badgeColor: 'bg-green-100 text-green-800',
      logo: 'T'
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupX',
      location: 'New York, NY',
      salary: '$90k - $140k',
      skills: ['JavaScript', 'Node.js', 'MongoDB'],
      badgeText: 'Hot',
      badgeColor: 'bg-red-100 text-red-800',
      logo: 'S'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Analytics Co',
      location: 'Boston, MA',
      salary: '$95k - $145k',
      skills: ['Python', 'Machine Learning', 'Statistics'],
      badgeText: 'Featured',
      badgeColor: 'bg-blue-100 text-blue-800',
      logo: 'A'
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'DesignHub',
      location: 'San Francisco, CA',
      salary: '$85k - $130k',
      skills: ['Figma', 'User Research', 'Prototyping'],
      logo: 'D'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Land Your <span className="text-primary-600">Dream Job</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our graduates get hired at top companies worldwide. Here are some of the positions you could qualify for:
          </p>
        </div>

        <div className="mb-12 max-w-xl mx-auto animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for jobs by skill or title..."
              className="w-full py-3 px-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
          {jobs.map((job) => (
            <Card 
              key={job.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200"
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 text-primary-700 font-bold text-xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  
                  {job.badgeText && (
                    <div className="mb-3">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${job.badgeColor}`}>
                        {job.badgeText}
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Building size={16} className="mr-2" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign size={16} className="mr-2" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="border-t p-4">
                  <Button variant="secondary" className="w-full">
                    <Briefcase size={16} className="mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
          <p className="text-gray-600 mb-6">
            Ready to qualify for these positions? Start learning with CodeMaster today!
          </p>
          <Button size="lg" className="gap-2">
            Browse Career-Focused Courses
            <Briefcase size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
