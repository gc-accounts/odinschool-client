
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { Award, BookOpen, Users, Check, ArrowRight, Heart, Lightbulb, Send, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - CodeMaster";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  const stats = [
    { value: '100+', label: 'Courses', icon: <BookOpen className="text-primary-600" size={24} /> },
    { value: '50,000+', label: 'Students', icon: <Users className="text-primary-600" size={24} /> },
    { value: '25+', label: 'Expert Instructors', icon: <Award className="text-primary-600" size={24} /> },
    { value: '95%', label: 'Satisfaction Rate', icon: <Heart className="text-primary-600" size={24} /> }
  ];

  const values = [
    { 
      icon: <Lightbulb size={24} />, 
      title: 'Innovation',
      description: 'We constantly evolve our curriculum to reflect the latest industry trends and technologies.'
    },
    { 
      icon: <Heart size={24} />, 
      title: 'Quality',
      description: 'We prioritize excellence in course content, instruction, and student experience.'
    },
    { 
      icon: <Users size={24} />, 
      title: 'Community',
      description: 'We foster a supportive environment where learners can connect, collaborate, and grow together.'
    },
    { 
      icon: <Clock size={24} />, 
      title: 'Accessibility',
      description: 'We design our platform to accommodate diverse learning styles, paces, and backgrounds.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div ref={addToRefs} className="text-center max-w-3xl mx-auto opacity-0">
              <h1 className="heading-xl mb-6">
                We're on a Mission to <span className="text-primary-600">Transform Coding Education</span>
              </h1>
              <p className="body-lg text-gray-700 mb-8">
                At CodeMaster, we believe that high-quality coding education should be accessible to everyone. We're dedicated to helping aspiring developers build the skills they need to succeed in today's tech-driven world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Join Our Community</Button>
                <Button variant="outline" size="lg">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div ref={addToRefs} className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div ref={addToRefs} className="opacity-0">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-primary-100 z-0"></div>
                  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary-100 z-0"></div>
                </div>
              </div>
              
              <div ref={addToRefs} className="opacity-0">
                <h2 className="heading-lg mb-6">
                  Our <span className="text-primary-600">Story</span>
                </h2>
                <p className="body-md text-gray-700 mb-4">
                  CodeMaster began in 2018 when a group of passionate developers and educators recognized a gap in online coding education. They saw that many platforms offered either basic tutorials that didn't prepare students for real-world challenges or advanced courses that were inaccessible to beginners.
                </p>
                <p className="body-md text-gray-700 mb-6">
                  With a vision to create a comprehensive learning journey for aspiring programmers, the team built CodeMaster to offer structured, project-based learning paths that take students from fundamentals to professional-level skills. Today, we're proud to have helped thousands of students transition into tech careers and advance their programming expertise.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Industry-experienced instructors', 'Project-based curriculum', 'Supportive learning community', 'Career-focused outcomes'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-primary-600 mr-2 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/courses">
                  <Button 
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Explore Our Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div ref={addToRefs} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
              <h2 className="heading-lg mb-4">
                Our Core <span className="text-primary-600">Values</span>
              </h2>
              <p className="body-md text-gray-600">
                These principles guide everything we do at CodeMaster, from course development to community building.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  ref={addToRefs}
                  className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div ref={addToRefs} className="opacity-0">
                <h2 className="heading-lg mb-6">
                  Ready to Start Your Coding Journey?
                </h2>
                <p className="body-md mb-8 text-primary-100">
                  Join thousands of students who are building their future with CodeMaster. Whether you're just starting out or looking to advance your skills, we have the perfect course for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/courses">
                    <Button 
                      className="bg-white text-primary-700 hover:bg-gray-100" 
                      size="lg"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-primary-700" 
                      size="lg"
                      icon={<Send size={18} />}
                      iconPosition="right"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div ref={addToRefs} className="opacity-0 hidden md:block">
                <div className="relative p-6 rounded-2xl bg-primary-700 border border-primary-500 shadow-lg">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500 rounded-full opacity-20 -mt-20 -mr-20"></div>
                  <blockquote className="relative z-10">
                    <div className="mb-6 text-primary-300">
                      <svg width="45" height="36" className="fill-current">
                        <path d="M13.415.43c-2.523 0-4.75.428-6.683 1.284-1.933.855-3.55 2.054-4.855 3.594C.573 6.847-.115 8.647-.115 10.705c0 2.058.688 3.858 2.062 5.398 1.375 1.54 3.051 2.739 5.027 3.594 1.976.856 4.088 1.284 6.335 1.284v7.105c-3.667-.639-7.045-1.761-10.136-3.368C.082 22.98-2.344 20.549-4.107 17.29c-1.764-3.259-2.645-6.87-2.645-10.833 0-3.963.928-7.574 2.786-10.833C-1.109 1.364 1.37-1.027 4.47-2.633 7.569-4.24 10.957-5.362 13.415-6v6.43zm25.221 0c-2.523 0-4.75.428-6.682 1.284-1.934.855-3.551 2.054-4.856 3.594-1.304 1.54-1.956 3.34-1.956 5.398 0 2.058.652 3.858 1.956 5.398 1.305 1.54 2.922 2.739 4.856 3.594 1.932.856 4.16 1.284 6.682 1.284v7.105c-3.666-.639-7.044-1.761-10.135-3.368-3.092-1.608-5.517-4.039-7.28-7.298-1.764-3.259-2.646-6.87-2.646-10.833 0-3.963.928-7.574 2.786-10.833C25.233 1.364 27.711-1.027 30.811-2.633c3.099-1.607 6.486-2.729 10.136-3.368v6.43h-2.311z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium mb-6">
                      CodeMaster transformed my career. I went from a complete beginner to landing a job as a frontend developer in just 8 months. The structured curriculum and amazing community support made all the difference.
                    </p>
                    <footer className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&w=100" 
                          alt="Student" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Jessica Williams</div>
                        <div className="text-sm text-primary-200">Frontend Developer at TechStart</div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
