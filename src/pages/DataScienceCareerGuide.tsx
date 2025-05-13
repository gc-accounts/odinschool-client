import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, FileText } from 'lucide-react';

const DataScienceCareerGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Data Science Career Guide - OdinSchool";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
           <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">The Most Comprehensive Data Science Career Guide</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Navigate Your Data Science Journey</h2>
                <p className="text-gray-600 mb-4">
                  The field of data science is vast and evolving rapidly. Whether you're just starting out or looking to advance your career, this guide will help you navigate the complex landscape of data science roles, skills, and opportunities.
                </p>
                <p className="text-gray-600 mb-4">
                  We've compiled insights from industry experts, hiring managers, and successful data scientists to create a practical, actionable guide that addresses real-world challenges and opportunities in the field.
                </p>
                <p className="text-gray-600">
                  From building a solid foundation in statistics and programming to creating an impressive portfolio and acing technical interviews, this guide provides step-by-step advice to help you achieve your career goals.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What's Inside</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guideContents.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 p-2 bg-primary-100 rounded-full mr-3">
                        <FileText className="h-4 w-4 text-primary-800" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
                <Accordion type="single" collapsible className="w-full">
                  {tableOfContents.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="text-left">{section.title}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-4 space-y-2">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-600">• {topic}</li>
                          ))}
                        </ul>
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
                      src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=400"
                      alt="Data Science Career Guide Cover"
                      className="rounded-md shadow-md max-w-full h-auto"
                    />
                  </div>
                  <Button className="w-full mb-4 flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF Guide
                  </Button>
                  <div className="text-center text-sm text-gray-500">
                    <p>Free 72-page comprehensive guide</p>
                    <p>Last updated: May 2025</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=64"
                      alt="Author"
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Written by</h3>
                      <p className="text-lg font-semibold">Alex Morgan</p>
                      <p className="text-sm text-gray-600">Lead Data Scientist, OdinSchool</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Alex has 10+ years of experience in data science and has worked with companies like Google, Amazon, and IBM. He is passionate about helping aspiring data scientists build successful careers.
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
      </main>
      
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