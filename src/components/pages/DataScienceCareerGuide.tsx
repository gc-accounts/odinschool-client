import React, { useEffect, useState } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion";
import { Download, FileText, Loader2, BookUp } from 'lucide-react';
import { getDataScienceCareerGuide } from '@/components/utils/api/dataScienceCareerGuide';
import Markdown from '@/components/components/Markdown';

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
        <div className="grid place-items-center h-screen">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
      ) : (<main className="flex-grow">


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
                       {/* <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Start Interview
            </Button> */}
                    </div>


        </section>


        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{dataScienceCareerGuide?.sub_title}</h2>
                {dataScienceCareerGuide?.description && (
                  <div className="prose prose-sm" style={{

                  }}>
                    {/*@ts-ignore */}
                    <Markdown markdown={dataScienceCareerGuide?.description} />
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
                      <div className="prose prose-sm" style={{

}}>
                          <Markdown markdown={section.description} />
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
                    <img
                      src={dataScienceCareerGuide?.poster}
                      alt="Data Science Career Guide Cover"
                      className="rounded-md shadow-md max-w-full h-auto"
                    />
                  </div>
                  <Button onClick={()=>{
                      window.open(dataScienceCareerGuide?.file, "_blank");
                    }} className="w-full mb-4 flex items-center justify-center gap-2">
                    <Download className="h-4 w-4"  />
                    Download PDF Guide
                  </Button>
                  {/* <div className="text-center text-sm text-gray-500">
                    <p>Free 72-page comprehensive guide</p>
                    <p>Last updated: May 2025</p>
                  </div> */}
                </div>

                {/* <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={dataScienceCareerGuide?.author?.avatar}
                      alt="Author"
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Written by</h3>
                      <p className="text-lg font-semibold">{dataScienceCareerGuide?.author?.name}</p>
                      <p className="text-sm text-gray-600">{dataScienceCareerGuide?.author?.designation}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {dataScienceCareerGuide?.author?.description}
                  </p>
                </div> */}

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
                  <a href="/contact">Talk to an Advisor</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>)}

      <Footer />
    </div>
  );
};



export default DataScienceCareerGuide;