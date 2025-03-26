import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '@/data/courses';
import { ArrowLeft, Clock, BarChart, Users, Star, FileText, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Fix the course type to not expect reviews
interface CourseReview {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<ReturnType<typeof getCourseById>>(null);
  
  // This is a mock data for reviews since it doesn't exist in the course data
  const [reviews] = useState<CourseReview[]>([
    {
      id: 1,
      name: "Jane Cooper",
      date: "2 months ago",
      rating: 5,
      comment: "This course exceeded my expectations. The instructor's teaching style made complex concepts easy to understand. I'm now able to build full-stack applications with confidence!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Devon Lane",
      date: "1 month ago",
      rating: 4,
      comment: "Great course with practical examples. I would have liked more advanced topics toward the end, but overall it's a solid foundation for beginners.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&auto=format&fit=crop"
    }
  ]);

  useEffect(() => {
    if (id) {
      const courseData = getCourseById(id);
      setCourse(courseData);
      
      // Set page title
      document.title = courseData ? `${courseData.title} | CodeMaster` : 'Course Not Found | CodeMaster';
    }
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">We couldn't find the course you're looking for.</p>
            <Link to="/courses">
              <Button>Browse All Courses</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const calculateAverageRating = () => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/courses" className="inline-flex items-center mb-6 text-primary-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Courses
          </Link>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h1 className="heading-lg mb-4">{course.title}</h1>
              <p className="body-lg text-gray-700 mb-6">{course.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-gray-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-gray-500" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-gray-500" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-yellow-400" />
                    <span>{averageRating.toFixed(1)} ({reviews.length} Reviews)</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="heading-md mb-3">What you'll learn</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="mb-1">{objective}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-md mb-3">Course Content</h2>
                <ul className="space-y-3">
                  {course.lessons.map((lesson) => (
                    <li key={lesson.id} className="border rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <Link to={`/courses/${id}/lessons/${lesson.id}`} className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <FileText className="mr-3 h-5 w-5 text-gray-500" />
                          <span>{lesson.title}</span>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="heading-md mb-4">Reviews</h2>
              {reviews.map((review) => (
                <div key={review.id} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-start mb-2">
                    <img src={review.avatar} alt={review.name} className="rounded-full w-10 h-10 mr-3" />
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="font-semibold mr-2">{review.name}</h3>
                        <div className="flex text-yellow-400">
                          {Array.from({ length: review.rating }).map((_, index) => (
                            <Star key={index} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
