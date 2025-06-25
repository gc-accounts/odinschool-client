import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import { BookOpen, Users, ArrowRight, Loader2 } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import PaginationComponent from '@/components/components/PaginationComponent';
import Image from 'next/image';
import axios from 'axios';

interface Course {
    id: number;
    documentId: string;
    title: string;
    description: string;
    level: string | null;
    overview: string;
    url_slug: string;
    image_url_string?: string;
    total_enrolled?: number;
    modules?: any[];
    is_learning_hub: boolean;
}

interface Pagination {
    total: number;
    pageCount: number;
    page: number;
    pageSize: number;
}

interface ApiResponse {
    data: Course[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

const LearningHub = () => {
    const [learningHub, setLearningHub] = useState<Course[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await axios.get<ApiResponse>(
                    'https://strapi.odinschool.com/api/courses', 
                    {
                        params: {
                            'filters[is_learning_hub][$eq]': true,
                            'pagination[page]': pageNumber,
                            'pagination[pageSize]': 9 // You can adjust this as needed
                        }
                    }
                );

                const courses = response.data.data;
                const paginationData = response.data.meta.pagination;


                console.log('courses------', courses);
                
                setLearningHub(courses);
                setPagination({
                    total: paginationData.total,
                    pageCount: paginationData.pageCount,
                    page: paginationData.page,
                    pageSize: paginationData.pageSize
                });
            } catch (error) {
                console.error("Error fetching courses:", error);
                setError("Failed to load courses. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [pageNumber]);

    const getTotalLessons = (course: Course) => {
        return course.modules?.length || 0;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {loading ? (
                <div className="grid place-items-center h-screen">
                    <Loader2 className="h-10 w-10 animate-spin" />
                </div>
            ) : error ? (
                <div className="grid place-items-center h-screen">
                    <div className="text-center">
                        <p className="text-red-500 text-lg mb-4">{error}</p>
                        <Button 
                            variant="default" 
                            onClick={() => setPageNumber(1)}
                            className="mt-4"
                        >
                            Retry
                        </Button>
                    </div>
                </div>
            ) : (
                <main className="flex-grow">
                    {/* Hero Section */}
                    <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-16">
                        <div className="container">
                            <div className="text-center max-w-3xl mx-auto">
                                <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">
                                    Learning Hub
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600">
                                    An extensive resource library to support you on your upskilling journey.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Courses Section */}
                    {learningHub.length > 0 ? (
                        <section className="pb-16 bg-white">
                            <div className="container">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                    {learningHub.map((course) => (
                                        <Card key={course.documentId} className="overflow-hidden transition-all hover:shadow-lg">
                                            <div className="p-10 flex justify-center items-center bg-gray-100 relative">
                                                {course.image_url_string && (
                                                    <Image
                                                        src={course.image_url_string}
                                                        alt={course.title}
                                                        className="w-40 h-auto"
                                                        loading="lazy"
                                                        width={500}
                                                        height={500}
                                                    />
                                                )}
                                                {course.level && (
                                                    <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                                        {course.level}
                                                    </div>
                                                )}
                                            </div>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-xl">{course.title}</CardTitle>
                                                <CardDescription className="line-clamp-2">{course.overview}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="pb-4">
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <div className="flex items-center">
                                                        <BookOpen className="h-4 w-4 mr-1 text-primary-600" />
                                                        <span>{getTotalLessons(course)} lessons</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Users className="h-4 w-4 mr-1 text-primary-600" />
                                                        <span>{course.total_enrolled || 0}</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Link href={`/learning-hub/${course.url_slug}`} className="w-full">
                                                    <Button variant="default" className="w-full">
                                                        Start Learning
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                                
                                {pagination && pagination.pageCount > 1 && (
                                    <div className="mt-8">
                                        <PaginationComponent 
                                            currentPage={pagination.page} 
                                            setCurrentPage={setPageNumber} 
                                            totalPages={pagination.pageCount} 
                                        />
                                    </div>
                                )}
                            </div>
                        </section>
                    ) : (
                        <div className="grid place-items-center h-screen">
                            <p>No courses found</p>
                        </div>
                    )}
                </main>
            )}
            <Footer />
        </div>
    );
};

export default LearningHub;