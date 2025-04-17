
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OrganizationLogos = () => {
  // Generate 40 logos with different names
  const logos = [
    // Tech Companies
    { id: 1, name: 'Microsoft', logo: 'https://source.unsplash.com/hSHNPyND_dU/200x100' },
    { id: 2, name: 'Adobe', logo: 'https://source.unsplash.com/vKICeP49A6Y/200x100' },
    { id: 3, name: 'Google', logo: 'https://source.unsplash.com/dRltIJMupdc/200x100' },
    { id: 4, name: 'Amazon', logo: 'https://source.unsplash.com/wFdWBzQiHl8/200x100' },
    { id: 5, name: 'IBM', logo: 'https://source.unsplash.com/GQD3Av_9A88/200x100' },
    { id: 6, name: 'Oracle', logo: 'https://source.unsplash.com/nLtTGkYJbmY/200x100' },
    { id: 7, name: 'Apple', logo: 'https://source.unsplash.com/JLofYYxbj3Q/200x100' },
    { id: 8, name: 'Intel', logo: 'https://source.unsplash.com/FLoCpldPQbs/200x100' },
    { id: 9, name: 'Netflix', logo: 'https://source.unsplash.com/vl9OwMhcTcg/200x100' },
    { id: 10, name: 'Tesla', logo: 'https://source.unsplash.com/faEfWCdOKIg/200x100' },
    // Financial Companies
    { id: 11, name: 'JPMorgan', logo: 'https://source.unsplash.com/5fNmWej4tAA/200x100' },
    { id: 12, name: 'Goldman Sachs', logo: 'https://source.unsplash.com/NeTPASr-bmQ/200x100' },
    { id: 13, name: 'Morgan Stanley', logo: 'https://source.unsplash.com/c9FQyqIECds/200x100' },
    { id: 14, name: 'Visa', logo: 'https://source.unsplash.com/2cYueJxUK4E/200x100' },
    { id: 15, name: 'MasterCard', logo: 'https://source.unsplash.com/Wpnoqo2plFA/200x100' },
    // Healthcare
    { id: 16, name: 'Johnson & Johnson', logo: 'https://source.unsplash.com/_aYnT8xwk3M/200x100' },
    { id: 17, name: 'Pfizer', logo: 'https://source.unsplash.com/t4gyJ8fVUjc/200x100' },
    { id: 18, name: 'Merck', logo: 'https://source.unsplash.com/iJ2IG8ckCpA/200x100' },
    { id: 19, name: 'Novartis', logo: 'https://source.unsplash.com/U3sOwViXhkY/200x100' },
    { id: 20, name: 'Roche', logo: 'https://source.unsplash.com/O38Id_cyV4M/200x100' },
    // Retail
    { id: 21, name: 'Walmart', logo: 'https://source.unsplash.com/h1BuNJZzpC8/200x100' },
    { id: 22, name: 'Target', logo: 'https://source.unsplash.com/QiXp_p8z-U8/200x100' },
    { id: 23, name: 'Costco', logo: 'https://source.unsplash.com/zrYHOQVy6JY/200x100' },
    { id: 24, name: 'Nike', logo: 'https://source.unsplash.com/MtqG1lWcUw0/200x100' },
    { id: 25, name: 'Adidas', logo: 'https://source.unsplash.com/Qy-CBKUg_X8/200x100' },
    // Telecom
    { id: 26, name: 'AT&T', logo: 'https://source.unsplash.com/5Hl5reICevY/200x100' },
    { id: 27, name: 'Verizon', logo: 'https://source.unsplash.com/6Ag8V98xRCQ/200x100' },
    { id: 28, name: 'T-Mobile', logo: 'https://source.unsplash.com/lU9bYsoaxAY/200x100' },
    { id: 29, name: 'Comcast', logo: 'https://source.unsplash.com/RYyr-k3XUcQ/200x100' },
    { id: 30, name: 'Vodafone', logo: 'https://source.unsplash.com/kA-6f6Vu6t4/200x100' },
    // Media and Entertainment
    { id: 31, name: 'Disney', logo: 'https://source.unsplash.com/lVVs5skyWoo/200x100' },
    { id: 32, name: 'Warner Bros', logo: 'https://source.unsplash.com/Jx-Csn6WJ7s/200x100' },
    { id: 33, name: 'Universal', logo: 'https://source.unsplash.com/1oKxSKSOowE/200x100' },
    { id: 34, name: 'Sony', logo: 'https://source.unsplash.com/Y7C7F26fzZM/200x100' },
    { id: 35, name: 'Paramount', logo: 'https://source.unsplash.com/iM5QKQbcXQA/200x100' },
    // Automotive
    { id: 36, name: 'Toyota', logo: 'https://source.unsplash.com/kpnfJTSf_5Q/200x100' },
    { id: 37, name: 'BMW', logo: 'https://source.unsplash.com/giRJHP-1OM4/200x100' },
    { id: 38, name: 'Mercedes', logo: 'https://source.unsplash.com/XO25cX2_0iE/200x100' },
    { id: 39, name: 'Volkswagen', logo: 'https://source.unsplash.com/dMeEJRE18VI/200x100' },
    { id: 40, name: 'Ford', logo: 'https://source.unsplash.com/3U9BCFLfFLU/200x100' },
  ];
  
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to handle automatic scrolling
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollContainer = containerRef.current;
        
        // If we've scrolled to the end, reset to the beginning with a smooth transition
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          // Smoothly scroll back to start
          scrollContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll right a little bit
          scrollContainer.scrollBy({
            left: 1,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Set interval for scrolling
    const scrollInterval = setInterval(handleScroll, 30);
    
    // Clean up interval
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h2>
          <p className="text-gray-600">Our graduates work at top tech companies worldwide</p>
        </div>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-auto pb-4 scrollbar-hide" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-6 min-w-max">
            {logos.map((logo) => (
              <Card key={logo.id} className="border-0 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-[180px]">
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
      </div>
    </section>
  );
};

export default OrganizationLogos;
