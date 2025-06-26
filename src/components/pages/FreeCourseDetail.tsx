'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components/ui/tabs";
import { Button } from "@/components/components/ui/button";
import { Card, CardContent } from "@/components/components/ui/card";
import { BookOpen, Download, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { getLearningHubCourse } from '@/components/utils/api/learning_hub';
import Markdown from '@/components/components/Markdown';
import { useRouter } from 'next/navigation';
import MetaTags from '@/components/components/MetaTags';


interface FreeCourseDetailProps {
  courseId: string;
  initialCourse?: any;
  lessonId?: string;
}

const FreeCourseDetail = ({
  courseId: csId,
  initialCourse,
  lessonId
}: FreeCourseDetailProps) => {
  const params = useParams();
  const router = useRouter();
  const courseId = csId || params?.id as string;
  const [activeLesson, setActiveLesson] = useState(lessonId || '');
  const [course, setCourse] = useState<any>(initialCourse || null);
  const [loading, setLoading] = useState(!initialCourse);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchCourse = async () => {
      if (initialCourse) return;
      setLoading(true);
      const res: any = await getLearningHubCourse("", courseId);
      setCourse(res);
      setActiveLesson(res.modules[0].id);
      setLoading(false);
    }
    fetchCourse();
  }, [courseId, initialCourse]);


  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }



  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Course not found</h1>
            <p className="mt-2 mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/learning-hub">Return to Learning Hub</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentLessonIndex = course.modules.findIndex((lesson: any) => lesson.slug === activeLesson);
  const currentLesson = course.modules[currentLessonIndex];
  const hasPrevious = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < course.modules.length - 1;

  const handlePreviousLesson = () => {
    if (hasPrevious) {
      setActiveLesson(course.modules[currentLessonIndex - 1].slug);
      window.scrollTo(0, 0);
    }
  };

  const handleNextLesson = () => {
    if (hasNext) {
      setActiveLesson(course.modules[currentLessonIndex + 1].slug);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-gradient-to-b from-primary-50 to-white pt-12 pb-6">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-2 flex items-center text-sm">
                <a href="/learning-hub" className="text-primary-600 hover:underline">Learning Hub</a>
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                <span className="text-gray-600">{course.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl  mb-3 text-gray-900">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                {course.description}
              </p>
              <div className="mt-4 flex items-center">
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                  {course.level}
                </span>
                <span className="ml-4 flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.modules.length} lessons
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="content" className="space-y-4">


                <TabsContent value="content" className="space-y-6">
                  {/* Lesson Selection */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Lessons</h3>
                        <span className="text-sm text-gray-500">
                          {currentLessonIndex + 1} of {course.modules.length}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {course.modules.map((lesson: any, index: number) => (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              router.push(`/learning-hub/${courseId}/${lesson.slug}`);
                            }}
                            className={`w-full text-left p-3 rounded-md flex items-center ${activeLesson === lesson.slug
                              ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600'
                              : 'hover:bg-gray-50'
                              }`}
                          >
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-800 text-sm mr-3">
                              {index + 1}
                            </span>
                            <span className="font-medium">{lesson.title}</span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Lesson Content */}
                  {currentLesson && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">{currentLesson.title}</h2>
                      <div className="prose prose-sm" style={{

                      }}>
                        <p>{currentLesson.description}</p>
                        <br />

                        {currentLesson?.isYoutube && currentLesson?.video ? (
                          <div className="relative aspect-video">
                            <iframe src={`https://www.youtube.com/embed/${currentLesson.video}`} className="w-full h-full" allowFullScreen></iframe>
                          </div>
                        ) : currentLesson?.video ? (
                          <video src={currentLesson.video} className="w-full h-full" controls></video>
                        ) : (
                          <></>
                        )}

                        {currentLesson.is_rich_text_markdown ? <Markdown markdown={currentLesson.rich_description} /> : (
                          <div
                            className="reset-post-content"
                            dangerouslySetInnerHTML={{ __html: currentLesson.rich_description }}
                          >

                          </div>
                        )}
                      </div>

                      <div className="mt-8 pt-6 border-t flex justify-between">
                        <Button
                          variant="outline"
                          onClick={handlePreviousLesson}
                          disabled={!hasPrevious}
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous Lesson
                        </Button>

                        <Button
                          onClick={handleNextLesson}
                          disabled={!hasNext}
                        >
                          Next Lesson
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>


              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeCourseDetail;
