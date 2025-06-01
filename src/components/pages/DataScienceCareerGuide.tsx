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
import { Download, FileText, Loader2 } from 'lucide-react';
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
        <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">{dataScienceCareerGuide?.title}</h1>
          </div>
        </div>
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

                <div className="bg-white border rounded-xl p-6">
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
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Data Science Journey?</h2>
              <p className="text-gray-600 mb-6">
                Our Data Science Bootcamp provides hands-on training, personalized mentorship, and career support to help you land your dream job in data science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/courses">Explore Bootcamp</a>
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

// Data for the guide contents section
const guideContents = [
  {
    title: "Role Profiles",
    description: "Detailed breakdown of various data science roles and responsibilities"
  },
  {
    title: "Skill Development",
    description: "Prioritized list of technical and soft skills to develop"
  },
  {
    title: "Learning Roadmap",
    description: "Step-by-step learning path from beginner to advanced"
  },
  {
    title: "Portfolio Building",
    description: "Guide to creating impactful data science projects"
  },
  {
    title: "Resume Templates",
    description: "Industry-specific resume formats and examples"
  },
  {
    title: "Interview Preparation",
    description: "Common questions and strategies for technical interviews"
  },
  {
    title: "Salary Insights",
    description: "Compensation benchmarks by role, experience, and location"
  },
  {
    title: "Growth Strategies",
    description: "Long-term career development and advancement tactics"
  }
];

// Data for the table of contents accordion
const tableOfContents = [
  {
    title: "Chapter 1: Introduction to Data Science Careers",
    topics: [
      "The evolving landscape of data science",
      "Different roles within the data ecosystem",
      "Core skills and competencies",
      "Industry trends and future outlook"
    ]
  },
  {
    title: "Chapter 2: Building Your Foundation",
    topics: [
      "Essential mathematics and statistics",
      "Programming languages for data science",
      "Data manipulation and visualization",
      "Machine learning fundamentals",
      "Big data technologies"
    ]
  },
  {
    title: "Chapter 3: Educational Pathways",
    topics: [
      "Degree programs vs. bootcamps vs. self-learning",
      "Recommended courses and resources",
      "Certifications worth pursuing",
      "Building a personalized learning plan"
    ]
  },
  {
    title: "Chapter 4: Creating a Standout Portfolio",
    topics: [
      "Selecting meaningful project topics",
      "Data acquisition and cleaning strategies",
      "Showcasing analytical processes",
      "Presenting results effectively",
      "GitHub best practices for data scientists"
    ]
  },
  {
    title: "Chapter 5: Job Search Strategies",
    topics: [
      "Crafting a data science resume",
      "Building an online presence",
      "Networking in the data science community",
      "Working with recruiters",
      "Evaluating job opportunities"
    ]
  },
  {
    title: "Chapter 6: Mastering the Interview Process",
    topics: [
      "Types of data science interviews",
      "Technical challenge preparation",
      "Answering behavioral questions",
      "Case study approaches",
      "Post-interview follow-up strategies"
    ]
  },
  {
    title: "Chapter 7: Career Growth and Specialization",
    topics: [
      "Choosing a specialization path",
      "Advancing to senior and leadership roles",
      "Transitioning between industries",
      "Staying updated with emerging technologies",
      "Building your personal brand"
    ]
  }
];

export default DataScienceCareerGuide;