
import React, { useEffect } from 'react';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/components/ui/tabs';

const NewsRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const featuredNews = {
    title: "EduPlatform Raises $50M Series B to Expand Global Reach",
    excerpt: "The funding will be used to develop new course offerings, enhance the platform's technology, and expand into new markets, with a focus on Asia and Europe.",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    category: "Company News",
    image: "/placeholder.svg",
  };

  const newsItems = [
    {
      title: "EduPlatform Partners with Google to Offer Cloud Certification Courses",
      excerpt: "The partnership will provide students with access to Google Cloud certification courses and hands-on labs.",
      date: "May 10, 2023",
      author: "Michael Chen",
      category: "Partnerships",
      image: "/placeholder.svg",
    },
    {
      title: "New AI and Machine Learning Track Launched",
      excerpt: "The comprehensive program includes courses on deep learning, natural language processing, and computer vision.",
      date: "April 22, 2023",
      author: "Jessica Kim",
      category: "Product Updates",
      image: "/placeholder.svg",
    },
    {
      title: "EduPlatform Reaches 1 Million Student Milestone",
      excerpt: "The platform now serves students from over 150 countries, with a 92% course completion rate.",
      date: "March 15, 2023",
      author: "David Wilson",
      category: "Company News",
      image: "/placeholder.svg",
    },
    {
      title: "EduPlatform Named in Fast Company's Most Innovative Companies List",
      excerpt: "The recognition highlights the platform's innovative approach to online education and career development.",
      date: "February 28, 2023",
      author: "Emily Rodriguez",
      category: "Awards",
      image: "/placeholder.svg",
    },
    {
      title: "Annual Education Technology Survey Shows Shift to Skills-Based Learning",
      excerpt: "EduPlatform's focus on practical skills and industry-relevant projects aligns with the changing landscape of education.",
      date: "January 12, 2023",
      author: "Alex Johnson",
      category: "Industry News",
      image: "/placeholder.svg",
    },
    {
      title: "EduPlatform Expands Mentor Network with Industry Leaders",
      excerpt: "Over 200 new mentors from companies like Amazon, Microsoft, and Adobe have joined the platform.",
      date: "December 5, 2022",
      author: "Sophia Williams",
      category: "Mentorship",
      image: "/placeholder.svg",
    },
  ];

  const pressReleases = [
    {
      title: "EduPlatform Announces Expansion into European Market",
      date: "May 5, 2023",
      link: "#",
    },
    {
      title: "EduPlatform Introduces New Enterprise Learning Solutions",
      date: "April 12, 2023",
      link: "#",
    },
    {
      title: "EduPlatform Reports 200% Growth in Course Enrollments",
      date: "March 1, 2023",
      link: "#",
    },
    {
      title: "EduPlatform Launches Scholarship Program for Underrepresented Groups",
      date: "February 15, 2023",
      link: "#",
    },
  ];

  const mediaContacts = [
    {
      name: "Jennifer Lee",
      title: "Head of Public Relations",
      email: "jennifer.lee@eduplatform.com",
      phone: "+1 (415) 555-1234",
    },
    {
      name: "Robert Clark",
      title: "Media Relations Manager",
      email: "robert.clark@eduplatform.com",
      phone: "+1 (415) 555-5678",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Newspaper className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">News Room</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Stay updated with the latest news, announcements, and stories from EduPlatform
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredNews.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredNews.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredNews.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredNews.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{featuredNews.author}</span>
                  </div>
                  <Button asChild>
                    <a href="#read-more">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all-news" className="w-full mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <TabsList>
                <TabsTrigger value="all-news">All News</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="industry">Industry</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all-news" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {news.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{news.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{news.author}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="link" className="px-0" asChild>
                      <a href="#read-more">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="company">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.filter(news => news.category === "Company News" || news.category === "Awards").map((news, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                      <p className="text-gray-600 mb-4">{news.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{news.date}</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{news.author}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="px-0" asChild>
                        <a href="#read-more">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="product">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.filter(news => news.category === "Product Updates" || news.category === "Mentorship").map((news, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                      <p className="text-gray-600 mb-4">{news.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{news.date}</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{news.author}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="px-0" asChild>
                        <a href="#read-more">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="industry">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.filter(news => news.category === "Industry News" || news.category === "Partnerships").map((news, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                      <p className="text-gray-600 mb-4">{news.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{news.date}</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{news.author}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="px-0" asChild>
                        <a href="#read-more">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{release.date}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{release.title}</h3>
                    <Button variant="link" className="p-0" asChild>
                      <a href={release.link}>
                        Read Press Release
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">View All Press Releases</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Media Contact</h2>
              <p className="text-gray-600 mb-6">
                For press inquiries, please contact our media relations team:
              </p>
              <div className="space-y-6">
                {mediaContacts.map((contact, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium mb-1">{contact.name}</h3>
                    <p className="text-gray-600 mb-2">{contact.title}</p>
                    <div className="text-sm">
                      <p className="mb-1">
                        <a href={`mailto:${contact.email}`} className="text-primary-600 hover:text-primary-700">
                          {contact.email}
                        </a>
                      </p>
                      <p>
                        <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="text-primary-600 hover:text-primary-700">
                          {contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Media Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#brand-assets" className="text-primary-600 hover:text-primary-700 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Brand Assets
                    </a>
                  </li>
                  <li>
                    <a href="#company-fact-sheet" className="text-primary-600 hover:text-primary-700 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Company Fact Sheet
                    </a>
                  </li>
                  <li>
                    <a href="#executive-bios" className="text-primary-600 hover:text-primary-700 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Executive Bios
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Get the latest news and updates from EduPlatform delivered straight to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewsRoom;
