import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card";
import Image from "next/image";
import { CircleCheck, ArrowRight, MoveRight } from 'lucide-react';
import Button from '@/components/components/Button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/components/ui/tabs';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';


import {
    BriefcaseBusiness,
    Building2,
    ChevronLeft,
    ChevronRight,
    MessageCircleQuestion,
    SpeechIcon,
    UserRoundPen,
} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/components/ui/accordion";
import useEmblaCarousel from "embla-carousel-react";
import BrochureButton from "@/components/components/custom-component/BrochureButton";
import { CiCircleCheck } from "react-icons/ci";
import Fee from "@/components/components/DsEliteFeeModule";

const highlightsData = [
  "Get certified by the prestigious E&ICT Academy, IIT Guwahati",
  "Attend live interactive sessions led by experts",
  "Engage in hands-on project-based learning with 20+ projects",
  "A visit to the prestigious IIT Guhawati Campus to expand your professional network (exclusively for successful learners)",
  "Get access to Career Services to assist you in making career transitions",
  "Participate in hackathons, case study discussions, Q & A sessions with experts",
  "Learn technologies and tools to build and deploy GenAI models"
]

const certificateData = {
  heading: `Boost your career with E&ICT Academy - IIT Guwahati's`,
  subheading: `Certification Program in Applied Generative AI`,
  features: [
    {
      id: 1,
      iconLabel: 'https://strapi.odinschool.com/uploads/licensing_51ce68f80c.webp',
      title: '',
      description: 'Earn an invaluable credential to add to your portfolio.'
    },
    {
      id: 2,
      iconLabel: 'https://strapi.odinschool.com/uploads/reputational_721c99b384.webp',
      title: '',
      description: 'Showcase your Generative AI expertise.'
    }
  ],
  certificateImage: 'https://strapi.odinschool.com/uploads/DS_Elite_Course_Certificate_7ae53e8cea.webp'
}

const curriculumData = [
  {
    "title": "Python, Numpy, Pandas",
    "points": [
      "Lists, Tuples, Sets",
      "Dictionaries, Functions",
      "Lambda Functions",
      "Higher Order Functions"
    ]
  },
  {
    "title": "Exploratory Data Analysis (EDA)",
    "points": [
      "Introduction to EDA and Data Cleaning",
      "Data Summarization and Univariate Analysis",
      "Bivariate Analysis and Correlation Heatmaps",
      "Customizing and Interactive Visualizations"
    ]
  },
  {
    "title": "Neural Networks and Deep Learning",
    "points": [
      "CNN and its working principal",
      "RNN and its types",
      "Transformers",
      "Models"
    ]
  },
  {
    "title": "LLMs and Model Quantization",
    "points": [
      "Foundational Language Models",
      "LLAMA3 Instruct 8B / 70B",
      "LLAMA3 Chat, LLAMA3 code",
      "E5 embedding, MIXTRAL 8X7B"
    ]
  },
  {
    "title": "Supervised and Unsupervised Learning",
    "points": [
      "Introduction to Supervised Learning",
      "Linear Regression and Logistic Regression",
      "Decision Trees and Random Forests",
      "Unsupervised Learning and Clustering Methods-With a comparison to SVM"
    ]
  },
  {
    "title": "Fine Tuning of LLMs",
    "points": [
      "Para Efficient Fine-tuning",
      "LORA (Low-Rank Adaptation)",
      "QLoRA (Quantized Low-Rank Adaptation)",
      "Comparison and Applications of LORA and QLoRA"
    ]
  },
  {
    "title": "RAGs",
    "points": [
      "Chunking, Embedding, Search",
      "Ranking, Generation, Evaluation",
      "RAG frameworks, LLANGCHAIN basics",
      "LLAMAINDEX, LLANGRAPH"
    ]
  },
  {
    "title": "NLP & Text Processing",
    "points": [
      "Tokenization and Sentence Splitting",
      "Stopword Removal, Stemming, and Lemmatization",
      "Part-of-Speech (POS) Tagging and Named Entity Recognition (NER)",
      "Introduction to NLTK and SpaCy"
    ]
  },
  {
    "title": "Agents",
    "points": [
      "Agentic workflows and function calling",
      "LLANGCHAIN advanced, AUTOGEN",
      "Containerised deployment and Kubernetes - LLM",
      "Deployment"
    ]
  },
]

const curriculumData1 = [
  {
    "title": "Mini capstone projects like",
    "points": [
      "ReviewRadar: Sentiment Analysis for E-Commerce Reviews",
      "CrisisFilter: Real-Time Disaster Tweet Classifier",
      "MediBot: Symptom-to-Disease Text Classifier"
    ]
  },
  {
    "title": "Capstone Projects like",
    "points": [
      "ContentCrafter AI: GenAI Assistant for Content Creation",
      "Study-Buddy: AI-Powered Personalized Learning Companion",
      "GlobeMate: AI-Powered Travel Itinerary Generator"
    ]
  }
]

const projectData = [
  {
    "id": "1",
    "project_img": "https://www.odinschool.com/hubfs/Quill_Blog_Genie__AI-Powered_Content_Creation_Assistant.webp",
    "project_title": "Quill Blog Genie: AI-Powered Content Creation Assistant",
    "project_description": "Design a GenAI tool to assist content creators, bloggers, and social media managers in crafting content."
  },
  {
    "id": "2",
    "project_img": "https://www.odinschool.com/hubfs/Script-Master__Automated_Script_writer_for_Video_Content.webp",
    "project_title": "Script-Master: Automated Script writer for Video Content",
    "project_description": "Build a tool to assist video creators for producing high-quality scripts tailored to their specific needs."
  },
  {
    "id": "3",
    "project_img": "https://www.odinschool.com/hubfs/Study-Buddy__AI-Driven_Personalized_Learning_Assistant.webp",
    "project_title": "Study-Buddy: AI-Driven Personalized Learning Assistant",
    "project_description": "Revolutionize the way students learn by building highly personalized educational content."
  },
  {
    "id": "4",
    "project_img": "https://www.odinschool.com/hubfs/Harmony-Hub__Generative_AI_for_Real-Time_Music_Composition.webp",
    "project_title": "Harmony-Hub: Generative AI for Real-Time Music Composition",
    "project_description": "Develop an advanced Generative AI system to play music in real-time, tailored to user inputs."
  },
  {
    "id": "5",
    "project_img": "https://www.odinschool.com/hubfs/Pixel-Tales__AI-Generated_Visual_Storytelling_Tool.webp",
    "project_title": "Pixel-Tales: AI-Generated Visual Storytelling Tool",
    "project_description": "Build an AI-powered tool to transform the way stories are told by combining narrative and visual elements."
  },
  {
    "id": "6",
    "project_img": "https://www.odinschool.com/hubfs/Chat_with_Website%20(1).webp",
    "project_title": "Chat with Website",
    "project_description": "Create an interactive application that allows users to query a specific website and receive responses."
  },
  {
    "id": "7",
    "project_img": "https://www.odinschool.com/hubfs/Q__A_with_a_Code_Base_vector.webp",
    "project_title": "Q & A with a Code Base",
    "project_description": "Provide an intuitive interface for exploring a code repository through conversational interactions."
  },
  {
    "id": "8",
    "project_img": "https://www.odinschool.com/hubfs/Medical_Chatbot.webp",
    "project_title": "Medical Chatbot",
    "project_description": "Develop an intelligent conversational interface for accessing medical information from a medical book."
  },
  {
    "id": "9",
    "project_img": "https://www.odinschool.com/hubfs/Text_to_SQL_Query_and_Output_Generator%20(1).webp",
    "project_title": "Text to SQL Query and Output Generator",
    "project_description": "Allow users to input questions in plain English and receive corresponding SQL queries and results."
  }
]

const CourseCarrerServiceData = [
    {
        title: "Workplace Behavioral Skills Workshops",
        description:
            "Get ready to become a great cultural fit at your workplace. Learn workplace skills from experts.",
        icon: SpeechIcon,
    },
    {
        title: "Professional Profile Building",
        description:
            "Optimize your resume and LinkedIn profiles to maximize your chances of landing amazing opportunities.",
        icon: UserRoundPen,
    },
    {
        title: "Interview Preparation",
        description:
            "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions.",
        icon: MessageCircleQuestion,
    },
    {
        title: "Holistic Placement Support",
        description:
            "Get exclusive access to OdinSchool’s placement portal and placement support.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Industry Interaction and Discussions",
        description:
            "Engage in multiple interactions and case study discussions with industry professionals.",
        icon: Building2,
    },
];

const feeData = [
    {
      id: '1',
      cohortDate: '28 Jun 2025',
      totalPrice: '₹1,25,000',
      price: '₹1,25,000',
      offer: "Limited Seats! Book Yours Before They're Gone.",
      includes: 'Live Online Learning + Certificate',
      details: [
        { label: 'Live Online Classes', description: '' },
        { label: 'Hands-on Learning', description: '' },
        { label: 'Projects', description: '' },
        { label: 'Career Services', description: '' },
      ],
      emiNote: 'Scholarships & EMI Options Available!',
      emiDescription: `At OdinSchool, we believe that quality education should be accessible to everyone.\nWe offer flexible EMI options and scholarships to support this vision. No cost EMIs available!`,
      partners: [
        { name: 'FeeMonk', logo: 'https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp' },
        { name: 'Liquiloans', logo: 'https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp' },
        { name: 'Bajaj Finance', logo: 'https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp' },
        { name: 'Avanse', logo: 'https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg' }
      ]
    },
    {
      id: '2',
      cohortDate: '26 Jun 2025',
      totalPrice: '₹1,25,000',
      price: '₹1,25,000',
      offer: "Limited Seats! Book Yours Before They're Gone.",
      includes: 'Live Online Learning + Certificate',
      details: [
        { label: 'Live Online Classes', description: '' },
        { label: 'Hands-on Learning', description: '' },
        { label: 'Projects', description: '' },
        { label: 'Career Services', description: '' },
      ],
      emiNote: 'Scholarships & EMI Options Available!',
      emiDescription: `At OdinSchool, we believe that quality education should be accessible to everyone.\nWe offer flexible EMI options and scholarships to support this vision. No cost EMIs available!`,
      partners: [
        { name: 'FeeMonk', logo: 'https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp' },
        { name: 'Liquiloans', logo: 'https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp' },
        { name: 'Bajaj Finance', logo: 'https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp' },
        { name: 'Avanse', logo: 'https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg' }
      ]
    },

  ]

const faQdata = [
    {
        question: "What is the admission process like?",
        answer: "The admission process is simple; our counsellors will get in touch with you to review your eligibility. Upon careful evaluation of your profile, your eligibility will be determined and you will be onboarded.",
    },
    {
        question: "Will I be awarded a certificate after the Program?",
        answer: "Yes, upon successfully completing this Certification Program in Applied Generative AI, you will be awarded a certificate from the prestigious E&ICT Academy, IIT Guwahati. ",
    },
    {
        question: "What is the IIT Guwahati campus visit about?",
        answer: "Exclusively for successful learners, the IIT Guwahati campus visit offers an excellent opportunity to meet faculty, connect with peers, and expand your professional network. The visit’s schedule will be determined by IIT Guwahati.\n\nPlease note that participation is optional, and learners will be responsible for their own travel and accommodation expenses.",
    },
    {
        question:
            "What are the eligibility criteria? Are there any prerequisites?",
        answer: "Applicants who have a Bachelor's degree with an aggregate of at least 50% marks are welcome to join this course. A background in Mathematics or Computer Science, and knowledge of Descriptive Statistics, Linear Algebra, SQL, and Python, are preferable.",
    },
    {
        question: "Do you offer a job guarantee?",
        answer: "\n\nNo, there is no job guarantee.\nOdinSchool is proud to offer top-notch live classes, mentorship, projects, and extensive career services. We also provide dedicated placement assistance through our network of 500+ hiring partners. We're fully committed to your success. However, it's important to understand that this Course does not offer a job guarantee and that your own effort and dedication are essential to achieving success. We encourage you to work hard and take full advantage of the job options we provide, knowing that we'll be there to support you every step of the way.\n\n",
    },
    {
        question:
            "Is there a refund policy for this Certification Program in Applied Generative AI?",
        answer: "As per our refund policy, fee amounts once paid are non-refundable.",
    },
];

const mentorsData = [
    {
        id: "Dr._Gaurav_trivedi",
        name: "Dr. Gaurav Trivedi",
        designation: "Professor",
        currentCompany: "E&ICT",
        photo: "https://www.odinschool.com/hubfs/Dr._Gaurav_trivedi%20(1).webp",
        linkedin: "https://www.linkedin.com/in/gaurav-trivedi-4671a33/",
        prevCompanies: [],
    },
    {
        id: "Debanga Raj Neog",
        name: "Dr. Debanga Raj Neog",
        designation: "Assistant Professor",
        currentCompany: "E&ICT",
        photo: "https://www.odinschool.com/hubfs/Debanga%20Raj%20Neog.webp",
        linkedin: "https://www.linkedin.com/in/debanga/",
        prevCompanies: [],
    },
    {
        id: "Dr. Rajita",
        name: "Dr. B S A S Rajita",
        designation: "Lead Faculty",
        currentCompany: "Group-5322",
        photo: "https://www.odinschool.com/hubfs/Dr.%20Rajita.webp",
        linkedin: "https://www.linkedin.com/in/b-s-a-s-rajita-a5b372223/",
        prevCompanies: [],
    },
    {
        id: "sandeep-s",
        name: "Sandeep Singh",
        designation: "Lead Faculty",
        currentCompany: "Group-5322",
        photo: "https://www.odinschool.com/hubfs/sandeep-s.webp",
        linkedin:
            "https://www.linkedin.com/in/sandeep-kumar-singh-phd-50200919/",
        prevCompanies: [],
    },
    {
        id: "Deepthi_Chimala",
        name: "Dr. Deepthi Chimala",
        designation: "Head, Carbon and Biodiversity",
        currentCompany: "Arkadiah Technology",
        photo: "https://www.odinschool.com/hubfs/Deepthi_Chimala.webp",
        linkedin: "https://www.linkedin.com/in/deepthi-chimala-7667b963/",
        prevCompanies: [],
    },
    {
        id: "Sangamesh KS",
        name: "Sangamesh KS",
        designation: "Founder",
        currentCompany: "KSAC",
        photo: "https://www.odinschool.com/hubfs/Sangamesh%20KS%20.webp",
        linkedin: "https://www.linkedin.com/in/sangameshks/",
        prevCompanies: [],
    },
    {
        id: "Naval_Yemul",
        name: "Naval Yemul",
        designation: "Databricks Instructor",
        currentCompany: "Data Bricks",
        photo: "https://www.odinschool.com/hubfs/Naval_Yemul.webp",
        linkedin: "https://www.linkedin.com/in/naval-yemul-a5803523/",
        prevCompanies: [],
    },
];

const SuccessStories = () => {
  const [formOpen, setFormOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots = useMemo(() => {
        if (!emblaApi) return [];
        return emblaApi.scrollSnapList().map((_, index) => index);
    }, [emblaApi, mentorsData]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [emblaRef1, emblaApi1] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots1 = useMemo(() => {
        if (!emblaApi1) return [];
        return emblaApi1.scrollSnapList().map((_, index) => index);
    }, [emblaApi1, projectData]);

    const scrollPrev1 = useCallback(() => emblaApi1?.scrollPrev(), [emblaApi1]);
    const scrollNext1 = useCallback(() => emblaApi1?.scrollNext(), [emblaApi1]);



    return (
        <>
            <Navbar />
            <main className="min-h-screen">
              <section className="bg-white">
            <div className="w-full">
                          <img
                        alt="Indian Institute of Technology Guwahati"
                          src={"https://20029733.fs1.hubspotusercontent-na1.net/hub/20029733/hubfs/iitG-building%20(1).webp?width=1500&height=500&name=iitG-building%20(1).webp"}
                          className="w-full object-cover"
                        />
                      </div>
              </section>

                <section className={`bg-primary-50 py-16`}>
                  <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-8 items-center">
                      {/* Left Text Block */}
                      <div className="md:col-span-6 col-span-1">
                        <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4 text-gray-900">
                          Why learn Generative AI now?
                        </h2>

                        <p className="text-sm text-gray-600">Because Generative AI is the Future.</p>
                        <br/>
                        <p className="text-sm text-gray-600">One of the most cutting-edge innovations of recent times, Generative AI is projected to become a $1.3 trillion market in the next 8 years, with a compound annual growth rate of almost 27%.</p>
                        <br/>
                        <p className="text-sm text-gray-600">Professionals skilled in Generative AI will have a lot of career growth opportunities in various industry domains. A recent global survey revealed that 57% of IT companies have identified their Generative AI use cases, out of which 41% are actively upskilling their employees to meet their demands!</p>
                        <br/>
                        <p className="text-sm text-gray-600">Become a sought after Generative AI engineer and let your career take a massive leap with E&ICT Academy's Certification Program in Applied Generative AI.</p>
                      </div>

                      {/* Right Certificate Image */}
                      <div className="md:col-span-6 col-span-1 flex justify-center">
                        <Image
                          src={certificateData.certificateImage}
                          alt="OdinSchool Data Science Certificate"
                          width={400}
                          height={300}
                          className="w-full max-w-xs md:max-w-lg h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </section>


              <section className={`${'px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} relative`}>
                  <div className="container mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-10">
                      <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
                        {'Program Highlights'}
                      </h2>
                      <p className="">
                        {"Position yourself at the forefront of technological innovation with this Certification Program in Applied Generative AI."}
                      </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4'>
                      {
                        highlightsData.map((data, index) => {
                          return (
                            <div key={index} className='bg-primary-50 p-4 rounded-md grid grid-cols-12 items-center'>
                              <div className='md:col-span-1 col-span-12 flex items-center'>
                                {/* <Image src={data.icon} alt={data.title} className="w-18 h-auto block mx-auto" loading="lazy" width={50} height={50}  /> */}
                                <div className='bg-primary-600 rounded-full w-10 h-10 flex justify-center items-center block mx-auto md:mb-0 mb-2'>
                                  <MoveRight className='text-white' />
                                </div>
                              </div>
                              <div className='md:col-span-10 col-span-12 md:text-start text-center'>
                                <div className='md:ml-3'>
                                  <h2 className='font-semibold md:text-lg text-md mb-1'>{data}</h2>
                                  {/* <p className='md:text-sm text-xs'>{data.description}</p> */}
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                </section>


                <section className={`${'py-16 md:py-24 bg-white'}`}>
                  <div className="container">
                    <div className="my-12 text-center">
                        <h2
                            className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                        >
                          A curriculum designed for outcomes
                        </h2>
                        <p className="text-md mx-auto max-w-2xl text-gray-600">
                          Elevate your skills by learning a cutting-edge Generative AI curriculum designed by E&ICT Academy, IIT Guwahati.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {curriculumData.map((item, index) => (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-xl h-full flex flex-col justify-between">
                          <div className='h-[240px] overflow-auto'>
                            <h3 className="font-semibold md:text-lg text-md mb-4 text-black">{item.title}</h3>
                            <ul className="md:text-md text-sm text-black space-y-2 mb-3">
                              {item.points.map((point, idx) => (
                                <li key={idx} className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>{point}</span></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                      {curriculumData1.map((item, index) => (
                        <div key={index} className="p-5 rounded-lg shadow-xl h-full flex flex-col justify-between bg-primary-50">
                          <div className='h-[200px] overflow-auto'>
                            <h3 className="font-semibold md:text-lg text-md mb-4 text-black">{item.title}</h3>
                            <ul className="md:text-md text-sm text-black space-y-2 mb-3">
                              {item.points.map((point, idx) => (
                                <li key={idx} className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>{point}</span></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                        <div className="flex items-center justify-center mt-6">
                          <div className='w-[250px] bg-white p-5 rounded-lg shadow-xl overflow-auto flex flex-col items-center justify-center'>
                            <h3 className="font-semibold md:text-lg text-md text-black">Final Assessment</h3>
                          </div>
                        </div>

                    <br/>
                    <br/>
                    <BrochureButton slug={'data-science-elite-course'} />
                  </div>
                </section>

                <section
                    className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                                <span className="text-primary-600">
                                    Real-world projects
                                </span>{" "} to reinforce your learning
                            </h2>
                        </div>

                        <div className="relative px-6">
                            {/* Navigation Arrows */}
                            <button
                                onClick={scrollPrev1}
                                className="hover:bg-primary-50 text-primary-600 absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={scrollNext1}
                                className="hover:bg-primary-50 text-primary-600 absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Carousel */}
                            <div className="overflow-hidden" ref={emblaRef1}>
                                <div className="flex min-w-0">
                                    {
                                      projectData?.map((project: any, index: any) => {
                                        return (
                                        <div
                                            key={project.id}
                                            className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                                        >
                                            <Card className="mx-2 h-full overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
                                                <CardContent className="p-0">
                                                            <div className="flex flex-col items-center">
              <Image
                src={project.project_img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"

                loading="lazy"
                width={500}
                height={500}
              />
            </div>

                                                                <div className="h-30 overflow-hidden">
                                                    <CardHeader className="pb-2">
                                                      <div className="flex justify-between items-center">
                                                        <CardTitle className="text-md">{project.project_title}</CardTitle>
                                                      </div>
                                                    </CardHeader>
                                                    <CardContent className='p-6 pt-3'>
                                                      <p className="text-sm text-gray-600">{project.project_description}</p>
                                                    </CardContent>
                                                            </div>

                                                    </CardContent>
                                            </Card>
                                        </div>
                                    )
                                      })
                                    }
                                </div>
                            </div>

                            {/* Pagination Dots */}
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {dots1.map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                        className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-200 md:h-2 md:w-2 ${
                                            index === selectedIndex1
                                                ? "bg-primary-600 w-[1.5rem] shadow md:w-[28px]"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="my-12 text-center">
                        <h2
                            className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                        >
                            <span className="text-primary-600">
                                Career Services
                            </span>{" "}
                            in a nutshell
                        </h2>
                        <p className="text-md mx-auto max-w-2xl text-gray-600">
                            Get comprehensive job readiness training till 18
                            months after the to be fully prepared for every
                            aspect of your career ahead.
                        </p>
                    </div>

                    <div className="mb-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
                        {CourseCarrerServiceData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${"bg-primary-50"} rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-md`}
                                >
                                    <div className="bg-primary-50 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow ">
                                        <item.icon className="text-primary-600 h-8 w-8" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

<div className={"bg-primary-50"}>

                <div className="container py-8">

                    <div className="animate-on-scroll my-16 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 ">
                        <div className="mb-10 text-center">
                            <h3 className="mb-4 text-2xl font-bold">
                                How do I enroll in this program?
                            </h3>
                            <p className="mx-auto max-w-3xl text-gray-600">
                                Our structured learning path takes you from
                                beginner to certified professional
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {[
                                { step: "1", title: "Apply" },
                                {
                                    step: "2",
                                    title: "Data Talk to A Counsellor",
                                },
                                { step: "3", title: "Review Your Eligibility" },
                                { step: "4", title: "Get Started" },
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center"
                                >
                                    <div className="bg-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                                        {step.step}
                                    </div>
                                    {index < 3 && (
                                        <div className="bg-primary-200 absolute left-[50%] top-6 hidden h-0.5 w-auto md:block"></div>
                                    )}
                                    <h4 className="mb-2 text-lg font-bold">
                                        {step.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
</div>


                <section className={`${'my-32'}`}>
                  <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      {/* Left Text Block */}
                      <div className="md:col-span-6 col-span-1">
                        <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4 text-gray-900">
                          {certificateData.heading} { " "}
                          <span className="text-primary-600">{certificateData.subheading}</span>
                        </h2>
                        <ul className="space-y-6">
                          {certificateData.features.map(({ id, iconLabel, title, description }) => (
                            <li
                              key={id}
                              className="flex items-start gap-4 items-center"
                            >
                              <div className="flex-shrink-0 bg-primary-50 rounded-md p-2">
                                <Image
                                  src={iconLabel}
                                  alt={`${title} icon`}
                                  width={48}
                                  height={48}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>
                              <div>
                                {/* <p className="font-semibold text-gray-900">{title}</p> */}
                                <p className="text-sm text-gray-600">{description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Certificate Image */}
                      <div className="md:col-span-6 col-span-1 flex justify-center">
                        <Image
                          src={certificateData.certificateImage}
                          alt="OdinSchool Data Science Certificate"
                          width={400}
                          height={300}
                          className="w-full max-w-xs md:max-w-lg h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section
                    className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                                Meet our{" "}
                                <span className="text-primary-600">
                                    Mentors and Speakers!
                                </span>
                            </h2>
                            <p className="body-md mx-auto max-w-2xl text-gray-600">
                                Get the chance to interact with professionals
                                from top companies, who bring years of
                                real-world experience to the table.
                            </p>
                        </div>

                        <div className="relative px-6">
                            {/* Navigation Arrows */}
                            <button
                                onClick={scrollPrev}
                                className="hover:bg-primary-50 text-primary-600 absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="hover:bg-primary-50 text-primary-600 absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Carousel */}
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex min-w-0">
                                    {mentorsData.map((instructor) => {
                                        return (
                                            <div
                                                key={instructor.id}
                                                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                                            >
                                                <Card className="mx-2 h-full overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
                                                    <Link
                                                        href={`/${instructor.linkedin}`}
                                                    >
                                                        <CardContent className="p-0">
                                                            <div className="bg-primary-600 h-7"></div>
                                                            <div className="p-6">
                                                                <div className="flex flex-col items-center">
                                                                    <Avatar className="mb-4 h-24 w-24">
                                                                        <AvatarImage
                                                                            src={
                                                                                instructor.photo
                                                                            }
                                                                            alt={
                                                                                instructor.name
                                                                            }
                                                                        />
                                                                        <AvatarFallback>
                                                                            {instructor.name.charAt(
                                                                                0,
                                                                            )}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                    <h3 className="mb-1 text-xl font-semibold">
                                                                        {
                                                                            instructor.name
                                                                        }
                                                                    </h3>
                                                                    <p className="mb-0 text-sm text-gray-500">
                                                                        {
                                                                            instructor.designation
                                                                        }
                                                                    </p>
                                                                    <p className="mb-4 text-center text-gray-600">
                                                                        {}
                                                                    </p>
                                                                </div>
                                                                <div className="mb-0 flex flex-col items-center space-y-3">
                                                                    <div
                                                                        className="mb-4 overflow-hidden rounded-md border-gray-200"
                                                                        title={
                                                                            instructor.currentCompany
                                                                        }
                                                                    >
                                                                        {
                                                                            instructor.currentCompany
                                                                        }
                                                                    </div>
                                                                    {instructor
                                                                        .prevCompanies
                                                                        .length >
                                                                        0 && (
                                                                        <div className="flex w-full justify-between border-t-2 pt-4">
                                                                            {instructor.prevCompanies.map(
                                                                                (
                                                                                    company,
                                                                                    index,
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className="overflow-hidden rounded-md border-gray-200"
                                                                                        title={
                                                                                            company
                                                                                        }
                                                                                    >
                                                                                        <Image
                                                                                            src={
                                                                                                company
                                                                                            }
                                                                                            alt={
                                                                                                company
                                                                                            }
                                                                                            className="h-full w-full object-contain"
                                                                                            loading="lazy"
                                                                                            width={
                                                                                                500
                                                                                            }
                                                                                            height={
                                                                                                500
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Link>
                                                </Card>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Pagination Dots */}
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {dots.map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                        className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-200 md:h-2 md:w-2 ${
                                            index === selectedIndex
                                                ? "bg-primary-600 w-[1.5rem] shadow md:w-[28px]"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            <section
              className={
                "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
              }
            >
                  <div className="container">
<div className="w-full">
                            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                                Get started now!
                            </h2>
                            
                        </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Upcoming Cohort</p>
                      <Tabs defaultValue={feeData[0].id} className="w-full">
                        <TabsList className="bg-white p-2 rounded-md mb-6">
                          {feeData.map((item) => (
                            <TabsTrigger
                              key={item.id}
                              value={item.id}
                              className="px-5 py-2 text-sm data-[state=active]:bg-primary-600 data-[state=active]:text-white border border-primary-500"
                            >
                              {item.cohortDate}
                            </TabsTrigger>
                          ))}
                        </TabsList>

                        {feeData.map((selected) => (
                          <TabsContent key={selected.id} value={selected.id}>
                            <div className="grid grid-cols-12 gap-6 items-center">
                              {/* Left Block */}
                              <div className="col-span-12 md:col-span-4">
                                <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">Fee Structure</h2>
                                <p className="text-lg font-medium text-gray-700 mb-4">{selected.includes}</p>
                                <hr className="border-gray mb-4" />

                                <div className="space-y-3">
                                  {selected.details.map((item, index) => (
                                    <div key={index} className="grid grid-cols-12 items-center gap-2">
                                      <span className="col-span-1 bg-primary-50 rounded-full w-8 h-8 flex justify-center items-center">
                                        <CircleCheck className="text-white bg-primary-600 block rounded-full mx-auto h-5 w-5" />
                                      </span>
                                      <div className="col-span-10">
                                        <p className="ml-1 font-semibold text-md text-gray-800 leading-tight ">{item.label}</p>
                                        {/* <p className="ml-2 text-sm text-gray-500 leading-snug">{item.description}</p> */}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Price Card */}
                              <div className="flex flex-col items-center justify-center col-span-12 md:col-span-4 border-[0.2rem] rounded-xl p-6 shadow-sm border-primary-600 h-full">
                                <h3 className="text-3xl font-bold text-center text-green-600">
                                  {selected.price} <span className="text-base font-normal">+ GST</span>
                                </h3>
                                <div className="bg-blue-100 text-blue-900 text-sm px-3 py-2 mt-4 rounded-md text-center font-medium">
                                  {selected.offer}
                                </div>

                                <br />
                                <Button
                                  size="md"
                                  variant="outline"
                                  icon={<ArrowRight className="ml-1" size={18} />}
                                  iconPosition="right"
                                  className="font-semibold w-full py-3"
                                  onClick={() => setFormOpen(true)}
                                >
                                  Enquire Now
                                </Button>
                                <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                                  <PrimaryForm buttonText='Enquire Now' slug={'data-science-elite-course'} isModal={true} sourceDomain='Course form' />
                                </Modal>
                              </div>

                              {/* EMI Note */}
                              <div className="col-span-12 md:col-span-4 bg-green-100 p-6 rounded-xl">
                                <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md inline-block mb-3">
                                  {selected.emiNote}
                                </span>
                                <p className="text-sm text-gray-800 whitespace-pre-line mb-4">{selected.emiDescription}</p>
                                <p className="text-sm font-medium text-gray-700 mb-2">Our Financing Partners:</p>
                                <div className="grid grid-cols-2 gap-3 text-sm font-semibold max-w-xs">
                                  {selected.partners.map((partner, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 border border-green-300 rounded-md">
                                      <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={80}
                                        height={24}
                                        className="block mx-auto"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  </div>
                </section>


                <section
                    className={
                        "bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                >
                    <div className="container max-w-4xl">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            {/* <h2 className="heading-lg mb-4"> */}
                            <h2
                                className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                            >
                                Certification Program in Applied Generative AI{" "}
                                <span className="text-primary-600">FAQs</span>
                            </h2>
                        </div>
                        <Accordion type="single" collapsible>
                            {faQdata.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                >
                                    <AccordionTrigger>
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SuccessStories;