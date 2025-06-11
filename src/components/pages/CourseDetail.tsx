'use client'
import React, { useContext, useEffect, useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation'
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import MetaTags from '@/components/components/MetaTags';
import Markdown from '@/components/components/Markdown';
import { Button } from '@/components/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/components/ui/tabs';
import {
  ArrowLeft, Star, Loader2
} from 'lucide-react';
import RichTextRenderer from '@/components/utils/RichTextRenderer';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/components/ui/accordion";
import StatsSection from '@/components/components/StatsSection';
import ExtrasSection2 from '@/components/components/ExtrasSection2';
import CareerServices1 from '@/components/components/CareerServices1';
import WhyLearnAI from '@/components/components/WhyLearnAI';
import WhoCanApply from '@/components/components/WhocanApply';
import CertificationSection1 from '@/components/components/CertificationSection1';
import { getCourse, getCourses } from '@/components/utils/api';

import CareerOpportunities from '@/components/components/CareerOpportunities';
import CareerServices2 from '@/components/components/CareerServices2';
import Modal from '@/components/components/component-template/Modal';
import DynamicForm from '@/components/components/form/DynamicForm';
import axios from 'axios';
import { useToast } from '@/components/hooks/use-toast';
import { FieldConfig } from '@/components/components/form/DynamicForm';
import { courseHighlights } from '@/components/data/courseHighlights';
import CourseCertificate from '@/components/components/course-details/CourseCertificate';
import { getDataByPage } from '@/components/utils/getDataByPage';
import { courseToolsData } from '@/components/data/course-section/tools/courseToolsData';
import CourseProject from '@/components/components/course-details/CourseProject';

import { useProgram } from '@/context/ProgramContext';
import DsEliteFold from '@/components/components/DsEliteFold';

import getCourseData from '@/components/utils/getCourseData';
import brochureFormField from '@/components/data/brochureFormField';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import DataLeaders from '@/components/components/DataLeaders';
import Mentorship from '@/components/components/Mentorship';
import DsEliteSuccessStories from '@/components/components/DsEliteSuccessStories';
import { formatDateToReadable } from '@/components/utils/formatDateToReadable';
import { formatCurrencyINR } from '@/components/utils/formatCurrencyINR';
import SuccessStoriesIB from '@/components/components/SuccessStoriesIB';
import Image from 'next/image';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';


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
      pattern: {
        value: /^[0-9]{10,12}$/,
        message: 'Phone number must be between 10 and 12 digits (numbers only)',
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

interface Course {
  id: string;
  documentId: string;
  title: string;
  description: string;
  fullDescription?: string;
  longDescription?: string;
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
  sale?: boolean;
  salePrice?: number;
  skills?: string[];
  tags?: string[];
  enrolled_avatars?: Array<{
    url: string;
    name: string;
  }>;
  enrolled_students?: {
    total_enrolled: number;
  };
  rating?: number;
  total_rated?: number;
  curriculum?: Array<{
    id: string;
    heading: string;
    lessons: number;
    description?: string;
  }>;
  price?: number;
  final_price?: number;
  modules?: any[];
  cohortDates?: {
    cohort1?: string;
    cohort2?: string;
  };
}

interface CourseHighlight {
  highlight: string[];
}

interface CourseDetailProps {
  courseId: string;
  initialCourse?: Course;
}


// http://localhost:3000/data-science-course?utm_source=Email+Marketing&utm_custom_source=youtube&utm_medium=banner&utm_campaign=Telugu+Video&utm_id=camp-vthetechee&utm_term=20May2025&utm_content=sadsadsad



const CourseDetail = ({ courseId, initialCourse }: CourseDetailProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const [brochureFormOpen, setBrochureFormOpen] = useState(false)
  const [course, setCourse] = useState<Course | null>(initialCourse || null);
  const [loading, setLoading] = useState(!initialCourse);
  const [utmData, setUtmData] = useState<Record<string, string>>({});
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const location = usePathname();
  const currentPath = location;
  const router = useRouter();
  const { setProgram } = useProgram();

  useEffect(() => {
    const trackingData = getUTMTrackingData();
    setUtmData(trackingData);
    sessionStorage.setItem('utmTracking', JSON.stringify(trackingData));

  }, []);


  useEffect(() => {
    const fetchCourse = async () => {
      if (!id || initialCourse) return;
      setLoading(true);
      try {
        const response = await getCourse("", id);

        if (response && response[0]) {
          setCourse(response[0]);
          setProgram(response[0].slug || '');
        }
      } catch (err) {
        console.error('Error fetching course:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();

    if (initialCourse?.slug) {
      setProgram(initialCourse.slug);
    }

    return () => {
      setProgram('');
    };
  }, [id, initialCourse, setProgram]);



  if (loading || !course) {
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

  // After the guard clause, TypeScript knows course is not null
  const courseHighlightData = getDataByPage(courseHighlights, currentPath) as CourseHighlight | undefined;
  const toolsData = getDataByPage(courseToolsData, currentPath);
  const total_enrolled = course.enrolled_students?.total_enrolled || 0;
  const total_lessons = course.curriculum?.reduce((a: number, b: { lessons: number }) => a + b.lessons, 0) || 0;
  const rating = course.rating || 0;
  const total_rated = course.total_rated || 0;

  const sectionConfig: {
    [key: string]: (() => JSX.Element)[];
  } = {
    "1":
      [
        () => <DsEliteFold sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <OrganizationLogos sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        () => <Testimonials sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <JobsSection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <ToolsSection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <PlatformComparison sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <InstructorProfile
          sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
          slug={'Data Science Elite Course'}
          data={getCourseData(course.slug).mentors}
        />,
        () => <CareerOpportunities sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Data Science Course'}
          data={getCourseData(course.slug).careerPath} />,
        () => <CareerServices1 sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Data Science Course'} />,
        () => <FAQsection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} data={getCourseData(course.slug).faqs} />,
      ],
    "2":
      [
        () => <OrganizationLogos sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        // () => <Testimonials sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        // () => <JobsSection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <ToolsSection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <PlatformComparison sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <InstructorProfile
          sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
          slug={'Generative AI Course'}
          data={getCourseData(course.slug).mentors}
        />,
        () => <CareerOpportunities sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Generative AI Course'}
          data={getCourseData(course.slug).careerPath} />,
        () => <CareerServices1 sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Generative AI Course'} />,
        () => <FAQsection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} data={getCourseData(course.slug).faqs} />,
      ]
    ,
    "3":
      [
        () => <OrganizationLogos sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        // () => <Testimonials sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        // () => <JobsSection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <ToolsSection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <PlatformComparison sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <InstructorProfile
          sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
          slug={'Certification Program in Applied Generative AI'}
          data={getCourseData(course.slug).mentors}
        />,
        () => <CareerOpportunities sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Certification Program in Applied Generative AI'} data={getCourseData(course.slug).careerPath} />,
        () => <CareerServices1 sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Certification Program in Applied Generative AI'} />,
        () => <FAQsection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} data={getCourseData(course.slug).faqs} />,
      ],
    "4":
      [
        () => <DataLeaders slug={'Data Science Elite Course'} data={getCourseData(course.slug).dataLeaders} sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        () => <Mentorship sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <JobsSection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <DsEliteSuccessStories sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        () => <OrganizationLogos sectionClass={'bg-white  py-[50px]  md:py-[70px]'} />,
        () => <Testimonials sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,

        () => <ToolsSection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <PlatformComparison sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <InstructorProfile
          sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
          slug={'Data Science Elite Course'}
          data={getCourseData(course.slug).mentors}
        />,
        () => <CareerOpportunities sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Data Science Elite Course'}
          data={getCourseData(course.slug).careerPath} />,
        () => <CareerServices1 sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Data Science Elite Course'} />,
        () => <FAQsection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} data={getCourseData(course.slug).faqs} />,
      ],

    "5":
      [
        () => <DataLeaders slug={'Investment Banking & Finance Operations Elite Course'} data={getCourseData(course.slug).dataLeaders} sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        () => <SuccessStoriesIB sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <OrganizationLogos sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
        () => <PlatformComparison sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
        () => <InstructorProfile sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Investment Banking & Finance Operations Elite Course'} data={getCourseData(course.slug).mentors} />,
        () => <CareerOpportunities sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Investment Banking & Finance Operations Elite Course'} data={getCourseData(course.slug).careerPath} />,
        () => <CareerServices1 sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={'Data Science Elite Course'} />,
        () => <FAQsection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
          data={getCourseData(course.slug).faqs} />,
      ],
  };


  const AbTestingsectionConfig: {
    [key: string]: (() => JSX.Element)[];
  } = {
    "1": [
      () => <OrganizationLogos sectionClass={'bg-primary-50  py-[50px]  md:py-[70px]'} />,
      () => <Testimonials sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
      () => <JobsSection sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
      () => <ToolsSection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
      () => <PlatformComparison sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />,
      () => <InstructorProfile
        sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
        slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug}
        data={getCourseData(course.slug).mentors}
      />,
      () => <CareerOpportunities sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} slug={course.slug == 'data-science-course' ? 'Data Science Course' : course.slug} data={getCourseData(course.slug).careerPath} />,
      () => <CareerServices1
        sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
        slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course' : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course' : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI' : course.slug}
      />,
      () => <FAQsection sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} data={getCourseData(course.slug).faqs} />,
    ],
    "2": [
      () => <CertificationSection />,
      () => <Testimonials />,
      () => <InstructorProfile
        sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
        slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug}
        data={getCourseData(course.slug).mentors}
      />,
      () => <FAQsection data={getCourseData(course.slug).faqs} />,
    ],
    "3": [
      () => <ToolsSection />,
      () => <OrganizationLogos />,
      () => <OrganizationLogos />,
      () => <CareerServices2 />,
      () => <CertificationSection1 />,
      () => <InstructorProfile
        sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
        slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug}
        data={getCourseData(course.slug).mentors}
      />,
      () => <CareerOpportunities slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course' : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course' : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI' : course.slug} data={getCourseData(course.slug).careerPath} />,
    ],
    "4": [
      () => <WhyLearnAI />,
      () => <WhoCanApply />,
      () => <Testimonials />,
      () => <CareerServices1 slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course' : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course' : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI' : course.slug} />,
      () => <CollegeSpotlight />,
      () => <InstructorProfile
        sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
        slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug}
        data={getCourseData(course.slug).mentors}
      />,
      () => <FAQsection data={getCourseData(course.slug).faqs} />,
    ],
    "5": [
      () => <StatsSection />,
      () => <ToolsSection />,
      () => <JobsSection />,
      () => <ExtrasSection2 />,
      () => <OrganizationLogos />,
      () => <InstructorProfile
        sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'}
        slug={course.slug === 'data-science-course' ? 'Data Science Course' : course.slug}
        data={getCourseData(course.slug).mentors}
      />,
      () => <FAQsection data={getCourseData(course.slug).faqs} />,
    ],
  };



  const sectionsToRender =
    course.slug === 'data-science-course' ? sectionConfig["1"] :
      course.slug === 'generative-ai-bootcamp' ? sectionConfig["2"] :
        course.slug === 'generative-ai-course-iitg' ? sectionConfig["3"] :
          course.slug === 'data-science-elite-course' ? sectionConfig["4"] :
            course.slug === 'investment-banking-and-finance-operations-elite-course' ? sectionConfig["5"] : '';



  console.log(total_enrolled, total_lessons, course);
  console.log('course----------------', course);

  // console.log('utmData-----------', utmData);


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
    formData.append("Program", course.slug === 'data-science-course' ? 'Data Science Course' : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course' : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course' : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI' : course.slug);
    formData.append("ga_client_id", '');
    formData.append("Business Unit", 'OdinSchool');
    formData.append("Source Domain", 'Odinschool Course')
    formData.append('First Page Seen', utmData['First Page Seen'] || '');
    formData.append('Original Traffic Source', utmData['Original Traffic Source'] || '');
    formData.append('Original Traffic Source Drill-Down 1', utmData['Original Traffic Source Drill-Down 1'] || '');
    formData.append('Original Traffic Source Drill-Down 2', utmData['Original Traffic Source Drill-Down 2'] || '');
    formData.append('UTM Term-First Page Seen', utmData['UTM Term-First Page Seen'] || '');
    formData.append('UTM Content-First Page Seen', utmData['UTM Content-First Page Seen'] || '');

    try {
      const response = await axios.post(zohoEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // ✅ Store email and redirect
      sessionStorage.setItem('submittedEmail', data.email);


      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });



      // ✅ Redirect to thank-you page with specific course route 
      const courseSlug = course.slug || '';
      setTimeout(() => {
        router.push(`/thank-you?title=${courseSlug}`);
      }, 1000);


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


  // Handle Brochure Form

  const handleBrochureFormSubmit = async (data: any) => {
    try {
      const accessTokenRes = await fetch('/api/auth/token-brochure', { method: 'POST' });
      if (!accessTokenRes.ok) throw new Error('Token refresh failed');
      const { access_token } = await accessTokenRes.json();

      const brochureFormData = new FormData();
      brochureFormData.append('accessToken', access_token);
      brochureFormData.append('First Name', data.firstName);
      brochureFormData.append('Last Name', data.lastName);
      brochureFormData.append('Email', data.email);
      brochureFormData.append('Phone', data.phone);
      brochureFormData.append('Program', course.slug === 'data-science-course' ? 'Data Science Course'
        : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course'
          : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course'
            : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI'
              : course.slug);
      brochureFormData.append('Year of Graduation', data.year);
      brochureFormData.append('ga_client_id', '');
      brochureFormData.append('Business Unit', 'Odinschool');
      brochureFormData.append('Source_Domain', 'Brochure Form');

      const response = await fetch('/api/zoho/brochure', {
        method: 'POST',
        body: brochureFormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit brochure form');
      }

      toast({
        title: "Brochure requested successfully!",
        description: "Check your email shortly for the brochure.",
      });

      setBrochureFormOpen(false);

    } catch (err) {
      console.error('Error submitting brochure form:', err);
      toast({
        title: "Error!",
        description: err instanceof Error ? err.message : 'Submission failed. Try again later.',
        variant: "destructive"
      });
    }
  };


  return (
    <>
      <MetaTags
        title={`${course?.title || ''} | Your Site Name`}
        description={course?.description || course?.fullDescription || ''}
        image={course?.image || ''}
        url={`/courses/${course?.slug || course?.id || ''}`}
        type="website"
        author="Your Institution Name"
        publishedAt={course?.publishedAt || ''}
        keywords={[
          course?.title || '',
          course?.level || '',
          ...(course?.skills || []),
          ...(course?.tags || []),
          'online course',
          'certification',
          'learning',
          'education'
        ]}
      />
      <div>
        <Navbar />
        <section className="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px] text-white">
          <div className="container">
            <div className="flex items-center ">
              <Link href="/courses" className="text-white hover:underline flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5 text-white" />
                Back to Courses
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold text-white sm:text-5xl">{course.title}</h1>
                <div className="flex items-center space-x-4 mt-4">
                  <Badge variant="secondary" className='text-white bg-green-600 hover:bg-green-600 hover:text-white'>{course.level}</Badge>

                </div>
                <div className="mt-4 text-lg text-white">
                  {course?.longDescription ? (
                    <RichTextRenderer content={course.longDescription} />
                  ) : (
                    course.description
                  )}
                </div>
                <div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className='bg-yellow-500 hover:bg-yellow-500 text-black' onClick={() => setFormOpen(true)}>
                      Talk to an Expert
                    </Button>
                  </div>
                  <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                    <PrimaryForm slug={course.slug} isModal={true} />
                    {/* <DynamicForm
                      buttonText={'Request Callback'}
                      fields={formFields}
                      initialValues={{
                        program: course.slug,
                        ga_client_id: '',
                        business_unit: 'Odinschool'
                      }}
                      onSubmit={(data) => {
                        handleFormSubmit(data)
                      }}

                    /> */}
                  </Modal>


                </div>



                <div className=" pt-4 hidden">
                  <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-10">


                    <div className="flex items-center mt-2 gap-3">
                      {course.enrolled_avatars?.map((avatar: { url: string; name: string }, index: number) => (
                        <Image
                          key={index}
                          src={avatar.url}
                          alt={avatar.name}
                          className={`h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 ${index === 0 ? 'ml-0' : '-ml-6'}`}

                          loading="lazy"
                          width={32}
                          height={32}
                        />
                      ))}
                      {/* <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79" alt="Logo 1" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1" />
                          {/* <img src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82" alt="Logo 2" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="Logo 3" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" />
                          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Logo 4" className="h-8 w-8 rounded-full object-cover bg-white/20 backdrop-blur-sm p-1 -ml-6" /> */}
                      <span className=" text-sm">Join {total_enrolled}+ students</span>
                    </div>


                    <div>
                      <div className="flex items-center mt-2 gap-2">
                        <div className="flex text-yellow-400 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill={i < rating ? "currentColor" : "none"} size={16} />
                          ))}
                        </div>
                        <span className="text-sm">{rating}/5</span>
                        <a href="#ratings" className="text-sm underline hover:text-primary">
                          ({total_rated} ratings)
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className="rounded-xl overflow-hidden ">
                {/* <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto object-cover"

                  loading="lazy"
                  width={500}
                  height={500}
                /> */}

                <PrimaryForm slug={course.slug} isModal={false} />


              </div>
            </div>
          </div>
        </section>

        <section className='px-[20px] py-[50px] md:px-[30px] md:py-[70px]'>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-8 w-full justify-start py-3 px-2 overflow-x-auto h-max bg-primary-50">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="certificate">Certificate</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className='px-2'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-2">About This Course</h2>
                        <div className="prose max-w-none">
                          <div>
                            {course?.longDescription ? (
                              <RichTextRenderer content={course.longDescription} />
                            ) : (
                              course.fullDescription || course.description
                            )}
                          </div>


                          <div className='mt-6'>
                            <p className='text-lg font-bold mb-2'>Course Highlights</p>
                            {courseHighlightData?.highlight?.map((point, index) => (
                              <li className="flex items-start" key={index}>
                                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span dangerouslySetInnerHTML={{ __html: point }} />
                              </li>
                            ))}


                          </div>

                        </div>
                      </div>

                    </div>
                  </TabsContent>

                  <TabsContent value="curriculum" className='px-2'>

                    <div className='flex justify-between items-center mb-6'>
                      <h2 className="text-2xl font-bold">Program Curriculum</h2>
                      <Button onClick={() => setBrochureFormOpen(true)}>Download Brochure</Button>
                      <Modal header_text={'Download Brochure'} open={brochureFormOpen} onOpenChange={setBrochureFormOpen}>
                        <DynamicForm
                          buttonText={'Download Brochure'}
                          fields={brochureFormField}
                          initialValues={{
                            program: course.slug,
                            ga_client_id: '',
                            business_unit: 'Odinschool',
                            Source_Domain: 'Brochure Form'

                          }}
                          onSubmit={(data) => {
                            handleBrochureFormSubmit(data)
                          }}

                        />
                      </Modal>
                    </div>

                    <div className="space-y-4">
                      <Accordion type="single" collapsible className="w-full">
                        {(course.curriculum || []).map((section: { heading: string; lessons: number; description?: string }, index: number) => (
                          <AccordionItem key={index} value={`section-${index}`} className="border px-4 py-0 rounded-lg mb-4">
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
                      {/* <div className="mt-8 pt-6 border-t">
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
                    </div> */}
                    </div>
                  </TabsContent>

                  <TabsContent value="projects">
                    <CourseProject />
                  </TabsContent>

                  <TabsContent value="certificate" className='px-2'>
                    <CourseCertificate />
                  </TabsContent>

                </Tabs>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Reviews & Recognition</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {/* <BarChart className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Lessons: </span> */}

                        <Image
                          src="https://strapi.odinschool.com/uploads/Google_20100x40_7ed0d4c3dc.webp"
                          alt="google" className='w-20'

                          loading="lazy"
                          width={500}
                          height={500}
                        />
                      </div>
                      {/* <span>{course.curriculum?.reduce((a: number, b: { lessons: number }) => a + b.lessons, 0)}</span> */}
                      <div>
                        <div className='flex items-center gap-2'>
                          <span className='text-xs font-light'>4.6</span>
                          <Image src="https://strapi.odinschool.com/uploads/4_7_Rating_d1c77dfdf8.svg"
                            alt="rating-star" className='w-12'

                            loading="lazy"
                            width={500}
                            height={500}
                          />
                          <span className='text-xs font-light'>1,484 Reviews</span>


                        </div>
                      </div>
                      {/* <span>{course.curriculum.map((section) => section.lessons).reduce((a, b) => a + b, 0)}</span> */}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className='font-semibold text-primary-500 text-base'>Bootcamp</span>

                      <div className='flex gap-2 items-center'>
                        <span className='text-xs font-light'>90.4</span>
                        <Progress value={90.4} className="w-20 h-3" />
                        <span className='text-xs font-light'>5,031 Reviews</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mt-8">

                  {/* upcoming cohort */}
                  <div className='pt-3 pb-4 mb-2 border-b'>
                    {
                      course?.cohortDates &&
                      <div>
                        <span className="font-medium text-sm">Upcoming Cohort:</span>
                        <div className="flex gap-3 mt-2">
                          {
                            course?.cohortDates?.cohort1 &&
                            <div className="text-sm bg-primary-50 border rounded-md px-2 py-1">{formatDateToReadable(course?.cohortDates?.cohort1)}</div>
                          }
                          {
                            course?.cohortDates?.cohort2 &&
                            <div className="text-sm border bg-primary-50 rounded-md px-2 py-1">{formatDateToReadable(course?.cohortDates?.cohort2)}</div>
                          }
                        </div>
                      </div>
                    }
                  </div>

                  <h3 className="text-xl font-bold mb-4">Register Now</h3>
                  <div className="my-4">
                    <p className="text-sm font-extrabold text-red-600 line-through opacity-100">
                      {formatCurrencyINR(course.final_price)} <span className="font-medium text-sm text-gray-600">+ GST</span>
                    </p>
                    <p className="text-3xl font-bold text-green-600 mt-1 flex items-center gap-1">
                      {formatCurrencyINR(course?.price)} <span className="font-medium text-xl text-gray-600">+ GST</span>
                    </p>
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

                  <h3 className="text-xs text-gray-500 font-regular mb-2">By providing your contact details, you agree to our Privacy Policy</h3>
                  {/* <div> */}
                  {/* <Button className="w-full">
                      Enroll Now
                    </Button> */}
                  {/* <RequestCallback slug={
                      course.slug === 'data-science-course' ? 'Data Science Course'
                        : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course'
                          : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course'
                            : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI'
                              : course.slug
                    } buttonText={'Enroll Now'} /> */}
                  {/* </div> */}


                  <Link href={`/course-checkout/${course.url_slug}`}>
                    <Button className="w-full my-2 bg-yellow-500 hover:bg-yelow-500 text-white">Reserve your seat at <span className='font-medium'>₹{course.slug === 'generative-ai-course-iitg' ? '10000' : '5000'} + GST </span> </Button>
                  </Link>


                  <Button className='w-full' onClick={() => setFormOpen(true)}>Request a callback</Button>
                  <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                    <PrimaryForm slug={course.slug} isModal={true} />
                  </Modal>
                  <h3 className="text-xs text-gray-500 font-regular italic mb-4 mt-4 border border-gray-300 rounded-md p-1.5">No cost EMIs Available. 6,9,12 months EMI option available.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <div className="w-full">
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
