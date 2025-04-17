
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { coursesData } from '@/data/courses';
import CourseCard from '@/components/CourseCard';

// Cities data
const cities = [
  { id: 'new-york', name: 'New York' },
  { id: 'san-francisco', name: 'San Francisco' },
  { id: 'chicago', name: 'Chicago' },
  { id: 'los-angeles', name: 'Los Angeles' },
  { id: 'seattle', name: 'Seattle' },
  { id: 'austin', name: 'Austin' },
  { id: 'miami', name: 'Miami' },
  { id: 'denver', name: 'Denver' }
];

const CoursesInCities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCity, setActiveCity] = useState('new-york');

  // Filter courses based on search term
  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Find Courses in Your City
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Discover in-person and hybrid learning opportunities available in cities across the country.
              </p>
              
              <div className="mt-6 max-w-lg mx-auto">
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    placeholder="Search for courses or topics..."
                    className="pr-10 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute right-3 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* City Tabs */}
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <Tabs defaultValue={activeCity} onValueChange={setActiveCity}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Browse by Location</h2>
              <TabsList className="flex overflow-x-auto pb-2 space-x-2">
                {cities.map(city => (
                  <TabsTrigger 
                    key={city.id} 
                    value={city.id}
                    className="px-4 py-2 rounded-full"
                  >
                    {city.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {cities.map(city => (
              <TabsContent key={city.id} value={city.id}>
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Courses Available in {city.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                      <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        instructor={course.instructor}
                        level={course.level as any}
                        duration={course.duration}
                        lessons={course.lessons}
                        rating={course.rating}
                        students={course.students}
                        image={course.image}
                        category={course.category}
                        company={course.company}
                        popular={parseInt(course.id) % 3 === 0}
                      />
                    ))}
                  </div>
                  
                  {/* Local Jobs Section */}
                  <div className="mt-16 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Job Opportunities in {city.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      After completing these courses, you might be interested in these local job opportunities.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3].map(index => (
                        <div 
                          key={index} 
                          className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-primary-700 font-semibold">
                                {['G', 'A', 'M'][index - 1]}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium">
                                {[
                                  'Frontend Developer',
                                  'Data Scientist',
                                  'UX/UI Designer'
                                ][index - 1]}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {[
                                  'Google',
                                  'Amazon',
                                  'Microsoft'
                                ][index - 1]}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {city.name} • Full-time • ${[90, 110, 85][index - 1]}k - ${[120, 150, 110][index - 1]}k
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {[
                              ['React', 'JavaScript', 'TypeScript'],
                              ['Python', 'ML', 'Data Analysis'],
                              ['Figma', 'UX Research', 'UI Design']
                            ][index - 1].map(skill => (
                              <span key={skill} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesInCities;
