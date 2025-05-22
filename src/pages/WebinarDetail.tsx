
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getWebinarById, Webinar } from '@/data/webinars';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ChevronLeft, User, Tag, DollarSign, Loader2 } from 'lucide-react';
import { formatDate } from '@/utils/dateUtils';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getWebinar } from '@/utils/api/webinars';

const WebinarDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const navigate = useNavigate();
  const { toast } = useToast();
  // state for webinar
  const [webinar, setWebinar] = useState<Webinar | null>(null);
  // loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinar = async () => {
      const webinar = await getWebinar(id || '');
      setWebinar(webinar);
      setLoading(false);
    };
    fetchWebinar();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>;
  }

  if (!webinar) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="heading-lg mb-4">Webinar Not Found</h1>
        <p className="mb-8">The webinar you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/webinars')}>Back to Webinars</Button>
      </div>
    );
  }

  const handleRegister = () => {
    if (webinar.status === 'past') {
      toast({
        title: "Webinar has ended",
        description: "This webinar has already taken place.",
        variant: "destructive"
      });
      return;
    }

    navigate(`/webinar-registration/${webinar.id}`);
  };

  const isPast = webinar.status === 'past';

  return (
    <div className="container mx-auto px-4 py-16">
      <button
        onClick={() => navigate('/webinars')}
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Webinars
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
              <img
                src={webinar.image}
                alt={webinar.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="heading-sm mb-3">About This Webinar</h2>
                <p className="text-muted-foreground leading-relaxed">{webinar.description}</p>
              </div>

              <div>
                <h2 className="heading-sm mb-3">About the Instructor</h2>
                <p className="text-muted-foreground leading-relaxed">{webinar.about_instructor}</p>
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
                <span>{webinar.duration}</span>
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
                {webinar.tags.map((tag, index) => (
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
  );
};

export default WebinarDetail;
