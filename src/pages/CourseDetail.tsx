
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  ChevronLeft, 
  PlayCircle, 
  Shield, 
  Award, 
  BarChart, 
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// This would be fetched from an API in a real application
const coursesData = [
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
    popular: true,
    price: 49.99,
    fullDescription: `
      <p>This comprehensive JavaScript course takes you from the very basics to advanced programming concepts. Whether you're new to programming or looking to strengthen your JavaScript skills, this course provides everything you need to become proficient in one of the world's most popular programming languages.</p>
      
      <p>You'll start with JavaScript fundamentals - variables, data types, and basic operations - before moving on to more complex topics like functions, objects, arrays, and DOM manipulation. As the course progresses, you'll dive into advanced concepts including closures, asynchronous programming with Promises, async/await, and the latest ES6+ features.</p>
      
      <p>Throughout the course, you'll build practical projects that reinforce your learning, including interactive websites, form validators, and small web applications. By the end, you'll have both the theoretical knowledge and hands-on experience to confidently use JavaScript in real-world scenarios.</p>
    `,
    curriculum: [
      { title: 'JavaScript Basics', lessons: 8, duration: '2 hours' },
      { title: 'Functions and Objects', lessons: 10, duration: '2.5 hours' },
      { title: 'DOM Manipulation', lessons: 7, duration: '1.5 hours' },
      { title: 'Events and Event Handling', lessons: 6, duration: '1 hour' },
      { title: 'Asynchronous JavaScript', lessons: 8, duration: '2 hours' },
      { title: 'ES6+ Features', lessons: 6, duration: '1 hour' },
    ],
    skills: [
      'JavaScript Fundamentals', 
      'DOM Manipulation', 
      'Asynchronous Programming', 
      'Error Handling', 
      'ES6+ Features', 
      'Browser APIs'
    ]
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
    popular: true,
    price: 69.99,
    fullDescription: `
      <p>Take your frontend development skills to the next level with this comprehensive React course. Designed for developers who already understand JavaScript basics, this course will teach you everything you need to know about building professional applications with React.</p>
      
      <p>You'll start by understanding React's core concepts - components, props, and state - before diving into more advanced topics like hooks, context API, and state management with Redux. You'll learn best practices for structuring React applications, optimizing performance, and implementing common patterns used in enterprise applications.</p>
      
      <p>Throughout the course, you'll build a complete application from scratch, implementing features like authentication, data fetching, routing, and form handling. By the end, you'll have the skills and confidence to build complex, production-ready React applications.</p>
    `,
    curriculum: [
      { title: 'React Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Components and Props', lessons: 8, duration: '2 hours' },
      { title: 'State and Lifecycle', lessons: 7, duration: '1.5 hours' },
      { title: 'Hooks in Depth', lessons: 10, duration: '3 hours' },
      { title: 'Routing with React Router', lessons: 6, duration: '1.5 hours' },
      { title: 'State Management', lessons: 8, duration: '2 hours' },
      { title: 'Testing React Applications', lessons: 6, duration: '1.5 hours' },
      { title: 'Deployment and Performance', lessons: 5, duration: '1 hour' },
    ],
    skills: [
      'React.js', 
      'Component Architecture', 
      'State Management', 
      'React Hooks', 
      'React Router', 
      'Performance Optimization', 
      'Testing'
    ]
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
    price: 59.99,
    fullDescription: `
      <p>Dive into the world of data science with Python in this comprehensive course. You'll learn how to work with data using Python's powerful libraries and tools, gaining practical skills that are in high demand across industries.</p>
      
      <p>Starting with Python basics for data manipulation, you'll quickly progress to advanced data analysis topics. You'll master libraries like NumPy, Pandas, and Matplotlib for data processing and visualization. The course covers statistical analysis, data cleaning, exploratory data analysis, and building predictive models with scikit-learn.</p>
      
      <p>Through hands-on projects analyzing real-world datasets, you'll develop a portfolio that demonstrates your data science capabilities. By the end of the course, you'll be able to extract meaningful insights from data and communicate your findings effectively.</p>
    `,
    curriculum: [
      { title: 'Python for Data Science', lessons: 10, duration: '2.5 hours' },
      { title: 'NumPy Fundamentals', lessons: 8, duration: '2 hours' },
      { title: 'Data Analysis with Pandas', lessons: 12, duration: '3 hours' },
      { title: 'Data Visualization', lessons: 10, duration: '2.5 hours' },
      { title: 'Statistical Analysis', lessons: 8, duration: '2 hours' },
      { title: 'Machine Learning Basics', lessons: 12, duration: '4 hours' },
      { title: 'Practical Data Science Projects', lessons: 12, duration: '4 hours' },
    ],
    skills: [
      'Python Programming', 
      'Data Analysis', 
      'Data Visualization', 
      'Statistical Analysis', 
      'Machine Learning Basics', 
      'NumPy', 
      'Pandas'
    ]
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
    price: 79.99,
    fullDescription: `
      <p>This advanced machine learning course is designed for students with a strong foundation in programming and mathematics who want to master cutting-edge ML techniques. The course provides in-depth coverage of sophisticated algorithms and their practical applications.</p>
      
      <p>You'll delve into neural networks architecture, deep learning frameworks like TensorFlow and PyTorch, and advanced topics including computer vision, natural language processing, and reinforcement learning. The course emphasizes both theoretical understanding and practical implementation through complex, real-world projects.</p>
      
      <p>By completing this course, you'll be able to design, implement, and deploy sophisticated machine learning solutions across various domains, positioning yourself at the forefront of AI innovation.</p>
    `,
    curriculum: [
      { title: 'ML Fundamentals Review', lessons: 5, duration: '1.5 hours' },
      { title: 'Neural Networks', lessons: 10, duration: '3 hours' },
      { title: 'Deep Learning with TensorFlow', lessons: 12, duration: '4 hours' },
      { title: 'Computer Vision', lessons: 10, duration: '3 hours' },
      { title: 'Natural Language Processing', lessons: 10, duration: '3 hours' },
      { title: 'Reinforcement Learning', lessons: 8, duration: '2.5 hours' },
      { title: 'Generative Models', lessons: 8, duration: '2.5 hours' },
      { title: 'ML Deployment and MLOps', lessons: 7, duration: '2 hours' },
      { title: 'Advanced Research Topics', lessons: 10, duration: '3.5 hours' },
    ],
    skills: [
      'Deep Learning', 
      'Neural Networks', 
      'TensorFlow', 
      'PyTorch', 
      'Computer Vision', 
      'NLP', 
      'Reinforcement Learning',
      'Model Deployment'
    ]
  },
  {
    id: '5',
    title: 'Full-Stack Web Development',
    description: 'Build complete web applications from front to back end using modern technologies.',
    instructor: 'James Wilson',
    level: 'Intermediate',
    duration: '30 hours',
    lessons: 95,
    rating: 4.8,
    students: 7250,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000',
    category: 'Web Development',
    price: 69.99,
    fullDescription: `
      <p>Become a complete web developer with this comprehensive full-stack course. You'll learn to build end-to-end web applications, handling everything from user interfaces to server logic and database management.</p>
      
      <p>The course begins with front-end development using HTML, CSS, and JavaScript, then introduces modern frameworks like React. On the back-end, you'll master Node.js and Express, learn database design with MongoDB and SQL, and implement authentication, API development, and deployment.</p>
      
      <p>Through building multiple real-world projects, you'll gain practical experience with the entire development lifecycle. By the end, you'll have the skills to create, deploy, and maintain complete web applications independently.</p>
    `,
    curriculum: [
      { title: 'Front-end Fundamentals', lessons: 15, duration: '4 hours' },
      { title: 'React Development', lessons: 12, duration: '3.5 hours' },
      { title: 'Back-end with Node.js', lessons: 12, duration: '3.5 hours' },
      { title: 'Database Design and Implementation', lessons: 10, duration: '3 hours' },
      { title: 'API Development', lessons: 8, duration: '2.5 hours' },
      { title: 'Authentication and Security', lessons: 8, duration: '2.5 hours' },
      { title: 'Deployment and DevOps', lessons: 7, duration: '2 hours' },
      { title: 'Full-Stack Projects', lessons: 18, duration: '6 hours' },
      { title: 'Performance Optimization', lessons: 5, duration: '2 hours' },
    ],
    skills: [
      'HTML/CSS/JavaScript', 
      'React', 
      'Node.js', 
      'Express', 
      'Database Design', 
      'API Development', 
      'Authentication',
      'Deployment'
    ]
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Create beautiful cross-platform mobile applications with Flutter framework.',
    instructor: 'Sophie Taylor',
    level: 'Intermediate',
    duration: '18 hours',
    lessons: 65,
    rating: 4.6,
    students: 4320,
    image: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?q=80&w=2000',
    category: 'Mobile Development',
    price: 59.99,
    fullDescription: `
      <p>Learn to build beautiful, responsive mobile applications for both iOS and Android with a single codebase using Flutter. This course takes you from Flutter basics to publishing your apps on app stores.</p>
      
      <p>You'll start with Dart programming language fundamentals before diving into Flutter widgets, state management, and UI design. The course covers navigation, data persistence, API integration, and using device features. You'll also learn about app deployment, testing, and performance optimization.</p>
      
      <p>Throughout the course, you'll build multiple complete mobile applications, giving you hands-on experience with real-world development challenges. By the end, you'll be able to create and ship professional-quality mobile apps.</p>
    `,
    curriculum: [
      { title: 'Dart Programming Basics', lessons: 8, duration: '2 hours' },
      { title: 'Flutter Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Building UI with Widgets', lessons: 12, duration: '3 hours' },
      { title: 'State Management', lessons: 8, duration: '2 hours' },
      { title: 'Navigation and Routing', lessons: 6, duration: '1.5 hours' },
      { title: 'Working with APIs', lessons: 7, duration: '2 hours' },
      { title: 'Data Persistence', lessons: 6, duration: '1.5 hours' },
      { title: 'Publishing and Deployment', lessons: 8, duration: '2 hours' },
    ],
    skills: [
      'Dart Programming', 
      'Flutter Framework', 
      'Cross-Platform Development', 
      'UI Design', 
      'State Management', 
      'API Integration', 
      'App Publishing'
    ]
  },
  {
    id: '7',
    title: 'NodeJS Backend Development',
    description: 'Build scalable server-side applications with Node.js and Express.',
    instructor: 'Ryan Martinez',
    level: 'Intermediate',
    duration: '16 hours',
    lessons: 58,
    rating: 4.7,
    students: 5890,
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2000',
    category: 'Backend',
    price: 54.99,
    fullDescription: `
      <p>Master server-side JavaScript with this comprehensive Node.js course designed for web developers. You'll learn to build robust, scalable backend systems that power modern web applications.</p>
      
      <p>The course covers Node.js fundamentals, Express framework, RESTful API design, authentication, database integration with MongoDB and SQL, error handling, and performance optimization. You'll also explore microservices architecture, real-time applications with Socket.io, and deployment techniques.</p>
      
      <p>Through building complete backend systems for various application types, you'll gain practical experience with the entire development cycle. By the end, you'll be able to architect and implement sophisticated server-side solutions.</p>
    `,
    curriculum: [
      { title: 'Node.js Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Express Framework', lessons: 8, duration: '2 hours' },
      { title: 'RESTful API Design', lessons: 7, duration: '2 hours' },
      { title: 'Database Integration', lessons: 10, duration: '3 hours' },
      { title: 'Authentication and Authorization', lessons: 8, duration: '2 hours' },
      { title: 'Error Handling and Logging', lessons: 5, duration: '1 hour' },
      { title: 'Testing Node.js Applications', lessons: 6, duration: '1.5 hours' },
      { title: 'Deployment and Scaling', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'Node.js', 
      'Express', 
      'API Development', 
      'MongoDB', 
      'Authentication', 
      'Server Architecture', 
      'Performance Optimization'
    ]
  },
  {
    id: '8',
    title: 'Cloud Computing with AWS',
    description: 'Deploy and scale applications using Amazon Web Services infrastructure.',
    instructor: 'Priya Patel',
    level: 'Advanced',
    duration: '22 hours',
    lessons: 75,
    rating: 4.8,
    students: 3950,
    image: 'https://images.unsplash.com/photo-1603695950834-3963cfb7fd5c?q=80&w=2000',
    category: 'DevOps',
    price: 69.99,
    fullDescription: `
      <p>Gain mastery of Amazon Web Services (AWS) with this comprehensive cloud computing course. You'll learn to architect, deploy, and manage scalable, highly available, and fault-tolerant systems on the world's most popular cloud platform.</p>
      
      <p>The course covers core AWS services including EC2, S3, RDS, Lambda, and more, along with networking, security, and cost optimization. You'll explore infrastructure as code with CloudFormation and Terraform, continuous integration/deployment pipelines, monitoring, and best practices for cloud architecture.</p>
      
      <p>Through hands-on labs and real-world projects, you'll gain practical experience designing and implementing cloud solutions. By the end, you'll be prepared to design and manage production AWS environments and pursue AWS certification.</p>
    `,
    curriculum: [
      { title: 'AWS Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Compute Services', lessons: 8, duration: '2 hours' },
      { title: 'Storage Solutions', lessons: 7, duration: '2 hours' },
      { title: 'Database Services', lessons: 8, duration: '2.5 hours' },
      { title: 'Networking in AWS', lessons: 7, duration: '2 hours' },
      { title: 'Serverless Architecture', lessons: 10, duration: '3 hours' },
      { title: 'Infrastructure as Code', lessons: 8, duration: '2.5 hours' },
      { title: 'Security Best Practices', lessons: 8, duration: '2 hours' },
      { title: 'Monitoring and Management', lessons: 5, duration: '1.5 hours' },
      { title: 'Cost Optimization', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'AWS Services', 
      'Cloud Architecture', 
      'Infrastructure as Code', 
      'Serverless Computing', 
      'Cloud Security', 
      'Scalability', 
      'Cost Management'
    ]
  },
  {
    id: '9',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and experience design for digital products.',
    instructor: 'Olivia Taylor',
    level: 'Beginner',
    duration: '12 hours',
    lessons: 48,
    rating: 4.9,
    students: 6780,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000',
    category: 'Design',
    price: 49.99,
    fullDescription: `
      <p>Master the fundamentals of UI/UX design in this comprehensive course for beginners. You'll learn the essential principles and processes behind creating user-centered digital experiences that are both functional and visually appealing.</p>
      
      <p>The course covers design thinking methodology, user research, information architecture, wireframing, prototyping, and visual design principles. You'll learn to use industry-standard tools like Figma and conduct usability testing to validate your designs. The curriculum emphasizes both theoretical knowledge and practical application.</p>
      
      <p>Through hands-on projects, you'll build a professional design portfolio that demonstrates your abilities. By the end of the course, you'll have the skills to design intuitive, accessible, and engaging user experiences for websites and applications.</p>
    `,
    curriculum: [
      { title: 'Introduction to UI/UX Design', lessons: 5, duration: '1 hour' },
      { title: 'Design Thinking Process', lessons: 6, duration: '1.5 hours' },
      { title: 'User Research Methods', lessons: 7, duration: '1.5 hours' },
      { title: 'Information Architecture', lessons: 5, duration: '1 hour' },
      { title: 'Wireframing and Prototyping', lessons: 8, duration: '2 hours' },
      { title: 'Visual Design Principles', lessons: 7, duration: '2 hours' },
      { title: 'Designing with Figma', lessons: 6, duration: '1.5 hours' },
      { title: 'Usability Testing', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'UI Design', 
      'UX Design', 
      'User Research', 
      'Wireframing', 
      'Prototyping', 
      'Visual Design', 
      'Usability Testing'
    ]
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    const foundCourse = coursesData.find(c => c.id === id);
    
    if (foundCourse) {
      setCourse(foundCourse);
      document.title = `${foundCourse.title} - CodeMaster`;
    } else {
      navigate('/courses');
      toast.error("Course not found.");
    }
    
    setLoading(false);
  }, [id, navigate]);

  const handleEnrollClick = () => {
    toast.success(`Enrolled in ${course?.title}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <button 
              onClick={() => navigate('/courses')}
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to Courses
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-white/20">
                      {course.category}
                    </span>
                    <span className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded",
                      course.level === 'Beginner' ? "bg-green-500/20 text-green-50" :
                      course.level === 'Intermediate' ? "bg-blue-500/20 text-blue-50" :
                      "bg-purple-500/20 text-purple-50"
                    )}>
                      {course.level}
                    </span>
                  </div>
                  
                  <h1 className="heading-lg">{course.title}</h1>
                  
                  <p className="text-lg text-white/90">{course.description}</p>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="fill-yellow-400 text-yellow-400" size={18} />
                    <span className="font-medium">{course.rating.toFixed(1)}</span>
                    <span className="text-white/70">({course.students.toLocaleString()} students)</span>
                  </div>
                  
                  <p className="text-white/90">Created by <span className="font-medium">{course.instructor}</span></p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/80">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1.5" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1.5" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="rounded-full bg-white/20 backdrop-blur-sm p-3 cursor-pointer hover:bg-white/30 transition-colors">
                        <PlayCircle size={36} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-baseline mb-6">
                      <span className="text-3xl font-bold">${course.price}</span>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      size="lg" 
                      fullWidth 
                      className="mb-4"
                      onClick={handleEnrollClick}
                    >
                      Enroll Now
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      fullWidth 
                      className="mb-6"
                    >
                      Try Free Preview
                    </Button>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start">
                        <Shield className="mt-0.5 mr-2 text-gray-500" size={16} />
                        <p>30-day money-back guarantee</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="mt-0.5 mr-2 text-gray-500" size={16} />
                        <p>Full lifetime access</p>
                      </div>
                      <div className="flex items-start">
                        <Award className="mt-0.5 mr-2 text-gray-500" size={16} />
                        <p>Certificate of completion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                  <div className="flex space-x-8">
                    {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "pb-4 font-medium capitalize transition-colors",
                          activeTab === tab 
                            ? "border-b-2 border-primary-600 text-primary-600" 
                            : "text-gray-500 hover:text-gray-900"
                        )}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tab Content */}
                <div className="space-y-8">
                  {/* Overview */}
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="heading-sm mb-4">About This Course</h2>
                        <div 
                          className="prose prose-gray max-w-none"
                          dangerouslySetInnerHTML={{ __html: course.fullDescription }}
                        />
                      </div>
                      
                      <div>
                        <h2 className="heading-sm mb-4">What You'll Learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.skills.map((skill, index) => (
                            <div key={index} className="flex">
                              <CheckCircle2 className="mr-2 text-primary-600 shrink-0 mt-0.5" size={18} />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="heading-sm mb-4">Requirements</h2>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Basic computer knowledge</li>
                          {course.level !== 'Beginner' && (
                            <li>Understanding of {course.category === 'Web Development' || course.category === 'Frontend' 
                                ? 'HTML, CSS, and JavaScript fundamentals' 
                                : course.category === 'Data Science' || course.category === 'Artificial Intelligence'
                                ? 'Python basics and some mathematics'
                                : 'programming basics'}
                            </li>
                          )}
                          <li>A computer with {course.category === 'Mobile Development' 
                              ? 'Android Studio or Xcode installed' 
                              : 'internet access and modern web browser'}
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {/* Curriculum */}
                  {activeTab === 'curriculum' && (
                    <div>
                      <h2 className="heading-sm mb-4">Course Curriculum</h2>
                      <p className="mb-6 text-gray-600">
                        {course.lessons} lessons • {course.duration} of video content
                      </p>
                      
                      <div className="space-y-4">
                        {course.curriculum.map((section, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{section.title}</h3>
                                <p className="text-sm text-gray-500">{section.lessons} lessons • {section.duration}</p>
                              </div>
                              <button className="text-primary-600 text-sm font-medium">Preview</button>
                            </div>
                            <div className="p-4 bg-white">
                              <p className="text-gray-600 text-sm">
                                This section includes lectures on key concepts, practical demonstrations, and hands-on exercises.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Instructor */}
                  {activeTab === 'instructor' && (
                    <div>
                      <h2 className="heading-sm mb-4">Instructor</h2>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <span className="text-2xl font-medium text-gray-500">
                              {course.instructor.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">{course.instructor}</h3>
                          <p className="text-gray-500">Course Instructor</p>
                          <div className="mt-2 space-y-2">
                            <p>
                              An experienced educator with expertise in {course.category} 
                              and a passion for teaching practical, job-ready skills.
                            </p>
                            <p>
                              With over 10 years of industry experience, {course.instructor.split(' ')[0]} 
                              has helped thousands of students master complex technical concepts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Reviews */}
                  {activeTab === 'reviews' && (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="heading-sm">Student Reviews</h2>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={18} 
                                className={star <= Math.round(course.rating) 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          <span className="font-medium">{course.rating.toFixed(1)}</span>
                          <span className="text-gray-500 ml-1">({course.students.toLocaleString()} students)</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {[
                          { 
                            name: "Alex Johnson", 
                            rating: 5, 
                            date: "3 months ago",
                            comment: "Excellent course! The instructor explains complex concepts in a way that's easy to understand. I've learned so much and feel confident in my skills now."
                          },
                          { 
                            name: "Samantha Lee", 
                            rating: 4, 
                            date: "1 month ago",
                            comment: "Very informative and well-structured course. The projects were challenging but rewarding. Would recommend to anyone looking to improve their skills."
                          },
                          { 
                            name: "Michael Brown", 
                            rating: 5, 
                            date: "2 weeks ago",
                            comment: "This course exceeded my expectations. The instructor is knowledgeable and responsive to questions. The content is up-to-date and relevant to the industry."
                          }
                        ].map((review, index) => (
                          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-medium">{review.name}</div>
                              <div className="text-gray-500 text-sm">{review.date}</div>
                            </div>
                            <div className="flex mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star}
                                  size={14} 
                                  className={star <= review.rating 
                                    ? "fill-yellow-400 text-yellow-400" 
                                    : "text-gray-300"} 
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-3">Related Courses</h3>
                      <div className="space-y-4">
                        {coursesData
                          .filter(c => c.id !== course.id && c.category === course.category)
                          .slice(0, 3)
                          .map(relatedCourse => (
                            <Link 
                              key={relatedCourse.id} 
                              to={`/courses/${relatedCourse.id}`}
                              className="flex gap-3 group"
                            >
                              <div className="w-16 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={relatedCourse.image} 
                                  alt={relatedCourse.title}
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div>
                                <h4 className="font-medium text-sm group-hover:text-primary-600 transition-colors line-clamp-2">
                                  {relatedCourse.title}
                                </h4>
                                <div className="flex items-center mt-1">
                                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                  <span className="text-xs ml-1">{relatedCourse.rating.toFixed(1)}</span>
                                </div>
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-3">Course Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
