
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Newspaper } from 'lucide-react';
import { getAnnouncements } from '@/utils/api/announcement';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItems = async () => {
      console.log('fetching news items');
      setLoading(true);
      const newsItems = await getAnnouncements();
      setNewsItems([...newsItems]);
      setLoading(false);
    };
    fetchNewsItems();
  }, []);




  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start text-center mb-10">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">OdinSchool in Media</h2>
            <p className="text-gray-600 max-auto">Stay updated with the latest announcements and success stories from CodeMaster</p>
          </div>
        </div>

        {loading ? (

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
{[...Array(4)].map((_, index) => (
  <div key={index} className="animate-pulse">
    <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  </div>
))}
</div>
        ) :(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <CardDescription className="line-clamp-3 mt-2">
                  {item.text}
                </CardDescription>
              </CardContent>

              {/* <CardFooter>
                <Button variant="ghost" className="hover:bg-primary-50 p-0 h-auto">
                  Read More <span className="ml-1">→</span>
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>)}
      </div>
    </section>
  );
};

export default NewsSection;
