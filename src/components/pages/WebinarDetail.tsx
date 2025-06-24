'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/components/ui/button';
import { CalendarDays, Clock, ChevronLeft, User, Tag, DollarSign } from 'lucide-react';
import { formatDate } from '@/components/utils/dateUtils';
import { Badge } from '@/components/components/ui/badge';
import { useToast } from '@/components/hooks/use-toast';
import Markdown from '@/components/components/Markdown';
import MetaTags from '@/components/components/MetaTags';
import Image from 'next/image';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';

interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  instructor: string;
  about_instructor: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  isFeatured: boolean;
  isPaid: boolean;
  status: 'upcoming' | 'past';
  isOdintalk: boolean;
  url_slug: string;
  is_html: boolean;
}

interface WebinarDetailProps {
  webinar: Webinar;
}

const WebinarDetail = ({ webinar }: WebinarDetailProps) => {
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = () => {
    if (webinar.status === 'past') {
      toast({
        title: "Webinar has ended",
        description: "This webinar has already taken place.",
        variant: "destructive"
      });
      return;
    }

    router.push(`/webinar-registration/${webinar.id}`);
  };

  const isPast = webinar.status === 'past';

  return (


    <>
      <MetaTags
        title={webinar.title}
        description={webinar.description.substring(0, 160)}
        image={webinar.image}
        url={`/odintalks/${webinar.id}`}
        type="article"
        keywords={webinar.tags}
      />

      <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pb-16">
  <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => router.push('/odintalks')}
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Odintalks
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="font-normal">
                  {webinar.category}
                </Badge>
                {webinar.isPaid ? (
                  <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
                    <DollarSign className="h-3 w-3 mr-1" />
                    Paid
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                    Free
                  </Badge>
                )}
                <Badge variant="outline" className={`${isPast ? 'border-gray-200 bg-gray-50 text-gray-700' : 'border-blue-200 bg-blue-50 text-blue-700'}`}>
                  {isPast ? 'Past' : 'Upcoming'}
                </Badge>
              </div>

              <h1 className="heading-lg mb-4">{webinar.title}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <CalendarDays className="h-5 w-5 mr-2 text-primary" />
                  <span>{formatDate(new Date(webinar.date))}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <span>{webinar.time} ({webinar.duration})</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  <span>{webinar.instructor}</span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-full object-cover"

                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="heading-sm mb-3">About This Webinar</h2>
                  {webinar?.is_html ? (
                    <div dangerouslySetInnerHTML={{ __html: webinar.description }} />
                  ) : (
                    <Markdown markdown={webinar.description} />
                  )}
                </div>

                <div>
                  <h2 className="heading-sm mb-3">About the Instructor</h2>
                  {webinar?.is_html ? (
                    <div dangerouslySetInnerHTML={{ __html: webinar.about_instructor }} />
                  ) : (
                    <Markdown markdown={webinar.about_instructor} />
                  )}
                </div>

                {/* <div>
                  <h2 className="heading-sm mb-3">What You'll Learn</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Practical insights on {webinar.title.toLowerCase()}</li>
                    <li>Expert techniques from {webinar.instructor}</li>
                    <li>Real-world applications and case studies</li>
                    <li>Latest trends and best practices in {webinar.category}</li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-sm mb-3">Who Should Attend</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This webinar is perfect for professionals in {webinar.category} looking to enhance their skills and knowledge.
                    Whether you're a beginner or experienced practitioner, you'll gain valuable insights.
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">{isPast ? 'Webinar Details' : 'Registration Details'}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-bold">{webinar.isPaid ? `$${webinar.price.toFixed(2)}` : 'Free'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{formatDate(new Date(webinar.date))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span>{webinar.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{(webinar.duration ?? 0) / 60} hr</span>
                </div>
              </div>

              {isPast ? (
                <Button
                  variant="outline"
                  className="w-full mb-4"
                  disabled
                >
                  Webinar Ended
                </Button>
              ) : (
                <Button
                  variant="default"
                  className="w-full mb-4"
                  onClick={handleRegister}
                >
                  {webinar.isPaid ? 'Register Now' : 'Register for Free'}
                </Button>
              )}

              <div className="text-center text-sm text-muted-foreground">
                {!isPast && (
                  <p>Spaces are limited. Secure your spot today!</p>
                )}
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {webinar?.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="px-2 py-1">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </main>
            <Footer />
            </div>


    
    </>
  );
};

export default WebinarDetail;
