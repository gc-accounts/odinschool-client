
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Clock, Laptop, Lightbulb, CreditCard, Medal, Users, Calendar, Sparkles, BookMarked, Star, Brain, Image, Circle, Triangle, Check, ChevronRight, Target, Trophy, BookOpenCheck } from 'lucide-react';

const CollegeStudents = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {/* New Mosaic Banner Design */}
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
                  Skills That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Outpace</span> Your College Curriculum
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
                        <span className="text-white/70 text-sm line-through mr-2">$49</span>
                        <span className="text-white text-3xl font-bold">$19</span>
                        <span className="text-white/70">/mo</span>
                      </div>
                      <p className="text-white/80 text-xs mt-1">with .edu email verification</p>
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
              <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Asymmetric Feature Grid - Updated with Aesthetic Design */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800 mb-4 inline-block shadow-sm">DESIGNED FOR STUDENTS</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built with your schedule, needs, and future in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="md:col-span-2 border-none shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50 transform transition-all hover:scale-[1.02] duration-300">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="p-6 md:p-8 md:w-1/2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-4 shadow-md">
                      <Sparkles className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4">Designed for Gen Z</CardTitle>
                    <CardDescription className="text-base text-gray-700">
                      Modern curriculum that focuses on the latest technologies and practical skills employers actually want. Learn through projects, not just lectures.
                    </CardDescription>
                  </div>
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-8 shadow-lg">
                    <ul className="text-white space-y-3">
                      <li className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                        <Star className="mr-2 h-5 w-5 text-yellow-300" /> 
                        <span>Project-based learning</span>
                      </li>
                      <li className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                        <Star className="mr-2 h-5 w-5 text-yellow-300" /> 
                        <span>Portfolio building</span>
                      </li>
                      <li className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                        <Star className="mr-2 h-5 w-5 text-yellow-300" /> 
                        <span>Modern tech stack</span>
                      </li>
                      <li className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                        <Star className="mr-2 h-5 w-5 text-yellow-300" /> 
                        <span>Industry mentors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="border-none shadow-xl bg-gradient-to-br from-pink-50 to-rose-50 transform transition-all hover:scale-[1.02] duration-300">
                <CardHeader className="pb-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mb-4 shadow-md">
                    <Clock className="h-7 w-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-2xl">Flexible Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Learn between classes, work, and social life with bite-sized modules and mobile access.</p>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <div className="glass-card p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-600">Average module</p>
                      <p className="font-bold text-pink-600">15 min</p>
                    </div>
                    <div className="glass-card p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-600">Weekly commitment</p>
                      <p className="font-bold text-pink-600">3-5 hrs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <Card className="md:col-span-4 border-none shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 transform transition-all hover:scale-[1.02] duration-300">
                <CardHeader className="pb-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 shadow-md">
                    <CreditCard className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Student Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Special discounts with valid .edu email addresses.</p>
                  <div className="glass-card p-4 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Regular price</p>
                    <p className="text-xl font-bold text-gray-400 line-through">$49/month</p>
                    <p className="text-sm text-gray-600 mt-4 mb-1">Student price</p>
                    <p className="text-3xl font-bold text-blue-600">$19/month</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-none shadow-md">Verify Student Status</Button>
                </CardFooter>
              </Card>
              
              <Card className="md:col-span-8 border-none shadow-xl bg-gradient-to-br from-amber-50 to-yellow-50 transform transition-all hover:scale-[1.02] duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:p-8 md:w-1/2">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 shadow-md">
                      <Brain className="h-7 w-7 text-amber-600" />
                    </div>
                    <CardTitle className="text-2xl mb-4">Learn Skills That Matter</CardTitle>
                    <CardDescription className="text-base text-gray-700 mb-6">
                      Our curriculum is designed with input from top tech companies to ensure you're learning what employers actually want.
                    </CardDescription>
                    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 border-none shadow-md">Explore Skills</Button>
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-8 grid grid-cols-2 gap-3">
                    {['React', 'Python', 'AWS', 'Node.js', 'UI/UX', 'Data Science', 'DevOps', 'AI/ML'].map((skill) => (
                      <div key={skill} className="glass-card p-3 rounded-lg text-center">
                        <p className="font-medium text-amber-800">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Staggered Program Cards - Updated with Aesthetic Design */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4 inline-block shadow-sm">SPECIAL OPPORTUNITIES</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Programs</span> for Students
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Exclusive opportunities designed specifically for college students
              </p>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 transform -translate-x-1/2 rounded-full shadow-md"></div>
                
                {/* Program 1 - Left */}
                <div className="md:w-1/2 md:pr-12 md:mr-auto">
                  <Card className="border-none shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transform transition hover:scale-[1.02] duration-300">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Laptop className="h-20 w-20 text-white opacity-50" />
                      </div>
                      <div className="absolute top-4 right-4 glass-panel text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        Quarterly
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">Coding Hackathons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">Join our quarterly hackathons with other college students and build impressive portfolio projects in just 48 hours.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="glass-panel px-2 py-1 text-blue-800 text-xs rounded-full border border-blue-100">Cash prizes</span>
                        <span className="glass-panel px-2 py-1 text-blue-800 text-xs rounded-full border border-blue-100">Networking</span>
                        <span className="glass-panel px-2 py-1 text-blue-800 text-xs rounded-full border border-blue-100">Portfolio projects</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-none shadow-md">Register for Next Hackathon</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-400 z-10 shadow-md"></div>
                
                {/* Program 2 - Right */}
                <div className="mt-8 md:mt-32 md:w-1/2 md:pl-12 md:ml-auto">
                  <Card className="border-none shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transform transition hover:scale-[1.02] duration-300">
                    <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lightbulb className="h-20 w-20 text-white opacity-50" />
                      </div>
                      <div className="absolute top-4 right-4 glass-panel text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        4-Week Program
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">Internship Bootcamp</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">Intensive 4-week program to prepare you for tech internship interviews at top companies. Includes algorithm training and mock interviews.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="glass-panel px-2 py-1 text-purple-800 text-xs rounded-full border border-purple-100">Mock interviews</span>
                        <span className="glass-panel px-2 py-1 text-purple-800 text-xs rounded-full border border-purple-100">Algorithm training</span>
                        <span className="glass-panel px-2 py-1 text-purple-800 text-xs rounded-full border border-purple-100">Resume review</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 border-none shadow-md">Apply for Next Cohort</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Program 3 - Left */}
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-300 to-pink-300 transform -translate-x-1/2 rounded-full shadow-md"></div>
                
                <div className="md:w-1/2 md:pr-12 md:mr-auto">
                  <Card className="border-none shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transform transition hover:scale-[1.02] duration-300">
                    <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <GraduationCap className="h-20 w-20 text-white opacity-50" />
                      </div>
                      <div className="absolute top-4 right-4 glass-panel text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                        Academic Year
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">Campus Ambassador</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">Represent us on your campus, organize events, and earn exclusive benefits including free courses and commission on referrals.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="glass-panel px-2 py-1 text-pink-800 text-xs rounded-full border border-pink-100">Free access</span>
                        <span className="glass-panel px-2 py-1 text-pink-800 text-xs rounded-full border border-pink-100">Commission</span>
                        <span className="glass-panel px-2 py-1 text-pink-800 text-xs rounded-full border border-pink-100">Leadership experience</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 border-none shadow-md">Apply to Program</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Success Stories Carousel - with Aesthetic Design */}
        <section className="py-16 bg-white overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 mb-4 inline-block shadow-sm">SUCCESS STORIES</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Student</span> Success
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what other college students like you have achieved
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mx-4 px-4 pb-8 overflow-visible">
              {/* Story Card 1 */}
              <div className="group">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 bg-white transform transition group-hover:scale-[1.02] duration-300">
                  <div className="h-60 bg-gradient-to-br from-purple-400 to-blue-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-purple-200 to-purple-400"></div>
                        <div className="ml-3">
                          <h3 className="text-lg font-bold text-white">Sophia J.</h3>
                          <p className="text-sm text-white/80">Computer Science, Stanford</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"The web development bootcamp helped me land my dream internship at Google during my junior year. The projects I built became the highlight of my portfolio!"</p>
                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t">
                      <span className="flex items-center mr-4">
                        <Laptop className="h-4 w-4 mr-1 text-purple-500" /> Web Development
                      </span>
                      <span className="flex items-center">
                        <Medal className="h-4 w-4 mr-1 text-purple-500" /> Google Internship
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Story Cards 2 & 3 */}
              <div className="group lg:mt-12">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 bg-white transform transition group-hover:scale-[1.02] duration-300">
                  <div className="h-60 bg-gradient-to-br from-pink-400 to-orange-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        <div className="ml-3">
                          <h3 className="text-lg font-bold text-white">Marcus T.</h3>
                          <p className="text-sm text-white/80">Business & CS, NYU</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"I built my startup's MVP during the summer program. We just closed our first pre-seed round of $500K thanks to the skills I learned here!"</p>
                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t">
                      <span className="flex items-center mr-4">
                        <Laptop className="h-4 w-4 mr-1 text-pink-500" /> Full Stack
                      </span>
                      <span className="flex items-center">
                        <Medal className="h-4 w-4 mr-1 text-pink-500" /> Startup Founder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 bg-white transform transition group-hover:scale-[1.02] duration-300">
                  <div className="h-60 bg-gradient-to-br from-blue-400 to-green-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-green-200 to-green-400"></div>
                        <div className="ml-3">
                          <h3 className="text-lg font-bold text-white">Aisha K.</h3>
                          <p className="text-sm text-white/80">Data Science, UC Berkeley</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"The AI course helped me understand complex concepts that my college classes only touched on. I published my first research paper as an undergrad!"</p>
                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t">
                      <span className="flex items-center mr-4">
                        <Laptop className="h-4 w-4 mr-1 text-green-500" /> AI & ML
                      </span>
                      <span className="flex items-center">
                        <Medal className="h-4 w-4 mr-1 text-green-500" /> Research Publication
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action - Bold and Interactive with Aesthetic Design */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 z-0">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6TTI0IDMwYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii4yNSIvPjwvZz48L3N2Zz4=')]"></div>
            </div>
          </div>
          
          {/* Glass Morphism Card */}
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">Ready to boost your career prospects?</h2>
                  <p className="text-xl text-white/90">Start learning with our special student discount</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <Button size="lg" className="text-lg py-6 px-8 bg-white/90 backdrop-blur-md text-violet-700 hover:bg-white hover:text-violet-800 shadow-xl transition-all duration-300 border border-white/20">
                    <GraduationCap className="mr-2 h-5 w-5" /> Get Student Discount
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg py-6 px-8 bg-transparent border-white/40 text-white hover:bg-white/10 shadow-xl transition-all duration-300">
                    <Calendar className="mr-2 h-5 w-5" /> Schedule Demo
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 shadow-lg">
                  <p className="text-2xl md:text-3xl font-bold text-white">15K+</p>
                  <p className="text-white/80">Students</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 shadow-lg">
                  <p className="text-2xl md:text-3xl font-bold text-white">94%</p>
                  <p className="text-white/80">Completion Rate</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 shadow-lg">
                  <p className="text-2xl md:text-3xl font-bold text-white">250+</p>
                  <p className="text-white/80">Universities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 shadow-lg">
                  <p className="text-2xl md:text-3xl font-bold text-white">89%</p>
                  <p className="text-white/80">Job Placement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Updated with Aesthetic Design */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-800 mb-4 inline-block shadow-sm">GOT QUESTIONS?</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">FAQs</span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm mr-3 shadow-sm">Q</span>
                      How do I verify my student status?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Simply sign up with your .edu email address or upload a valid student ID through our verification portal. Verification usually takes less than 24 hours.</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm mr-3 shadow-sm">Q</span>
                      Can I get college credit for these courses?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">We partner with several universities for credit transfer. Check with your academic advisor to see if your school accepts our certificates for credit or internship requirements.</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm mr-3 shadow-sm">Q</span>
                      How long do I have access to the courses?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">With a student subscription, you have unlimited access to all courses as long as your subscription is active and your student status is verified (generally up to 4 years or until graduation).</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm mr-3 shadow-sm">Q</span>
                      Can I access the courses offline?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Yes, our mobile app allows you to download lessons for offline viewing, perfect for commuting or studying in areas with limited internet access.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-4">Still have questions? We're happy to help!</p>
                <Button variant="outline" className="mx-auto bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 border-none shadow-md">
                  Contact Student Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CollegeStudents;
