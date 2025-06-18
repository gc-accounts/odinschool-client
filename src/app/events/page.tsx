// src/app/events/page.tsx
'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Send, Calendar, Clock, Bookmark } from 'lucide-react';

// Import Skeleton Component
import EventCardSkeleton from '@/components/components/EventCardSkeleton';

// Lazy load components
const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div className="h-16 bg-white"></div>,
  ssr: false
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-100"></div>,
  ssr: false
});

// Button component is not directly used in the current structure for buttons like "View Details"
// but if it's used elsewhere, keep it:
// const Button = dynamic(() => import('@/components/components/Button'), {
//   loading: () => <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>,
//   ssr: false
// });


const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const sectionRefs = useRef([]);
  const addToRefs = (el: any) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true); // Set loading to true before fetch
        const res = await fetch('https://strapi.odinschool.com/api/events?populate=*');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setEvents(data.data || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setEvents([]);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    fetchEvents();
  }, []);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return dateString;
    }
  };

  // Helper to determine if event is 'Past' or 'Upcoming'
  const getEventStatus = (eventDate: string) => {
    const now = new Date();
    const eventDateTime = new Date(eventDate);
    if (eventDateTime < now) {
      return 'Past';
    }
    return 'Upcoming';
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-16 bg-white"></div>}>
        <Navbar />
      </Suspense>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <Send className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>
            <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">Learn and grow with OdinSchool's Events</h1>
            <p className="text-md text-center max-w-2xl mx-auto">
              Whether you're just getting started or are looking to stay current in the industry, there's something for everyone in OdinSchool's events! Interact with industry experts and thought leaders, who will walk you through the most in-demand tools and technologies, and concepts.
            </p>
          </div>
        </section>

        {/* Events Listing Section */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                // Render 6 skeleton cards while loading
                Array.from({ length: 3 }).map((_, index) => (
                  <EventCardSkeleton key={index} />
                ))
              ) : events.length > 0 ? (
                events.map((event: any) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <div className="relative w-full h-48">
                      {event.poster_url && event.poster_url[0] && (
                        <Image
                          src={`https://www.odinschool.com${event.poster_url[0].url}`}
                          alt={event.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-xl"
                          onError={(e) => { e.currentTarget.src = '/placeholder-event.png'; }}
                        />
                      )}
                      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-10">
                        {event.isFree && (
                          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Free
                          </span>
                        )}
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getEventStatus(event.date) === 'Past' ? 'text-white bg-gray-600' : 'bg-green-600 text-green-50'}`}>
                          {getEventStatus(event.date)}
                        </span>
                      </div>
                       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white z-10">
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <span>{formatDate(event.date)}</span>
                        {event.time && (
                          <>
                            <span className="mx-2">•</span>
                            <Clock size={16} className="mr-2 text-gray-500" />
                            <span>{event.time}</span>
                            {event.duration && <span className="ml-1">({event.duration} hr)</span>}
                          </>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 leading-tight">
                        {event.title}
                      </h2>

                      {event.category && (
                        <div className="flex items-center text-blue-600 text-sm">
                          <Bookmark size={16} className="mr-2" />
                          <span>{event.category}</span>
                        </div>
                      )}

                      <p className="text-gray-700 text-sm line-clamp-3">
                        {event.description}
                      </p>

                      <div className="flex justify-between items-center pt-2">
                        <p className="text-gray-600 text-sm">
                          Instructor: <span className="font-medium">{event.instructor}</span>
                        </p>
                        <Link href={`/events/${event.slug}`} legacyBehavior>
                          <a className="text-blue-600 font-semibold hover:underline">
                            View Details
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">No events available.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="h-64 bg-gray-100"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Events;