
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'CodeMaster Partners with Industry Leaders for Exclusive Career Opportunities',
      description: 'New partnership allows students to connect directly with hiring managers at top tech companies.',
      date: 'June 15, 2023',
      category: 'Partnerships',
      image: 'https://source.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 2,
      title: 'New Advanced AI Course Launching Next Month',
      description: 'Learn cutting-edge AI techniques with our comprehensive new course taught by industry experts.',
      date: 'May 22, 2023',
      category: 'Course Updates',
      image: 'https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 3,
      title: 'Student Success Story: From Beginner to Senior Developer in 8 Months',
      description: 'Meet Alex, who completed our full program and landed a senior role at a Fortune 500 company.',
      date: 'April 10, 2023',
      category: 'Success Stories',
      image: 'https://source.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News</h2>
            <p className="text-gray-600 max-w-2xl">Stay updated with the latest announcements and success stories from CodeMaster</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Newspaper className="mr-2 h-4 w-4" />
            View All News
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              
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
