import React, { useState, useEffect } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import CourseCard, { CourseProps } from '@/components/components/CourseCard';
import Button from '@/components/components/Button';
import { Loader2 } from 'lucide-react';
import { getCourses } from '@/components/utils/api/courses';
import PaginationComponent from '@/components/components/PaginationComponent';

const COURSES_PER_PAGE = 3;

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
    document.title = "Courses - CodeMaster";
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
            <div className="grid place-items-center h-full">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          ) : currentCourses.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
              <br />
              <PaginationComponent currentPage={page} setCurrentPage={setPage1} totalPages={totalPages} />
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
