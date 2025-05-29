import React, { useRef, useEffect, useState } from 'react';
import CourseCard, { CourseProps } from './CourseCard';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCourses } from '@/utils/api/courses';

const FeaturedCourses = ({
  searchText = ''
}) => {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses({pageNumber: 1, city: '', isFeatured: true, search: searchText});
        // Transform the data to match CourseProps interface
        const transformedCourses = data.map((course: any) => ({
          id: course.documentId,
          documentId: course.documentId,
          title: course.title,
          description: course.description,
          instructor: 'Expert Instructor', // Default value since not in API
          level: course.level || 'Beginner',
          duration: '10 hours', // Default value since not in API
          lessons: 45, // Default value since not in API
          rating: course.rating || 4.5,
          students: course.total_enrolled || 0,
          image: course.image,
          category: 'Technology', // Default value since not in API
          enrolled_avatars: [], // Default empty array since not in API
          total_enrolled: course.total_enrolled || 0,
        }));
        setCourses(transformedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [searchText]);

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
  }, [courses]); // Add courses as dependency to re-run when courses change

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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                ref={(el) => addToCardRefs(el, index)}
                className="opacity-0"
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        )}

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
