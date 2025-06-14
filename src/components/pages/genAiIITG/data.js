import {
    BriefcaseBusiness,
    Building2,
    MessageCircleQuestion,
    SpeechIcon,
    UserRoundPen,
} from "lucide-react";

export const section1 = {
    logo: "https://www.odinschool.com/hubfs/eictlogo.webp",
    features: [
                                        {
                                            id: 1,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/licensing_51ce68f80c.webp",
                                            title: "Get certified by E&ICT Academy, IIT Guwahati",
                                        },
                                        {
                                            id: 2,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/network_a1c9a8d074.webp",
                                            title: "A visit to the prestigious IIT Guwahati Campus (for successful learners only)",
                                        },
                                    ]
}

export const section2 = {
    certificateImage:
        "https://strapi.odinschool.com/uploads/DS_Elite_Course_Certificate_7ae53e8cea.webp",
}

export const dsJobsDrives = [
  {
    "img": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "company": "Analytic Edge",
    "jobCompanyLogo": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "jobDesignation": "MMM Consultant",
    "jobExp": "2-5 years",
    "jobSkills": [
        "Advanced Statistics",
        "Reporting Skills",
        "Python & SQL",
    ],
    "desc": "Offered Salary upto INR 13 LPA"
  },  {
    "img": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "company": "ACZ Global",
    "jobCompanyLogo": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "jobDesignation": "Generative Ai Consultant",
    "jobExp": "0-2 yrs",
    "jobSkills": [
        "Python & SQL",
        "Advanced NLP",
        "Agentic AI Solutions",
        "Prompt Engineering"
    ],
    "desc": "Offered Salary upto INR 19 LPA"
  },  {
    "img": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "company": "1DigitalStack.ai",
    "jobCompanyLogo": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "jobDesignation": "Senior Business Analyst (Gen AI)",
    "jobExp": "3-5 years",
    "jobSkills": [
        "Python",
        "ML Frameworks",
        "SQL",
    ],
    "desc": "Offered Salary upto INR 10 LPA"
  },  {
    "img": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "company": "Uplers",
    "jobCompanyLogo": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "jobDesignation": "AI Engineer",
    "jobExp": "2-5 years",
    "jobSkills": [
        "Python",
        "Deep Learning",
        "NLP",
    ],
    "desc": "Offered Salary upto INR 13 LPA"
  },  {
    "img": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "company": "India Leads",
    "jobCompanyLogo": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "jobDesignation": "Data Scientist",
    "jobExp": "3-5 years",
    "jobSkills": [
        "Python",
        "Big Data Techonologies",
        "Cloud Technologies",
    ],
    "desc": "Offered Salary upto INR 30 LPA"
  },  {
    "img": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "company": "Iqvia",
    "jobCompanyLogo": "https://strapi.odinschool.com/uploads/quriousbit_logo_20100_X40_85428525aa.webp",
    "jobDesignation": "Intern",
    "jobExp": "0-2 years",
    "jobSkills": [
        "SQL",
        "Python",
        "OOP & DS",
    ],
    "desc": "Offered Salary upto INR 7 LPA"
  },
].map((i, ii) => ({...i, id: ii+1}))

export const highlightsData = [
    "Get certified by the prestigious E&ICT Academy, IIT Guwahati",
    "Attend live interactive sessions led by experts",
    "Engage in hands-on project-based learning with 20+ projects",
    "A visit to the prestigious IIT Guhawati Campus to expand your professional network (exclusively for successful learners)",
    "Get access to Career Services to assist you in making career transitions",
    "Participate in hackathons, case study discussions, Q & A sessions with experts",
    "Learn technologies and tools to build and deploy GenAI models",
];

export const certificateData = {
    heading: `Boost your career with E&ICT Academy - IIT Guwahati's`,
    subheading: `Certification Program in Applied Generative AI`,
    features: [
        {
            id: 1,
            iconLabel:
                "https://strapi.odinschool.com/uploads/licensing_51ce68f80c.webp",
            title: "",
            description:
                "Earn an invaluable credential to add to your portfolio.",
        },
        {
            id: 2,
            iconLabel:
                "https://strapi.odinschool.com/uploads/reputational_721c99b384.webp",
            title: "",
            description: "Showcase your Generative AI expertise.",
        },
    ],
    certificateImage:
        "https://strapi.odinschool.com/uploads/DS_Elite_Course_Certificate_7ae53e8cea.webp",
};

export const curriculumData = [
    {
        title: "Python, Numpy, Pandas",
        points: [
            "Lists, Tuples, Sets",
            "Dictionaries, Functions",
            "Lambda Functions",
            "Higher Order Functions",
        ],
    },
    {
        title: "Exploratory Data Analysis (EDA)",
        points: [
            "Introduction to EDA and Data Cleaning",
            "Data Summarization and Univariate Analysis",
            "Bivariate Analysis and Correlation Heatmaps",
            "Customizing and Interactive Visualizations",
        ],
    },
    {
        title: "Neural Networks and Deep Learning",
        points: [
            "CNN and its working principal",
            "RNN and its types",
            "Transformers",
            "Models",
        ],
    },
    {
        title: "LLMs and Model Quantization",
        points: [
            "Foundational Language Models",
            "LLAMA3 Instruct 8B / 70B",
            "LLAMA3 Chat, LLAMA3 code",
            "E5 embedding, MIXTRAL 8X7B",
        ],
    },
    {
        title: "Supervised and Unsupervised Learning",
        points: [
            "Introduction to Supervised Learning",
            "Linear Regression and Logistic Regression",
            "Decision Trees and Random Forests",
            "Unsupervised Learning and Clustering Methods-With a comparison to SVM",
        ],
    },
    {
        title: "Fine Tuning of LLMs",
        points: [
            "Para Efficient Fine-tuning",
            "LORA (Low-Rank Adaptation)",
            "QLoRA (Quantized Low-Rank Adaptation)",
            "Comparison and Applications of LORA and QLoRA",
        ],
    },
    {
        title: "RAGs",
        points: [
            "Chunking, Embedding, Search",
            "Ranking, Generation, Evaluation",
            "RAG frameworks, LLANGCHAIN basics",
            "LLAMAINDEX, LLANGRAPH",
        ],
    },
    {
        title: "NLP & Text Processing",
        points: [
            "Tokenization and Sentence Splitting",
            "Stopword Removal, Stemming, and Lemmatization",
            "Part-of-Speech (POS) Tagging and Named Entity Recognition (NER)",
            "Introduction to NLTK and SpaCy",
        ],
    },
    {
        title: "Agents",
        points: [
            "Agentic workflows and function calling",
            "LLANGCHAIN advanced, AUTOGEN",
            "Containerised deployment and Kubernetes - LLM",
            "Deployment",
        ],
    },
];

export const curriculumData1 = [
    {
        title: "Mini capstone projects like",
        points: [
            "ReviewRadar: Sentiment Analysis for E-Commerce Reviews",
            "CrisisFilter: Real-Time Disaster Tweet Classifier",
            "MediBot: Symptom-to-Disease Text Classifier",
        ],
    },
    {
        title: "Capstone Projects like",
        points: [
            "ContentCrafter AI: GenAI Assistant for Content Creation",
            "Study-Buddy: AI-Powered Personalized Learning Companion",
            "GlobeMate: AI-Powered Travel Itinerary Generator",
        ],
    },
];

export const projectData = [
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

export const whoCanApply = {
    features: [
                                        {
                                            id: 1,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/licensing_51ce68f80c.webp",
                                            title: "Official and Verified",
                                        },
                                        {
                                            id: 2,
                                            iconLabel:
                                                "https://strapi.odinschool.com/uploads/network_a1c9a8d074.webp",
                                            title: "Easily Sharable",
                                        },
                                    ],
    certificateImage:
        "https://strapi.odinschool.com/uploads/DS_Elite_Course_Certificate_7ae53e8cea.webp",
}

export const CourseCarrerServiceData = [
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

export const feeData = [
    {
        id: "1",
        cohortDate: "28 Jun 2025",
        totalPrice: "₹1,25,000",
        price: "₹1,25,000",
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
        price: "₹1,25,000",
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

export const faQdata = [
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

export const mentorsData = [
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

