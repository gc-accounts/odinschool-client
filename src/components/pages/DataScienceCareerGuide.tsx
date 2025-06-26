'use client';

import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion";
import { Download, FileText, BookUp } from 'lucide-react';
import { getDataScienceCareerGuide } from '@/components/utils/api/dataScienceCareerGuide';
import Image from 'next/image';

// Lazy load components
const Markdown = lazy(() => import('@/components/components/Markdown'));

// Loading fallback components
const ContentSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-200 rounded w-3/4" />
    <div className="h-4 bg-gray-200 rounded w-full" />
    <div className="h-4 bg-gray-200 rounded w-5/6" />
    <div className="h-4 bg-gray-200 rounded w-4/6" />
  </div>
);

const ItinerarySkeleton = () => (
  <div className="flex items-start p-4 bg-gray-50 rounded-lg animate-pulse">
    <div className="flex-shrink-0 p-2 bg-gray-200 rounded-full mr-3">
      <div className="h-4 w-4" />
    </div>
    <div className="flex-grow">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

const AccordionSkeleton = () => (
  <div className="space-y-2">
    {[1, 2, 3].map((i) => (
      <div key={i} className="border rounded-lg p-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-full" />
      </div>
    ))}
  </div>
);

const DataScienceCareerGuide = () => {
  const [dataScienceCareerGuide, setDataScienceCareerGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataScienceCareerGuide().then((data) => {
      setLoading(true);
      setDataScienceCareerGuide(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {loading ? (
        <div className="flex-grow">
          <div className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center md:mb-6 mb-4">
                <div className="bg-white/10 rounded-full p-3">
                  <BookUp className="md:h-8 md:w-8 h-6 w-6" />
                </div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 bg-white/20 rounded w-3/4 mx-auto mb-4" />
                <div className="h-4 bg-white/20 rounded w-5/6 mx-auto" />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="mb-8">
                  <ContentSkeleton />
                </div>
                <div className="mb-8">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <ItinerarySkeleton key={i} />
                    ))}
                  </div>
                </div>
                <div className="mb-10">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
                  <AccordionSkeleton />
                </div>
              </div>

              <div className="lg:col-span-1 order-1 lg:order-2">
                <div className="sticky top-24">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="animate-pulse">
                      <div className="aspect-[3/4] bg-gray-200 rounded-md mb-4" />
                      <div className="h-10 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <main className="flex-grow">
          <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center md:mb-6 mb-4">
                <div className="bg-white/10 rounded-full p-3">
                  <BookUp className="md:h-8 md:w-8 h-6 w-6" />
                </div>
              </div>

              <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">{dataScienceCareerGuide?.title}</h1>
              <p className="md:text-lg text-md text-center max-w-2xl mx-auto">
                This guide covers everything you need to know to build a successful data science career. This guide is your ultimate resource for navigating the data science landscape with clarity and confidence.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{dataScienceCareerGuide?.sub_title}</h2>
                  {dataScienceCareerGuide?.description && (
                    <div className="prose prose-sm">
                      <Suspense fallback={<ContentSkeleton />}>
                        <Markdown markdown={dataScienceCareerGuide?.description} />
                      </Suspense>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">What's Inside</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dataScienceCareerGuide.itenaries.map((item: any, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 p-2 bg-primary-100 rounded-full mr-3">
                          <FileText className="h-4 w-4 text-primary-800" />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.sub_title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {dataScienceCareerGuide?.content.map((section: any, index: number) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="text-left">{section.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="prose prose-sm">
                            <Suspense fallback={<ContentSkeleton />}>
                              <Markdown markdown={section.description} />
                            </Suspense>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="lg:col-span-1 order-1 lg:order-2">
                <div className="sticky top-24">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={dataScienceCareerGuide?.poster}
                        alt="Data Science Career Guide Cover"
                        className="rounded-md shadow-md max-w-full h-auto"

                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <Button onClick={() => {
                      window.open(dataScienceCareerGuide?.file, "_blank");
                    }} className="w-full mb-4 flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF Guide
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Data Science Journey?</h2>
                <p className="text-gray-600 mb-6">
                  Gain hands-on experience, 1:1 mentorship, and dedicated placement support — everything you need to become job-ready in data science.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="/courses">Explore Courses</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/contact-us">Talk to an Advisor</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default DataScienceCareerGuide;