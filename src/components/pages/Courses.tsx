'use client'
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import Button from '@/components/components/Button';
import { getCourses } from '@/components/utils/api/courses';
import type { CourseProps } from '@/components/components/CourseCard';

// Lazy load components
const CourseCard = lazy(() => import('@/components/components/CourseCard'));
const PaginationComponent = lazy(() => import('@/components/components/PaginationComponent'));

// Loading fallback components
const CourseCardSkeleton = () => (
  <div className="border rounded-lg overflow-hidden animate-pulse">
    <div className="aspect-video bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded w-24" />
        <div className="h-8 bg-gray-200 rounded w-24" />
      </div>
    </div>
  </div>
);

const PaginationSkeleton = () => (
  <div className="flex justify-center items-center space-x-2 animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i} className="h-8 w-8 bg-gray-200 rounded" />
    ))}
  </div>
);

const COURSES_PER_PAGE = 8;

const Courses = () => {
  const [searchTerm, setSearchTerm1] = useState('');
  const [selectedCategory, setSelectedCategory1] = useState('');
  const [selectedLevel, setSelectedLevel1] = useState('');
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage1] = useState(1);

  const setSearchTerm = (term: string) => {
    setPage1(1);
    setSearchTerm1(term);
  };

  const setSelectedCategory = (category: string) => {
    setPage1(1);
    setSelectedCategory1(category);
  };

  const setSelectedLevel = (level: string) => {
    setPage1(1);
    setSelectedLevel1(level);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCourses = async () => {
      const allCourses = await getCourses({ pageNumber: 1, search: searchTerm, category: selectedCategory, level: selectedLevel });
      setCourses(allCourses);
      setLoading(false);
    };
    fetchCourses();
  }, [searchTerm, selectedCategory, selectedLevel]);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const currentCourses = courses.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="mb-8 md:mb-12">
            <h1 className="heading-lg mb-4">
              Explore OdinSchool's <span className="text-primary-600">Diverse Learning Programs</span>
            </h1>
            <p className="body-md text-gray-600 max-w-3xl">
              Designed to help you crack great jobs in emerging technologies and in-demand areas.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          ) : currentCourses.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <Suspense fallback={
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <CourseCardSkeleton key={i} />
                    ))}
                  </div>
                }>
                  {currentCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </Suspense>
              </div>
              <br />
              <Suspense fallback={<PaginationSkeleton />}>
                <PaginationComponent currentPage={page} setCurrentPage={setPage1} totalPages={totalPages} />
              </Suspense>
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedLevel('All Levels');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
