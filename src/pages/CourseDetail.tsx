import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
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

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-6 bg-gray-100">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
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
                    {course.instructor} is a senior developer with over 10 years of experience. He has worked at Google for the past 5 years and is passionate about teaching others how to code.
                  </p>
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
                              <Award key={i} className="h-4 w-4 fill-current" />
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
                      <Award className="h-5 w-5 mr-2 text-gray-500" />
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
