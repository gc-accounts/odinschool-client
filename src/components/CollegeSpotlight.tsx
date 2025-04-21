
import React, { useRef, useEffect } from 'react';
import { 
  GraduationCap, BookOpen, Users, Building, FlaskConical,
  Library, Briefcase, Headphones, Star, Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CollegeQuality {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CollegeSpotlight = () => {
  // Refs for animation elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPointsRef = useRef<HTMLDivElement>(null);
  const rightPointsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all animations elements
    if (leftPointsRef.current) observer.observe(leftPointsRef.current);
    if (rightPointsRef.current) observer.observe(rightPointsRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  // College qualities data - 10 points total
  const qualities: CollegeQuality[] = [
    {
      icon: <GraduationCap className="text-primary-600 w-6 h-6" />,
      title: "Academic Excellence",
      description: "Renowned faculty with industry experience delivering cutting-edge curriculum"
    },
    {
      icon: <BookOpen className="text-primary-600 w-6 h-6" />,
      title: "Diverse Programs",
      description: "Over 50 specialized tech programs across various disciplines"
    },
    {
      icon: <Users className="text-primary-600 w-6 h-6" />,
      title: "Strong Community",
      description: "Vibrant campus life with tech clubs and networking opportunities"
    },
    {
      icon: <Building className="text-primary-600 w-6 h-6" />,
      title: "Modern Facilities",
      description: "State-of-the-art labs and workspaces with latest technology"
    },
    {
      icon: <FlaskConical className="text-primary-600 w-6 h-6" />,
      title: "Research Opportunities",
      description: "Student-led research projects with industry sponsorships"
    },
    {
      icon: <Library className="text-primary-600 w-6 h-6" />,
      title: "Digital Resources",
      description: "Extensive online library with premium access to tech publications"
    },
    {
      icon: <Briefcase className="text-primary-600 w-6 h-6" />,
      title: "Career Services",
      description: "95% job placement rate with support from dedicated career advisors"
    },
    {
      icon: <Headphones className="text-primary-600 w-6 h-6" />,
      title: "Student Support",
      description: "24/7 technical assistance and personalized academic guidance"
    },
    {
      icon: <Star className="text-primary-600 w-6 h-6" />,
      title: "Industry Partnerships",
      description: "Collaborations with top tech companies for internship opportunities"
    },
    {
      icon: <Award className="text-primary-600 w-6 h-6" />,
      title: "Alumni Success",
      description: "Distinguished graduates working at leading global tech companies"
    }
  ];

  // Split qualities for left and right sides
  const leftQualities = qualities.slice(0, 5);
  const rightQualities = qualities.slice(5);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Featured <span className="text-primary-600">College Partner</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tech Institute of Innovation partners with CodeMaster to deliver exceptional tech education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left column qualities */}
          <div 
            ref={leftPointsRef} 
            className="space-y-6 opacity-0" 
            style={{animationDelay: "200ms"}}
          >
            {leftQualities.map((quality, index) => (
              <QualityCard key={`left-${index}`} quality={quality} />
            ))}
          </div>

          {/* Center college image */}
          <div 
            ref={imageRef} 
            className="flex flex-col items-center justify-center opacity-0"
            style={{animationDelay: "100ms"}}
          >
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300 rounded-full blur-2xl opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=800&q=80" 
                  alt="Tech Institute of Innovation Campus" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-[90%] mx-auto -mt-16 relative z-10 text-center">
                <h3 className="text-xl font-bold text-gray-900">Tech Institute of Innovation</h3>
                <p className="text-primary-600 font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Right column qualities */}
          <div 
            ref={rightPointsRef} 
            className="space-y-6 opacity-0"
            style={{animationDelay: "300ms"}}
          >
            {rightQualities.map((quality, index) => (
              <QualityCard key={`right-${index}`} quality={quality} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Quality card component
const QualityCard = ({ quality }: { quality: CollegeQuality }) => (
  <Card className="bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary-200">
    <CardContent className="p-4 flex gap-4 items-start">
      <div className="p-2 bg-primary-50 rounded-lg shrink-0">
        {quality.icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{quality.title}</h3>
        <p className="text-sm text-gray-600">{quality.description}</p>
      </div>
    </CardContent>
  </Card>
);

export default CollegeSpotlight;
