
import React, { useEffect, useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import WebinarCard from '@/components/webinar/WebinarCard';
import { Webinar, getUpcomingWebinars, getPastWebinars, getFreeWebinars, getPaidWebinars } from '@/data/webinars';
import { Loader2, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { getWebinars } from '@/utils/api/webinars';


const tabOptions = [
  {
    label: 'Upcoming',
    value: 'upcoming'
  },
  {
    label: 'Past',
    value: 'past'
  },
  {
    label: 'Free',
    value: 'free'
  },
  {
    label: 'Paid',
    value: 'paid'
  }
]


function getFilterObj(tab: string, isOdintalk: boolean) {
  const filterObj: any = {};
  if (tab === 'free' || tab === 'paid') {
    filterObj.time = 'all';
    filterObj.isPaid = tab === 'paid';
  } else if (tab === 'upcoming') {
    filterObj.time = 'upcoming';
  } else if (tab === 'past') {
    filterObj.time = 'past';
  }
  if(isOdintalk){
    filterObj.isOdintalk = true;
  }else{
    filterObj.isOdintalk = false;
  }
  return filterObj;
}
const Webinars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState(tabOptions[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  // const [pageSize, setPageSize] = useState(10);


  // state for webinars
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  // loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinars = async () => {
      const filterObj = getFilterObj(tab, false);
      const webinars = await getWebinars({
        pageNumber: pageNumber,
        pageSize: 10,
        search: searchQuery,
        isOdintalk: false,
        ...filterObj
      });
      setWebinars(webinars);
      setLoading(false);
    };
    fetchWebinars();
  }, [searchQuery, tab, pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : (<main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-16">
          <div className="container">
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
              <Tabs defaultValue="upcoming" value={tab} onValueChange={setTab} className="mb-16">
                <div className="flex justify-center mb-8">
                  <TabsList className="mb-8 mx-auto flex justify-center">
                    {tabOptions.map((option) => (
                      <TabsTrigger key={option.value} value={option.value}>{option.label}</TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <TabsContent value={tab}>
                  {webinars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {webinars.map((webinar) => (
                        <WebinarCard key={webinar.id} webinar={webinar} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-lg text-muted-foreground">No {tabOptions.find(option => option.value === tab)?.label} webinars match your search criteria.</p>
                    </div>
                  )}
                </TabsContent>


              </Tabs>
            </div>
          </div>
        </section>
      </main>)}
    </div>
  );
};

export default Webinars;
