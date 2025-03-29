
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample free courses data
const freeCourses = [
  {
    id: 'free-html-basics',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web development with this introductory HTML course.',
    lessons: 5,
    duration: '2 hours',
    students: 1245,
    level: 'Beginner',
    image: '/placeholder.svg'
  },
  {
    id: 'free-css-basics',
    title: 'CSS for Beginners',
    description: 'Master the basics of styling web pages with CSS in this beginner-friendly course.',
    lessons: 7,
    duration: '3 hours',
    students: 982,
    level: 'Beginner',
    image: '/placeholder.svg'
  },
  {
    id: 'free-js-intro',
    title: 'JavaScript Basics',
    description: 'Get started with JavaScript programming and learn the fundamentals of web interactivity.',
    lessons: 8,
    duration: '4 hours',
    students: 1568,
    level: 'Beginner',
    image: '/placeholder.svg'
  },
  {
    id: 'free-git-basics',
    title: 'Git Essentials',
    description: 'Learn version control with Git and understand how to manage your code effectively.',
    lessons: 6,
    duration: '2.5 hours',
    students: 753,
    level: 'Beginner',
    image: '/placeholder.svg'
  },
  {
    id: 'free-python-intro',
    title: 'Python Fundamentals',
    description: 'Start your programming journey with Python, a versatile and beginner-friendly language.',
    lessons: 10,
    duration: '5 hours',
    students: 2134,
    level: 'Beginner',
    image: '/placeholder.svg'
  },
  {
    id: 'free-web-accessibility',
    title: 'Web Accessibility',
    description: 'Learn how to make your websites accessible to everyone, including people with disabilities.',
    lessons: 4,
    duration: '1.5 hours',
    students: 421,
    level: 'Intermediate',
    image: '/placeholder.svg'
  }
];

const LearningHub = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Learning Hub - Free Courses to Learn Coding Fundamentals";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">
                Learning Hub
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Free resources and courses to help you get started with coding and level up your skills.
              </p>
              <p className="text-gray-600 mb-6">
                Browse our collection of free courses covering HTML, CSS, JavaScript, and more. 
                Designed for beginners, these courses will help you build a strong foundation in web development.
              </p>
            </div>
          </div>
        </section>

        {/* Free Courses Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900">
                Free Courses
              </h2>
              <p className="text-gray-600 mt-2">
                Start learning with these free beginner-friendly courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {freeCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
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
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-primary-600" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-primary-600" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-primary-600" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/learning-hub/${course.id}`} className="w-full">
                      <Button variant="default" className="w-full">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900">
                Ready for more advanced learning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Check out our premium courses and webinars for in-depth, expert-led training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button variant="default" size="lg">
                    Explore Premium Courses
                  </Button>
                </Link>
                <Link to="/webinars">
                  <Button variant="outline" size="lg">
                    Join Our Webinars
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearningHub;
