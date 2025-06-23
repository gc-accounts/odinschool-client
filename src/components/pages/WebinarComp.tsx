// components/pages/WebinarEnded.tsx

'use client';

import React, { useEffect, useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Lazy loaded components
const Navbar = dynamic(() => import('@/components/components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/components/Footer'), { ssr: false });

const WebinarComp = () => {
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Webinar Ended - OdinSchool";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-16 bg-white"></div>}>
        <Navbar />
      </Suspense>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 py-16 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Growth & Prospects In Full Stack</h1>
            <p className="text-lg md:text-xl font-light">This webinar has ended. Thank you for your interest!</p>
          </div>
        </section>

        {/* Speaker Section */}
        <section className="bg-white py-12 px-4">
          <div className="container max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1">
              <Image
                src="https://strapi.odinschool.com/uploads/Partha_Mukherjee_1_4a3d521cbe.webp" // Use local or hosted image
                alt="Partha Mukherjee"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold text-primary-600 mb-2">Partha Mukherjee</h2>
              <p className="text-gray-700">Managing Director, ZeroCode HR</p>
              <p className="text-sm text-gray-500 mt-4">Originally aired: 15 April | 07:00 PM – 08:30 PM</p>
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

export default WebinarComp;
