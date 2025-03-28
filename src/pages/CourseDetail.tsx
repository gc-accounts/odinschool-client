
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft, Clock, BarChart, Award, CheckCircle2, 
  Download, FileText, Users, Zap, Gift, BookOpen, 
  Briefcase, Star, PlayCircle, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getCourseById } from '@/data/courses';

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CodeMaster - Course Detail";

    const fetchCourse = async () => {
      const courseData = getCourseById(id);
      setCourse(courseData);
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div>Loading course details...</div>
        </main>
        <Footer />
      </>
    );
  }

  const courseHighlights = [
    { icon: <PlayCircle className="h-5 w-5 text-primary-600" />, text: "Live Online Classes" },
    { icon: <MessageSquare className="h-5 w-5 text-primary-600" />, text: "Live Doubt Clearing Sessions" },
    { icon: <FileText className="h-5 w-5 text-primary-600" />, text: "10+ Projects" },
    { icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />, text: "230+ Assignments" },
    { icon: <Users className="h-5 w-5 text-primary-600" />, text: "Community Access" },
    { icon: <Award className="h-5 w-5 text-primary-600" />, text: "Industry Recognized Certificate" },
  ];

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

  const jobListings = [
    {
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$80,000 - $100,000",
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      title: "Full Stack Engineer",
      company: "InnovateSoft",
      location: "New York, NY",
      salary: "$95,000 - $120,000",
      skills: ["JavaScript", "Node.js", "MongoDB"]
    },
    {
      title: "JavaScript Developer",
      company: "WebSolutions",
      location: "San Francisco, CA",
      salary: "$90,000 - $110,000",
      skills: ["JavaScript", "Vue.js", "REST APIs"]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-16">
        <div className="bg-primary-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <Link to="/courses" className="text-primary-600 hover:underline flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Courses
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="heading-xl mb-4">{course.title}</h1>
                <p className="text-gray-700 body-lg mb-6">{course.description}</p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary">{course.level}</Badge>
                  {course.sale && <Badge className="bg-green-600">Sale</Badge>}
                  {course.certificate && <Badge className="bg-blue-600">Certificate</Badge>}
                </div>
              </div>
              <img src={course.image} alt={course.title} className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        {/* Course Highlights Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Course Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {courseHighlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex items-start">
                  <div className="mr-4">{highlight.icon}</div>
                  <span className="font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-6 bg-gray-100">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="certificate">Certificate</TabsTrigger>
                  <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">About This Course</h3>
                    <p className="text-gray-700">
                      {course?.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course?.learningObjectives?.map((objective, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                          <p className="text-gray-700">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">Prerequisites</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {course?.prerequisites?.map((prerequisite, index) => (
                        <li key={index}>{prerequisite}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum">
                  <h3 className="text-xl font-bold mb-4">Course Curriculum</h3>
                  <ul className="space-y-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <li key={i} className="bg-white rounded-lg shadow-md p-4">
                        <h4 className="font-semibold">Lesson {i + 1}: Introduction to ...</h4>
                        <p className="text-gray-600">Brief description of the lesson content.</p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>15 minutes</span>
                          </div>
                          <Button variant="outline">Start Lesson</Button>
                        </div>
                      </li>
                    ))}
                  </ul>
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

                <TabsContent value="instructor">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&w=800" alt={course.instructor} />
                      <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{course.instructor}</h3>
                      <p className="text-gray-600">Senior Developer at {course.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-6">
                    {course.instructor} is a senior developer with over 10 years of experience. She has worked at {course.company} for the past 5 years and is passionate about teaching others how to code.
                  </p>
                </TabsContent>

                <TabsContent value="certificate">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Course Certificate</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="relative aspect-[16/12] mb-4">
                          <img
                            src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                            alt="Certificate Sample"
                            className="rounded-lg border-4 border-gray-200 shadow-lg w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-lg"></div>
                        </div>
                        <Button className="w-full">Preview Certificate</Button>
                      </div>
                      <div className="space-y-4">
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
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="jobs">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Job Opportunities</h3>
                    <p className="text-gray-700 mb-6">
                      After completing this course, you'll be qualified for the following job positions:
                    </p>
                    <div className="space-y-4">
                      {jobListings.map((job, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <div>
                                <CardTitle className="text-lg">{job.title}</CardTitle>
                                <CardDescription className="mt-1">{job.company} · {job.location}</CardDescription>
                              </div>
                              <Button variant="outline" size="sm" className="h-8">
                                <Briefcase className="h-4 w-4 mr-2" />
                                Apply
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-gray-600">
                                <Star className="h-4 w-4 mr-1 text-amber-500" />
                                <span className="mr-4">Salary: {job.salary}</span>
                              </div>
                              <div>
                                <div className="flex flex-wrap gap-2">
                                  {job.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="outline" className="font-normal">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="flex justify-center mt-6">
                      <Button variant="default">
                        <Briefcase className="h-4 w-4 mr-2" />
                        View More Job Opportunities
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <h3 className="text-xl font-bold mb-4">Student Reviews</h3>
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&w=800" alt="Student" />
                          <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-semibold">Student Name</p>
                          <div className="flex items-center text-amber-400">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This course was amazing! I learned so much and would highly recommend it to anyone looking to learn more about web development.
                      </p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Course Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Duration</span>
                    </div>
                    <span>{course.duration}</span>
                  </div>
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
                <h3 className="text-xl font-bold mb-4">Enroll Now</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold">${course.price}</span>
                  {course.sale && <span className="text-gray-500 line-through ml-2">${course.salePrice}</span>}
                </div>
                <Button className="w-full">Enroll Now</Button>
                <Button variant="link" className="w-full mt-2">Add to Wishlist</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseDetail;
