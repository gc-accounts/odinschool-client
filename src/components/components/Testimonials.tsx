import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, Play, Briefcase, Award, TrendingUp, Loader2 } from 'lucide-react';
import { cn } from '@/components/lib/utils';
import { Card, CardContent } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import { careerTestimonials } from '@/components/data/careerTestimonials';
import { videoTestimonials } from '@/components/data/videoTestimonials';
import { Badge } from '@/components/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/components/ui/tabs';
import { getStories } from '@/components/utils/api/story';
import { Dialog, DialogContent } from '@/components/components/ui/dialog';
import Link from 'next/link';

const transformationType = [
  { name: "All", key: "" },
  { name: "Career Transition", key: "Career Transition" },
  { name: "Career Gap", key: "Career Gap" },
  { name: "Career Upgrade", key: "Career Upgrade" },
  { name: "Salary Hike", key: "Salary Hike" },
  { name: "Career Launch", key: "Career Launch" },
];

interface TestimonialsProps {
  sectionClass?: String
}
const Testimonials = ({ sectionClass }: TestimonialsProps) => {

  const [stories, setStories] = useState<any[]>([]);
  const [videoStories, setVideoStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      const stories = await getStories({
        pageNumber: 1,
        pageSize: 3,
        isFeatured: true,
        remarks: activeTab
      });
      setStories(stories.stories);
      setVideoStories(stories.videoStories);
      setLoading(false);
    }
    fetchStories();
  }, [activeTab]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, [loading]);

  const categoryColors = {
    "Career Transition": "bg-blue-100 text-blue-800 border-blue-200",
    "Career Upgrade": "bg-green-100 text-green-800 border-green-200",
    "Career Relaunch": "bg-purple-100 text-purple-800 border-purple-200",
    "Career Gap": "bg-amber-100 text-amber-800 border-amber-200",
    "Salary Hike": "bg-red-100 text-red-800 border-red-200"
  };


  console.log(stories, videoStories);


  return (
    <section ref={sectionRef} className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container">
        <div ref={headerRef} className="text-center max-w-6xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            Hear from your peers who've <span className="text-primary-600">been successfully placed</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p>
        </div>
        {loading ?

          (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          )
          : (<>
            <div className="border-b mb-8">
              <Tabs defaultValue="" onValueChange={(value) => setActiveTab(value)} value={activeTab} className="w-full">
                <TabsList className="mb-4 w-full lg:justify-center justify-start overflow-x-auto h-max p-2">
                  {transformationType.map((type) => (
                    <TabsTrigger
                      value={type.key}
                    >
                      {type.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="pt-6">
                  <div
                    ref={testimonialsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0"
                    style={{ animationDelay: '200ms' }}
                  >
                    {stories.map((testimonial) => (
                      <CareerTransitionCard key={testimonial.documentId} testimonial={testimonial} categoryColors={categoryColors} />
                    ))}
                  </div>
                </div>
              </Tabs>

            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videoStories.map((testimonial) => (
                  <VideoTestimonialCard key={testimonial.documentId} testimonial={testimonial} categoryColors={categoryColors} />
                ))}
              </div>
            </div>
            <div className="mt-8 mb-12">

            </div>

            <div className="text-center mt-12">
              <Link href='/success-stories'>
              <Button variant="outline" className="hover:bg-primary-50">
                View More Success Stories
              </Button>
              </Link>
            </div>
          </>)}
      </div>
    </section>
  );
};

interface CareerTestimonialProps {
  testimonial: {
    id: number;
    name: string;
    previousRole: string;
    currentRole: string;
    company: string;
    companyLogo: string;
    avatar: string;
    testimonial: string;
    rating: number;
    salaryIncrease: string;
    timeToJob: string;
    skills: string[];
    category: string;
  };
  categoryColors: Record<string, string>;
}

const CareerTransitionCard = ({ testimonial, categoryColors }: any) => {
  console.log("CareerTransitionCard", testimonial);
  const badgeClass = categoryColors[testimonial.student_remark as keyof typeof categoryColors] || "bg-gray-100 text-gray-800 border-gray-200";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-0">
        <div className="bg-white p-4 ">
          <div className="flex items-center gap-2 mb-3">
            <Badge className={`${badgeClass} flex items-center gap-1`}>
              <span>{testimonial.student_remark}</span>
            </Badge>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-semibold  text-base">{testimonial.name}</h4>
                <div className="flex flex-col items-start text-sm gap-1">
                  <span className="line-through">{testimonial.previous_designation}</span>
                  <svg width="18" height="6" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                    <path d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5H19V3.5H0V4.5Z" fill="currentColor" />
                  </svg>
                  <span className="font-bold">{testimonial.current_designation}</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src={testimonial.current_company_image}
            alt={testimonial.name}
            className="w-12 h-12 object-contain mb-2"
          />

          <p className="italic text-gray-500 text-sm ">"{testimonial.student_remark}"</p>


        </div>

      </CardContent>
    </Card>
  );
};

interface VideoTestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    companyLogo: string;
    avatar: string;
    testimonial: string;
    rating: number;
    videoThumbnail: string;
    videoUrl: string;
    category: string;
  };
  categoryColors: Record<string, string>;
}

const VideoTestimonialCard = ({ testimonial, categoryColors }: any) => {
  const badgeClass = categoryColors[testimonial.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800 border-gray-200";
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden bg-gray-800">
            <img
              src={testimonial.testimonial_video_thumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="rounded-full bg-primary-600 p-3 text-white shadow-lg hover:bg-primary-700 transition-colors cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="p-4 hidden">
            <div>
              <h4 className="font-semibold text-sm">{testimonial.name}</h4>
              <div className="flex items-center gap-1 text-xs">
                <span>{testimonial.role} at</span>
                <div className="bg-white rounded-full p-0.5 h-4 w-4 flex items-center justify-center">
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="w-3 h-3 object-contain"
                  />
                </div>
                <span>{testimonial.company}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <div className="aspect-video w-full">
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={testimonial.testimonial_video_link}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Testimonials;
