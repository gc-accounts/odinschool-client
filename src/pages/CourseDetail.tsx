import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Markdown from '@/components/Markdown';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobOpportunities from '@/components/JobOpportunities';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft, Clock, BarChart, Award, CheckCircle2,
  Download, FileText, Users, Zap, Gift, BookOpen,
  Briefcase, Star, PlayCircle, MessageSquare, CheckCircle,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import PlatformComparison from '@/components/PlatformComparison';
import JobsSection from '@/components/JobsSection';
import CertificationSection from '@/components/CertificationSection';
import ToolsSection from '@/components/ToolsSection';
import Testimonials from '@/components/Testimonials';
import OrganizationLogos from '@/components/OrganizationLogos';
import InstructorProfile from '@/components/InstructorProfile';
import CollegeSpotlight from '@/components/CollegeSpotlight';
import FAQsection from '@/components/FAQsection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import CareerServices from '@/components/CareerServices';
import StatsSection from '@/components/StatsSection';
import ExtrasSection2 from '@/components/ExtrasSection2';
import CareerServices1 from '@/components/CareerServices1';
import WhyLearnAI from '@/components/WhyLearnAI';
import WhoCanApply from '@/components/WhocanApply';
import CertificationSection1 from '@/components/CertificationSection1';
import { getCourse, getCourses } from '@/utils/api';

import CareerOpportunities from '@/components/CareerOpportunities';
import CareerServices2 from '@/components/CareerServices2';
import Modal from '@/components/component-template/Modal';
import DynamicForm from '@/components/form/DynamicForm';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { FieldConfig } from '@/components/form/DynamicForm';


const formFields: FieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    rules: { required: 'First Name is required' },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    rules: { required: 'Last Name is required' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    required: true,
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    required: true,
    rules: {
      required: 'Phone number is required',
      minLength: {
        value: 10,
        message: 'Phone number must be at least 10 digits',
      },
    },
  },
  {
    name: 'year',
    label: 'Year of Graduation',
    type: 'select',
    options: ['Before 2018', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', 'After 2025'],
    rules: { required: 'Please select your graduation year' },
  },
  {
    name: 'experience',
    label: 'Work Experience Level',
    type: 'select',
    options: ['No Experience', '0-1 Years', '1-3 Years', '3+ Years'],
    rules: { required: 'Please select your experience level' },
  },
  { name: 'program', type: 'hidden' },
  { name: 'ga_client_id', type: 'hidden' },
];



const CourseDetail = () => {

  const [formOpen, setFormOpen] = useState(false);

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();


  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(id || '');
      setCourse(course[0]);
      setLoading(false);
    }
    fetchCourse();
  }, [id]);

  const sectionConfig: {
  [key: string]: (() => JSX.Element)[];
} = {
  "1": [
    () => <OrganizationLogos />,
    () => <Testimonials />,
    () => <JobsSection />,
    () => <CareerServices slug={course.slug == 'data-science-course' ? 'Data Science Course' : course.slug}/>,
    () => <ToolsSection />,
    () => <CertificationSection />,
    () => <PlatformComparison />,
    () => <InstructorProfile />,
    () => <FAQsection />,
    () => <CareerServices2 />,
    () => <CertificationSection1 />,
    () => <CareerOpportunities slug={course.slug == 'data-science-course' ? 'Data Science Course' : course.slug}/>,
    () => <WhyLearnAI />,
    () => <WhoCanApply />,
    () => <CareerServices1 slug={course.slug == 'data-science-course' ? 'Data Science Course' : course.slug}/>,
    () => <CollegeSpotlight />,
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
    () => <CareerOpportunities slug={course.slug == 'data-science-course' ? 'Data Science Course' : course.slug}/>,

  ],
  "4": [
    () => <WhyLearnAI />,
    () => <WhoCanApply />,
    () => <Testimonials />,
    () => <CareerServices1 slug={course.slug == 'data-science-course' ? 'Data Science Course' : course.slug}/>,
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

  const sectionsToRender = sectionConfig["1"];

  if (!course && !loading) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Course not found</h1>
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
  console.log(course);
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


  if (loading && !course) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-16 grid place-items-center">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }


  const total_enrolled = course?.enrolled_students?.total_enrolled;
  const total_lessons = course?.curriculum?.map((section) => section.lessons).reduce((a, b) => a + b, 0);

  console.log(total_enrolled, total_lessons, course);


  // Handle Form Submit
const handleFormSubmit = async (data: any) => {
  console.log('data------------------------', data);

  const zohoEndpoint = "https://crm.zoho.in/crm/WebToContactForm";

  const hiddenFields = {
    xnQsjsdp: "b3f43adc4710a41efc03cab70d04a5eee598f225642df4a1f565782c83a02d3a",
    xmIwtLD: "a2deb9be306e58e854a1535496bd061b69e1d5dd0efc44a28ae5ee26dfe42b099e51cbb9f06e7317ab708b49c270667a",
    actionType: "Q29udGFjdHM=",
    returnURL: "null",
  };

  const formData = new FormData();

  // Append hidden fields
  Object.entries(hiddenFields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  // Append visible form data
  formData.append("First Name", data.firstName || '');
  formData.append("Last Name", data.lastName || '');
  formData.append("Email", data.email || '');
  formData.append("Phone", data.phone || '');
  formData.append("Year of Graduation", data.year || '');
  formData.append("Work Experience Level", data.experience || '');
  formData.append("Program", course.slug === 'data-science-course' ? 'Data Science Course' : course.slug);
  formData.append("ga_client_id", '');
  formData.append("Business Unit", 'OdinSchool');

  try {
    const response = await axios.post(zohoEndpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    toast({
      title: "Form submitted successfully!",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });

  } catch (err) {
    console.error('Error submitting form:', err);

    toast({
      title: "Form submission failed!",
      description: "Something went wrong. Please try again later.",
      variant: "destructive"
    });
  }

  setFormOpen(false);
};



  return (
    <>
      <div>
        <Navbar />
        <div className="bg-gradient-to-r from-primary-50 to-primary-100">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center ">
              <Link to="/courses" className="text-primary-600 hover:underline flex items-center">
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
                <div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" onClick={() => setFormOpen(true)}>
                      Talk to an Expert
                    </Button>
                  </div>
                  <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                    <DynamicForm
                      fields={formFields}
                      initialValues={{
                        program: course.slug,
                        ga_client_id: 'auto-fetch-or-from-cookie',
                        business_unit: 'Odinschool'
                      }}
                      onSubmit={(data) => {
                        handleFormSubmit(data)
                      }}

                    />
                  </Modal>


                </div>



                <div className=" pt-4">
                  <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-10">


                    <div className="flex items-center mt-2 gap-3">
                      {course.enrolled_avatars?.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar.url}
                          alt={avatar.name}
                          className={`h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 ${index === 0 ? 'ml-0' : '-ml-6'}`}
                        />
                      ))}
                      {/* <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79" alt="Logo 1" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1" />
                            {/* <img src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82" alt="Logo 2" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="Logo 3" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Logo 4" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" /> */}
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
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-8 w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  {/* <TabsTrigger value="projects">Projects</TabsTrigger> */}
                  <TabsTrigger value="certificate">Certificate</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
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
                </TabsContent>

                <TabsContent value="curriculum">
                  <h2 className="text-2xl font-bold mb-6">Program Curriculum</h2>
                  <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      {(course.curriculum).map((section, index) => (
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
                                <div className="prose prose-sm" style={{

                                }}>
                                  <Markdown markdown={section.description} />
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {/* Course technology images at the end of the accordion */}
                    <div className="mt-8 pt-6 border-t">
                      <h3 className="text-lg font-semibold mb-4">Technologies You'll Master</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                            alt="Programming"
                            className="w-full h-40 object-cover rounded-md mb-3"
                          />
                          <h4 className="font-medium">Modern Development</h4>
                          <p className="text-sm text-gray-600">Learn industry-standard tools and practices</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                            alt="Code"
                            className="w-full h-40 object-cover rounded-md mb-3"
                          />
                          <h4 className="font-medium">Clean Coding</h4>
                          <p className="text-sm text-gray-600">Write maintainable, efficient code</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                            alt="Development"
                            className="w-full h-40 object-cover rounded-md mb-3"
                          />
                          <h4 className="font-medium">Project-Based Learning</h4>
                          <p className="text-sm text-gray-600">Apply concepts to real-world scenarios</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* <TabsContent value="projects">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-4 text-[1.5rem]">Course Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courseProjects.map((project, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            {project.free && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                <Gift className="h-3 w-3 mr-1" />
                                Free
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{project.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant={project.free ? "default" : "outline"}
                            className="w-full"
                            size="sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {project.free ? 'Download Now' : 'Access with Course'}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent> */}

                <TabsContent value="certificate">
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
                          <img
                            src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                            alt="Certificate Sample"
                            className="rounded-lg border-2 border-gray-200 shadow-lg w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative aspect-[16/12] mb-4">
                          <img
                            src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?crop=entropy&w=800"
                            alt="Certificate Sample"
                            className="rounded-lg border-2 border-gray-200 shadow-lg w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

              </Tabs>
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
                    <span>{course.curriculum.map((section) => section.lessons).reduce((a, b) => a + b, 0)}</span>
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
                    <span>{course?.enrolled_students?.total_enrolled}</span>
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
              {sectionsToRender ? (
                sectionsToRender.map((Section, index) => (
                  <div key={index}>
                    <Section />
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

    </>

  );
};

export default CourseDetail;
