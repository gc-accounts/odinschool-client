
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components/ui/tabs";
import { Badge } from "@/components/components/ui/badge";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Student Reviews - CodeMaster";
  }, []);

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      course: "Advanced JavaScript",
      date: "March 15, 2025",
      rating: 5,
      source: "google",
      comment: "The Advanced JavaScript course was exactly what I needed to level up my frontend skills. The instructor's explanations were clear and the projects were challenging but achievable. I've already implemented several concepts from the course in my work projects.",
      helpful: 24,
      responses: 2
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg",
      course: "Python for Data Science",
      date: "February 28, 2025",
      rating: 4,
      source: "facebook",
      comment: "Great introduction to data science with Python. The course content was well-structured and I appreciated the focus on real-world applications. Would have given five stars if there were more advanced exercises at the end of each module.",
      helpful: 19,
      responses: 1
    },
    {
      id: 3,
      name: "Jennifer Wu",
      avatar: "/placeholder.svg",
      course: "Full Stack Development",
      date: "April 2, 2025",
      rating: 5,
      source: "trustpilot",
      comment: "I took the Full Stack Development bootcamp after years of trying to learn on my own. The structured curriculum and mentor support made all the difference. Within three months of completing the course, I landed my first developer job!",
      helpful: 42,
      responses: 3
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "/placeholder.svg",
      course: "React Native Fundamentals",
      date: "January 10, 2025",
      rating: 3,
      source: "coursereport",
      comment: "The React Native course had good content, but I felt it moved too quickly through some important concepts. The instructor was knowledgeable but sometimes assumed prior experience that wasn't listed in the prerequisites.",
      helpful: 8,
      responses: 4
    },
    {
      id: 5,
      name: "Emily Chen",
      avatar: "/placeholder.svg",
      course: "UI/UX Design for Developers",
      date: "March 22, 2025",
      rating: 5,
      source: "google",
      comment: "As a backend developer trying to improve my frontend skills, this course was perfect. It bridged the gap between technical implementation and good design principles. The instructor's feedback on our projects was incredibly valuable.",
      helpful: 31,
      responses: 0
    },
    {
      id: 6,
      name: "Robert Garcia",
      avatar: "/placeholder.svg",
      course: "DevOps and CI/CD",
      date: "February 5, 2025",
      rating: 5,
      source: "facebook",
      comment: "Excellent course on modern DevOps practices. The hands-on labs using actual cloud services were especially valuable. I was able to implement a CI/CD pipeline at work using the exact techniques taught in this course.",
      helpful: 27,
      responses: 1
    },
    {
      id: 7,
      name: "Priya Patel",
      avatar: "/placeholder.svg",
      course: "Machine Learning Fundamentals",
      date: "April 8, 2025",
      rating: 4,
      source: "trustpilot",
      comment: "The course provided a solid foundation in ML concepts. The math-heavy sections had good visual explanations which helped a lot. Would recommend for anyone looking to get started in the field.",
      helpful: 15,
      responses: 2
    },
    {
      id: 8,
      name: "Thomas Wilson",
      avatar: "/placeholder.svg",
      course: "Blockchain Development",
      date: "March 30, 2025",
      rating: 4,
      source: "coursereport",
      comment: "A comprehensive introduction to blockchain development. The course was well-structured with a good balance of theory and practical exercises. The final project gave me confidence to start building my own dApps.",
      helpful: 12,
      responses: 1
    },
    {
      id: 9,
      name: "Lisa Nguyen",
      avatar: "/placeholder.svg",
      course: "Cloud Architecture",
      date: "January 25, 2025",
      rating: 5,
      source: "google",
      comment: "This course exceeded my expectations. The instructor's real-world experience in cloud architecture was evident in every lesson. The course has already paid for itself through the optimizations I've made at work.",
      helpful: 35,
      responses: 2
    }
  ];

  // Filter reviews based on active tab
  const filteredReviews = activeTab === "all" 
    ? reviews 
    : reviews.filter(review => review.source === activeTab);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  // Function to get source badge color
  const getSourceColor = (source: string) => {
    switch(source) {
      case 'google': return 'bg-blue-100 text-blue-800';
      case 'facebook': return 'bg-indigo-100 text-indigo-800';
      case 'trustpilot': return 'bg-green-100 text-green-800';
      case 'coursereport': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">OdinSchool Reviews</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Read what our students have to say about their learning experience
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 font-medium">4.8 average rating from over 10,000 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="all">All Reviews</TabsTrigger>
                    <TabsTrigger value="google">Google</TabsTrigger>
                    <TabsTrigger value="facebook">Facebook</TabsTrigger>
                    <TabsTrigger value="trustpilot">Trustpilot</TabsTrigger>
                    <TabsTrigger value="coursereport">Course Report</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {filteredReviews.map(review => (
                      <Card key={review.id} className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={review.avatar} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{review.name}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-1">{review.course}</div>
                                <div className="flex mt-1">{renderStars(review.rating)}</div>
                              </div>
                            </div>
                            <Badge variant="outline" className={getSourceColor(review.source)}>
                              {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{review.comment}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-1">
                                <ThumbsUp size={14} />
                                <span>{review.helpful} helpful</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                <span>{review.responses} {review.responses === 1 ? 'response' : 'responses'}</span>
                              </div>
                            </div>
                            <div>{review.date}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="google" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredReviews.map(review => (
                      <Card key={review.id} className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={review.avatar} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{review.name}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-1">{review.course}</div>
                                <div className="flex mt-1">{renderStars(review.rating)}</div>
                              </div>
                            </div>
                            <Badge variant="outline" className={getSourceColor(review.source)}>
                              {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{review.comment}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-1">
                                <ThumbsUp size={14} />
                                <span>{review.helpful} helpful</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                <span>{review.responses} {review.responses === 1 ? 'response' : 'responses'}</span>
                              </div>
                            </div>
                            <div>{review.date}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="facebook" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredReviews.map(review => (
                      <Card key={review.id} className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={review.avatar} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{review.name}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-1">{review.course}</div>
                                <div className="flex mt-1">{renderStars(review.rating)}</div>
                              </div>
                            </div>
                            <Badge variant="outline" className={getSourceColor(review.source)}>
                              {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{review.comment}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-1">
                                <ThumbsUp size={14} />
                                <span>{review.helpful} helpful</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                <span>{review.responses} {review.responses === 1 ? 'response' : 'responses'}</span>
                              </div>
                            </div>
                            <div>{review.date}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="trustpilot" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredReviews.map(review => (
                      <Card key={review.id} className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={review.avatar} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{review.name}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-1">{review.course}</div>
                                <div className="flex mt-1">{renderStars(review.rating)}</div>
                              </div>
                            </div>
                            <Badge variant="outline" className={getSourceColor(review.source)}>
                              {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{review.comment}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-1">
                                <ThumbsUp size={14} />
                                <span>{review.helpful} helpful</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                <span>{review.responses} {review.responses === 1 ? 'response' : 'responses'}</span>
                              </div>
                            </div>
                            <div>{review.date}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="coursereport" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredReviews.map(review => (
                      <Card key={review.id} className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={review.avatar} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{review.name}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-1">{review.course}</div>
                                <div className="flex mt-1">{renderStars(review.rating)}</div>
                              </div>
                            </div>
                            <Badge variant="outline" className={getSourceColor(review.source)}>
                              {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{review.comment}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-1">
                                <ThumbsUp size={14} />
                                <span>{review.helpful} helpful</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                <span>{review.responses} {review.responses === 1 ? 'response' : 'responses'}</span>
                              </div>
                            </div>
                            <div>{review.date}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
