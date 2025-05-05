
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import WebinarCard from '@/components/webinar/WebinarCard';
import { Webinar, getUpcomingWebinars, getPastWebinars, getFreeWebinars, getPaidWebinars } from '@/data/webinars';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Webinars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const upcomingWebinars = getUpcomingWebinars();
  const pastWebinars = getPastWebinars();
  const freeWebinars = getFreeWebinars();
  const paidWebinars = getPaidWebinars();
  
  const filterWebinars = (webinars: Webinar[]) => {
    return webinars.filter(webinar => {
      const matchesSearch = 
        webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        webinar.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = categoryFilter === 'all' || webinar.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  };
  
  const uniqueCategories = Array.from(
    new Set([...upcomingWebinars, ...pastWebinars].map(webinar => webinar.category))
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">
              Learn and grow with OdinSchool's Events
              </h1>
              <p className="text-lg md:text-xl text-gray-600 ">
              Whether you're just getting started or are looking to stay current in the industry, 
              there's something for everyone in OdinSchool's events! Interact with industry experts and thought leaders,
              who will walk you through the most in-demand tools and technologies, and concepts.
              </p>
            </div>
          </div>
        </section>
      
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
      <Tabs defaultValue="upcoming" className="mb-16">
      <div className="flex justify-center mb-8">
        <TabsList className="mb-8 mx-auto flex justify-center">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        </div>
        
        <TabsContent value="upcoming">
          {filterWebinars(upcomingWebinars).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterWebinars(upcomingWebinars).map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No upcoming webinars match your search criteria.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past">
          {filterWebinars(pastWebinars).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterWebinars(pastWebinars).map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No past webinars match your search criteria.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="free">
          {filterWebinars(freeWebinars).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterWebinars(freeWebinars).map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No free webinars match your search criteria.</p>
            </div>
          )}
          </TabsContent>
          
          <TabsContent value="paid">
          {filterWebinars(paidWebinars).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterWebinars(paidWebinars).map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No paid webinars match your search criteria.</p>
            </div>
          )}
          </TabsContent>
        </Tabs>
        </div>
        </div>
        </section>
      </main>
    </div>
  );
};

export default Webinars;
