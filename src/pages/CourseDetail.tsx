import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseById } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobOpportunities from '@/components/JobOpportunities';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, Clock, BarChart, Award, CheckCircle2, 
  Download, FileText, Users, Zap, Gift, BookOpen, 
  Briefcase, Star, PlayCircle, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import PlatformComparison from '@/components/PlatformComparison';
import JobsSection from '@/components/JobsSection';
import CertificationSection from '@/components/CertificationSection';
import ToolsSection from '@/components/ToolsSection';
import Testimonials from '@/components/Testimonials';
import OrganizationLogos from '@/components/OrganizationLogos';
import InstructorProfile from '@/components/InstructorProfile';
import CollegeSpotlight from '@/components/CollegeSpotlight';

const sectionConfig: {
  [key: string]: (() => JSX.Element)[];
} = {
  "1": [
    () => <OrganizationLogos />,
    () => <Testimonials />,
    () => <JobsSection />,
    () => <ToolsSection />,
    () => <CertificationSection />,
    () => <PlatformComparison />,
    () => <InstructorProfile />,
  ],
  "2": [
    () => <CertificationSection />,
    () => <Testimonials />,
    () => <InstructorProfile />,
  ],
  "3": [
    () => <ToolsSection />,
    () => <CertificationSection />,
    () => <InstructorProfile />,
  ],
  "4": [
    () => <Testimonials />,
    () => <CertificationSection />,
    () => <PlatformComparison />,
    () => <ToolsSection />,
    () => <CollegeSpotlight />,
  ],
  "5": [
    () => <ToolsSection />,
    () => <JobsSection />,
    () => <OrganizationLogos />,
    () => <InstructorProfile />,
  ],
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || '');
  const sectionsToRender = sectionConfig[id];

  if (!course) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Course not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const courseProjects = [
    {
      title: "E-commerce Dashboard",
      description: "Build a fully functional admin dashboard for an e-commerce platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&w=800",
      free: false
    },
    {
      title: "Social Media App",
      description: "Create a responsive social networking application with real-time features.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&w=800",
      free: false
    },
    {
      title: "Weather Dashboard",
      description: "A simple weather application consuming API data with beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&w=800",
      free: true
    }
  ];



  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 py-8">
        <div className="flex items-center ">
              <Link to="/courses" className="text-primary-600 hover:underline flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Courses
              </Link>
            </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-6xl">{course.title}</h1>
              <div className="flex items-center space-x-4 mt-4">
                  <Badge variant="secondary">{course.level}</Badge>
                  {course.sale && <Badge className="bg-green-600">Sale</Badge>}
                  {course.certificate && <Badge className="bg-blue-600">Certificate</Badge>}
                </div>
              <p className="mt-4 text-lg text-gray-600">{course.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">Talk to an Expert</Button>
              </div>
                    <div className=" pt-4">
                      <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-10">
                        
                      
                          <div className="flex items-center mt-2 gap-3">
                            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79" alt="Logo 1" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1" />
                            <img src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82" alt="Logo 2" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="Logo 3" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Logo 4" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                            <span className=" text-sm">Join 10K+ students</span>
                          </div>
                        

                        <div>
                          <div className="flex items-center mt-2 gap-2">
                            <div className="flex text-yellow-400 space-x-1">
                              <Star fill="currentColor" size={16} />
                              <Star fill="currentColor" size={16} />
                              <Star fill="currentColor" size={16} />
                              <Star fill="currentColor" size={16} />
                              <Star fill="currentColor" size={16} />
                            </div>
                            <span className="text-sm ">4.9/5</span>
                              <a href="#ratings" className="text-sm underline hover:text-primary">
                                (4859 ratings)
                              </a>
                          </div>
                        </div>

                      </div>
                    </div>

            </div>
            <div className="rounded-xl overflow-hidden ">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certificate">Certificate</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <div className="prose max-w-none">
                  <p>{course.fullDescription || course.description}</p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {course.learningObjectives?.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{objective}</span>
                      </li>
                    )) || (
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Master {course.title} concepts and techniques</span>
                      </li>
                    )}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites?.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{prerequisite}</span>
                      </li>
                    )) || (
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Basic understanding of the subject</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum?.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                    <h3 className="font-medium">{section.title}</h3>
                    <div className="text-sm text-gray-500">
                      {section.lessons} lessons • {section.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">
                      This section covers key concepts and practical applications related to {section.title.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )) || (
                <div className="text-gray-600">
                  <p>This course includes {course.lessons} comprehensive lessons covering all aspects of {course.title}.</p>
                  <p className="mt-4">Total course duration: {course.duration}</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="projects">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Course Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {courseProjects.map((project, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-lg">{project.title}</CardTitle>
                              {project.free && (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  <Gift className="h-3 w-3 mr-1" />
                                  Free
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{project.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              variant={project.free ? "default" : "outline"} 
                              className="w-full"
                              size="sm"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              {project.free ? 'Download Now' : 'Access with Course'}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-10">
                      <h3 className="text-xl font-bold mb-4">Free Resources</h3>
                      <Card>
                        <CardHeader>
                          <CardTitle>Starter Project Templates</CardTitle>
                          <CardDescription>
                            Download these free project templates to jump-start your learning
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex p-3 border rounded-lg">
                            <FileText className="h-10 w-10 text-primary-600 mr-3" />
                            <div>
                              <h4 className="font-medium">HTML/CSS Template</h4>
                              <Button variant="link" className="h-auto p-0 text-primary-600">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                          <div className="flex p-3 border rounded-lg">
                            <FileText className="h-10 w-10 text-primary-600 mr-3" />
                            <div>
                              <h4 className="font-medium">JavaScript Starter</h4>
                              <Button variant="link" className="h-auto p-0 text-primary-600">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="certificate">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-4">Course Certificate</h3>
                    <div className="grid grid-cols-1 md:grid-row-2 gap-8">
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg">Industry-Recognized Certification</h4>
                        <p className="text-gray-700">
                          Upon successful completion of the course, you'll receive a verified certificate that you can share with potential employers and on your LinkedIn profile.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-600 mt-1" size={18} />
                            <p>Accredited by leading industry partners</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-600 mt-1" size={18} />
                            <p>Verifiable through unique certificate ID</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-600 mt-1" size={18} />
                            <p>Showcase your skills to potential employers</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-600 mt-1" size={18} />
                            <p>Lifetime access to your certificate</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[16/12] mb-4">
                          <img
                            src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                            alt="Certificate Sample"
                            className="rounded-lg border-2 border-gray-200 shadow-lg w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative aspect-[16/12] mb-4">
                          <img
                            src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                            alt="Certificate Sample"
                            className="rounded-lg border-2 border-gray-200 shadow-lg w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
          
        </Tabs>
      </div>
              <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Course Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Lessons</span>
                    </div>
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Rating</span>
                    </div>
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Students</span>
                    </div>
                    <span>{course.students}</span>
                  </div>
                </div>
                <Progress value={75} className="mt-4" />
                <p className="text-sm text-gray-500 mt-2">75% completed</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Register Now</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold">₹{course.salePrice}+ GST</span>
                  {course.sale && <span className="text-gray-500 line-through ml-2">${course.salePrice}</span>}
                </div>
               
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {course.skills?.map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {skill}
                        </span>
                      )) || course.tags?.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xs text-gray-500 font-regular mb-4">By providing your contact details, you agree to our Privacy Policy</h3>
                  
                <Button className="w-full">Enroll Now</Button>
                <Button variant="link" className="w-full mt-2">Reserve your seat at ₹5000 + GST</Button>
                <h3 className="text-xs text-gray-500 font-regular italic mb-4 mt-4 border border-gray-300 rounded-md p-1.5">No cost EMIs start at ₹7867 per month. 3,6,9,12 months EMI option available.</h3>
              </div>
            </div>
            </div>
            </div>

        <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="space-y-12 px-4 py-8 w-full">
            {sectionsToRender ? (
              sectionsToRender.map((Section, index) => (
              <div key={index}>
                <Section />
              </div>
            ))
          ) : (
            <div className="text-red-600">No sections configured for course ID: {id}</div>
          )}
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
