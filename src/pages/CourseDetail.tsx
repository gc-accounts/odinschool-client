import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  ChevronLeft, 
  PlayCircle, 
  Shield, 
  Award, 
  BarChart, 
  CheckCircle2,
  X,
  ChevronDown,
  ChevronRight,
  LockIcon,
  Play
} from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from '@/data/courses';
import { lessonContent } from '@/data/lessons';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [activeLessonTab, setActiveLessonTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    const foundCourse = coursesData.find(c => c.id === id);
    
    if (foundCourse) {
      setCourse(foundCourse);
      document.title = `${foundCourse.title} - CodeMaster`;
    } else {
      navigate('/courses');
      toast.error("Course not found.");
    }
    
    setLoading(false);
  }, [id, navigate]);

  const handleEnrollClick = () => {
    toast.success(`Enrolled in ${course?.title}`);
    // Navigate to the first lesson
    navigate(`/courses/${id}/lessons/0-0`);
  };

  const handleTryPreview = () => {
    setPreviewOpen(true);
  };

  const handleStartLearning = () => {
    // Navigate to the first lesson
    navigate(`/courses/${id}/lessons/0-0`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <button 
              onClick={() => navigate('/courses')}
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to Courses
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-white/20">
                      {course.category}
                    </span>
                    <span className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded",
                      course.level === 'Beginner' ? "bg-green-500/20 text-green-50" :
                      course.level === 'Intermediate' ? "bg-blue-500/20 text-blue-50" :
                      "bg-purple-500/20 text-purple-50"
                    )}>
                      {course.level}
                    </span>
                  </div>
                  
                  <h1 className="heading-lg">{course.title}</h1>
                  
                  <p className="text-lg text-white/90">{course.description}</p>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="fill-yellow-400 text-yellow-400" size={18} />
                    <span className="font-medium">{course.rating.toFixed(1)}</span>
                    <span className="text-white/70">({course.students.toLocaleString()} students)</span>
                  </div>
                  
                  <p className="text-white/90">Created by <span className="font-medium">{course.instructor}</span></p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/80">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1.5" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1.5" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div 
                        className="rounded-full bg-white/20 backdrop-blur-sm p-3 cursor-pointer hover:bg-white/30 transition-colors"
                        onClick={handleTryPreview}
                      >
                        <PlayCircle size={36} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-baseline mb-6">
                      <span className="text-3xl font-bold">${course.price}</span>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      size="lg" 
                      fullWidth 
                      className="mb-4"
                      onClick={handleEnrollClick}
                    >
                      Enroll Now
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      fullWidth 
                      className="mb-6"
                      onClick={handleTryPreview}
                    >
                      Try Free Preview
                    </Button>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start">
                        <Shield className="mt-0.5 mr-2 text-gray-500" size={16} />
                        <p>30-day money-back guarantee</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mt-0.5 mr-2 text-gray-500" size={16} />
                        <p>Full lifetime access</p>
                      </div>
                      <div className="flex items-start">
                        <Award className="mt-0.5 mr-2 text-gray-500" size={16} />
                        <p>Certificate of completion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                  <div className="flex space-x-8">
                    {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "pb-4 font-medium capitalize transition-colors",
                          activeTab === tab 
                            ? "border-b-2 border-primary-600 text-primary-600" 
                            : "text-gray-500 hover:text-gray-900"
                        )}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tab Content */}
                <div className="space-y-8">
                  {/* Overview */}
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="heading-sm mb-4">About This Course</h2>
                        <div 
                          className="prose prose-gray max-w-none"
                          dangerouslySetInnerHTML={{ __html: course.fullDescription }}
                        />
                      </div>
                      
                      <div>
                        <h2 className="heading-sm mb-4">What You'll Learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.skills.map((skill, index) => (
                            <div key={index} className="flex">
                              <CheckCircle2 className="mr-2 text-primary-600 shrink-0 mt-0.5" size={18} />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="heading-sm mb-4">Requirements</h2>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Basic computer knowledge</li>
                          {course.level !== 'Beginner' && (
                            <li>Understanding of {course.category === 'Web Development' || course.category === 'Frontend' 
                                ? 'HTML, CSS, and JavaScript fundamentals' 
                                : course.category === 'Data Science' || course.category === 'Artificial Intelligence'
                                ? 'Python basics and some mathematics'
                                : 'programming basics'}
                            </li>
                          )}
                          <li>A computer with {course.category === 'Mobile Development' 
                              ? 'Android Studio or Xcode installed' 
                              : 'internet access and modern web browser'}
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <Button 
                          variant="primary" 
                          size="lg" 
                          onClick={handleStartLearning}
                          className="mt-4"
                        >
                          Start Learning
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Curriculum */}
                  {activeTab === 'curriculum' && (
                    <div>
                      <h2 className="heading-sm mb-4">Course Curriculum</h2>
                      <p className="mb-6 text-gray-600">
                        {course.lessons} lessons • {course.duration} of video content
                      </p>
                      
                      <div className="space-y-4">
                        {course.curriculum.map((section, index) => (
                          <Collapsible 
                            key={index} 
                            open={expandedSection === index}
                            onOpenChange={() => setExpandedSection(expandedSection === index ? null : index)}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <CollapsibleTrigger className="w-full">
                              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                                <div className="text-left">
                                  <h3 className="font-medium">{section.title}</h3>
                                  <p className="text-sm text-gray-500">{section.lessons} lessons • {section.duration}</p>
                                </div>
                                <div className="flex items-center">
                                  <button className="text-primary-600 text-sm font-medium mr-3" onClick={(e) => {
                                    e.stopPropagation();
                                    handleTryPreview();
                                  }}>
                                    Preview
                                  </button>
                                  <ChevronDown 
                                    size={18} 
                                    className={cn(
                                      "text-gray-500 transition-transform duration-200",
                                      expandedSection === index ? "transform rotate-180" : ""
                                    )}
                                  />
                                </div>
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="divide-y divide-gray-100">
                                {/* Generate mock lessons for each section */}
                                {Array.from({ length: Math.min(5, section.lessons) }, (_, i) => (
                                  <div key={i} className="p-4 flex justify-between items-center hover:bg-gray-50">
                                    <div className="flex items-center">
                                      <div className="mr-3">
                                        {i === 0 ? (
                                          <Play size={16} className="text-primary-600" />
                                        ) : (
                                          <LockIcon size={16} className="text-gray-400" />
                                        )}
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-medium">
                                          {i + 1}. {section.title} - Lesson {i + 1}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1">
                                          {Math.floor(10 + Math.random() * 20)}:{Math.floor(10 + Math.random() * 50)} min
                                        </p>
                                      </div>
                                    </div>
                                    {i === 0 ? (
                                      <button 
                                        className="text-xs text-primary-600 font-medium"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          navigate(`/courses/${id}/lessons/${index}-${i}`);
                                        }}
                                      >
                                        Play
                                      </button>
                                    ) : (
                                      <button 
                                        className="text-xs text-primary-600 font-medium"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleTryPreview();
                                        }}
                                      >
                                        Preview
                                      </button>
                                    )}
                                  </div>
                                ))}
                                
                                {section.lessons > 5 && (
                                  <div className="p-4 text-center text-sm text-gray-500">
                                    + {section.lessons - 5} more lessons
                                  </div>
                                )}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Button 
                          variant="primary" 
                          size="lg"
                          onClick={handleStartLearning}
                        >
                          Start Learning
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Instructor */}
                  {activeTab === 'instructor' && (
                    <div>
                      <h2 className="heading-sm mb-4">Instructor</h2>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <span className="text-2xl font-medium text-gray-500">
                              {course.instructor.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">{course.instructor}</h3>
                          <p className="text-gray-500">Course Instructor</p>
                          <div className="mt-2 space-y-2">
                            <p>
                              An experienced educator with expertise in {course.category} 
                              and a passion for teaching practical, job-ready skills.
                            </p>
                            <p>
                              With over 10 years of industry experience, {course.instructor.split(' ')[0]} 
                              has helped thousands of students master complex technical concepts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Reviews */}
                  {activeTab === 'reviews' && (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="heading-sm">Student Reviews</h2>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={18} 
                                className={star <= Math.round(course.rating) 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          <span className="font-medium">{course.rating.toFixed(1)}</span>
                          <span className="text-gray-500 ml-1">({course.students.toLocaleString()} students)</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {[
                          { 
                            name: "Alex Johnson", 
                            rating: 5, 
                            date: "3 months ago",
                            comment: "Excellent course! The instructor explains complex concepts in a way that's easy to understand. I've learned so much and feel confident in my skills now."
                          },
                          { 
                            name: "Samantha Lee", 
                            rating: 4, 
                            date: "1 month ago",
                            comment: "Very informative and well-structured course. The projects were challenging but rewarding. Would recommend to anyone looking to improve their skills."
                          },
                          { 
                            name: "Michael Brown", 
                            rating: 5, 
                            date: "2 weeks ago",
                            comment: "This course exceeded my expectations. The instructor is knowledgeable and responsive to questions. The content is up-to-date and relevant to the industry."
                          }
                        ].map((review, index) => (
                          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-medium">{review.name}</div>
                              <div className="text-gray-500 text-sm">{review.date}</div>
                            </div>
                            <div className="flex mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star}
                                  size={14} 
                                  className={star <= review.rating 
                                    ? "fill-yellow-400 text-yellow-400" 
                                    : "text-gray-300"} 
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-3">Related Courses</h3>
                      <div className="space-y-4">
                        {coursesData
                          .filter(c => c.id !== course.id && c.category === course.category)
                          .slice(0, 3)
                          .map(relatedCourse => (
                            <Link 
                              key={relatedCourse.id} 
                              to={`/courses/${relatedCourse.id}`}
                              className="flex gap-3 group"
                            >
                              <div className="w-16 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={relatedCourse.image} 
                                  alt={relatedCourse.title}
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div>
                                <h4 className="font-medium text-sm group-hover:text-primary-600 transition-colors line-clamp-2">
                                  {relatedCourse.title}
                                </h4>
                                <div className="flex items-center mt-1">
                                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                  <span className="text-xs ml-1">{relatedCourse.rating.toFixed(1)}</span>
                                </div>
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-3">Course Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />

      {/* Course Preview Modal */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-1 hover:bg-black/40 transition-colors">
              <X className="h-5 w-5 text-white" />
            </DialogClose>
          </div>
          
          <div className="w-full">
            <div className="aspect-video bg-black">
              <iframe 
                src={lessonContent.video}
                className="w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Course Preview"
              ></iframe>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1">{course.curriculum[0].title} - Introduction</h2>
              <p className="text-gray-500 text-sm mb-6">10:25 min • Free preview</p>
              
              <Tabs value={activeLessonTab} onValueChange={setActiveLessonTab} className="w-full">
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
                      {lessonContent.resources.map((resource, index) => (
                        <div 
                          key={index}
                          className="flex items-center border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="mr-3 text-gray-500">
                            {resource.type === 'PDF' ? 
                              <BookOpen size={18} /> : 
                              resource.type === 'ZIP' ? 
                              <BarChart size={18} /> : 
                              <ChevronRight size={18} />
                            }
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium text-sm">{resource.name}</p>
                            <p className="text-xs text-gray-500">{resource.type} {resource.size && `• ${resource.size}`}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-primary-600"
                          >
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseDetail;
