'use client';

import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Correct import for App Router
import Footer from '@/components/components/Footer';
import { ChevronLeft, Send } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/components/Navbar';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const params = useParams(); // Use useParams to get route parameters
  const { slug } = params; // Extract slug from params

  useEffect(() => {
    if (slug) {
      const fetchEventDetails = async () => {
        // const res = await fetch(`https://strapi.odinschool.com/api/events?populate=*`);
                  const res = await fetch(`https://strapi.odinschool.com/api/events?filters[slug][$eq]=${slug}&populate=*`);
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setEvent(data.data[0]); // Assuming the response contains the event object
        }
      };
      fetchEventDetails();
    }
  }, [slug]);

  if (!event) return <div className="text-center p-8">Loading...</div>;


  return (
    
     <div className="flex flex-col min-h-screen">
          <Suspense fallback={<div className="h-16 bg-white"></div>}>
            <Navbar />
          </Suspense>
    
          <main className="flex-grow">
            {/* Hero Section */}
            <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
              <div className="container mx-auto px-4">
                <Link href="/events" className="inline-flex underline items-center mb-4 text-sm font-semibold text-white/60 transition duration-300">
                     <ChevronLeft className='text-sm' /> Back to Events
                  </Link>
                <h1 className="md:text-4xl text-2xl font-bold md:mb-4 mb-2">{event.title}</h1>
              </div>
            </section>
    
            {/* Events Listing Section */}
            <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
              <div className="container mx-auto">

                <div className='grid grid-cols-12 gap-6'>
                  <div className='col-span-8'>
                    {/* Poster Image */}
        {event?.poster_url && event?.poster_url[0] && (
          <img
            className="w-full h-96 object-cover rounded-md"
            src={`https://strapi.odinschool.com/${event.poster_url[0].url}`}
            alt={event.title}
          />
        )}
        <p className="text-gray-800 mt-4">{event.description}</p>
                  </div>
                  <div className='col-span-4'>
                    <div className='p-4 rounded-md border border-primary-600 bg-primary-50 sticky top-28'>
                       <p className="text-gray-500">Instructor: {event.instructor}</p>
          <p className="text-gray-500 mt-2">Date: {event.date}</p>
          <p className="text-gray-500 mt-2">Time: {event.time}</p>
          <p className="text-gray-500 mt-2">Price: ${event.price}</p>
          <p className="text-gray-500 mt-2">Duration: {event.duration} hours</p>
          <p className="text-gray-500 mt-2">Tags: 
            <span className='rounded-full text-sm font-semibold px-2 py-1 bg-primary-200 text-primary-600'>{event.tags}</span></p>
                    </div>

                  </div>
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

export default EventDetails;