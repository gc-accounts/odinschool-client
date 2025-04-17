import React, { useRef, useEffect } from 'react';
import CourseCard, { CourseProps } from './CourseCard';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseData: CourseProps[] = [
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
    company: 'Google',
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
    company: 'Microsoft',
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
];

const FeaturedCourses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);
    
    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.style.animationDelay = `${i * 100}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToCardRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            Explore Our <span className="text-primary-600">Featured Courses</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses designed to help you master in-demand skills and advance your career in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courseData.map((course, index) => (
            <div
              key={course.id}
              ref={(el) => addToCardRefs(el, index)}
              className="opacity-0"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses">
            <Button 
              variant="outline" 
              size="lg" 
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
