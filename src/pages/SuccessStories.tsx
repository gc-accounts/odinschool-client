
import React from 'react';
import { Star, Award, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SuccessStories = () => {
  const featuredStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer at Google",
      image: "/placeholder.svg",
      story: "I was working as a marketing assistant when I decided to change careers. With EduPlatform's comprehensive web development courses, I was able to learn the skills I needed to transition into tech. Within 8 months of starting my first course, I landed a job as a frontend developer at Google.",
      course: "Full-Stack Web Development Bootcamp",
      metrics: [
        { label: "Salary Increase", value: "185%" },
        { label: "Time to Job", value: "8 months" },
        { label: "ROI", value: "27x investment" }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist at Amazon",
      image: "/placeholder.svg",
      story: "After graduating with a business degree, I found my passion in data analysis. EduPlatform's data science track gave me a structured learning path and real-world projects that I could add to my portfolio. The career coaching services also helped me prepare for interviews at top tech companies.",
      course: "Data Science Professional Certificate",
      metrics: [
        { label: "Salary Increase", value: "150%" },
        { label: "Time to Job", value: "6 months" },
        { label: "ROI", value: "22x investment" }
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      role: "UX Designer",
      company: "Spotify",
      quote: "The UX/UI Design course was exactly what I needed to pivot from graphic design to product design. The instructor's feedback on my projects was invaluable.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      role: "Product Manager",
      company: "Adobe",
      quote: "The Product Management certification helped me transition from engineering to product. The hands-on approach and mentorship made all the difference.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Machine Learning Engineer",
      company: "Netflix",
      quote: "The AI and Machine Learning specialization was challenging but incredibly rewarding. The concepts were explained clearly and the projects were relevant to real-world applications.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Jessica Patel",
      role: "Cybersecurity Analyst",
      company: "Microsoft",
      quote: "After taking the Cybersecurity Professional track, I was able to secure a job at Microsoft. The hands-on labs and certification prep were key to my success.",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Carlos Mendez",
      role: "Blockchain Developer",
      company: "Coinbase",
      quote: "The Blockchain development course was cutting-edge and comprehensive. I was able to build my own DApps and join a leading crypto company within months.",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Aisha Johnson",
      role: "DevOps Engineer",
      company: "Atlassian",
      quote: "The DevOps Engineering track provided me with both the technical skills and the methodology knowledge I needed to excel in my interviews and daily work.",
      image: "/placeholder.svg"
    }
  ];

  const statistics = [
    { label: "Average Salary Increase", value: "143%", icon: <TrendingUp className="h-8 w-8 text-primary-600" /> },
    { label: "Job Placement Rate", value: "91%", icon: <Award className="h-8 w-8 text-primary-600" /> },
    { label: "Student Satisfaction", value: "4.8/5", icon: <Star className="h-8 w-8 text-primary-600" /> }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Success Stories</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Real students. Real results. Discover how EduPlatform has helped thousands of students transform their careers.
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
                  <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                <p className="text-primary-100 mb-6">{story.role}</p>
                <p className="text-white text-lg mb-8">"{story.story}"</p>
                <div className="grid grid-cols-3 gap-4">
                  {story.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="text-xl font-bold text-white">{metric.value}</p>
                      <p className="text-sm text-primary-100">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-primary-600 mb-2">The Journey</h4>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">From Beginner to Professional</h3>
                <p className="text-gray-600 mb-6">
                  {story.name} enrolled in our {story.course} with no prior experience. Through dedicated study, hands-on projects, and career coaching, they were able to transform their career.
                </p>
                <div className="mb-8">
                  <h5 className="font-bold text-gray-900 mb-2">Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="bg-primary-50 text-primary-700 text-sm rounded-full px-3 py-1">
                        Skill {i + 1}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="self-start">
                  View Course Details
                </Button>
              </div>
            </div>
          ))}
          
          <h2 className="text-3xl font-bold text-center mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
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
              Join thousands of students who have transformed their careers with EduPlatform. Browse our courses and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="/courses">Browse Courses</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">Speak to an Advisor</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SuccessStories;
