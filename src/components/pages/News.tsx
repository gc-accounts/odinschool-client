
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components/ui/tabs";
import { Globe, ExternalLink, Star, Clock } from "lucide-react";
import Image from 'next/image';

const News = () => {

  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Set page title
    document.title = "Tech News - OdinSchool";
  }, []);

  // Sample news data - in a real app this would come from an API
  const newsItems = [
    {
      id: 1,
      title: "New AI Framework Makes Coding More Accessible",
      source: "TechCrunch",
      category: "technology",
      date: "2 days ago",
      excerpt: "A new open-source AI framework is helping beginners learn to code by providing intelligent suggestions and debugging assistance.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auhref=format&fit=crop&w=750&q=80",
      url: "#"
    },
    {
      id: 2,
      title: "Top Companies Increasing Investment in Developer Training",
      source: "Forbes",
      category: "business",
      date: "1 week ago",
      excerpt: "Major tech companies are allocating more resources to upskill their development teams in response to rapid technological changes.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auhref=format&fit=crop&w=750&q=80",
      url: "#"
    },
    {
      id: 3,
      title: "JavaScript Remains Most Popular Language for Fifth Year",
      source: "Stack Overflow",
      category: "technology",
      date: "3 days ago",
      excerpt: "The annual developer survey shows JavaScript continuing its dominance as the most widely used programming language.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auhref=format&fit=crop&w=750&q=80",
      url: "#"
    },
    {
      id: 4,
      title: "Study Shows Remote Work Increases Developer Productivity",
      source: "Harvard Business Review",
      category: "business",
      date: "5 days ago",
      excerpt: "New research indicates that remote work arrangements lead to higher productivity and satisfaction among software developers.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auhref=format&fit=crop&w=750&q=80",
      url: "#"
    },
    {
      id: 5,
      title: "New Cybersecurity Framework Released for Developers",
      source: "MIT Technology Review",
      category: "security",
      date: "1 day ago",
      excerpt: "A comprehensive security framework specifically designed for developers aims to reduce vulnerabilities in modern applications.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auhref=format&fit=crop&w=750&q=80",
      url: "#"
    },
    {
      id: 6,
      title: "Tech Industry Faces Growing Demand for Specialized Skills",
      source: "The Wall Street Journal",
      category: "business",
      date: "4 days ago",
      excerpt: "Companies are struggling to find developers with specialized skills in AI, cloud architecture, and data science.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auhref=format&fit=crop&w=750&q=80",
      url: "#"
    }
  ];

  const filteredNews = activeTab === "all"
    ? newsItems
    : newsItems.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Industry News</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Stay updated with the latest news, trends, and innovations in the tech and programming world.
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="all">All News</TabsTrigger>
                    <TabsTrigger value="technology">Technology</TabsTrigger>
                    <TabsTrigger value="business">Business</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map(item => (
                      <Card key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"

                            loading="lazy"
                            width={500}
                            height={500}
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Globe size={16} />
                            <span>{item.source}</span>
                            <span className="mx-1">•</span>
                            <Clock size={16} />
                            <span>{item.date}</span>
                          </div>
                          <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                        </CardContent>
                        {/* <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              Read Full Article <ExternalLink size={16} className="ml-2" />
                            </a>
                          </Button>
                        </CardFooter> */}
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="technology" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map(item => (
                      <Card key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"

                            loading="lazy"
                            width={500}
                            height={500}
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Globe size={16} />
                            <span>{item.source}</span>
                            <span className="mx-1">•</span>
                            <Clock size={16} />
                            <span>{item.date}</span>
                          </div>
                          <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              Read Full Article <ExternalLink size={16} className="ml-2" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="business" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map(item => (
                      <Card key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"

                            loading="lazy"
                            width={500}
                            height={500}
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Globe size={16} />
                            <span>{item.source}</span>
                            <span className="mx-1">•</span>
                            <Clock size={16} />
                            <span>{item.date}</span>
                          </div>
                          <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              Read Full Article <ExternalLink size={16} className="ml-2" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="security" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map(item => (
                      <Card key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"

                            loading="lazy"
                            width={500}
                            height={500}
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Globe size={16} />
                            <span>{item.source}</span>
                            <span className="mx-1">•</span>
                            <Clock size={16} />
                            <span>{item.date}</span>
                          </div>
                          <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              Read Full Article <ExternalLink size={16} className="ml-2" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Want the latest news delivered to your inbox?</p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button>Subscribe</Button>
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

export default News;
