
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, ArrowRight, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getLearningHubCourses } from '@/utils/api/learning_hub';
import PaginationComponent from '@/components/PaginationComponent';
// Sample free courses data


const LearningHub = () => {
  const [learningHub, setLearningHub] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getLearningHubCourses({
      pageNumber: pageNumber,
    }).then((res) => {
      setLoading(true);
      setLearningHub([
        ...res
      ]);
      setLoading(false);
    });
  }, [pageNumber]);
  const getTotalLessons = (course: any) => {
    return course.modules?.length
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {loading ? (
        <div className="grid place-items-center h-screen">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
      ) : (<main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">
                Learning Hub
              </h1>
              <p className="text-lg md:text-xl text-gray-600 ">
                An extensive resource library to support you on your upskilling and professional development journey ahead.
              </p>
            </div>
          </div>
        </section>

        {/* Free Courses Section */}
        {learningHub?.length > 0 ? (
          <section className=" py-16 bg-white">
            <div className="container">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {learningHub?.map((course: any) => (<Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video bg-gray-100 relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      {course.level}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.overview}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-primary-600" />
                        <span>{getTotalLessons(course)} lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-primary-600" />
                        <span>{course.total_enrolled}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/learning-hub/${course.documentId}`} className="w-full">
                      <Button variant="default" className="w-full">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>))}
              </div>
            </div>
            <PaginationComponent currentPage={pageNumber} setCurrentPage={setPageNumber} totalPages={learningHub?.length} />
          </section>
        ) : (
          <div className="grid place-items-center h-screen">
            <p>No courses found</p>
          </div>
        )}

      </main>)}
      <Footer />
    </div>
  );
};

export default LearningHub;
