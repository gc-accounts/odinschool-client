
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import WebinarCard from '@/components/webinar/WebinarCard';
import { Webinar, getUpcomingWebinars, getPastWebinars, getFreeWebinars, getPaidWebinars } from '@/data/webinars';
import { Search } from 'lucide-react';

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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="heading-xl mb-4">Live Webinars</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our expert-led webinars to enhance your skills and stay ahead in your field.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search webinars..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {uniqueCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Tabs defaultValue="upcoming" className="mb-16">
        <TabsList className="mb-8 mx-auto flex justify-center">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        
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
  );
};

export default Webinars;
