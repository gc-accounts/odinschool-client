import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { getCities } from '@/utils/api/city';
import { getCourses } from '@/utils/api/courses';
import { citySchema } from '@/utils/api/schema/cities';

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
  const [cities, setCities] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [coursesLoading, setCoursesLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      const cities = await getCities(1, 15);
      setCities([...cities]);
      setLoading(false);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      setCoursesLoading(true);
      setCourses([]); // Clear existing courses while loading
      try {
        const courses = await getCourses([], 1, activeCity);
        setCourses([...courses]);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourses([]);
      } finally {
        setCoursesLoading(false);
      }
    };
    fetchCourses();
  }, [activeCity]);

  // Filter courses based on search term
  const filteredCourses = useMemo(() => 
    courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    ), 
    [courses, searchTerm]
  );

  const handleCityChange = (cityName: string) => {
    setActiveCity(cityName);
  };

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
          <Tabs defaultValue={activeCity} onValueChange={handleCityChange}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Browse by Location</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 bg-gray-200 rounded-full w-24"></div>
                  ))}
                </div>
              ) : (
                <TabsList className="flex overflow-x-auto pb-2 space-x-2">
                  {cities.map(city => (
                    <TabsTrigger 
                      key={city.id} 
                      value={city.name}
                      className="px-4 py-2 rounded-full"
                    >
                      {city.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              )}
            </div>
            
            {/* Active City Info Section */}
            {!loading && (
              <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {activeCity}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {coursesLoading ? "Loading courses..." : `Discover top-rated courses and learning opportunities in ${activeCity}`}
                    </p>
                  </div>
                  {!coursesLoading && (
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          {filteredCourses.length}
                        </div>
                        <div className="text-sm text-gray-600">Available Courses</div>
                      </div>
                      <div className="h-12 w-px bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          {filteredCourses.filter(course => course.popular).length}
                        </div>
                        <div className="text-sm text-gray-600">Popular Courses</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <TabsContent value={activeCity}>
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Courses Available in {activeCity}
                </h3>
                
                {coursesLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                ) : filteredCourses.length > 0 ? (
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
                        documentId={course.id}
                        enrolled_avatars={[]}
                        total_enrolled={course.students}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No courses found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesInCities;
