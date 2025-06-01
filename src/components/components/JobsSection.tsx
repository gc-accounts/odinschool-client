import React from 'react';
import { Card, CardContent } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import { Badge } from '@/components/components/ui/badge';
import { Briefcase, MapPin, Building, DollarSign, Search } from 'lucide-react';

interface jobsSectionProps{
 sectionClass?:String
}
const JobsSection = ({sectionClass}:jobsSectionProps) => {
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
    <section className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Land Your <span className="text-blue-600">Dream Job</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our graduates get hired at top companies worldwide. Here are some of the positions you could qualify for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-700 font-bold text-xl">
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

                  <div className="mb-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Building size={16} className="mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-2" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-50">
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

      </div>
    </section>
  );
};

export default JobsSection;
