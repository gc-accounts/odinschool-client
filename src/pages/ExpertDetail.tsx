
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpenIcon, UsersIcon } from 'lucide-react';
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
  about: string;
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
    about: 'Sarah Johnson is a seasoned software engineer with over a decade of experience building scalable web applications. After graduating from Stanford University, she joined Google where she worked on critical projects for Google Cloud Platform. Later, she moved to Microsoft to lead frontend architecture for Office 365 before joining Amazon as a Principal Engineer.'
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
      }
    ],
    about: 'Michael Chen is a frontend architecture specialist who has shaped the way modern web interfaces are built. His career began at Facebook where he contributed to the React core team, helping develop and promote component-based architecture patterns that are now industry standards.'
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
    expertise: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
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
        title: 'Natural Language Processing',
        category: 'AI',
        rating: 4.8,
        students: 4520
      }
    ],
    about: 'Emily Rodriguez is a leading researcher and practitioner in the field of artificial intelligence and data science. With a PhD from UC Berkeley focusing on machine learning applications, she has pioneered techniques that have become fundamental to modern AI systems.'
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
              </div>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Education</h2>
                    <div className="space-y-6">
                      {expert.education.map((edu, index) => (
                        <div key={index} className="p-4 border-l-4 border-primary-600 bg-white shadow rounded">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <div className="text-gray-600">
                            <span className="font-medium">{edu.institution}</span>
                            <span> • Graduated {edu.year}</span>
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
                              <span>★</span>
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
            </Tabs>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Learning with {expert.name}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Enhance your skills and advance your career with expert-led courses.
            </p>
            <Link to={`/courses`}>
              <Button size="lg">Browse All Courses</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExpertDetail;
