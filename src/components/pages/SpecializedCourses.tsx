import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/components/ui/tabs';
import { Badge } from '@/components/components/ui/badge';
import { Database, Braces, LineChart, Brain, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';

const SpecializedCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-16 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="p-1 px-3 bg-primary-50 rounded-full inline-flex items-center mb-6 max-w-max">
                <div className="w-2 h-2 rounded-full bg-primary-600 mr-2 animate-pulse"></div>
                <span className="text-primary-700 text-sm">Specialized Programs</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight tracking-tight">
                Industry-Leading <span className="text-primary-600">Specialized</span> Courses
              </h1>

              <p className="text-gray-600 text-xl mb-6">
                Exclusive courses from top institutions and companies designed to accelerate your career in high-demand tech fields
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary text-white hover:bg-primary-700">
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                  View All Programs
                </Button>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-16 p-4 rounded-xl bg-white border border-gray-200">
              <div className="text-center mb-2">
                <p className="text-gray-500 text-sm">Courses from leading institutions and companies</p>
              </div>
              <div className="flex justify-around items-center flex-wrap gap-6 md:gap-12">
                <div className="text-gray-700 font-semibold">Microsoft</div>
                <div className="text-gray-700 font-semibold">IIT Guwahati</div>
                <div className="text-gray-700 font-semibold">OidinSchool</div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Courses Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-50 text-primary-600 mb-4 inline-block">
                SPECIALIZED COURSES
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                Courses That Transform Careers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gain in-demand skills with these specialized programs from leading institutions
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Courses</TabsTrigger>
                  <TabsTrigger value="data-science">Data Science</TabsTrigger>
                  <TabsTrigger value="ai">AI & Machine Learning</TabsTrigger>
                  <TabsTrigger value="visualization">Data Visualization</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Course 1: PowerBI from Microsoft */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 hover:bg-blue-700">Microsoft</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <LineChart className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Power BI Course</h3>
                            <p className="text-gray-600">Microsoft Official Training</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Master data visualization and business intelligence with Microsoft's official Power BI training program. Learn to create interactive dashboards and derive actionable insights from your data.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-blue-600 mr-2" />
                            <p className="text-gray-900 font-medium">8 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.8/5 (2,340 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Data Visualization</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Business Intelligence</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Dashboard Creation</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-blue-600 font-medium text-lg">$499</p>
                        <p className="text-gray-500 text-xs">Microsoft Certification Included</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Course 2: GenAI from IITG */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 hover:bg-purple-700">IIT Guwahati</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Brain className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Generative AI Course</h3>
                            <p className="text-gray-600">IIT Guwahati</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Explore the cutting-edge world of Generative AI with IIT Guwahati's comprehensive program. Learn about large language models, diffusion models, and how to apply generative AI to solve real-world problems.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-purple-600 mr-2" />
                            <p className="text-gray-900 font-medium">12 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.9/5 (1,860 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Large Language Models</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Diffusion Models</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">AI Applications</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-purple-600 font-medium text-lg">$649</p>
                        <p className="text-gray-500 text-xs">IIT Guwahati Certificate</p>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Course 3: Data Science and ML from IITG */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-600 hover:bg-green-700">IIT Guwahati</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                            <Database className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Data Science & Machine Learning</h3>
                            <p className="text-gray-600">IIT Guwahati</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Comprehensive program covering the entire data science pipeline and machine learning algorithms. Learn statistical analysis, data visualization, predictive modeling, and deployment from IIT experts.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <p className="text-gray-900 font-medium">16 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.7/5 (3,120 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Python</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Statistical Analysis</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">ML Algorithms</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-green-600 font-medium text-lg">$799</p>
                        <p className="text-gray-500 text-xs">IIT Guwahati Certificate</p>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Course 4: Data Science from OidinSchool */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-600 hover:bg-orange-700">OidinSchool</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                            <Braces className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Data Science Course</h3>
                            <p className="text-gray-600">OidinSchool</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Industry-focused data science program from OidinSchool with emphasis on practical skills and job readiness. Includes real-world projects, mentorship, and career support to launch your data career.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-orange-600 mr-2" />
                            <p className="text-gray-900 font-medium">24 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.8/5 (2,780 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Python</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Big Data</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Industry Projects</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-orange-600 font-medium text-lg">$1,299</p>
                        <p className="text-gray-500 text-xs">Job Placement Assistance</p>
                      </div>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="data-science" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Data Science Courses */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-600 hover:bg-green-700">IIT Guwahati</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                            <Database className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Data Science & Machine Learning</h3>
                            <p className="text-gray-600">IIT Guwahati</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Comprehensive program covering the entire data science pipeline and machine learning algorithms. Learn statistical analysis, data visualization, predictive modeling, and deployment from IIT experts.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <p className="text-gray-900 font-medium">16 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.7/5 (3,120 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Python</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Statistical Analysis</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">ML Algorithms</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-green-600 font-medium text-lg">$799</p>
                        <p className="text-gray-500 text-xs">IIT Guwahati Certificate</p>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-600 hover:bg-orange-700">OidinSchool</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                            <Braces className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Data Science Course</h3>
                            <p className="text-gray-600">OidinSchool</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Industry-focused data science program from OidinSchool with emphasis on practical skills and job readiness. Includes real-world projects, mentorship, and career support to launch your data career.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-orange-600 mr-2" />
                            <p className="text-gray-900 font-medium">24 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.8/5 (2,780 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Python</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Big Data</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Industry Projects</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-orange-600 font-medium text-lg">$1,299</p>
                        <p className="text-gray-500 text-xs">Job Placement Assistance</p>
                      </div>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* AI Courses */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 hover:bg-purple-700">IIT Guwahati</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Brain className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Generative AI Course</h3>
                            <p className="text-gray-600">IIT Guwahati</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Explore the cutting-edge world of Generative AI with IIT Guwahati's comprehensive program. Learn about large language models, diffusion models, and how to apply generative AI to solve real-world problems.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-purple-600 mr-2" />
                            <p className="text-gray-900 font-medium">12 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.9/5 (1,860 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Large Language Models</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Diffusion Models</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">AI Applications</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-purple-600 font-medium text-lg">$649</p>
                        <p className="text-gray-500 text-xs">IIT Guwahati Certificate</p>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="visualization" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Visualization Courses */}
                  <Card className="border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative h-52">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auhref=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 hover:bg-blue-700">Microsoft</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <LineChart className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">Power BI Course</h3>
                            <p className="text-gray-600">Microsoft Official Training</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-4">
                      <p className="text-gray-600 mb-4">
                        Master data visualization and business intelligence with Microsoft's official Power BI training program. Learn to create interactive dashboards and derive actionable insights from your data.
                      </p>

                      <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Duration</p>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-blue-600 mr-2" />
                            <p className="text-gray-900 font-medium">8 Weeks</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-gray-500 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" />
                            <p className="text-gray-900 font-medium">4.8/5 (2,340 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Data Visualization</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Business Intelligence</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs">Dashboard Creation</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-blue-600 font-medium text-lg">$499</p>
                        <p className="text-gray-500 text-xs">Microsoft Certification Included</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why Choose These Courses Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-50 text-primary-600 mb-4 inline-block">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Industry-Recognized Credentials
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gain credentials that employers value and skills that set you apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 transform transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Official Certifications</h3>
                <p className="text-gray-600">
                  Earn recognized certificates from Microsoft, IIT Guwahati, and OidinSchool that validate your expertise and boost your resume.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 transform transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from leading industry professionals and academic experts who bring real-world experience to their teaching.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 transform transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Curriculum</h3>
                <p className="text-gray-600">
                  Access constantly updated course material that reflects the latest technologies and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SpecializedCourses;
