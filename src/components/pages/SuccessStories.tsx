'use client'
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Star, Award, TrendingUp, Loader2, HelpCircle, AwardIcon } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/components/ui/avatar';
import { Card, CardContent } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import { getSuccessMetrics } from '@/components/utils/api/successMetrics';
import { successStoriesData } from '@/components/data/successStories';
import { BsSuitcaseLg } from "react-icons/bs";


import Testimonials from '@/components/components/Testimonials';

const SuccessStories = () => {
  // static data
  const [state, setState] = useState<any>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getSuccessMetrics();
      setState(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { successStories: featuredStories, placementRate, studentSatisfaction, salaryIncrease, testimonials } = useMemo(() => state ?? {}, [state]);


  const statistics = [
    { label: "Hiring Partners", value: salaryIncrease + "+", icon: <BsSuitcaseLg className="h-8 w-8 text-primary-600" /> },
    { label: "Bootcamp NPS", value: placementRate, icon: <Award className="h-8 w-8 text-primary-600" /> },
    { label: "Google reviews", value: studentSatisfaction + "/5", icon: <Star className="h-8 w-8 text-primary-600" /> }
  ];

  return (
    <>
      <Navbar />
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <Loader2 className='h-8 w-8 text-primary-600 animate-spin' />
        </div>
      ) : (<main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">

                <AwardIcon className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>

            <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">Success Stories</h1>
            <p className="md:text-lg text-md text-center max-w-2xl mx-auto">
              Real students. Real results. Discover how OdinSchool has helped thousands of students transform their careers.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-50 rounded-full p-4">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>

          {featuredStories.map((story, index) => (
            <div key={story.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 bg-white rounded-lg shadow-lg overflow-hidden`}>
              <div className="lg:w-1/2 bg-gradient-to-br from-primary-700 to-primary-800 p-12 flex flex-col justify-center">
                <Avatar className="h-24 w-24 mb-6 border-4 border-white">
                  <AvatarImage src={story.image} alt={story.name} />
                  <AvatarFallback>{story.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                <p className="text-primary-100 mb-6">{story.role}</p>
                <p className="text-white text-lg mb-8">"{story.story}"</p>

                {/* <div className="grid grid-cols-3 gap-4">
                  {story.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="text-xl font-bold text-white">{metric.value}</p>
                      <p className="text-sm text-primary-100">{metric.label}</p>
                    </div>
                  ))}
                </div> */}

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-md font-bold text-white">Career transition</p>
                  </div>

                </div>

              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-primary-600 mb-2">The Journey</h4>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{story.title}</h3>
                <p className="text-gray-600 mb-6">
                  {story.course}
                </p>
                <div className="mb-8">
                  <h5 className="font-bold text-gray-900 mb-2">Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {story?.tags?.map((item: string, i: number) => (
                      <span key={i} className="bg-primary-50 text-primary-700 text-sm rounded-full px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/courses">
                  <Button className="self-start">
                    View Course Details
                  </Button>
                </Link>

              </div>
            </div>
          ))}

          <Testimonials />

          <h2 className="text-3xl font-bold text-center mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {successStoriesData.map(testimonial => (
              <Card key={testimonial.id} className="overflow-y-scroll max-h-[400px]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>{testimonial?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.designation} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">"{testimonial.description}"</p>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who’ve upskilled with OdinSchool and transitioned into high-growth tech roles. Explore your path today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="/courses">Browse Courses</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact-us">Speak to an Advisor</a>
              </Button>
            </div>
          </div>
        </div>
      </main>)}
      <Footer />
    </>
  );
};

export default SuccessStories;
