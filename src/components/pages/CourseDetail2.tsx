import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import Markdown from '@/components/components/Markdown';
import { Button } from '@/components/components/ui/button';
import {
  ArrowLeft, BarChart, Award, CheckCircle2, Users, Star
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/components/ui/badge';
import { Progress } from '@/components/components/ui/progress';
import PlatformComparison from '@/components/components/PlatformComparison';
import JobsSection from '@/components/components/JobsSection';
import CertificationSection from '@/components/components/CertificationSection';
import ToolsSection from '@/components/components/ToolsSection';
import Testimonials from '@/components/components/Testimonials';
import OrganizationLogos from '@/components/components/OrganizationLogos';
import InstructorProfile from '@/components/components/InstructorProfile';
import CollegeSpotlight from '@/components/components/CollegeSpotlight';
import FAQsection from '@/components/components/FAQsection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/components/ui/accordion";
import CareerServices from '@/components/components/CareerServices';
import StatsSection from '@/components/components/StatsSection';
import ExtrasSection2 from '@/components/components/ExtrasSection2';
import CareerServices1 from '@/components/components/CareerServices1';
import WhyLearnAI from '@/components/components/WhyLearnAI';
import WhoCanApply from '@/components/components/WhocanApply';
import CertificationSection1 from '@/components/components/CertificationSection1';
import { getCourse, getCourses } from '@/components/utils/api';
import CareerOpportunities from '@/components/components/CareerOpportunities';
import CareerServices2 from '@/components/components/CareerServices2';
import Image from 'next/image';

interface Course {
  id: string;
  documentId?: string;
  title: string;
  description: string;
  fullDescription?: string;
  instructor?: string;
  price?: number;
  salePrice?: number;
  duration?: string;
  students?: number;
  image: string;
  has_certificate: boolean;
  lessons?: string[] | number;
  level: string;
  sale?: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  modules?: any[];
  curriculum?: {
    heading: string;
    lessons: number;
    description?: string;
  }[];
  enrolled_students?: {
    total_enrolled: number;
  };
  enrolled_avatars?: Array<{
    url: string;
    name: string;
  }>;
  rating?: number;
  total_rated?: number;
  learningObjectives?: string[];
  prerequisites?: string[];
  skills?: string[];
  tags?: string[];
  certificate?: boolean;
  on_sale?: boolean;
}

interface ApiCourseResponse {
  id: string;
  documentId: string;
  title: string;
  description: string;
  level: string;
  on_sale: boolean;
  has_certificate: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  image: string;
  instructor?: string;
  price?: number;
  salePrice?: number;
  duration?: string;
  students?: number;
  lessons?: any;
  curriculum?: any[];
  enrolled_students?: { total_enrolled: number };
  enrolled_avatars?: Array<{ url: string; name: string }>;
  rating?: number;
  total_rated?: number;
  learningObjectives?: string[];
  prerequisites?: string[];
  skills?: string[];
  tags?: string[];
  certificate?: boolean;
  modules?: any[];
}

interface SectionProps {
  slug: string;
}

// Helper type to check if a component accepts a specific prop
type HasProp<T, P extends string> = T extends { [K in P]: any } ? true : false;

// Wrapper components to handle prop mapping
const withSectionProps = (Component: React.ComponentType<any>) => {
  const WrappedComponent = ({ courseSlug }: { courseSlug?: string }) => {
    // Check component name to determine which props to pass
    const componentName = Component.displayName || Component.name;

    // Create props object based on component requirements
    const props: Record<string, any> = {};

    // Components that require slug prop
    const slugComponents = ['CareerServices', 'CareerOpportunities', 'CareerServices1'];
    if (slugComponents.includes(componentName) && courseSlug) {
      props.slug = courseSlug;
    }

    // Components that require sectionClass prop
    const sectionClassComponents = [
      'OrganizationLogos',
      'Testimonials',
      'JobsSection',
      'ToolsSection',
      'PlatformComparison',
      'InstructorProfile',
      'FAQsection',
      'WhoCanApply'
    ];
    if (sectionClassComponents.includes(componentName)) {
      props.sectionClass = "py-12";
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withSectionProps(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

const sectionConfig: {
  [key: string]: React.ComponentType<{ courseSlug?: string }>[];
} = {
  "1": [
    withSectionProps(OrganizationLogos),
    withSectionProps(Testimonials),
    withSectionProps(JobsSection),
    withSectionProps(CareerServices),
    withSectionProps(ToolsSection),
    withSectionProps(CertificationSection),
    withSectionProps(PlatformComparison),
    withSectionProps(InstructorProfile),
    withSectionProps(FAQsection),
    withSectionProps(CareerServices2),
    withSectionProps(CertificationSection1),
    withSectionProps(CareerOpportunities),
    withSectionProps(WhyLearnAI),
    withSectionProps(WhoCanApply),
    withSectionProps(CareerServices1),
    withSectionProps(CollegeSpotlight),
  ],
  "2": [
    () => <CertificationSection />,
    () => <Testimonials />,
    () => <InstructorProfile />,
    () => <FAQsection />,
  ],
  "3": [
    () => <ToolsSection />,
    () => <OrganizationLogos />,
    () => <OrganizationLogos />,
    () => <CareerServices2 />,
    () => <CertificationSection1 />,
    () => <InstructorProfile />,
    () => withSectionProps(CareerOpportunities)({ courseSlug: '' }),
  ],
  "4": [
    () => <WhyLearnAI />,
    () => <WhoCanApply />,
    () => <Testimonials />,
    () => withSectionProps(CareerServices1)({ courseSlug: '' }),
    () => <CollegeSpotlight />,
    () => <InstructorProfile />,
    () => <FAQsection />,
  ],
  "5": [
    () => <StatsSection />,
    () => <ToolsSection />,
    () => <JobsSection />,
    () => <ExtrasSection2 />,
    () => <OrganizationLogos />,
    () => <InstructorProfile />,
    () => <FAQsection />,
  ],
};

const CourseDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const courseData = await getCourse("", id);
        if (courseData && courseData[0]) {
          const apiCourse = courseData[0] as ApiCourseResponse;
          // Transform the API response to match our Course interface
          const transformedCourse: Course = {
            id: apiCourse.id || '',
            title: apiCourse.title || '',
            description: apiCourse.description || '',
            fullDescription: apiCourse.overview,
            instructor: apiCourse.instructor || 'Instructor Name',
            price: Number(apiCourse.price) || 0,
            salePrice: Number(apiCourse.salePrice) || 0,
            duration: apiCourse.duration || '0 hours',
            students: Number(apiCourse.students) || 0,
            image: apiCourse.image || '',
            has_certificate: Boolean(apiCourse.has_certificate),
            lessons: apiCourse.lessons || [],
            level: apiCourse.level || 'Beginner',
            sale: Boolean(apiCourse.on_sale),
            overview: apiCourse.overview || '',
            slug: apiCourse.slug || '',
            createdAt: apiCourse.createdAt || '',
            updatedAt: apiCourse.updatedAt || '',
            publishedAt: apiCourse.publishedAt || '',
            url_slug: apiCourse.url_slug || '',
            modules: apiCourse.modules || [],
            curriculum: apiCourse.curriculum || [],
            enrolled_students: apiCourse.enrolled_students || { total_enrolled: 0 },
            enrolled_avatars: apiCourse.enrolled_avatars || [],
            rating: Number(apiCourse.rating) || 0,
            total_rated: Number(apiCourse.total_rated) || 0,
            learningObjectives: apiCourse.learningObjectives,
            prerequisites: apiCourse.prerequisites,
            skills: apiCourse.skills,
            tags: apiCourse.tags,
            certificate: Boolean(apiCourse.certificate),
            on_sale: Boolean(apiCourse.on_sale),
          };
          setCourse(transformedCourse);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const sectionsToRender = sectionConfig["1"];

  if (!course || loading) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <h1 className="text-3xl font-bold">Course not found</h1>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  const courseProjects = [
    {
      title: "E-commerce Dashboard",
      description: "Build a fully functional admin dashboard for an e-commerce platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&w=800",
      free: false
    },
    {
      title: "Social Media App",
      description: "Create a responsive social networking application with real-time features.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&w=800",
      free: false
    },
    {
      title: "Weather Dashboard",
      description: "A simple weather application consuming API data with beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&w=800",
      free: true
    }
  ];

  const curriculumData = [
    {
      title: "Introduction to Web Development",
      lessons: "5 lessons",
      duration: "2 hours",
      subLessons: [
        { title: "Overview of Web Development", duration: "20 min" },
        { title: "Setting Up Your Development Environment", duration: "25 min" },
        { title: "HTML Fundamentals", duration: "30 min" },
        { title: "CSS Basics", duration: "25 min" },
        { title: "Your First Web Page", duration: "20 min" }
      ]
    },
    {
      title: "JavaScript Essentials",
      lessons: "6 lessons",
      duration: "3 hours",
      subLessons: [
        { title: "JavaScript Syntax and Variables", duration: "30 min" },
        { title: "Functions and Control Flow", duration: "35 min" },
        { title: "Working with Arrays and Objects", duration: "30 min" },
        { title: "DOM Manipulation", duration: "40 min" },
        { title: "Event Handling", duration: "25 min" },
        { title: "Building Interactive Components", duration: "20 min" }
      ]
    },
    {
      title: "Frontend Frameworks",
      lessons: "4 lessons",
      duration: "2.5 hours",
      subLessons: [
        { title: "Introduction to React", duration: "40 min" },
        { title: "Component-Based Architecture", duration: "35 min" },
        { title: "State Management", duration: "45 min" },
        { title: "Building a Complete Frontend App", duration: "30 min" }
      ]
    }
  ];

  const total_enrolled = course?.enrolled_students?.total_enrolled || 0;
  const total_lessons = course?.curriculum?.reduce((a, b) => a + (b.lessons || 0), 0) || 0;

  console.log(total_enrolled, total_lessons, course);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center">
            <Link href="/courses" className="text-primary-600 hover:underline flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-6xl">{course.title}</h1>
              <div className="flex items-center space-x-4 mt-4">
                <Badge variant="secondary">{course.level}</Badge>
                {course.sale && <Badge className="bg-green-600">Sale</Badge>}
                {course.certificate && <Badge className="bg-blue-600">Certificate</Badge>}
              </div>
              <p className="mt-4 text-lg text-gray-600">{course.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">Talk to an Expert</Button>
              </div>
              <div className=" pt-4">
                <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-10">
                  <div className="flex items-center mt-2 gap-3">
                    {course.enrolled_avatars?.map((avatar, index) => (
                      <Image
                        key={index}
                        src={avatar.url}
                        alt={avatar.name}
                        className={`h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 ${index === 0 ? 'ml-0' : '-ml-6'}`}
                        width={500}
                        height={500}

                        loading="lazy"
                      />
                    ))}
                    <span className=" text-sm">Join 10K+ students</span>
                  </div>
                  <div>
                    <div className="flex items-center mt-2 gap-2">
                      <div className="flex text-yellow-400 space-x-1">
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                      </div>
                      <span className="text-sm ">{course.rating}/5</span>
                      <a href="#ratings" className="text-sm underline hover:text-primary">
                        ({course.total_rated} ratings)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden ">
              <Image
                src={course.image}
                alt={course.title}
                className="w-full h-auto object-cover"
                width={500}
                height={500}

                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-[2rem]">About This Course</h2>
                <div className="prose max-w-none">
                  <p>{course.fullDescription || course.description}</p>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Course Highlight</h3>
                  <ul className="space-y-2">
                    {course.learningObjectives?.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{objective}</span>
                      </li>
                    )) || (
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Master {course.title} concepts and techniques</span>
                        </li>
                      )}
                  </ul>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites?.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{prerequisite}</span>
                      </li>
                    )) || (
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Basic understanding of the subject</span>
                        </li>
                      )}
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Program Curriculum</h2>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {(course.curriculum || []).map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`} className="border px-4 py-2 rounded-lg mb-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-start w-full">
                        <div className="text-left">
                          <h3 className="font-medium text-lg">{section.heading}</h3>
                          <p className="text-sm text-gray-500">{section.lessons} lessons</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-3">
                        {section.description && (
                          <div className="prose prose-sm">
                            <Markdown markdown={section.description} />
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Technologies You'll Master</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                      alt="Programming"
                      className="w-full h-40 object-cover rounded-md mb-3"
                      width={500}
                      height={500}

                      loading="lazy"
                    />
                    <h4 className="font-medium">Modern Development</h4>
                    <p className="text-sm text-gray-600">Learn industry-standard tools and practices</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                      alt="Code"
                      className="w-full h-40 object-cover rounded-md mb-3"
                      width={500}
                      height={500}

                      loading="lazy"
                    />
                    <h4 className="font-medium">Clean Coding</h4>
                    <p className="text-sm text-gray-600">Write maintainable, efficient code</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                      alt="Development"
                      className="w-full h-40 object-cover rounded-md mb-3"
                      width={500}
                      height={500}

                      loading="lazy"
                    />
                    <h4 className="font-medium">Project-Based Learning</h4>
                    <p className="text-sm text-gray-600">Apply concepts to real-world scenarios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-[2rem]">Course Certificate</h3>
              <div className="grid grid-cols-1 md:grid-row-2 gap-8">
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">Industry-Recognized Certification</h4>
                  <p className="text-gray-700">
                    Upon successful completion of the course, you'll receive a verified certificate that you can share with potential employers and on your LinkedIn profile.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1" size={18} />
                      <p>Accredited by leading industry partners</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1" size={18} />
                      <p>Verifiable through unique certificate ID</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1" size={18} />
                      <p>Showcase your skills to potential employers</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1" size={18} />
                      <p>Lifetime access to your certificate</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative aspect-[16/12] mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                      alt="Certificate Sample"
                      className="rounded-lg border-2 border-gray-200 shadow-lg w-full h-full object-cover"
                      width={500}
                      height={500}

                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[16/12] mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                      alt="Certificate Sample"
                      className="rounded-lg border-2 border-gray-200 shadow-lg w-full h-full object-cover"
                      width={500}
                      height={500}

                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Course Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Lessons: </span>
                  </div>
                  <span>{total_lessons}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Rating</span>
                  </div>
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Students</span>
                  </div>
                  <span>{total_enrolled}</span>
                </div>
              </div>
              <Progress value={75} className="mt-4" />
              <p className="text-sm text-gray-500 mt-2">75% completed</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Register Now</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold">₹{course.salePrice}+ GST</span>
                {course.sale && <span className="text-gray-500 line-through ml-2">${course.salePrice}</span>}
              </div>

              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {course.skills?.map((skill, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {skill}
                  </span>
                )) || course.tags?.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xs text-gray-500 font-regular mb-4">By providing your contact details, you agree to our Privacy Policy</h3>

              <Button className="w-full">Enroll Now</Button>
              <Button variant="link" className="w-full mt-2">Reserve your seat at ₹5000 + GST</Button>
              <h3 className="text-xs text-gray-500 font-regular italic mb-4 mt-4 border border-gray-300 rounded-md p-1.5">No cost EMIs start at ₹7867 per month. 3,6,9,12 months EMI option available.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="space-y-12 px-4 py-8 w-full">
            {sectionsToRender && course?.slug ? (
              sectionsToRender.map((Section, index) => (
                <div key={index}>
                  <Section courseSlug={course.slug} />
                </div>
              ))
            ) : (
              <div className="text-red-600">No sections configured for course ID: {id}</div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
