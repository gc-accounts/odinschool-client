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
              <path fill="#1c1633" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Asymmetric Feature Grid - Updated with Aesthetic Design */}
        <section className="py-16 bg-gradient-to-b from-[#1c1633] to-[#2a1e4a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-400/20 text-purple-300 mb-4 inline-block backdrop-blur-sm border border-purple-500/20">DESIGNED FOR STUDENTS</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
                Why Choose Us
              </h2>
              <p className="text-lg text-purple-100/70 max-w-2xl mx-auto">
                Built with your schedule, needs, and future in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large feature card */}
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="bg-gradient-to-br from-indigo-600/40 to-purple-700/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80')] bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"></div>
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                    <Sparkles className="h-7 w-7 text-indigo-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Designed for Gen Z</h3>
                  <p className="text-purple-100/70 mb-4">Modern curriculum that focuses on the latest technologies and practical skills employers actually want.</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Project-based</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Modern tech stack</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Industry mentors</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-rose-600/40 to-red-700/40 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80')] bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"></div>
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                    <Clock className="h-7 w-7 text-rose-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Flexible Schedule</h3>
                  <p className="text-rose-100/70 mb-4">Learn between classes with bite-sized modules designed for busy students.</p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                      <p className="text-xs text-white/60">Average module</p>
                      <p className="text-xl font-bold text-white">15 min</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                      <p className="text-xs text-white/60">Weekly time</p>
                      <p className="text-xl font-bold text-white">3-5 hrs</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-600/40 to-yellow-700/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group md:col-span-2">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80')] bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"></div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                      <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                        <Brain className="h-7 w-7 text-amber-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Skills That Matter</h3>
                      <p className="text-amber-100/70">Our curriculum is designed with input from top tech companies to ensure you're learning what employers actually want.</p>
                      <Button className="mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-none hover:opacity-90">
                        Explore Skills
                      </Button>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-3">
                      {['React', 'Python', 'AWS', 'Node.js', 'UI/UX', 'Data Science', 'DevOps', 'AI/ML'].map((skill) => (
                        <div key={skill} className="bg-white/10 backdrop-blur-sm p-2 rounded-lg text-center border border-white/10">
                          <p className="font-medium text-white text-sm">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pricing card with stats */}
              <div className="md:col-span-4 grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-br from-blue-600/40 to-cyan-700/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80')] bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"></div>
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                    <CreditCard className="h-7 w-7 text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Student Pricing</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6">
                    <p className="text-sm text-white/60 mb-1">Regular price</p>
                    <p className="text-xl font-bold text-white/50 line-through">$49/month</p>
                    <p className="text-sm text-white/60 mt-4 mb-1">Student price</p>
                    <p className="text-3xl font-bold text-white">$19/month</p>
                    <p className="text-xs text-white/60 mt-1">with .edu email verification</p>
                  </div>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                    Verify Student Status
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/40 to-emerald-700/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                    <Medal className="h-7 w-7 text-green-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Success Metrics</h3>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                      <p className="text-xs text-white/60">Completion</p>
                      <p className="text-xl font-bold text-white">94%</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                      <p className="text-xs text-white/60">Job Rate</p>
                      <p className="text-xl font-bold text-white">89%</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10 col-span-2">
                      <p className="text-xs text-white/60">Universities</p>
                      <p className="text-xl font-bold text-white">250+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section - Updated to match mosaic theme */}
        <section className="py-16 bg-gradient-to-br from-[#2a1e4a] via-[#2a1e4a] to-[#1c1633]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-400/20 text-blue-300 mb-4 inline-block backdrop-blur-sm border border-blue-500/20">SPECIAL OPPORTUNITIES</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300">
                Programs for Students
              </h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Exclusive opportunities designed specifically for college students
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Program 1 */}
              <div className="md:col-span-6 lg:col-span-4">
                <div className="rounded-2xl overflow-hidden h-full bg-gradient-to-br from-blue-600/40 to-indigo-700/40 backdrop-blur-sm border border-blue-500/20 transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                      Quarterly
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">Coding Hackathons</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-blue-100/70 mb-4">Join our quarterly hackathons with other college students and build impressive portfolio projects in just 48 hours.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Cash prizes</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Networking</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Portfolio projects</span>
                    </div>
                    <Button variant="outline" className="w-full bg-blue-500/20 border-blue-500/40 text-white hover:bg-blue-500/30 backdrop-blur-sm">
                      Register for Next Hackathon
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Program 2 */}
              <div className="md:col-span-6 lg:col-span-4">
                <div className="rounded-2xl overflow-hidden h-full bg-gradient-to-br from-purple-600/40 to-pink-700/40 backdrop-blur-sm border border-purple-500/20 transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                      4-Week Program
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">Internship Bootcamp</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-purple-100/70 mb-4">Intensive 4-week program to prepare you for tech internship interviews at top companies. Includes algorithm training and mock interviews.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Mock interviews</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Algorithm training</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Resume review</span>
                    </div>
                    <Button variant="outline" className="w-full bg-purple-500/20 border-purple-500/40 text-white hover:bg-purple-500/30 backdrop-blur-sm">
                      Apply for Next Cohort
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Program 3 */}
              <div className="md:col-span-6 lg:col-span-4 md:col-start-4 lg:col-start-auto">
                <div className="rounded-2xl overflow-hidden h-full bg-gradient-to-br from-pink-600/40 to-rose-700/40 backdrop-blur-sm border border-pink-500/20 transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                      Academic Year
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/80 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">Campus Ambassador</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-pink-100/70 mb-4">Represent us on your campus, organize events, and earn exclusive benefits including free courses and commission on referrals.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Free access</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Commission</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-white/90 text-xs border border-white/10">Leadership experience</span>
                    </div>
                    <Button variant="outline" className="w-full bg-pink-500/20 border-pink-500/40 text-white hover:bg-pink-500/30 backdrop-blur-sm">
                      Apply to Program
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories - Updated to match mosaic theme */}
        <section className="py-16 bg-gradient-to-br from-[#1c1633] via-[#241a40] to-[#2a1e4a] overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-400/20 text-green-300 mb-4 inline-block backdrop-blur-sm border border-green-500/20">SUCCESS STORIES</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">
                Student Success
              </h2>
              <p className="text-lg text-green-100/70 max-w-2xl mx-auto">
                See what other college students like you have achieved
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured success story */}
              <div className="md:col-span-6 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-600/40 to-violet-700/40 backdrop-blur-sm border border-indigo-500/20 h-full relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full border-2 border-white/30 bg-gradient-to-br from-indigo-400 to-indigo-600 mr-4"></div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Marcus T.</h3>
                        <p className="text-indigo-200/70">Business & CS, NYU</p>
                      </div>
                    </div>
                    <div className="flex mb-4 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-8 text-lg italic">"I built my startup's MVP during the summer program. We just closed our first pre-seed round of $500K thanks to the skills I learned here!"</p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <h4 className="text-white font-medium mb-3">Achievements</h4>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Medal className="h-4 w-4 mr-2 text-yellow-400" />
                          <span className="text-white text-sm">Startup Founder</span>
                        </div>
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Laptop className="h-4 w-4 mr-2 text-yellow-400" />
                          <span className="text-white text-sm">Full Stack Dev</span>
                        </div>
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Target className="h-4 w-4 mr-2 text-yellow-400" />
                          <span className="text-white text-sm">$500K Funding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other success stories */}
              <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="bg-gradient-to-br from-rose-600/40 to-red-700/40 backdrop-blur-sm rounded-2xl border border-rose-500/20 transform hover:scale-[1.02] transition-all duration-300 p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/30 rounded-full filter blur-2xl opacity-50 -mr-10 -mt-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-gradient-to-br from-rose-400 to-rose-600 mr-3"></div>
                      <div>
                        <h3 className="text-base font-bold text-white">Sophie J.</h3>
                        <p className="text-xs text-rose-200/70">CS, Stanford</p>
                      </div>
                    </div>
                    <div className="flex mb-2 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-4 text-sm italic">"The web development bootcamp helped me land my dream internship at Google!"</p>
                    <div className="flex items-center text-xs">
                      <Medal className="h-3 w-3 mr-1 text-rose-300" />
                      <span className="text-white/80">Google Internship</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/40 to-green-700/40 backdrop-blur-sm rounded-2xl border border-emerald-500/20 transform hover:scale-[1.02] transition-all duration-300 p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/30 rounded-full filter blur-2xl opacity-50 -mr-10 -mt-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-gradient-to-br from-emerald-400 to-emerald-600 mr-3"></div>
                      <div>
                        <h3 className="text-base font-bold text-white">Aisha K.</h3>
                        <p className="text-xs text-emerald-200/70">Data Science, UC Berkeley</p>
                      </div>
                    </div>
                    <div className="flex mb-2 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-4 text-sm italic">"I published my first research paper as an undergrad!"</p>
                    <div className="flex items-center text-xs">
                      <Medal className="h-3 w-3 mr-1 text-emerald-300" />
                      <span className="text-white/80">Research Publication</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 bg-gradient-to-br from-amber-600/40 to-yellow-700/40 backdrop-blur-sm rounded-2xl border border-amber-500/20 transform hover:scale-[1.02] transition-all duration-300 p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/30 rounded-full filter blur-3xl opacity-30 -mr-10 -mt-10"></div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 md:mb-0 md:mr-6 md:w-1/2">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-gradient-to-br from-amber-400 to-amber-600 mr-3"></div>
                        <div>
                          <h3 className="text-base font-bold text-white">James L.</h3>
                          <p className="text-xs text-amber-200/70">Computer Engineering, MIT</p>
                        </div>
                      </div>
                      <div className="flex mb-2 text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3" fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-white/80 text-sm italic">"My AI project won first place at our university's innovation challenge. Now I'm working at Microsoft!"</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 md:w-1/2">
                      <h4 className="text-white text-sm font-medium mb-2">Career Path</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                          <Circle className="h-2 w-2 mr-2 text-white/40" fill="currentColor" /> 
                          <span className="text-white/80">AI Course Completion</span>
                        </div>
                        <div className="flex items-center text-xs bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                          <Circle className="h-2 w-2 mr-2 text-white/60" fill="currentColor" /> 
                          <span className="text-white/80">University Innovation Prize</span>
                        </div>
                        <div className="flex items-center text-xs bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                          <Circle className="h-2 w-2 mr-2 text-white/80" fill="currentColor" /> 
                          <span className="text-white">Microsoft AI Engineer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action - Mosaic Style */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6TTI0IDMwYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii4yNSIvPjwvZz48L3N2Zz4=')]"></div>
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

        {/* FAQ Section - Mosaic Style */}
        <section className="py-16 bg-gradient-to-b from-[#1c1633] to-[#12101f]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-400/20 text-gray-300 mb-4 inline-block backdrop-blur-sm border border-gray-500/20">GOT QUESTIONS?</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
                FAQs
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mr-3">Q</div>
                      <h3 className="text-xl font-bold text-white">How do I verify my student status?</h3>
                    </div>
                    <p className="text-white/70 ml-11">Simply sign up with your .edu email address or upload a valid student ID through our verification portal. Verification usually takes less than 24 hours.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mr-3">Q</div>
                      <h3 className="text-xl font-bold text-white">Can I get college credit for these courses?</h3>
                    </div>
                    <p className="text-white/70 ml-11">We partner with several universities for credit transfer. Check with your academic advisor to see if your school accepts our certificates for credit or internship requirements.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mr-3">Q</div>
                      <h3 className="text-xl font-bold text-white">How long do I have access to the courses?</h3>
                    </div>
                    <p className="text-white/70 ml-11">With a student subscription, you have unlimited access to all courses as long as your subscription is active and your student status is verified (generally up to 4 years or until graduation).</p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mr-3">Q</div>
                      <h3 className="text-xl font-bold text-white">Can I access the courses offline?</h3>
                    </div>
                    <p className="text-white/70 ml-11">Yes, our mobile app allows you to download lessons for offline viewing, perfect for commuting or studying in areas with limited internet access.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-white/60 mb-4">Still have questions? We're happy to help!</p>
                <Button variant="outline" className="mx-auto bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
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
