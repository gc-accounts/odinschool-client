
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      description: 'New partnership allows students to connect directly with hiring managers at top tech companies.',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d'
    },
    {
      id: 2,
      description: 'Learn cutting-edge AI techniques with our comprehensive new course taught by industry experts.',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d'
    },
    {
      id: 3,
      description: 'Meet Alex, who completed our full program and landed a senior role at a Fortune 500 company.',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start text-center mb-10">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News</h2>
            <p className="text-gray-600 max-auto">Stay updated with the latest announcements and success stories from CodeMaster</p>
          </div>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt="News image" 
                className="w-full h-full object-cover" 
              />
            </div>
              
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="hover:bg-primary-50 p-0 h-auto">
                  Read More <span className="ml-1">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
