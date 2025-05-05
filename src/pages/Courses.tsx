
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
    title: 'Data Science Course',
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
    title: 'Power BI Certification Course',
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
    title: 'Certification Program in Data Science and Machine Learning',
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
    title: 'Certification Program in Applied Generative AI',
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
    title: 'Data Analyst College Program',
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
            <h1 className="heading-lg mb-4 ">
              Explore Our <span className="text-primary-600">Courses</span>
            </h1>
            <p className="body-md text-gray-600 max-w-3xl">
              Browse our comprehensive catalog of programming courses designed to take you from beginner to professional developer. Filter by category, level, or search for specific topics.
            </p>
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
