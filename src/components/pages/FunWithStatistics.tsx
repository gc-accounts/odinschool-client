'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';

// Importing UI components
import { Card, CardContent } from '@/components/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from "@/components/components/ui/tabs";
import { Skeleton } from "@/components/components/ui/skeleton";

// Import Accordion components for mobile view
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion"; // Ensure this import path is correct for your shadcn setup

// Importing API utility
import { getDsBook } from '@/components/utils/api/dsBook'; // Ensure this path is correct

// Dynamic imports for Navbar and Footer with skeletons for better perceived performance
const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
  ssr: false
});
const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
  ssr: false
});

const FunWithStatistics = () => {
  const [dsBook, setDsBook] = useState<any>(null);
  const [isLoadingDsBook, setIsLoadingDsBook] = useState(true);
  const [currentChapter, setCurrentChapter] = useState<any>(null);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  
  const [accordionOpenItem, setAccordionOpenItem] = useState<string>(''); 

  const params = useParams();
  const router = useRouter();
  const currentChapterId = params?.id as string;

  // Effect to fetch the entire book
  useEffect(() => {
    const fetchDsBookData = async () => {
      setIsLoadingDsBook(true);
      try {
        const data = await getDsBook();
        setDsBook(data);
      } catch (error) {
        console.error("Failed to fetch DS Book data:", error);
      } finally {
        setIsLoadingDsBook(false);
        setIsInitialLoadComplete(true);
      }
    };
    fetchDsBookData();
  }, []);

  // Effect to determine and set the current chapter
  useEffect(() => {
    if (dsBook && isInitialLoadComplete) {
      let chapterToSet = null;

      if (currentChapterId) {
        chapterToSet = dsBook.chapers.find((chapter: any) =>
          chapter.url_slug.split('/')[1] === currentChapterId
        );
      } else if (dsBook.chapers.length > 0) {
        const firstChapter = dsBook.chapers[0];
        if (window.location.pathname !== `/fun-with-statistics/${firstChapter.url_slug}`) {
            router.replace(`/fun-with-statistics/${firstChapter.url_slug}`);
        }
        chapterToSet = firstChapter;
      }
      setCurrentChapter(chapterToSet);

      if (chapterToSet) {
        setAccordionOpenItem('chapters-list'); // Keep the main accordion item open on chapter change
      }
    }
  }, [dsBook, currentChapterId, isInitialLoadComplete, router]);

  // Effect to scroll to the top of the page
  useEffect(() => {
    if (currentChapter) {
      window.scrollTo(0, 0);
    }
  }, [currentChapter]);

  // Derive the active chapter title for the accordion trigger
  const activeChapterTitle = currentChapter?.title || "Chapters";

  // Skeletons remain the same
  const SidebarSkeleton = () => (
    <div className="md:sticky md:top-24 overflow-y-auto overflow-x-hidden h-auto md:h-[calc(100vh-200px)] mb-4 md:mb-10 mt-2 bg-white p-4 rounded-md border">
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-[90%] mb-2" />
      <Skeleton className="h-8 w-[80%] mb-2" />
      <Skeleton className="h-8 w-[85%] mb-2" />
      <Skeleton className="h-8 w-[70%] mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-[95%] mb-2" />
      <Skeleton className="h-8 w-3/4 mb-2" />
    </div>
  );

  const ContentSkeleton = () => (
    <Card className='p-5'>
      <CardContent>
        <Skeleton className="h-10 w-3/4 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-[95%] mb-2" />
        <Skeleton className="h-4 w-[90%] mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-[80%] mb-2" />
        <Skeleton className="h-4 w-[98%] mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className='px-[20px] py-[50px] md:px-[30px] md:py-[70px] flex-grow'>
        <div className="container">
          <div className="grid grid-cols-12 gap-4">

            {/* Left Sidebar - Navigation (Tabs for Desktop, Accordion for Mobile) */}
            <div className='col-span-12 md:col-span-3'>
              {isLoadingDsBook ? (
                <SidebarSkeleton />
              ) : (
                <>
                  {/* Desktop Tabs View */}
                  <div className="hidden md:block md:sticky md:top-24 overflow-y-auto overflow-x-hidden h-auto md:h-[calc(100vh-200px)] mb-4 md:mb-10 mt-2 bg-white p-4 rounded-md border">
                    <Tabs
                      orientation="vertical"
                      value={currentChapterId || (dsBook?.chapers[0]?.url_slug.split('/')[1] || '')}
                      onValueChange={(value) => {
                        router.push(`/fun-with-statistics/${value}`);
                      }}
                      className="flex flex-col w-full"
                    >
                      <TabsList className="flex justify-start items-start flex-wrap md:flex-col h-auto w-full p-0 mb-4 md:mb-0 bg-white">
                        {dsBook?.chapers.map((chapter: any) => (
                          <TabsTrigger
                            key={chapter.id}
                            value={chapter.url_slug.split('/')[1]}
                            className="w-full flex justify-start text-left px-4 py-2 my-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-primary-50 bg-primary-50"
                          >
                            {chapter.title.length > 35 ? chapter.title.substring(0, 32) + '...' : chapter.title}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>

                  {/* Mobile Accordion View */}
                  <div className="block md:hidden mb-4 mt-2 bg-white p-4 rounded-md border max-h-[400px] overflow-y-scroll">
                    <Accordion
                      type="single"
                      collapsible
                      value={accordionOpenItem}
                      onValueChange={setAccordionOpenItem}
                    >
                      <AccordionItem value="chapters-list">
                         <AccordionTrigger className="w-full flex justify-between text-left px-4 py-2 my-1 bg-gray-100 font-semibold  rounded-md">
                            {activeChapterTitle} {/* Displays the active chapter title or "Chapters" */}
                        </AccordionTrigger>
                        <AccordionContent className="p-0">
                            {dsBook?.chapers.map((chapter: any) => {
                                const chapterSlug = chapter.url_slug.split('/')[1];
                                return (
                                    <button
                                        key={chapter.id}
                                        onClick={() => {
                                            router.push(`/fun-with-statistics/${chapterSlug}`);
                                            // Close the accordion after navigation for better mobile UX
                                            setAccordionOpenItem(''); 
                                        }}
                                        className={`w-full flex justify-start text-md font-semibold text-left px-4 py-2 my-1
                                            ${currentChapterId === chapterSlug 
                                                ? 'bg-primary-100 rounded-md font-semibold' // Active chapter styling
                                                : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        {chapter.title}
                                    </button>
                                );
                            })}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </>
              )}
            </div>

            {/* Right Content Area (Chapter Content) */}
            <div className='col-span-12 md:col-span-9'>
              <div className="">
                {isLoadingDsBook || !currentChapter ? (
                  <ContentSkeleton />
                ) : (
                  <Card>
                    <CardContent className='p-5'>
                      <h1 className="text-3xl mb-4">{currentChapter.title}</h1>
                      {currentChapter.is_html ? (
                        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: currentChapter.content }} />
                      ) : (
                        <p className="text-gray-700">{currentChapter.content}</p>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FunWithStatistics;