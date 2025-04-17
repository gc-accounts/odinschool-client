
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, X, ChevronDown, Play, BookOpen, Clock, LockIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { coursesData } from '@/data/courses';
import { lessonContent } from '@/data/lessons';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const CourseLesson = () => {
  const { id, lessonId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    const foundCourse = coursesData.find(c => c.id === id);
    
    if (foundCourse) {
      setCourse(foundCourse);
      document.title = `${foundCourse.title} - Lesson - CodeMaster`;
      
      // If lessonId is provided, find the correct section and lesson
      if (lessonId) {
        const parts = lessonId.split('-');
        if (parts.length === 2) {
          const sectionIndex = parseInt(parts[0]);
          const lessonIndex = parseInt(parts[1]);
          
          if (!isNaN(sectionIndex) && !isNaN(lessonIndex)) {
            setExpandedSection(sectionIndex);
            setActiveSectionIndex(sectionIndex);
            setActiveLessonIndex(lessonIndex);
          }
        }
      }
    } else {
      navigate('/courses');
      toast.error("Course not found.");
    }
    
    setLoading(false);
  }, [id, lessonId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!course) return null;

  const handleLessonClick = (sectionIndex: number, lessonIndex: number) => {
    setActiveSectionIndex(sectionIndex);
    setActiveLessonIndex(lessonIndex);
    navigate(`/courses/${id}/lessons/${sectionIndex}-${lessonIndex}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
          {/* Left sidebar with lessons */}
          <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 overflow-y-auto pb-20 bg-gray-50">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
              <Link 
                to={`/courses/${id}`}
                className="inline-flex items-center text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back to Course
              </Link>
              <h2 className="text-sm font-medium truncate">{course.title}</h2>
            </div>
            
            <div className="space-y-1 p-4">
              <h3 className="text-xs font-medium uppercase text-gray-500 mb-2">Course Content</h3>
              
              <div className="space-y-2">
                {course.curriculum.map((section: any, sectionIndex: number) => (
                  <Collapsible 
                    key={sectionIndex}
                    open={expandedSection === sectionIndex}
                    onOpenChange={() => setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex)}
                    className="border border-gray-200 rounded-md overflow-hidden"
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="bg-white p-2 flex justify-between items-center hover:bg-gray-50">
                        <div className="text-left">
                          <p className="text-sm font-medium">{section.title}</p>
                          <p className="text-xs text-gray-500">{section.lessons} lessons • {section.duration}</p>
                        </div>
                        <ChevronDown 
                          size={14} 
                          className={cn(
                            "text-gray-500 transition-transform duration-200",
                            expandedSection === sectionIndex ? "transform rotate-180" : ""
                          )}
                        />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="bg-white">
                        {/* Generate mock lessons for each section */}
                        {Array.from({ length: Math.min(5, section.lessons) }, (_, lessonIndex) => (
                          <button 
                            key={lessonIndex}
                            onClick={() => handleLessonClick(sectionIndex, lessonIndex)}
                            className={cn(
                              "w-full p-2 flex items-center text-left hover:bg-gray-50",
                              activeSectionIndex === sectionIndex && activeLessonIndex === lessonIndex 
                                ? "bg-primary-50 text-primary-600" 
                                : ""
                            )}
                          >
                            <div className="mr-2">
                              {lessonIndex === 0 ? (
                                <Play size={14} className={activeSectionIndex === sectionIndex && activeLessonIndex === lessonIndex ? "text-primary-600" : "text-gray-400"} />
                              ) : (
                                <LockIcon size={14} className="text-gray-400" />
                              )}
                            </div>
                            <div className="text-left">
                              <p className={cn(
                                "text-xs font-medium",
                                activeSectionIndex === sectionIndex && activeLessonIndex === lessonIndex 
                                  ? "text-primary-600" 
                                  : ""
                              )}>
                                {lessonIndex + 1}. {section.title} - Lesson {lessonIndex + 1}
                              </p>
                              <p className="text-xs text-gray-500">
                                {Math.floor(10 + Math.random() * 20)}:{Math.floor(10 + Math.random() * 50)} min
                              </p>
                            </div>
                          </button>
                        ))}
                        
                        {section.lessons > 5 && (
                          <div className="p-2 text-center text-xs text-gray-500">
                            + {section.lessons - 5} more lessons
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1 overflow-y-auto">
            <div className="w-full">
              {/* Video player */}
              <div className="aspect-video bg-black">
                <iframe 
                  src={lessonContent.video}
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title="Course Lesson"
                ></iframe>
              </div>
              
              {/* Lesson content */}
              <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-2">
                  {course.curriculum[activeSectionIndex]?.title} - Lesson {activeLessonIndex + 1}
                </h1>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{Math.floor(10 + Math.random() * 20)}:{Math.floor(10 + Math.random() * 50)} min</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={14} className="mr-1" />
                    <span>Lesson {activeLessonIndex + 1} of {course.curriculum[activeSectionIndex]?.lessons}</span>
                  </div>
                </div>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                    {["overview", "transcript", "resources"].map((tab) => (
                      <TabsTrigger 
                        key={tab}
                        value={tab}
                        className={cn(
                          "data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary-600 data-[state=active]:text-primary-600 rounded-none bg-transparent font-medium capitalize"
                        )}
                      >
                        {tab}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <div 
                      className="prose prose-gray max-w-none"
                      dangerouslySetInnerHTML={{ __html: lessonContent.overview }}
                    />
                  </TabsContent>
                  
                  <TabsContent value="transcript" className="mt-0">
                    <div 
                      className="prose prose-gray max-w-none"
                      dangerouslySetInnerHTML={{ __html: lessonContent.transcript }}
                    />
                  </TabsContent>
                  
                  <TabsContent value="resources" className="mt-0">
                    <div className="space-y-4">
                      <p className="mb-4">Download these resources to support your learning:</p>
                      
                      <div className="space-y-2">
                        {lessonContent.resources.map((resource: any, index: number) => (
                          <div 
                            key={index}
                            className="flex items-center border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            <div className="mr-3 text-gray-500">
                              <BookOpen size={18} />
                            </div>
                            <div className="flex-grow">
                              <p className="font-medium text-sm">{resource.name}</p>
                              <p className="text-xs text-gray-500">{resource.type} {resource.size && `• ${resource.size}`}</p>
                            </div>
                            <button 
                              className="text-primary-600 text-sm font-medium"
                            >
                              Download
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default CourseLesson;
