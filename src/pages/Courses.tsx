
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Button from '@/components/Button';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCourses } from '@/utils/api/courses';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Sample courses data expanded


// Define filter categories
const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'Mobile Development', 'Data Science', 'Artificial Intelligence', 'DevOps', 'Design'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Courses - CodeMaster";
    const fetchCourses = async () => {
      const courses = await getCourses([], page);
      console.log(courses);
      setCourses(courses);
      setLoading(false);
    }
    fetchCourses();
  }, [page]);
  
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h1 className="heading-lg mb-4 ">
              Explore Our <span className="text-primary-600">Courses</span>
            </h1>
            <p className="body-md text-gray-600 max-w-3xl">
              Browse our comprehensive catalog of programming courses designed to take you from beginner to professional developer. Filter by category, level, or search for specific topics.
            </p>
          </div>
          
          {loading ? (<>
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Loading...</h3>
            </div>
          </>) : filteredCourses.length > 0 ? (
            <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
               
            </div>
            <br />
            <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage(page - 1)} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => setPage(page)} isActive>{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setPage(page + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
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
