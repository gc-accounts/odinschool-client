
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OrganizationLogos = () => {
  const logos = [
    { id: 1, name: 'Microsoft', logo: 'https://source.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop&auto=format' },
    { id: 2, name: 'Adobe', logo: 'https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format' },
    { id: 3, name: 'Google', logo: 'https://source.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&auto=format' },
    { id: 4, name: 'Amazon', logo: 'https://source.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop&auto=format' },
    { id: 5, name: 'IBM', logo: 'https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format' },
    { id: 6, name: 'Oracle', logo: 'https://source.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&auto=format' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h2>
          <p className="text-gray-600">Our graduates work at top tech companies worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo) => (
            <Card key={logo.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center justify-center p-4 h-24">
                <img 
                  src={logo.logo} 
                  alt={`${logo.name} logo`} 
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all" 
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationLogos;
