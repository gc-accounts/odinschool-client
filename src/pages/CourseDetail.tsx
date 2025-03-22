
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Award, BookOpen, CheckCircle, ChevronRight, Star, StarHalf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { courses } from '@/data/courses';
import { lessons } from '@/data/lessons';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(course => course.id === id);
  const courseLessons = lessons.filter(lesson => lesson.courseId === id);
  
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course not found</h1>
            <Button asChild>
              <Link to="/courses">Back to Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-primary-700 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg mb-6">{course.description}</p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <StarHalf className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-white">{course.rating} ({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-2xl font-bold">${course.price.toFixed(2)}</p>
                  <Button size="lg" asChild>
                    <Link to={`/course-checkout/${course.id}`}>Enroll Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to={`/course-checkout-certificate/${course.id}`}>
                      Enroll with Certificate
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-10">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-10 w-10 text-primary-600 mr-4" />
                      <div>
                        <h3 className="font-bold">Course Content</h3>
                        <p className="text-gray-600">{courseLessons.length} lessons</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Comprehensive curriculum designed by industry experts to ensure you master key concepts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="h-10 w-10 text-primary-600 mr-4" />
                      <div>
                        <h3 className="font-bold">Duration</h3>
                        <p className="text-gray-600">{course.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Self-paced learning with lifetime access to all course materials and future updates.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-10 w-10 text-primary-600 mr-4" />
                      <div>
                        <h3 className="font-bold">Certificate</h3>
                        <p className="text-gray-600">Available upon completion</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Earn a verified certificate to showcase your skills to employers and enhance your resume.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <div className="prose max-w-none">
                  <p>
                    {course.description} This comprehensive course is designed to take you from beginner to professional, 
                    with practical exercises and real-world projects that will help you build a solid portfolio.
                  </p>
                  <p>
                    Whether you're looking to start a new career, upgrade your skills, or pursue a hobby, 
                    this course provides all the tools and knowledge you need to succeed.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index}>{prerequisite}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              
              <div className="space-y-4">
                {courseLessons.map((lesson, index) => (
                  <Card key={lesson.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                        <div className="flex items-start">
                          <div className="bg-primary-100 text-primary-800 rounded-full h-8 w-8 flex items-center justify-center font-semibold mr-3">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-medium">{lesson.title}</h3>
                            <p className="text-sm text-gray-500">{lesson.duration}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/courses/${id}/lessons/${lesson.id}`} className="flex items-center">
                            Preview
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instructor" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt={course.instructor} 
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{course.instructor}</h3>
                  <p className="text-gray-500 mb-4">Senior Developer & Educator</p>
                  <div className="prose max-w-none">
                    <p>
                      With over 10 years of industry experience, {course.instructor} has worked with leading 
                      technology companies and has taught thousands of students worldwide. Specializing in 
                      {course.title.toLowerCase()}, they bring real-world insights and practical knowledge 
                      to help you succeed in your learning journey.
                    </p>
                    <p>
                      Their teaching approach focuses on hands-on projects and practical applications, 
                      ensuring that you not only understand the concepts but can apply them in real-world scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Student Reviews</h2>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <StarHalf className="h-6 w-6 text-yellow-400 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-xl">{course.rating}</span>
                    <span className="text-gray-600 ml-1">({course.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[1, 2, 3].map((_, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <img 
                          src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${20 + index}.jpg`} 
                          alt="Reviewer" 
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="flex items-center mb-2">
                            <h4 className="font-semibold mr-2">
                              {index % 2 === 0 ? 'Sarah Johnson' : 'Michael Chen'}
                            </h4>
                            <span className="text-gray-500 text-sm">
                              {index === 0 ? '2 weeks ago' : index === 1 ? '1 month ago' : '3 months ago'}
                            </span>
                          </div>
                          <div className="flex mb-3">
                            {Array(5).fill(0).map((_, starIndex) => (
                              <Star 
                                key={starIndex} 
                                className={`h-4 w-4 ${starIndex < 5 - index % 2 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">
                            {index === 0 
                              ? `This course exceeded my expectations. The content is well-structured and the instructor explains complex concepts in a way that's easy to understand. I've already started applying what I've learned in my daily work.` 
                              : index === 1 
                                ? `Great course with lots of practical examples. I particularly enjoyed the hands-on projects which helped solidify my understanding. The instructor is knowledgeable and responsive to questions.` 
                                : `Comprehensive coverage of the topic with clear explanations. The course materials are excellent and the instructor's teaching style is engaging. Highly recommended for anyone looking to master ${course.title.toLowerCase()}.`
                            }
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-primary-50 rounded-lg p-8 mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to start learning?</h2>
                <p className="text-gray-600">Enroll now to get access to all course materials and start your journey.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to={`/course-checkout/${course.id}`}>Enroll Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to={`/course-checkout-certificate/${course.id}`}>
                    Enroll with Certificate
                  </Link>
                </Button>
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
