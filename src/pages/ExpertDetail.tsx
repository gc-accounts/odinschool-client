
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BriefcaseIcon, GraduationCapIcon, StarIcon, UsersIcon, BookOpenIcon, ClockIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { InstructorProps } from '@/components/InstructorProfile';

// Extend instructor data with more details
interface ExpertDetail extends InstructorProps {
  expertise: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  courses: {
    id: string;
    title: string;
    category: string;
    rating: number;
    students: number;
  }[];
  achievements: string[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
  about: string;
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
}

// Sample expert details data
const expertsData: ExpertDetail[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior JavaScript Developer',
    bio: 'Full-stack developer with 10+ years of experience. Passionate about teaching web development and helping others build their dream applications.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&w=800',
    companies: [
      {
        name: 'Google',
        logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?crop=entropy&w=100'
      },
      {
        name: 'Microsoft',
        logo: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?crop=entropy&w=100'
      },
      {
        name: 'Amazon',
        logo: 'https://images.unsplash.com/photo-1617952233714-78515f368490?crop=entropy&w=100'
      }
    ],
    featured: true,
    expertise: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    education: [
      {
        degree: 'Master of Computer Science',
        institution: 'Stanford University',
        year: '2010'
      },
      {
        degree: 'Bachelor of Software Engineering',
        institution: 'MIT',
        year: '2008'
      }
    ],
    courses: [
      {
        id: '1',
        title: 'JavaScript Fundamentals',
        category: 'Web Development',
        rating: 4.8,
        students: 12450
      },
      {
        id: '5',
        title: 'Advanced React Patterns',
        category: 'Frontend',
        rating: 4.9,
        students: 8320
      },
      {
        id: '7',
        title: 'Full-Stack Web Development',
        category: 'Web Development',
        rating: 4.7,
        students: 6540
      }
    ],
    achievements: [
      'Google Developer Expert (GDE) for Web Technologies',
      'Author of "Modern JavaScript Patterns" with 50,000+ copies sold',
      'Speaker at 20+ international tech conferences',
      'Open source contributor to React and Node.js'
    ],
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/sarahjohnson'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/sarahjohnson'
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/sarahjohnson'
      }
    ],
    about: 'Sarah Johnson is a seasoned software engineer with over a decade of experience building scalable web applications. After graduating from Stanford University, she joined Google where she worked on critical projects for Google Cloud Platform. Later, she moved to Microsoft to lead frontend architecture for Office 365 before joining Amazon as a Principal Engineer. Throughout her career, Sarah has maintained a passion for education, regularly mentoring junior developers and creating online courses that have helped thousands of students worldwide. Her teaching philosophy emphasizes practical knowledge and real-world applications over theory, helping students build job-ready skills quickly.',
    experience: [
      {
        role: 'Principal Engineer',
        company: 'Amazon',
        duration: '2018 - Present',
        description: 'Leading architecture decisions for AWS developer tools and mentoring engineering teams across multiple departments.'
      },
      {
        role: 'Senior Frontend Architect',
        company: 'Microsoft',
        duration: '2013 - 2018',
        description: 'Redesigned architecture for Office 365 web applications, improving performance by 40% and implementing React-based component system.'
      },
      {
        role: 'Software Engineer',
        company: 'Google',
        duration: '2010 - 2013',
        description: 'Developed backend services for Google Cloud Platform using Node.js and built internal tools used by hundreds of engineers.'
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'React & Frontend Expert',
    bio: 'Frontend specialist with focus on React ecosystem. 8+ years building scalable web applications and mentoring junior developers.',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&w=800',
    companies: [
      {
        name: 'Facebook',
        logo: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?crop=entropy&w=100'
      },
      {
        name: 'Airbnb',
        logo: 'https://images.unsplash.com/photo-1635350804108-7170f0ef2f9f?crop=entropy&w=100'
      },
      {
        name: 'Dropbox',
        logo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&w=100'
      }
    ],
    featured: true,
    expertise: ['React', 'TypeScript', 'Redux', 'Next.js', 'UI/UX Design'],
    education: [
      {
        degree: 'Master of Human-Computer Interaction',
        institution: 'Carnegie Mellon University',
        year: '2012'
      },
      {
        degree: 'Bachelor of Computer Science',
        institution: 'UC Berkeley',
        year: '2010'
      }
    ],
    courses: [
      {
        id: '2',
        title: 'React for Professionals',
        category: 'Frontend',
        rating: 4.9,
        students: 8325
      },
      {
        id: '8',
        title: 'Building UIs with TypeScript',
        category: 'Frontend',
        rating: 4.7,
        students: 6210
      },
      {
        id: '9',
        title: 'Advanced Component Architecture',
        category: 'Frontend',
        rating: 4.8,
        students: 5430
      }
    ],
    achievements: [
      'Facebook Open Source Contributor Award for React contributions',
      'Created UI component libraries used by over 200 companies',
      'Technical reviewer for 5 bestselling frontend development books',
      'Mentor for React developer community with 15,000+ members'
    ],
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/michaelchen'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/michaelchen'
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/michaelchen'
      }
    ],
    about: 'Michael Chen is a frontend architecture specialist who has shaped the way modern web interfaces are built. His career began at Facebook where he contributed to the React core team, helping develop and promote component-based architecture patterns that are now industry standards. At Airbnb, Michael led the development of their design system that unified the UI experience across web and mobile platforms. Currently at Dropbox, he oversees frontend infrastructure and leads initiatives to improve developer experience and application performance. Michael is passionate about sharing knowledge and has taught thousands of developers through his courses, workshops, and conference talks.',
    experience: [
      {
        role: 'Frontend Architect',
        company: 'Dropbox',
        duration: '2017 - Present',
        description: 'Oversee frontend infrastructure, develop componentization strategy, and implement performance optimizations that reduced bundle size by 35%.'
      },
      {
        role: 'Senior Frontend Engineer',
        company: 'Airbnb',
        duration: '2014 - 2017',
        description: 'Led development of Airbnb's design system and component library that unified UI across platform for millions of users.'
      },
      {
        role: 'Software Engineer',
        company: 'Facebook',
        duration: '2012 - 2014',
        description: 'Contributed to React core team and helped develop internal tools and frameworks used by Facebook engineering teams.'
      }
    ]
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Data Scientist & Python Expert',
    bio: 'Data scientist with expertise in machine learning and statistical analysis. PhD in Computer Science with focus on AI applications.',
    avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&w=800',
    companies: [
      {
        name: 'IBM',
        logo: 'https://images.unsplash.com/photo-1610337673044-720471f83677?crop=entropy&w=100'
      },
      {
        name: 'Netflix',
        logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&w=100'
      },
      {
        name: 'Intel',
        logo: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?crop=entropy&w=100'
      }
    ],
    featured: true,
    expertise: ['Python', 'TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision'],
    education: [
      {
        degree: 'PhD in Computer Science',
        institution: 'University of California, Berkeley',
        year: '2013'
      },
      {
        degree: 'Master of Science in AI',
        institution: 'Stanford University',
        year: '2010'
      },
      {
        degree: 'Bachelor of Computer Engineering',
        institution: 'MIT',
        year: '2008'
      }
    ],
    courses: [
      {
        id: '3',
        title: 'Python Data Science',
        category: 'Data Science',
        rating: 4.7,
        students: 9840
      },
      {
        id: '10',
        title: 'Natural Language Processing Fundamentals',
        category: 'Artificial Intelligence',
        rating: 4.8,
        students: 4520
      },
      {
        id: '11',
        title: 'Deep Learning for Computer Vision',
        category: 'Artificial Intelligence',
        rating: 4.9,
        students: 5680
      }
    ],
    achievements: [
      'Research published in top AI conferences including NeurIPS and ICML',
      'Developed recommendation algorithm used by Netflix that improved user engagement by 15%',
      'IBM Distinguished Technical Leader award recipient',
      'Led team that won international computer vision challenge for medical imaging'
    ],
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/emilyrodriguez'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/emilyrodriguez'
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/emilyrodriguez'
      }
    ],
    about: 'Emily Rodriguez is a leading researcher and practitioner in the field of artificial intelligence and data science. With a PhD from UC Berkeley focusing on machine learning applications, she has pioneered techniques that have become fundamental to modern AI systems. Emily began her industry career at IBM Research, where she worked on natural language processing systems that power IBM Watson. At Netflix, she led the data science team responsible for content recommendation algorithms used by millions worldwide. Currently at Intel, she drives research in computer vision systems for autonomous vehicles and smart infrastructure. Emily is passionate about making AI accessible through education and has created courses that break down complex concepts for learners at all levels.',
    experience: [
      {
        role: 'Principal AI Research Scientist',
        company: 'Intel',
        duration: '2018 - Present',
        description: 'Lead research team focused on computer vision systems for autonomous vehicles and edge computing applications.'
      },
      {
        role: 'Senior Data Scientist',
        company: 'Netflix',
        duration: '2015 - 2018',
        description: 'Developed and optimized recommendation algorithms that improved content discovery and user engagement metrics across the platform.'
      },
      {
        role: 'Research Scientist',
        company: 'IBM',
        duration: '2013 - 2015',
        description: 'Worked on natural language processing systems for IBM Watson, focusing on question-answering capabilities and sentiment analysis.'
      }
    ]
  }
];

const ExpertDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [expert, setExpert] = useState<ExpertDetail | null>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Find the expert with the matching id
    const foundExpert = expertsData.find(expert => expert.id === id);
    
    if (foundExpert) {
      setExpert(foundExpert);
      document.title = `${foundExpert.name} - Expert Profile | CodeMaster`;
    }
  }, [id]);

  if (!expert) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Expert not found</h1>
          <p className="mb-6">The expert you're looking for doesn't exist or may have been removed.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero section with expert info */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex justify-center">
                <Avatar className="h-48 w-48 border-4 border-white shadow-xl">
                  <AvatarImage src={expert.avatar} alt={expert.name} />
                  <AvatarFallback className="text-4xl">{expert.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="md:w-3/4 space-y-4 text-center md:text-left">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{expert.name}</h1>
                  <p className="text-primary-100 text-xl">{expert.title}</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {expert.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 hover:bg-white/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-lg max-w-3xl">{expert.bio}</p>
                
                <div className="flex items-center space-x-4 justify-center md:justify-start">
                  {expert.socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-200 transition-colors"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-5 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">About {expert.name}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {expert.about}
                    </p>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <UsersIcon className="h-5 w-5 text-primary-600" />
                        <h3 className="text-lg font-semibold">Students Taught</h3>
                      </div>
                      <p className="text-3xl font-bold text-primary-600">
                        {expert.courses.reduce((total, course) => total + course.students, 0).toLocaleString()}+
                      </p>
                      <p className="text-sm text-gray-500">Across all courses</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpenIcon className="h-5 w-5 text-primary-600" />
                        <h3 className="text-lg font-semibold">Courses Created</h3>
                      </div>
                      <p className="text-3xl font-bold text-primary-600">
                        {expert.courses.length}
                      </p>
                      <p className="text-sm text-gray-500">Specialized training programs</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <ClockIcon className="h-5 w-5 text-primary-600" />
                        <h3 className="text-lg font-semibold">Years of Experience</h3>
                      </div>
                      <p className="text-3xl font-bold text-primary-600">
                        {new Date().getFullYear() - parseInt(expert.education[expert.education.length - 1].year)}+
                      </p>
                      <p className="text-sm text-gray-500">In the tech industry</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="experience">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
                    <div className="space-y-8">
                      {expert.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary-100 last:border-0 last:pb-0">
                          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
                            <BriefcaseIcon className="h-3 w-3 text-white" />
                          </div>
                          <div className="mb-2">
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                              <span className="font-medium">{exp.company}</span>
                              <span>•</span>
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Companies Worked With</h3>
                  <div className="flex flex-wrap gap-4">
                    {expert.companies.map((company, index) => (
                      <div key={index} className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
                        <div className="h-12 w-12 rounded overflow-hidden">
                          <img 
                            src={company.logo} 
                            alt={company.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{company.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Education</h2>
                    <div className="space-y-8">
                      {expert.education.map((edu, index) => (
                        <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary-100 last:border-0 last:pb-0">
                          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
                            <GraduationCapIcon className="h-3 w-3 text-white" />
                          </div>
                          <div className="mb-2">
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                              <span className="font-medium">{edu.institution}</span>
                              <span>•</span>
                              <span>Graduated {edu.year}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses">
                <h2 className="text-2xl font-bold mb-6">Courses by {expert.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expert.courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Link to={`/courses/${course.id}`}>
                        <div className="h-3 bg-primary-600"></div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold">{course.title}</h3>
                            <Badge variant="outline">{course.category}</Badge>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                              <span>{course.rating}</span>
                            </div>
                            <span>•</span>
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                          
                          <Button className="w-full">View Course</Button>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="achievements">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
                    <div className="space-y-4">
                      {expert.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 min-w-6">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                          </div>
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Learning with {expert.name}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Enhance your skills and advance your career with expert-led courses designed to provide practical, real-world knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/courses`}>
                <Button size="lg">Browse All Courses</Button>
              </Link>
              <Link to={`/courses/${expert.courses[0]?.id || ''}`}>
                <Button variant="outline" size="lg">
                  View Featured Course
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExpertDetail;
