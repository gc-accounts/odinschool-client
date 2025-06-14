import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/components/ui/card";
import Image from "next/image";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Button from "@/components/components/Button";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/components/ui/tabs";
import Modal from "@/components/components/component-template/Modal";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";
import CareerServices1 from "@/components/components/CareerServices1";
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
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import CertificationSection from "@/components/components/CertificationSection";
import Certification from "@/components/components/Certification";
import { DsCertificateData } from "@/components/data/course-section/certificate/DsEliteCertificateData";
import OrganizationLogos from "@/components/components/OrganizationLogos1";
import StudentsTicker from "@/components/components/StudentsTicker";
import InstructorProfile from "@/components/components/InstructorProfileGrid";
import getCourseData from "@/components/utils/getCourseData";
import { Progress } from "@/components/components/ui/progress";
import PlatformComparison from "@/components/components/PlatformComparison";
import ToolsSection from "@/components/components/ToolsSection";
import DynamicForm from "@/components/components/form/DynamicForm";
import { useToast } from "@/components/hooks/use-toast";
import brochureFormField from "@/components/data/brochureFormField";
import Markdown from "@/components/components/Markdown";
import JobsSection from "@/components/components/JobsSection1";
import Testimonials from "@/components/components/Testimonials1";
import DsEliteFold from "@/components/components/DsEliteFold1";

const projects = [
    {
        id: 1,
        title: "COVID - 19 Prediction",
        description:
            "Develop a predictive model that can accurately identify the likelihood of COVID-19 infection",
        image: "https://strapi.odinschool.com/uploads/COVID_19_Prediction_c49eca5577.webp",
    },
    {
        id: 2,
        title: "Customer Churn Rate Prediction",
        description:
            "Predict churn rates using data collection, preparation, analysis, and visualization",
        image: "https://strapi.odinschool.com/uploads/Customer_Churn_Rate_Prediction_5719b98f24.webp",
    },
    {
        id: 3,
        title: "Health Insurance Prediction",
        description:
            "Build a predictive ML model to increase the accuracy of health insurance prediction",
        image: "https://strapi.odinschool.com/uploads/Health_Insurance_Prediction_5037b70c78.webp",
    },
    {
        id: 4,
        title: "Bank Term Deposit",
        description:
            "Develop an ML model predicting subscriptions to a term deposit",
        image: "https://strapi.odinschool.com/uploads/Health_Insurance_Prediction_5037b70c78.webp",
    },
    {
        id: 5,
        title: "Credit Card Approval",
        description:
            "Help banks find potential customers to give out credit cards to by building an ML model",
        image: "https://strapi.odinschool.com/uploads/Health_Insurance_Prediction_5037b70c78.webp",
    },
    {
        id: 6,
        title: "California Housing Price Prediction",
        description:
            "Uncover California's housing market trends effortlessly with powerful Python libraries",
        image: "https://strapi.odinschool.com/uploads/Health_Insurance_Prediction_5037b70c78.webp",
    },
    {
        id: 7,
        title: "Cinemalytics",
        description:
            "The project aims to design a database system with views focusing on films released in 2006 and showcasing the total revenue per film.",
        prerequisites: "SQL",
        tools: ["MySQL Workbench"],
        ctaText: "Request a callback",
        ctaLink: "#",
        videoThumb:
            "https://strapi.odinschool.com/uploads/Python_Analysis_on_Air_Bn_B_20_1_4183a90b2f.webp",
        videoUrl:
            "https://20029733.fs1.hubspotusercontent-na1.net/hubfs/20029733/Python%20Analysis%20on%20AirBnB.mp4", // sample URL
    },
    {
        id: 8,
        title: "Python Analysis on AirBnB",
        description:
            "This project explores the data to correct any quality issues, visualizes the data and identifies key insights and recommendations.",
        prerequisites: "Python, Pandas, Matplotlib, Seaborn, Excel",
        tools: ["Python", "Jupyter Notebook", "Excel"],
        ctaText: "Request a callback",
        ctaLink: "#",
        videoThumb:
            "https://strapi.odinschool.com/uploads/Python_Analysis_on_Air_Bn_B_20_1_4183a90b2f.webp",
        videoUrl:
            "https://20029733.fs1.hubspotusercontent-na1.net/hubfs/20029733/Python%20Analysis%20on%20AirBnB.mp4", // sample URL
    },
];

const projectData = [
    {
        id: "1",
        project_img:
            "https://www.odinschool.com/hubfs/Quill_Blog_Genie__AI-Powered_Content_Creation_Assistant.webp",
        project_title:
            "Quill Blog Genie: AI-Powered Content Creation Assistant",
        project_description:
            "Design a GenAI tool to assist content creators, bloggers, and social media managers in crafting content.",
    },
    {
        id: "2",
        project_img:
            "https://www.odinschool.com/hubfs/Script-Master__Automated_Script_writer_for_Video_Content.webp",
        project_title:
            "Script-Master: Automated Script writer for Video Content",
        project_description:
            "Build a tool to assist video creators for producing high-quality scripts tailored to their specific needs.",
    },
    {
        id: "3",
        project_img:
            "https://www.odinschool.com/hubfs/Study-Buddy__AI-Driven_Personalized_Learning_Assistant.webp",
        project_title: "Study-Buddy: AI-Driven Personalized Learning Assistant",
        project_description:
            "Revolutionize the way students learn by building highly personalized educational content.",
    },
    {
        id: "4",
        project_img:
            "https://www.odinschool.com/hubfs/Harmony-Hub__Generative_AI_for_Real-Time_Music_Composition.webp",
        project_title:
            "Harmony-Hub: Generative AI for Real-Time Music Composition",
        project_description:
            "Develop an advanced Generative AI system to play music in real-time, tailored to user inputs.",
    },
    {
        id: "5",
        project_img:
            "https://www.odinschool.com/hubfs/Pixel-Tales__AI-Generated_Visual_Storytelling_Tool.webp",
        project_title: "Pixel-Tales: AI-Generated Visual Storytelling Tool",
        project_description:
            "Build an AI-powered tool to transform the way stories are told by combining narrative and visual elements.",
    },
    {
        id: "6",
        project_img:
            "https://www.odinschool.com/hubfs/Chat_with_Website%20(1).webp",
        project_title: "Chat with Website",
        project_description:
            "Create an interactive application that allows users to query a specific website and receive responses.",
    },
    {
        id: "7",
        project_img:
            "https://www.odinschool.com/hubfs/Q__A_with_a_Code_Base_vector.webp",
        project_title: "Q & A with a Code Base",
        project_description:
            "Provide an intuitive interface for exploring a code repository through conversational interactions.",
    },
    {
        id: "8",
        project_img: "https://www.odinschool.com/hubfs/Medical_Chatbot.webp",
        project_title: "Medical Chatbot",
        project_description:
            "Develop an intelligent conversational interface for accessing medical information from a medical book.",
    },
    {
        id: "9",
        project_img:
            "https://www.odinschool.com/hubfs/Text_to_SQL_Query_and_Output_Generator%20(1).webp",
        project_title: "Text to SQL Query and Output Generator",
        project_description:
            "Allow users to input questions in plain English and receive corresponding SQL queries and results.",
    },
];

const feeData = [
    {
        id: "1",
        cohortDate: "28 Jun 2025",
        totalPrice: "₹1,25,000",
        price: "₹1,00,000",
        offer: "Limited Seats! Book Yours Before They're Gone.",
        includes: "Live Online Learning + Certificate",
        details: [
            { label: "Live Online Classes", description: "" },
            { label: "Hands-on Learning", description: "" },
            { label: "Projects", description: "" },
            { label: "Career Services", description: "" },
        ],
        emiNote: "Scholarships & EMI Options Available!",
        emiDescription: `At OdinSchool, we believe that quality education should be accessible to everyone.\nWe offer flexible EMI options and scholarships to support this vision. No cost EMIs available!`,
        partners: [
            {
                name: "FeeMonk",
                logo: "https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp",
            },
            {
                name: "Liquiloans",
                logo: "https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp",
            },
            {
                name: "Bajaj Finance",
                logo: "https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp",
            },
            {
                name: "Avanse",
                logo: "https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg",
            },
        ],
    },
    {
        id: "2",
        cohortDate: "26 Jun 2025",
        totalPrice: "₹1,25,000",
        price: "₹1,00,000",
        offer: "Limited Seats! Book Yours Before They're Gone.",
        includes: "Live Online Learning + Certificate",
        details: [
            { label: "Live Online Classes", description: "" },
            { label: "Hands-on Learning", description: "" },
            { label: "Projects", description: "" },
            { label: "Career Services", description: "" },
        ],
        emiNote: "Scholarships & EMI Options Available!",
        emiDescription: `At OdinSchool, we believe that quality education should be accessible to everyone.\nWe offer flexible EMI options and scholarships to support this vision. No cost EMIs available!`,
        partners: [
            {
                name: "FeeMonk",
                logo: "https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp",
            },
            {
                name: "Liquiloans",
                logo: "https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp",
            },
            {
                name: "Bajaj Finance",
                logo: "https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp",
            },
            {
                name: "Avanse",
                logo: "https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg",
            },
        ],
    },
];

const curriculum = [
    {
        id: "1441",
        heading: "Statistics & Exploratory Data Analysis",
        lessons: 15,
        description:
            "- Introduction to Data & Datasheet Basic\n- Types of data (nominal, ordinal, etc.)\n- SUM, AVERAGE, IF\n- Sorting\n- Filtering\n- Removing duplicates\n- Data Visualization\n- Basic charts: bar, line, pie\n- When to use which chart\n- Descriptive Statistics\n- Mean, Median, Mode\n- Standard deviation\n- Range\n- Correlation\n- Storytelling with Data + Case Study",
    },
    {
        id: "1442",
        heading: "Power BI",
        lessons: 8,
        description:
            "- Data sources and connections\n- Data transformation and cleansing\n- Interactive reports and dashboards using Plotly\n- Visualizations\n- DAX basics\n- Slicers\n- Filters\n- Calculated Columns and Measures",
    },
    {
        id: "1443",
        heading: "SQL",
        lessons: 8,
        description:
            "- Introduction to databases\n- Basic queries, operators and functions\n- Data Types\n- Primary key, Foreign key\n- Joins\n- Subqueries\n- Window Functions\n- Common Table Expressions (CTEs)",
    },
    {
        id: "1444",
        heading: "Python",
        lessons: 10,
        description:
            "- Variables\n- Data types\n- Loops\n- Functions\n- Lists\n- Tuples\n- Dictionaries\n- NumPy for Numerical Computations, Arrays\n- Pandas for Data Manipulation, Data Cleaning\n- Exploratory Data Analysis",
    },
    {
        id: "1445",
        heading: "Machine Learning",
        lessons: 8,
        description:
            "- Introduction to Machine Learning\n- Overview of ML algorithms\n- Linear Regression\n- Anomaly detection and metrics\n- Train-test split\n- Clustering (K-means)\n- Visualizing clusters\n- Machine Learning Project with streamlit",
    },
    {
        id: "1446",
        heading: "Generative AI",
        lessons: 7,
        description:
            "- Gen AI basics\n- Language Models\n- Hugging Face tokens\n- Model Fine-Tuning and Customization\n- Applications of Generative AI\n- Automating workflows with n8n\n- Ethical Considerations",
    },
    {
        id: "1447",
        heading: "Capstone Project",
        lessons: null,
        description:
            "Showcase your expertise by tackling a comprehensive, industry-relevant problem from start to finish with 10+ projects",
    },
    {
        id: "1448",
        heading: "Advanced Excel",
        lessons: 6,
        description:
            "- Introduction to Excel\n- Data manipulation, cleaning, and formatting\n- Conditional formatting\n- Formulas and functions\n- Pivot tables and charts\n- Data analysis using Excel",
    },
    {
        id: "1449",
        heading: "Tableau",
        lessons: 5,
        description:
            "- Getting Started with Tableau: Installation and Basics\n- Creating and Working with Different Chart Types\n- Data Visualizations with Filters, Hierarchies, and Drilldowns\n- Creating Dashboards and Stories\n- Advanced Functions: Parameters, Forecasting, and Relationships",
    },
    {
        id: "1450",
        heading: "Azure",
        lessons: 5,
        description:
            "- Basics of Cloud Computing and Azure Fundamentals\n- Setting up Azure Virtual Machines and Storage\n- Introduction to Azure SQL Database and Data Factory\n- Working with Azure Databricks for big data processing\n- Integration with Delta Lake and Azure Synapse Analytics",
    },
    {
        id: "1450",
        heading: "Communication Skills",
        lessons: 1,
        description:
            "Effective communication is the bedrock of success in any profession. These sessions offer a comprehensive curriculum to sharpen your communication skills, ensuring you can convey your thoughts and ideas with confidence and clarity.",
    },
    {
        id: "1450",
        heading: "Learning How to Learn",
        lessons: 1,
        description:
            "Under the much needed awareness of learning in today's world, we delve into the art of effective learning. Discover the science behind efficient study techniques, information retention, and continuous skill acquisition. Gain the edge in your career by mastering the skill of learning itself.",
    },
    {
        id: "1450",
        heading: "Confidence Doubler",
        lessons: 1,
        description:
            "Confidence is the cornerstone of success. Our confidence-building session explores practical strategies to boost self-assurance, enhance your communication skills, and project a strong, professional image in any situation.",
    },
    {
        id: "1450",
        heading: "Emotional Intelligence Mastery",
        lessons: 1,
        description:
            "Emotional intelligence is a key driver of effective leadership and teamwork. Explore the depths of self-awareness, empathy, and interpersonal skills in this session, enabling you to navigate professional relationships with finesse.",
    },
    {
        id: "1450",
        heading: "Turn Clockwise - A Time Management Adventure",
        lessons: 1,
        description:
            "Time is a precious resource, and mastering its management is vital. Our time management session equips you with strategies to prioritize tasks, set achievable goals, and maintain a healthy work-life balance.",
    },
    {
        id: "1450",
        heading: "Problem Solving aka Design Thinking",
        lessons: 1,
        description:
            "Innovation is at the heart of success. Develop problem-solving prowess and foster creativity through design thinking methodologies. Learn how to tackle challenges with a systematic and innovative approach.",
    },
];

const faQdata = [
    {
        question: " What is the time commitment from my side? ",
        answer: "We expect you to put in around 15 hours of work on the weekends throughout the duration of the course. The time commitment will be towards live-classes, team tasks, assignments, quizzes, and project work.",
    },
    {
        question: " What projects will I be working on? ",
        answer: "In this Data Science Course, you will work on around 10+ projects across the core domains of Data Science. Projects are kept updated in line with industry trends; so expect variety.",
    },
    {
        question: " Who are the instructors for this Data Science Course? ",
        answer: "All of our instructors are industry veterans with extensive core experience in their respective fields. Our instructors also come with a passion to teach and enjoy interacting with students.",
    },
    {
        question: " What can I expect at the end of this Course? ",
        answer: "At the end of this course, you will not only be fully prepared to break into the data science industry but also equipped to become a valuable industry asset who is productive from day one. ",
    },
    {
        question: " How are classes conducted? ",
        answer: "All classes are conducted online over the internet using video conferencing solutions like Zoom. You will require access to the internet (2 Mbps+ recommended) on a computer (preferred) to attend. Class size may vary depending on the specific cohort. However, we have teaching assistants available to interact in small groups and also conduct one-on-one sessions.",
    },
    {
        question: " What kind of placement assistance is available? ",
        answer: "Placement assistance is provided to all the students who graduate the Bootcamp as per expected performance standards. We start offering placement assistance after the course completion and continue to offer this assistance up until two years following the bootcamp's start date. Jobs might be available in different cities across India and you are expected to be open to relocating in order to utilize the best options.",
        points: [
            "Successfully complete the Capstone project within the stipulated time period",
            "Successfully clear all the Placement Readiness tests",
            "Submit and get all the documents required for placements verified",
            "Attend all the interview processes, including the test, technical interviews and other related processes",
            "Not reject more than ONE formal company job offer letter",
            "Disclose all important information required for standard background checks",
        ],
    },
    {
        question: " How can I be eligible for placement assistance? ",
        answer: "You will be eligible for the placement assistance if you:",
    },
    {
        question: " Do you offer a job guarantee? ",
        answer: "No, there is no job guarantee. OdinSchool is proud to offer top-notch live classes, mentorship, projects, and extensive career services. We also provide dedicated placement assistance through our network of 500+ hiring partners. We're fully committed to your success. However, it's important to understand that our Course does not offer a job guarantee and that your own effort and dedication are essential to achieving success. We encourage you to work hard and take full advantage of the job options we provide, knowing that we'll be there to support you every step of the way.",
    },
    {
        question: " Is there a refund policy for this Data Science Course? ",
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

const mentorshipData = [
    {
        id: 6,
        image: "https://strapi.odinschool.com/uploads/Waquar_89153aa1ab.webp",
        videoId: "kX5FLldaxBE",
        name: "Waquar Ahmed",
        designation: "Senior Data Analyst",
        highlight: "Career Upgrade",
        companyLogo:
            "https://strapi.odinschool.com/uploads/Sony_5f1d58d939.webp",
        story: "OdinSchool played a pivotal role in my journey, helping me transition from a Business Development Associate to a Senior Data Analyst at Sony with a huge salary jump.",
    },
    {
        id: 6,
        image: "",
        videoId: "kX5FLldaxBE",
        name: "Shalu Chauhan",
        designation: "Trainee Data Analyst",
        highlight: "Career Upgrade",
        companyLogo: "",
        story: "OdinSchool's guidance made my transition from Content Writer to Trainee Data Analyst smooth and rewarding. Grateful for the support and hands-on learning!",
    },
    {
        id: 6,
        image: "",
        videoId: "kX5FLldaxBE",
        name: "Aryan Singh Tomar",
        designation: "Cloud Engineer",
        highlight: "Career Upgrade",
        companyLogo: "",
        story: "My journey from a Cyber Security to a Data Science role at VenAnalytics was made possible with the right skills and industry insights.",
    },

    {
        id: 3,
        name: "Sonia Kaur",
        designation: "Financial Analyst",
        image: "https://strapi.odinschool.com/uploads/Sonia_Kaur_e834dbf646.webp",
        companyLogo:
            "https://strapi.odinschool.com/uploads/Flipkart_100_X40_5fbe626a5e.webp",
        story: "OdinSchool empowered me to transition from a BBA graduate to a Financial Analyst at Flipkart. The guidance and industry-relevant skills I gained were instrumental in achieving my dream role.",
    },
    {
        id: 6,
        image: "",
        videoId: "kX5FLldaxBE",
        name: "Ali Raza",
        designation: "Data Engineer",
        highlight: "Career Upgrade",
        companyLogo: "",
        story: "Now, when I look back, it's hard to believe that it is me who created 10-15 data science projects and the knowledge that I hold; this wouldn't have been possible without the OdinSchool.",
    },
    {
        id: 6,
        image: "",
        videoId: "kX5FLldaxBE",
        name: "Satya Supraja",
        designation: "Associate BI",
        highlight: "Career Upgrade",
        companyLogo: "",
        story: "Despite being a B.Tech dropout with a 10-year career gap, I revived my career. OdinSchool gave me the skills and confidence to make the impossible, possible!",
    },
];

const SuccessStories = () => {
    const [formOpen, setFormOpen] = useState(false);
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
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

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

    const [playVideo, setPlayVideo] = useState(false);
    const [brochureFormOpen, setBrochureFormOpen] = useState(false);

    const { toast } = useToast();
    const handleBrochureFormSubmit = async (data: any) => {
        try {
            const accessTokenRes = await fetch("/api/auth/token-brochure", {
                method: "POST",
            });
            if (!accessTokenRes.ok) throw new Error("Token refresh failed");
            const { access_token } = await accessTokenRes.json();

            const brochureFormData = new FormData();
            brochureFormData.append("accessToken", access_token);
            brochureFormData.append("First Name", data.firstName);
            brochureFormData.append("Last Name", data.lastName);
            brochureFormData.append("Email", data.email);
            brochureFormData.append("Phone", data.phone);
            brochureFormData.append("Program", "Data Science Course");
            brochureFormData.append("Year of Graduation", data.year);
            brochureFormData.append("ga_client_id", "");
            brochureFormData.append("Business Unit", "Odinschool");
            brochureFormData.append("Source_Domain", "Brochure Form");

            const response = await fetch("/api/zoho/brochure", {
                method: "POST",
                body: brochureFormData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.error || "Failed to submit brochure form",
                );
            }

            toast({
                title: "Brochure requested successfully!",
                description: "Check your email shortly for the brochure.",
            });

            setBrochureFormOpen(false);
        } catch (err) {
            console.error("Error submitting brochure form:", err);
            toast({
                title: "Error!",
                description:
                    err instanceof Error
                        ? err.message
                        : "Submission failed. Try again later.",
                variant: "destructive",
            });
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <section className={`${"my-32"}`}>
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-6">
                                <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                                    <span className="text-primary-600">
                                        Data Science Course
                                    </span>
                                </h2>

                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                    {[
                                        {
                                            id: 1,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/licensing_51ce68f80c.webp",
                                            title: "Live instructor-led Classes",
                                        },
                                        {
                                            id: 2,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/network_a1c9a8d074.webp",
                                            title: "Job Application Portal",
                                        },
                                        {
                                            id: 3,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/reputational_721c99b384.webp",
                                            title: "Project-based Learning",
                                        },
                                        {
                                            id: 4,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/reputational_721c99b384.webp",
                                            title: "Industry Interaction",
                                        },
                                    ].map(
                                        ({
                                            id,
                                            iconLabel,
                                            title,
                                            description,
                                        }) => (
                                            <div className="border-primary-600 bg-primary-50 justify-content flex flex-row items-center rounded-lg border">
                                                <div className="bg-primary-50 flex-shrink-0 rounded-md p-2">
                                                    <Image
                                                        src={iconLabel}
                                                        alt={`${title} icon`}
                                                        width={48}
                                                        height={48}
                                                        className="h-10 w-10 object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        {title}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {description}
                                                    </p>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                                <br />
                                <br />
                                <p className="body-md mx-auto max-w-2xl text-gray-600">
                                    A Certified Member of
                                </p>
                            </div>

                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="flex flex-col items-center justify-center pl-[60px]">
                                        <div
                                            className="rounded-bl-lg rounded-tl-lg bg-white p-4 text-start shadow-xl"
                                            style={{
                                                background:
                                                    "linear-gradient(334.13deg, #986BEF 22.26%, #9388ED 59.21%, #8F9EEB 87.06%)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    height: "209px",
                                                    width: "240px",
                                                    marginTop: "-60px",
                                                }}
                                                src="https://20029733.fs1.hubspotusercontent-na1.net/hubfs/20029733/form-image-GenAI.webp"
                                                alt="student image"
                                                loading="eager"
                                            />

                                            <p className="mb-2 text-xl font-bold text-white">
                                                Upgrade your
                                                <br /> skill set & unlock new
                                                opportunities!
                                            </p>
                                            <hr className="my-4" />
                                            <p className="text-sm text-white">
                                                Upcoming Cohort
                                            </p>
                                            <p className="mb-2 text-xl font-bold text-white">
                                                28 Jun 2025
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <div className="border-primary-600 rounded-lg border-4">
                                            <SecondaryForm
                                                isModal={false}
                                                isCoupon={false}
                                                buttonText="Request a Callback"
                                                sourceDomain="Home Page"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <DsEliteFold
                    sectionClass={
                        "bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                />

                <section
                    className={`${"bg-primary-50 px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container mx-auto">
                        {/* Header */}
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                <span className="text-primary-600 font-bold">
                                    Program Highlights
                                </span>
                            </h2>
                        </div>

                        <div className="border-primary-600 rounded-lg border p-8">
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-md text-primary-600 border-primary-600 border-b-2 font-bold">
                                            Interact LIVE with your trainers
                                        </p>
                                        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                            {[
                                                "Live Online Classes",
                                                "Live Doubt Clearing Sessions",
                                            ].map((i) => (
                                                <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                                    <div className="bg-primary-600 w-full text-center">
                                                        <img
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src="https://www.odinschool.com/hubfs/Projects-1.webp"
                                                            alt="Projects-1"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-md p-4 font-bold">
                                                        {i}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-md text-primary-600 border-primary-600 border-b-2 font-bold">
                                            Get Industry-ready
                                        </p>
                                        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                            {[
                                                "Work on real world case studies",
                                                "Mock interviews with industry experts",
                                            ].map((i) => (
                                                <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                                    <div className="bg-primary-600 w-full text-center">
                                                        <img
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src="https://www.odinschool.com/hubfs/Projects-1.webp"
                                                            alt="Projects-1"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-md p-4 font-bold">
                                                        {i}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                        <img
                                            style={{
                                                width: "75px",
                                                height: "75px",
                                            }}
                                            src="https://www.odinschool.com/hubfs/Projects-1.webp"
                                            alt="Projects-1"
                                            loading="lazy"
                                        />
                                        <p className="w-max-[200px] p-4 text-lg font-bold">
                                            A Complete 360°
                                            <br /> Learning Experience!
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-md text-primary-600 border-primary-600 border-b-2 font-bold">
                                            Learn Hands-on
                                        </p>
                                        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                            {[
                                                "10+ Projects",
                                                "230+ Assignments",
                                            ].map((i) => (
                                                <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                                    <div className="bg-primary-600 w-full text-center">
                                                        <img
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src="https://www.odinschool.com/hubfs/Projects-1.webp"
                                                            alt="Projects-1"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-md p-4 font-bold">
                                                        {i}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-md text-primary-600 border-primary-600 border-b-2 font-bold">
                                            Dedicated Job Portal
                                        </p>
                                        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                            {[
                                                "500+ Hiring organisations",
                                                "Job drives every month",
                                            ].map((i) => (
                                                <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                                    <div className="bg-primary-600 w-full text-center">
                                                        <img
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src="https://www.odinschool.com/hubfs/Projects-1.webp"
                                                            alt="Projects-1"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-md p-4 font-bold">
                                                        {i}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <OrganizationLogos
                    sectionClass={"bg-primary-50  py-[50px]  md:py-[70px]"}
                />

                <section className={`${"bg-white py-16 md:py-24"} relative`}>
                    <div className="container">
                        <div className="max-w-3xlmb-12">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                Data Science{" "}
                                <span className="text-primary-600">
                                    Course Overview
                                </span>
                            </h2>
                        </div>
                        <p className="text-md mt-8 text-gray-600">
                            Join our live instructor-led Data Science Course and
                            become a skilled Data Science professional! Our
                            hands-on course equips learners with the most
                            in-demand skills, making it one of the best data
                            science courses in India. Benefit from our
                            industry-vetted data science syllabus, 10+ data
                            science projects, and mock interviews. Additionally,
                            learn workplace skills, soft skills, and interview
                            skills with our dedicated Career Services Team.
                            <br />
                            <br />
                            With our unique pedagogy and close ties with the
                            industry, you'll be fully prepared to break into the
                            Data Science industry! Get in touch with a career
                            counsellor to check your data science course
                            eligibility.
                        </p>
                    </div>
                </section>

                <Testimonials
                    sectionClass={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                />

                <section
                    className={`${"bg-primary-50 py-16 md:py-24"} relative`}
                >
                    <div className="container mx-auto">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                Data Scientist and More{" "}
                                <span className="text-primary-600">Jobs!</span>
                            </h2>
                            <p className="text-md max-w-3xl text-gray-600">
                                The continuous need for skilled professionals
                                shows no signs of slowing down in the Data
                                Science field. Upskill yourself to grab the best
                                jobs!
                            </p>
                        </div>

                        <JobsSection
                            sectionClass={
                                "bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                            }
                        />

                        <div className="mx-auto my-12 max-w-3xl text-center">
                            <Link
                                href="https://jobs.odinschool.com/"
                                target="_blank"
                            >
                                <Button
                                    size="md"
                                    variant="yellow"
                                    icon={
                                        <ArrowRight
                                            className="ml-1"
                                            size={18}
                                        />
                                    }
                                    iconPosition="right"
                                    className="py-3 font-semibold"
                                >
                                    Explore Jobs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className={`${"my-32"}`}>
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-6">
                                <h2 className="mb-4 font-display text-3xl leading-tight text-gray-900 md:text-5xl">
                                    <span className="text-primary-600">
                                        Career Services
                                    </span>
                                    in a nutshell
                                </h2>
                                <p className="mb-6 text-gray-600">
                                    Get ready for your dream job! Attend
                                    comprehensive industry readiness training
                                    with Career Services.{" "}
                                </p>

                                <ul className="space-y-6">
                                    {[
                                        {
                                            id: 1,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/licensing_51ce68f80c.webp",
                                            title: "Communication and aptitude training",
                                        },
                                        {
                                            id: 2,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/network_a1c9a8d074.webp",
                                            title: "Mock interviews",
                                        },
                                        {
                                            id: 3,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/reputational_721c99b384.webp",
                                            title: "100+ jobs available on our placement portal",
                                        },
                                        {
                                            id: 4,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/reputational_721c99b384.webp",
                                            title: "Workshops on workplace behavior",
                                        },
                                    ].map(
                                        ({
                                            id,
                                            iconLabel,
                                            title,
                                            description,
                                        }) => (
                                            <li
                                                key={id}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="bg-primary-50 flex-shrink-0 rounded-md p-2">
                                                    <Image
                                                        src={iconLabel}
                                                        alt={`${title} icon`}
                                                        width={48}
                                                        height={48}
                                                        className="h-10 w-10 object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        {title}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {description}
                                                    </p>
                                                </div>
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <br />
                                <br />
                                <Button
                                    size="lg"
                                    variant="yellow"
                                    icon={
                                        <ArrowRight
                                            className="ml-1"
                                            size={18}
                                        />
                                    }
                                    iconPosition="right"
                                    className="font-semibold"
                                    onClick={() => setFormOpen(true)}
                                >
                                    Request a Callback
                                </Button>
                            </div>

                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="m-8 flex flex-col items-center justify-center">
                                        <div className="rounded-lg bg-white p-4 text-center shadow-xl">
                                            <p className="mb-2 text-xl font-bold">
                                                Learn workplace skills!
                                            </p>
                                            <p className="text-sm">
                                                Your working style and behavior
                                                <br /> decide if you are a good
                                                cultural fit.
                                                <br /> Learn the right skills so
                                                you never
                                                <br /> feel out of place at
                                                work.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="m-8 flex flex-col items-center justify-center gap-16">
                                        <div className="rounded-lg bg-white p-4 text-center shadow-xl">
                                            <p className="mb-2 text-xl font-bold">
                                                Sell your skills, and sell them
                                                well.
                                            </p>
                                            <p className="text-sm">
                                                You are halfway there if you
                                                have a great resume and an
                                                optimized online presence. Work
                                                with our experts to build your
                                                professional profiles.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-white p-4 text-center shadow-xl">
                                            <p className="mb-2 text-xl font-bold">
                                                Attend mock interviews!
                                            </p>
                                            <p className="text-sm">
                                                Get a grip on those
                                                pre-interview nerves. Test and
                                                practice your skills with mock
                                                interview sessions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className={`${"bg-primary-50 py-16 md:py-24"} relative`}
                >
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                Multiple Job Drives Every Month
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="grid grid-cols-1 grid-cols-2 gap-4 p-16">
                                {[
                                    "Interact directly with the HR through pre-placement talks",
                                    "Participate in assessments conducted by companies",
                                    "Get shortlisted based on your skills - not backgrounds",
                                    "Attend at least 3 placement drives every month",
                                ].map((i, ii) => (
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="bg-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                                            {ii + 1}
                                        </div>
                                        <p className="text-md max-w-[200px]">
                                            {i}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <JobsSection
                                sectionClass={
                                    "bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                                }
                            />
                        </div>
                    </div>
                </section>

                <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
                    <div className="container mx-auto">
                        <div className="mb-12 max-w-3xl">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                Data Science{" "}
                                <span className="text-primary-600">
                                    Course Syllabus
                                </span>
                            </h2>

                            <p className="text-md max-w-3xl text-gray-600">
                                An industry-aligned curriculum that will make
                                you productive from day one. The curriculum is
                                updated every month so you learn the skills that
                                recruiters love.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">
                                        Core Modules
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full"
                                    >
                                        {(curriculum || [])
                                            .slice(0, 7)
                                            .map(
                                                (
                                                    section: {
                                                        heading: string;
                                                        lessons: number;
                                                        description?: string;
                                                    },
                                                    index: number,
                                                ) => (
                                                    <AccordionItem
                                                        key={index}
                                                        value={`section-${index}`}
                                                        className="mb-4 rounded-lg border px-4 py-0"
                                                    >
                                                        <AccordionTrigger className="hover:no-underline">
                                                            <div className="flex w-full items-start">
                                                                <div className="text-left">
                                                                    <h3 className="text-lg font-medium">
                                                                        {
                                                                            section.heading
                                                                        }
                                                                    </h3>
                                                                    <p className="text-sm text-gray-500">
                                                                        {
                                                                            section.lessons
                                                                        }{" "}
                                                                        lessons
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="space-y-3 pl-4">
                                                                {section.description && (
                                                                    <div
                                                                        className="prose prose-sm"
                                                                        style={{}}
                                                                    >
                                                                        <Markdown
                                                                            markdown={
                                                                                section.description
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ),
                                            )}
                                    </Accordion>

                                    <br />
                                    <br />
                                    <div className="my-6 flex">
                                        <h2 className="text-2xl font-bold">
                                            Bonus Modules
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                        >
                                            {(curriculum || [])
                                                .slice(7, 10)
                                                .map(
                                                    (
                                                        section: {
                                                            heading: string;
                                                            lessons: number;
                                                            description?: string;
                                                        },
                                                        index: number,
                                                    ) => (
                                                        <AccordionItem
                                                            key={index}
                                                            value={`section-${index}`}
                                                            className="mb-4 rounded-lg border px-4 py-0"
                                                        >
                                                            <AccordionTrigger className="hover:no-underline">
                                                                <div className="flex w-full items-start">
                                                                    <div className="text-left">
                                                                        <h3 className="text-lg font-medium">
                                                                            {
                                                                                section.heading
                                                                            }
                                                                        </h3>
                                                                        <p className="text-sm text-gray-500">
                                                                            {
                                                                                section.lessons
                                                                            }{" "}
                                                                            lessons
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="space-y-3 pl-4">
                                                                    {section.description && (
                                                                        <div
                                                                            className="prose prose-sm"
                                                                            style={{}}
                                                                        >
                                                                            <Markdown
                                                                                markdown={
                                                                                    section.description
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ),
                                                )}
                                        </Accordion>
                                    </div>

                                    <br />
                                    <br />
                                    <div className="my-6 flex">
                                        <h2 className="text-2xl font-bold">
                                            Career Acceleration Skills
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                        >
                                            {(curriculum || [])
                                                .slice(10, 16)
                                                .map(
                                                    (
                                                        section: {
                                                            heading: string;
                                                            lessons: number;
                                                            description?: string;
                                                        },
                                                        index: number,
                                                    ) => (
                                                        <AccordionItem
                                                            key={index}
                                                            value={`section-${index}`}
                                                            className="mb-4 rounded-lg border px-4 py-0"
                                                        >
                                                            <AccordionTrigger className="hover:no-underline">
                                                                <div className="flex w-full items-start">
                                                                    <div className="text-left">
                                                                        <h3 className="text-lg font-medium">
                                                                            {
                                                                                section.heading
                                                                            }
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="space-y-3 pl-4">
                                                                    {section.description && (
                                                                        <div
                                                                            className="prose prose-sm"
                                                                            style={{}}
                                                                        >
                                                                            <Markdown
                                                                                markdown={
                                                                                    section.description
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ),
                                                )}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="mb-4 rounded-lg border bg-white p-4">
                                    <div className="border-primary-600 mx-4 mb-4 rounded-xl border px-4 py-2 text-center">
                                        Accelerate your career growth!
                                    </div>
                                    <h2 className="mb-3 font-display text-xl font-bold leading-tight md:text-xl">
                                        Prep well for your dream career
                                    </h2>

                                    <p className="text-md max-w-3xl text-gray-600">
                                        Attend comprehensive industry-readiness
                                        training along with your technical
                                        training.
                                    </p>

                                    <br />
                                    <br />

                                    <h2 className="mb-3 font-display text-lg font-bold leading-tight md:text-lg">
                                        Learn Data Science while you:
                                    </h2>

                                    <p className="text-md max-w-3xl text-gray-600">
                                        <ul className="mt-2 list-disc pl-5">
                                            <li>
                                                {" "}
                                                clarify doubts live
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                receive project presentation
                                                guidance and evaluation
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                interact with industry veterans
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                attend communication and
                                                aptitude training
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                take quizzes
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                build and optimize your resume
                                                and other professional profiles
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                learn workplace behavioral
                                                skills
                                                <br />
                                            </li>
                                        </ul>
                                    </p>
                                </div>

                                <div className="rounded-lg border bg-white p-4">
                                    <div className="border-primary-600 mx-4 mb-4 rounded-xl border px-4 py-2 text-center">
                                        Get support every step of your way
                                    </div>

                                    <div className="relative px-2 md:px-6">
                                        <div
                                            className="overflow-hidden"
                                            ref={emblaRef}
                                        >
                                            <div className="flex">
                                                {[
                                                    {
                                                        img: "https://www.odinschool.com/hubfs/OdinSchool_V3/Curriculum/Mock%20Interview-2.webp",
                                                        text: "Live interaction with instructors",
                                                    },
                                                    {
                                                        img: "https://www.odinschool.com/hubfs/OdinSchool_V3/Curriculum/Mock%20Interview-2.webp",
                                                        text: "A dedicated job portal to find relevant opportunities",
                                                    },
                                                    {
                                                        img: "https://www.odinschool.com/hubfs/OdinSchool_V3/Curriculum/Mock%20Interview-2.webp",
                                                        text: "Mock interview sessions to boost your confidence",
                                                    },
                                                ].map((mentor) => (
                                                    <div
                                                        key={mentor.id}
                                                        className="h-full flex-[0_0_100%] px-2"
                                                    >
                                                        <div className="col-span-5 text-center md:col-span-3">
                                                            <p className="mt-3 font-bold leading-tight">
                                                                {mentor.text}
                                                            </p>
                                                            <Image
                                                                src={
                                                                    mentor.image
                                                                }
                                                                alt={
                                                                    mentor.name
                                                                }
                                                                className="mx-auto h-24 w-24 rounded-md object-cover"
                                                                loading="lazy"
                                                                width={500}
                                                                height={500}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-center gap-6">
                                            <div className="flex items-center gap-2">
                                                {dots.map((index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() =>
                                                            scrollTo(index)
                                                        }
                                                        className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-300 md:h-2 md:w-2 ${
                                                            index ===
                                                            selectedIndex
                                                                ? "w-[1.5rem] bg-[#1a6cf7] shadow md:w-[28px]"
                                                                : "h-2 w-2 bg-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-row gap-4">
                            <Button
                                size="md"
                                variant="yellow"
                                icon={<ArrowRight className="ml-1" size={18} />}
                                iconPosition="right"
                                className="font-semibold"
                                onClick={() => setFormOpen(true)}
                            >
                                {projects[6].ctaText}
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => setBrochureFormOpen(true)}
                            >
                                Download Brochure
                            </Button>
                            <Modal
                                header_text={"Download Brochure"}
                                open={brochureFormOpen}
                                onOpenChange={setBrochureFormOpen}
                            >
                                <DynamicForm
                                    buttonText={"Download Brochure"}
                                    fields={brochureFormField}
                                    initialValues={{
                                        program: "data-science-course",
                                        ga_client_id: "",
                                        business_unit: "Odinschool",
                                        Source_Domain: "Brochure Form",
                                    }}
                                    onSubmit={(data) => {
                                        handleBrochureFormSubmit(data);
                                    }}
                                />
                            </Modal>
                        </div>
                    </div>
                </section>

                <ToolsSection
                    sectionClass={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                    propPath={"/data-science-course"}
                />

                <section
                    className={`${"bg-primary-50 px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container mx-auto">
                        {/* Header */}
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                20+ Hands-on{" "}
                                <span className="text-primary-600">
                                    Projects
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-6xl grid-cols-12 gap-6">
                        {/* First 3 small project cards */}
                        {projects.slice(0, 6).map((project) => (
                            <div
                                key={project.id}
                                className="col-span-12 flex flex-col justify-between rounded-xl bg-white p-4 text-black md:col-span-4"
                            >
                                <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-md mb-1 font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700">
                                    {project.description}
                                </p>
                            </div>
                        ))}

                        {/* AirBnB project video block */}
                        <div className="relative col-span-12 aspect-video overflow-hidden rounded-xl border border-white lg:col-span-6">
                            {playVideo ? (
                                <iframe
                                    className="h-full w-full rounded-xl"
                                    src={projects[6].videoUrl}
                                    title="Python Analysis on AirBnB"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="relative h-full w-full cursor-pointer"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <Image
                                        src={projects[6].videoThumb}
                                        alt="Python Analysis on AirBnB Video"
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                    <Image
                                        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                                        alt="Play Button"
                                        width={60}
                                        height={60}
                                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Large AirBnB project details */}
                        <div className="col-span-12 flex flex-col justify-between rounded-xl bg-white p-6 text-black lg:col-span-6">
                            <h3 className="mb-2 text-xl font-bold">
                                {projects[6].title}
                            </h3>
                            <p className="mb-4 text-sm text-gray-700">
                                {projects[6].description}
                            </p>

                            <div className="mb-4 flex flex-col justify-between gap-4 text-sm sm:flex-row">
                                <div>
                                    <p className="text-gray-500">
                                        Pre-requisite
                                    </p>
                                    <p>{projects[6].prerequisites}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        Tools Required
                                    </p>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                        {projects[6].tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-600"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-col justify-center gap-4 delay-200 sm:flex-row">
                                <Button
                                    size="md"
                                    variant="yellow"
                                    icon={
                                        <ArrowRight
                                            className="ml-1"
                                            size={18}
                                        />
                                    }
                                    iconPosition="right"
                                    className="font-semibold"
                                    onClick={() => setFormOpen(true)}
                                >
                                    {projects[6].ctaText}
                                </Button>

                                <Modal
                                    header_text={"Enquire Now"}
                                    open={formOpen}
                                    onOpenChange={setFormOpen}
                                >
                                    <PrimaryForm
                                        buttonText="Request a Callback"
                                        slug={"data-science-elite-course"}
                                        isModal={true}
                                        sourceDomain="Course form"
                                    />
                                </Modal>
                            </div>
                        </div>

                        {/* Large AirBnB project details */}
                        <div className="col-span-12 flex flex-col justify-between rounded-xl bg-white p-6 text-black lg:col-span-6">
                            <h3 className="mb-2 text-xl font-bold">
                                {projects[7].title}
                            </h3>
                            <p className="mb-4 text-sm text-gray-700">
                                {projects[7].description}
                            </p>

                            <div className="mb-4 flex flex-col justify-between gap-4 text-sm sm:flex-row">
                                <div>
                                    <p className="text-gray-500">
                                        Pre-requisite
                                    </p>
                                    <p>{projects[7].prerequisites}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        Tools Required
                                    </p>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                        {projects[7].tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-600"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-col justify-center gap-4 delay-200 sm:flex-row">
                                <Button
                                    size="md"
                                    variant="yellow"
                                    icon={
                                        <ArrowRight
                                            className="ml-1"
                                            size={18}
                                        />
                                    }
                                    iconPosition="right"
                                    className="font-semibold"
                                    onClick={() => setFormOpen(true)}
                                >
                                    {projects[7].ctaText}
                                </Button>
                            </div>
                        </div>

                        {/* AirBnB project video block */}
                        <div className="relative col-span-12 aspect-video overflow-hidden rounded-xl border border-white lg:col-span-6">
                            {playVideo ? (
                                <iframe
                                    className="h-full w-full rounded-xl"
                                    src={projects[6].videoUrl}
                                    title="Python Analysis on AirBnB"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="relative h-full w-full cursor-pointer"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <Image
                                        src={projects[7].videoThumb}
                                        alt="Python Analysis on AirBnB Video"
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                    <Image
                                        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                                        alt="Play Button"
                                        width={60}
                                        height={60}
                                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <PlatformComparison />

                <section
                    className={"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"}
                >
                    <div className="container">
                        <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
                            <div
                                /* ref={titleRef} */ className="mx-auto mb-12 max-w-3xl text-left md:mb-16"
                            >
                                <h2 className="heading-lg mb-4">
                                    Student{" "}
                                    <span className="text-primary-600">
                                        reviews
                                    </span>{" "}
                                    and industry{" "}
                                    <span className="text-primary-600">
                                        recognitions
                                    </span>
                                </h2>
                                <br />
                                <p className="body-md mx-auto max-w-2xl text-gray-600">
                                    A Certified Member of
                                </p>
                                <br />
                                <br />

                                <Link href="/reviews">
                                    <Button
                                        size="md"
                                        variant="outline"
                                        icon={
                                            <ArrowRight
                                                className="ml-1"
                                                size={18}
                                            />
                                        }
                                        iconPosition="right"
                                        className="py-3 font-semibold"
                                    >
                                        View More Reviews
                                    </Button>
                                </Link>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md md:mr-16">
                                <h3 className="mb-4 text-lg font-bold">
                                    Reviews & Recognition
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {/* <BarChart className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Lessons: </span> */}

                                            <Image
                                                src="https://strapi.odinschool.com/uploads/Google_20100x40_7ed0d4c3dc.webp"
                                                alt="google"
                                                className="w-20"
                                                loading="lazy"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        {/* <span>{course.curriculum?.reduce((a: number, b: { lessons: number }) => a + b.lessons, 0)}</span> */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-light">
                                                    4.6
                                                </span>
                                                <Image
                                                    src="https://strapi.odinschool.com/uploads/4_7_Rating_d1c77dfdf8.svg"
                                                    alt="rating-star"
                                                    className="w-12"
                                                    loading="lazy"
                                                    width={500}
                                                    height={500}
                                                />
                                                <span className="text-xs font-light">
                                                    1,484 Reviews
                                                </span>
                                            </div>
                                        </div>
                                        {/* <span>{course.curriculum.map((section) => section.lessons).reduce((a, b) => a + b, 0)}</span> */}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-primary-500 text-base font-semibold">
                                            Bootcamp
                                        </span>

                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-light">
                                                90.4
                                            </span>
                                            <Progress
                                                value={90.4}
                                                className="h-3 w-20"
                                            />
                                            <span className="text-xs font-light">
                                                5,031 Reviews
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                                Data Science{" "}
                                <span className="text-primary-600">
                                    Course Fee
                                </span>
                            </h2>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2 text-sm font-medium text-gray-500">
                                Upcoming Cohort
                            </p>
                            <Tabs
                                defaultValue={feeData[0].id}
                                className="w-full"
                            >
                                <TabsList className="mb-6 rounded-md bg-white p-2">
                                    {feeData.map((item) => (
                                        <TabsTrigger
                                            key={item.id}
                                            value={item.id}
                                            className="data-[state=active]:bg-primary-600 border-primary-500 border px-5 py-2 text-sm data-[state=active]:text-white"
                                        >
                                            {item.cohortDate}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {feeData.map((selected) => (
                                    <TabsContent
                                        key={selected.id}
                                        value={selected.id}
                                    >
                                        <div className="grid grid-cols-12 items-center justify-center gap-6">
                                            <div className="border-primary-600 col-span-12 flex h-full flex-col items-center justify-center rounded-xl border-[0.2rem] p-6 shadow-sm md:col-span-8">
                                                <div className="flex grid grid-cols-1 flex-col items-center gap-8 md:grid-cols-2">
                                                    <div>
                                                        <h3 className="text-center text-lg font-bold text-green-600">
                                                            Course Fee
                                                        </h3>
                                                        <h3 className="py-2 text-center text-3xl font-bold text-green-600">
                                                            {selected.price}{" "}
                                                            <span className="text-base font-normal">
                                                                + GST
                                                            </span>
                                                        </h3>
                                                        <br />
                                                        <Button
                                                            size="md"
                                                            variant="yellow"
                                                            icon={
                                                                <ArrowRight
                                                                    className="ml-1"
                                                                    size={18}
                                                                />
                                                            }
                                                            iconPosition="right"
                                                            className="my-2 w-full py-3 font-semibold"
                                                            onClick={() =>
                                                                setFormOpen(
                                                                    true,
                                                                )
                                                            }
                                                        >
                                                            Apply Now
                                                        </Button>
                                                    </div>

                                                    <div>
                                                        <div className="border-l-1 border-gray-200">
                                                            <p className="mb-2 text-sm font-medium text-gray-500">
                                                                Early Bird Offer
                                                                Up To ₹10,000
                                                            </p>

                                                            <div className="mt-4 rounded-md bg-blue-100 px-3 py-2 text-center text-sm font-medium text-blue-900">
                                                                Offer only valid
                                                                for the first 30
                                                                seats!
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <Link href="/course-checkout/investment-banking-course">
                                                            <Button
                                                                size="md"
                                                                variant="outline"
                                                                icon={
                                                                    <ArrowRight
                                                                        className="ml-1"
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                }
                                                                iconPosition="right"
                                                                className="w-full py-3 font-semibold"
                                                            >
                                                                Reserve your
                                                                seat at ₹5000 +
                                                                GST
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-12 rounded-xl md:col-span-4">
                                                <div className="col-span-12 rounded-xl bg-green-100 p-6 md:col-span-4">
                                                    <p className="mb-4 whitespace-pre-line text-sm text-gray-800">
                                                        <b>
                                                            No cost EMIs start
                                                            at ₹7867 per month.
                                                        </b>{" "}
                                                        3, 6, 9, 12 months EMI
                                                        option available.
                                                    </p>
                                                </div>

                                                <div className="p-6">
                                                    <p className="mb-2 text-sm font-medium text-gray-700">
                                                        Our Financing Partners:
                                                    </p>
                                                    <div className="grid max-w-xs grid-cols-2 gap-3 text-sm font-semibold">
                                                        {selected.partners.map(
                                                            (partner, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-center gap-3 rounded-md border border-green-300 p-2"
                                                                >
                                                                    <Image
                                                                        src={
                                                                            partner.logo
                                                                        }
                                                                        alt={
                                                                            partner.name
                                                                        }
                                                                        width={
                                                                            80
                                                                        }
                                                                        height={
                                                                            24
                                                                        }
                                                                        className="mx-auto block"
                                                                    />
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </section>

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
                                        title: "Talk to A Counsellor",
                                    },
                                    {
                                        step: "3",
                                        title: "Review Your Eligibility",
                                    },
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

                <section className={`${"bg-white py-16 md:py-24"} relative`}>
                    <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        {/* Left: Description */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                                Alumni Spotlight
                            </h2>
                        </div>

                        {/* Right: Carousel */}
                        <div className="relative px-2 md:px-6">
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex">
                                    {mentorshipData.map((mentor) => (
                                        <div
                                            key={mentor.id}
                                            className="h-full flex-[0_0_100%] px-2"
                                        >
                                            <Card className="flex h-full min-h-[280px] flex-col border border-blue-200">
                                                <CardContent className="grid flex-grow grid-cols-12 items-start gap-4 p-6">
                                                    {/* Left: Image + Name (col-span-4 on md+) */}
                                                    <div className="col-span-5 text-center md:col-span-3">
                                                        <Image
                                                            src={mentor.image}
                                                            alt={mentor.name}
                                                            className="mx-auto h-24 w-24 rounded-md object-cover"
                                                            loading="lazy"
                                                            width={500}
                                                            height={500}
                                                        />
                                                        <p className="text-primary-600 mt-3 font-bold leading-tight">
                                                            {
                                                                mentor.name.split(
                                                                    " ",
                                                                )[0]
                                                            }
                                                            <br />
                                                            {
                                                                mentor.name.split(
                                                                    " ",
                                                                )[1]
                                                            }
                                                        </p>
                                                    </div>

                                                    {/* Right: Designation + Logo + Story (col-span-8 on md+) */}
                                                    <div className="col-span-7 md:col-span-9">
                                                        <h3 className="text-md mb-2 font-bold text-gray-800">
                                                            {mentor.designation}
                                                        </h3>
                                                        {mentor.companyLogo && (
                                                            <Image
                                                                src={
                                                                    mentor.companyLogo
                                                                }
                                                                alt={
                                                                    mentor.companyLogo
                                                                }
                                                                className="w-30 mb-3 h-12 rounded-md border object-contain shadow-sm"
                                                                loading="lazy"
                                                                width={100}
                                                                height={40}
                                                            />
                                                        )}
                                                        <p className="hidden text-sm text-gray-600 md:block">
                                                            {mentor.story}
                                                        </p>
                                                    </div>

                                                    <div className="col-span-12 md:hidden">
                                                        <p className="text-sm text-gray-600">
                                                            {mentor.story}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation + Dots */}
                            <div className="mt-6 flex items-center justify-center gap-6">
                                {/* Prev Arrow */}
                                <button
                                    onClick={scrollPrev}
                                    className="rounded-ful hover:bg-primary-50 text-primary-600 flex h-10 w-10 items-center justify-center rounded-full border bg-white p-2 shadow transition"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>

                                {/* Dots */}
                                <div className="flex items-center gap-2">
                                    {dots.map((index) => (
                                        <button
                                            key={index}
                                            onClick={() => scrollTo(index)}
                                            className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-300 md:h-2 md:w-2 ${
                                                index === selectedIndex
                                                    ? "w-[1.5rem] bg-[#1a6cf7] shadow md:w-[28px]"
                                                    : "h-2 w-2 bg-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Next Arrow */}
                                <button
                                    onClick={scrollNext}
                                    className="rounded-ful hover:bg-primary-50 text-primary-600 flex h-10 w-10 items-center justify-center rounded-full border bg-white p-2 shadow transition"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <InstructorProfile
                    sectionClass={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                    slug={"Data Science Course"}
                    data={getCourseData("data-science-course").mentors}
                />

                <Certification
                    sectionClass="bg-white pt-4 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    data={DsCertificateData}
                />

                <section
                    className={"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"}
                >
                    <div className="container">
                        <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
                            <div
                                /* ref={titleRef} */ className="mx-auto mb-12 max-w-3xl text-left md:mb-16"
                            >
                                <h2 className="heading-lg mb-4">
                                    Take a leap into your dream career with our{" "}
                                    <span className="text-primary-600">
                                        industry-aligned courses.
                                    </span>
                                </h2>
                                <p className="body-md mx-auto max-w-2xl text-gray-600">
                                    Start your journey towards a rewarding
                                    career today!
                                </p>
                            </div>

                            <SecondaryForm
                                isModal={false}
                                isCoupon={false}
                                buttonText="Request a Callback"
                                sourceDomain="Home Page"
                            />
                        </div>
                    </div>
                </section>

                <StudentsTicker sectionClass="bg-primary-50 px-0 pb-[50px] md:px-0 md:pb-[70px]" />
                <section
                    className={
                        "bg-primary-50 px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]"
                    }
                >
                    <div className="container max-w-4xl">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            {/* <h2 className="heading-lg mb-4"> */}
                            <h2
                                className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                            >
                                Data Science Training FAQs
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
                                        {faq.points && (
                                            <ul className="mt-2 list-disc pl-5">
                                                {faq.points.map(
                                                    (point, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm"
                                                        >
                                                            {point}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
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