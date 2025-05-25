
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import OrganizationLogos from '@/components/OrganizationLogos';
import CallbackForm from '@/components/CallbackForm';
import ExtrasSection1 from '@/components/ExtrasSection1';
import NewsSection from '@/components/NewsSection';
import WhyLearnDataAI from '@/components/WhyLearnDataAI';

import { BookOpen, GraduationCap, Clock, Laptop, Lightbulb, CreditCard, Medal, Users, Calendar, Sparkles, BookMarked, Star, Brain, Image, Circle, Triangle, Check, ChevronRight, Target, Trophy, BookOpenCheck } from 'lucide-react';
import OdinTalks from '@/components/OdinTalks';

const mentorsData = [
  {
    id: "mentor-1",
    name: "Dr. Sarah Johnson",
    role: "AI Research Scientist",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256",
    expertise: ["Machine Learning", "Natural Language Processing", "Neural Networks"],
    bio: "Dr. Sarah Johnson is a leading researcher in artificial intelligence with over 15 years of experience. She has published numerous papers on deep learning applications.",
    education: "Ph.D. in Computer Science, Stanford University",
    accomplishments: [
      "Led team that developed breakthrough NLP model",
      "Author of 'Deep Learning: The Next Frontier'",
      "Recipient of the ACM Computing Innovation Fellowship"
    ]
  },
  {
    id: "mentor-2",
    name: "Michael Chen",
    role: "Senior Software Engineer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=256",
    expertise: ["Cloud Architecture", "DevOps", "Microservices"],
    bio: "Michael Chen specializes in cloud-native applications and infrastructure automation. He has helped numerous organizations modernize their tech stacks.",
    education: "M.S. in Computer Engineering, UC Berkeley",
    accomplishments: [
      "Microsoft Certified Azure Solutions Architect",
      "Creator of popular open-source deployment tool",
      "Speaker at KubeCon and CloudNativeCon"
    ]
  },
  {
    id: "mentor-3",
    name: "Priya Patel",
    role: "Data Science Director",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=256",
    expertise: ["Big Data Analytics", "Recommendation Systems", "Statistical Modeling"],
    bio: "Priya leads data science initiatives focused on improving content recommendations and user experience through advanced analytics.",
    education: "Ph.D. in Statistics, MIT",
    accomplishments: [
      "Developed Netflix's content classification algorithm",
      "Published research on personalization at scale",
      "Adjunct Professor at UCLA"
    ]
  },
];

const CollegeStudents = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#0c0a16]">
        {/* New Mosaic Banner Design - Keep existing */}
        <section className="relative py-16 md:py-28 bg-gray-900 overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6TTI0IDMwYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii4yNSIvPjwvZz48L3N2Zz4=')]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Main banner grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
              
              {/* Main headline - 5 columns */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-1 px-3 bg-white/10 backdrop-blur-sm rounded-full inline-flex items-center mb-6 border border-white/10 max-w-max">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                  <span className="text-white/90 text-sm">For college students</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight tracking-tight">
                Get Future Ready<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"> Data & AI</span>
                </h1>
                
                <p className="text-white/80 text-xl mb-6 max-w-xl">
                  Tech training that keeps pace with industry demands—designed for busy students building their future.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="px-6 py-6 text-lg bg-white text-purple-700 hover:bg-white/90">
                    <GraduationCap className="mr-2 h-5 w-5" /> Get Student Pricing
                  </Button>
                  <Button size="lg" variant="outline" className="px-6 py-6 text-lg bg-transparent border-white/40 text-white hover:bg-white/10">
                    <BookOpen className="mr-2 h-5 w-5" /> Browse Courses
                  </Button>
                </div>
                
                {/* Social proof */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-white/60 text-sm">Trusted by students from:</p>
                      <div className="flex items-center mt-2 gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">S</div>
                        <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">M</div>
                        <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">H</div>
                        <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">+</div>
                      </div>
                    </div>
                    <div className="pl-6 border-l border-white/10">
                      <p className="text-white/60 text-sm">Student satisfaction</p>
                      <div className="flex mt-1 text-yellow-400">
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <span className="text-white ml-2">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side mosaic - 7 columns */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
                  {/* Feature highlighted card */}
                  <div className="col-span-4 row-span-3 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Trophy className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Student Success Program</h3>
                      <p className="text-white/70">Personalized mentorship and career guidance</p>
                    </div>
                    <Button variant="outline" className="mt-4 bg-white/10 border-white/20 text-white w-full hover:bg-white/20 backdrop-blur-sm">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Student photo */}
                  <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80')] bg-cover bg-center relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-sm font-medium">Real student projects</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats card */}
                  <div className="col-span-2 row-span-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-5 transform hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Target className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">94%</h3>
                      <p className="text-white/80 text-sm">Job placement success rate</p>
                    </div>
                  </div>
                  
                  {/* Tech skills card */}
                  <div className="col-span-2 row-span-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-white font-medium mb-3">Top Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-white/90 text-xs">React</div>
                      <div className="px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-white/90 text-xs">Python</div>
                      <div className="px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-white/90 text-xs">AWS</div>
                      <div className="px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-white/90 text-xs">UX/UI</div>
                      <div className="px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-white/90 text-xs">Node.js</div>
                      <div className="px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-white/90 text-xs">+5 more</div>
                    </div>
                  </div>
                  
                  {/* Pricing preview */}
                  <div className="col-span-2 row-span-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 transform hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                        <CreditCard className="text-white h-5 w-5" />
                      </div>
                      <div className="text-white font-medium">Student Price</div>
                    </div>
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-white/70 text-sm line-through mr-2">5k₹</span>
                        <span className="text-white text-3xl font-bold">3k₹</span>
                        <span className="text-white/70">/mo</span>
                      </div>
                      <p className="text-white/80 text-xs mt-1">with PL-300 Certification</p>
                    </div>
                  </div>
                  
                  {/* Campus communities */}
                  <div className="col-span-4 row-span-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                        <Users className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Campus Communities</h3>
                        <p className="text-white/80 text-xs">Connect with 200+ student communities</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                      Join
                    </Button>
                  </div>
                  
                  {/* Learning paths */}
                  <div className="col-span-4 row-span-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                        <BookOpenCheck className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Learning Paths</h3>
                        <p className="text-white/80 text-xs">6 structured career paths to choose from</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured companies banner */}
            <div className="mt-16 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-center mb-2">
                <p className="text-white/50 text-sm">Our students work at top companies worldwide</p>
              </div>
              <div className="flex justify-around items-center flex-wrap gap-4 md:gap-8">
                <div className="text-white/40 font-semibold">Google</div>
                <div className="text-white/40 font-semibold">Microsoft</div>
                <div className="text-white/40 font-semibold">Amazon</div>
                <div className="text-white/40 font-semibold">Meta</div>
                <div className="text-white/40 font-semibold">Apple</div>
                <div className="text-white/40 font-semibold">Spotify</div>
              </div>
            </div>
          </div>
          
          {/* Custom diagonal cut and wave at the bottom */}
          <div className="absolute -bottom-1 left-0 right-0 h-16 md:h-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#ffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
        
      </main>
      <WhyLearnDataAI />
      <Testimonials />
      <OrganizationLogos />
      <ExtrasSection1 />
      <OdinTalks />
      <NewsSection />
      <CallbackForm />
      <Footer />
    </>
  );
};

export default CollegeStudents;
