
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import CourseCard, { CourseProps } from '@/components/components/CourseCard';
import Button from '@/components/components/Button';
import { Search, Filter, X, Loader2 } from 'lucide-react';
import { cn } from '@/components/lib/utils';
import { getCourses } from '@/components/utils/api/courses';
import PaginationComponent from '@/components/components/PaginationComponent';

// Sample courses data expanded


// Define filter categories
const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'Mobile Development', 'Data Science', 'Artificial Intelligence', 'DevOps', 'Design'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const [searchTerm, setSearchTerm1] = useState('');
  const [selectedCategory, setSelectedCategory1] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage1] = useState(1);

  const setSearchTerm = (searchTerm: string) => {
    setLoading(true);
    setSearchTerm1(searchTerm);
  }

  const setPage = (page: number) => {
    setLoading(true);
    setPage1(page);
  }

  const setSelectedCategory = (category: string) => {
    setLoading(true);
    setSelectedCategory1(category);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Courses - CodeMaster";
    const fetchCourses = async () => {
      const courses = await getCourses({ pageNumber: page, search: searchTerm, category: selectedCategory, level: selectedLevel });
      console.log(courses);
      setCourses(courses);
      setLoading(false);
    }
    fetchCourses();
  }, [page, searchTerm, selectedCategory, selectedLevel]);

  const filteredCourses = courses

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="mb-8 md:mb-12">
            <h1 className="heading-lg mb-4 ">


              Explore OdinSchool's <span className="text-primary-600">Diverse Learning Programs</span>
            </h1>
            <p className="body-md text-gray-600 max-w-3xl">
              Discover flexible, expert-led programs designed to equip you with the practical skills and confidence to thrive in today's fast-paced tech industry.
            </p>
          </div>

          {loading ? (<>
            <div className="grid place-items-center h-full">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          </>) : filteredCourses.length > 0 ? (
            <div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}

              </div>
              <br />
              <PaginationComponent currentPage={page} setCurrentPage={setPage} totalPages={undefined} />
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
