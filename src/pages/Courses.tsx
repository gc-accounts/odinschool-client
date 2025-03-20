
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Button from '@/components/Button';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample courses data expanded
const coursesData: CourseProps[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Master the core concepts of JavaScript programming from basics to advanced topics.',
    instructor: 'Sarah Johnson',
    level: 'Beginner',
    duration: '10 hours',
    lessons: 45,
    rating: 4.8,
    students: 12450,
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2000',
    category: 'Web Development',
    popular: true,
  },
  {
    id: '2',
    title: 'React for Professionals',
    description: 'Build modern, responsive web applications with React.js and related ecosystem tools.',
    instructor: 'Michael Chen',
    level: 'Intermediate',
    duration: '15 hours',
    lessons: 60,
    rating: 4.9,
    students: 8325,
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2000',
    category: 'Frontend',
    popular: true,
  },
  {
    id: '3',
    title: 'Python Data Science',
    description: 'Learn to analyze and visualize data using Python and popular data science libraries.',
    instructor: 'Emily Rodriguez',
    level: 'Intermediate',
    duration: '20 hours',
    lessons: 72,
    rating: 4.7,
    students: 9840,
    image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2000',
    category: 'Data Science',
  },
  {
    id: '4',
    title: 'Advanced Machine Learning',
    description: 'Dive deep into ML algorithms, neural networks, and practical applications.',
    instructor: 'David Kim',
    level: 'Advanced',
    duration: '25 hours',
    lessons: 80,
    rating: 4.9,
    students: 5670,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000',
    category: 'Artificial Intelligence',
  },
  {
    id: '5',
    title: 'Full-Stack Web Development',
    description: 'Build complete web applications from front to back end using modern technologies.',
    instructor: 'James Wilson',
    level: 'Intermediate',
    duration: '30 hours',
    lessons: 95,
    rating: 4.8,
    students: 7250,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000',
    category: 'Web Development',
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Create beautiful cross-platform mobile applications with Flutter framework.',
    instructor: 'Sophie Taylor',
    level: 'Intermediate',
    duration: '18 hours',
    lessons: 65,
    rating: 4.6,
    students: 4320,
    image: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?q=80&w=2000',
    category: 'Mobile Development',
  },
  {
    id: '7',
    title: 'NodeJS Backend Development',
    description: 'Build scalable server-side applications with Node.js and Express.',
    instructor: 'Ryan Martinez',
    level: 'Intermediate',
    duration: '16 hours',
    lessons: 58,
    rating: 4.7,
    students: 5890,
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2000',
    category: 'Backend',
  },
  {
    id: '8',
    title: 'Cloud Computing with AWS',
    description: 'Deploy and scale applications using Amazon Web Services infrastructure.',
    instructor: 'Priya Patel',
    level: 'Advanced',
    duration: '22 hours',
    lessons: 75,
    rating: 4.8,
    students: 3950,
    image: 'https://images.unsplash.com/photo-1603695950834-3963cfb7fd5c?q=80&w=2000',
    category: 'DevOps',
  },
  {
    id: '9',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and experience design for digital products.',
    instructor: 'Olivia Taylor',
    level: 'Beginner',
    duration: '12 hours',
    lessons: 48,
    rating: 4.9,
    students: 6780,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000',
    category: 'Design',
  },
];

// Define filter categories
const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'Mobile Development', 'Data Science', 'Artificial Intelligence', 'DevOps', 'Design'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Courses - CodeMaster";
  }, []);
  
  const filteredCourses = coursesData.filter((course) => {
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
            <h1 className="heading-lg mb-4">
              Explore Our <span className="text-primary-600">Courses</span>
            </h1>
            <p className="body-md text-gray-600 max-w-3xl">
              Browse our comprehensive catalog of programming courses designed to take you from beginner to professional developer. Filter by category, level, or search for specific topics.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-grow">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="outline" 
                onClick={toggleFilter}
                icon={<Filter size={16} />}
                className="w-full"
              >
                Filter Courses
              </Button>
            </div>
            
            <div className={cn(
              "md:flex items-center gap-4",
              isFilterOpen ? "block" : "hidden"
            )}>
              <div className="mb-4 md:mb-0">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  id="category"
                  className="w-full md:w-auto py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                <select
                  id="level"
                  className="w-full md:w-auto py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              {isFilterOpen && (
                <button 
                  className="md:hidden mt-4 flex items-center text-sm text-primary-600"
                  onClick={toggleFilter}
                >
                  <X size={16} className="mr-1" />
                  Close Filters
                </button>
              )}
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
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
