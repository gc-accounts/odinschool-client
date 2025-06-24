'use client';

import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';

const MasterClassDetails = () => {
  const [event, setEvent] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const fetchMasterClassDetails = async () => {
        const res = await fetch(
          `https://strapi.odinschool.com/api/master-classes?filters[slug][$eq]=${slug}&populate=*`
        );
        const data = await res.json();
        if (data.data?.length > 0) {
          setEvent(data.data[0]);
        }
      };
      fetchMasterClassDetails();
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
            <Link
              href="/masterclass"
              className="inline-flex underline items-center mb-4 text-sm font-semibold text-white/60 transition duration-300"
            >
              <ChevronLeft className="text-sm mr-1" /> Back to Masterclasses
            </Link>
            <h1 className="md:text-4xl text-2xl font-bold md:mb-4 mb-2">{event.title}</h1>
          </div>
        </section>

        {/* Main Section */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                {event.poster_url?.[0]?.url && (
                  <img
                    className="w-full h-auto rounded-md"
                    src={`https://strapi.odinschool.com${event.poster_url[0].url}`}
                    alt={event.title}
                  />
                )}
                <p className="text-gray-800 mt-4">{event.description}</p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="sticky top-28 border rounded-lg p-6 shadow-sm">
                  <p className="text-gray-500">Instructor: <span className='text-black'>{event.instructor}</span></p>
                  <p className="text-gray-500 mt-2">Date: <span className='text-black'>{event.date}</span></p>
                  <p className="text-gray-500 mt-2">Time: <span className='text-black'>{event.time}</span></p>
                  <p className="text-gray-500 mt-2">Price: <span className='text-black'>{event.price}</span></p>
                  <p className="text-gray-500 mt-2">Duration: <span className='text-black'>{event.duration} hours</span></p>
                  {event.tags && (
                    <p className="text-gray-500 mt-2">
                      Tags:{' '}
                      <span className="rounded-full text-sm font-semibold px-2 py-1 bg-primary-200 text-primary-600">
                        {event.tags}
                      </span>
                    </p>
                  )}
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

export default MasterClassDetails;
