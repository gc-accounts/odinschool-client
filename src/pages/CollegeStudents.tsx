
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Clock, Laptop, Lightbulb, CreditCard, Medal, Users } from 'lucide-react';

const CollegeStudents = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section - Vibrant gradient background with large text */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/30 backdrop-blur-sm text-gray-900">
                Made for students, by students
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white drop-shadow-sm">
                Level Up Your <span className="text-primary-800">College</span> Experience
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Get the coding skills you need for internships, projects, and your future career — all designed for your busy college life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg py-6 bg-white text-purple-700 hover:bg-white/90 hover:text-purple-800">
                  <GraduationCap className="mr-2 h-5 w-5" /> Student Discount
                </Button>
                <Button size="lg" variant="outline" className="text-lg py-6 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
                  <BookOpen className="mr-2 h-5 w-5" /> Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Student Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why <span className="text-primary-600">College Students</span> Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Designed with your needs, schedule, and budget in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Flexible Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Learn at your own pace between classes, work, and social life.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                    <CreditCard className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Student Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Special discounts for students with valid .edu email addresses.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Study Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Connect with other students and form virtual study groups.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <Medal className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Resume Boost</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Add industry-recognized certifications to your resume.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Special Programs for <span className="text-primary-600">College Students</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Exclusive opportunities to enhance your college experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-purple-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <Laptop className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hackathons</h3>
                <p className="text-gray-600 mb-4 flex-grow">Join our quarterly hackathons with other college students and build impressive portfolio projects.</p>
                <Button variant="outline" className="mt-2 w-full">Learn More</Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-pink-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <Lightbulb className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Internship Preparation</h3>
                <p className="text-gray-600 mb-4 flex-grow">Get interview coaching and technical preparation for top tech companies.</p>
                <Button variant="outline" className="mt-2 w-full">Learn More</Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Campus Ambassador</h3>
                <p className="text-gray-600 mb-4 flex-grow">Represent us on your campus, gain leadership experience, and earn exclusive benefits.</p>
                <Button variant="outline" className="mt-2 w-full">Apply Now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Section with TikTok/Insta style cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Success <span className="text-primary-600">Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what other students have achieved
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Story Card 1 */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 bg-white hover:scale-[1.02] duration-300">
                <div className="h-60 bg-gradient-to-br from-purple-400 to-blue-500 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-lg font-bold">Sophia J.</h3>
                    <p className="text-sm">Computer Science, Stanford</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">"Thanks to the web development bootcamp, I landed my dream internship at Google during my junior year!"</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <Laptop className="h-4 w-4 mr-1" /> Web Development
                    </span>
                    <span className="flex items-center">
                      <Medal className="h-4 w-4 mr-1" /> Internship at Google
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Story Card 2 */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 bg-white hover:scale-[1.02] duration-300">
                <div className="h-60 bg-gradient-to-br from-pink-400 to-orange-400 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-lg font-bold">Marcus T.</h3>
                    <p className="text-sm">Business & CS, NYU</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">"I built my startup's MVP during the summer program. We just closed our first pre-seed round!"</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <Laptop className="h-4 w-4 mr-1" /> Full Stack
                    </span>
                    <span className="flex items-center">
                      <Medal className="h-4 w-4 mr-1" /> Founded Startup
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Story Card 3 */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 bg-white hover:scale-[1.02] duration-300">
                <div className="h-60 bg-gradient-to-br from-blue-400 to-green-400 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-lg font-bold">Aisha K.</h3>
                    <p className="text-sm">Data Science, UC Berkeley</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">"The AI course helped me understand complex concepts that my college classes only touched on superficially."</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <Laptop className="h-4 w-4 mr-1" /> AI & Machine Learning
                    </span>
                    <span className="flex items-center">
                      <Medal className="h-4 w-4 mr-1" /> Research Publication
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action - Vibrant design */}
        <section className="py-16 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to boost your tech skills?</h2>
                <p className="text-xl text-white/90">Start learning today with our special student discount</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg py-6 bg-white text-primary-700 hover:bg-white/90">
                  <GraduationCap className="mr-2 h-5 w-5" /> Get Student Discount
                </Button>
                <Button size="lg" variant="outline" className="text-lg py-6 bg-transparent border-white/40 text-white hover:bg-white/10">
                  <BookOpen className="mr-2 h-5 w-5" /> Browse Courses
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Frequently Asked <span className="text-primary-600">Questions</span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* FAQ Item */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">How do I verify my student status?</h3>
                <p className="text-gray-600">Simply sign up with your .edu email address or upload a valid student ID through our verification portal.</p>
              </div>
              <Separator className="my-6" />
              
              {/* FAQ Item */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Can I get college credit for these courses?</h3>
                <p className="text-gray-600">We partner with several universities for credit transfer. Check with your academic advisor to see if your school accepts our certificates.</p>
              </div>
              <Separator className="my-6" />
              
              {/* FAQ Item */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">How long do I have access to the courses?</h3>
                <p className="text-gray-600">With a student subscription, you have unlimited access to all courses as long as your subscription is active and your student status is verified.</p>
              </div>
              <Separator className="my-6" />
              
              {/* FAQ Item */}
              <div>
                <h3 className="text-xl font-bold mb-2">Can I access the courses offline?</h3>
                <p className="text-gray-600">Yes, our mobile app allows you to download lessons for offline viewing, perfect for commuting or studying in areas with limited internet.</p>
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
