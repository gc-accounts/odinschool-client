import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/components/ui/form";
import { Input } from '@/components/components/ui/input';
import { Checkbox } from '@/components/components/ui/checkbox';
import { formatDate } from '@/components/utils/dateUtils';
import { getWebinar } from '@/components/utils/api/webinars';
import dynamic from 'next/dynamic';

interface ApiWebinarResponse {
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
  status: string;
  isOdintalk: boolean;
  url_slug: string;
  is_html: boolean;
}

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

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  marketingConsent: z.boolean().default(false),
});

const WebinarRegistration = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [webinar, setWebinar] = useState<Webinar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinar = async () => {
      const apiWebinar = await getWebinar("", id) as ApiWebinarResponse;

      // Transform the API response to match our Webinar interface
      const transformedWebinar: Webinar = {
        ...apiWebinar,
        status: apiWebinar.status as 'upcoming' | 'past',
        duration: Number(apiWebinar.duration) || 0,
        price: Number(apiWebinar.price) || 0,
      };

      setWebinar(transformedWebinar);
      setLoading(false);
    };
    fetchWebinar();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      jobTitle: "",
      marketingConsent: false,
    },
  });

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  }

  if (!webinar) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="heading-lg mb-4">Webinar Not Found</h1>
        <p className="mb-8">The webinar you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push('/webinars')}>Back to Webinars</Button>
      </div>
    );
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Registration form submitted:", values);

    if (webinar.isPaid) {
      // For paid webinars, navigate to checkout
      router.push(`/webinar-checkout/${webinar.id}?${new URLSearchParams({
        registrationData: JSON.stringify(values)
      }).toString()}`);
    } else {
      // For free webinars, navigate to success page
      router.push(`/webinar-confirmation/${webinar.id}?${new URLSearchParams({
        registrationData: JSON.stringify(values)
      }).toString()}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <button
        onClick={() => router.push(`/webinars/${id}`)}
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Webinar
      </button>

      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="text-center mb-8">
          <h1 className="heading-md mb-2">Register for Webinar</h1>
          <p className="text-muted-foreground">
            {webinar.title} - {formatDate(new Date(webinar.date))}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your job title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="marketingConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      I agree to receive updates about future webinars and related content
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button type="submit" className="w-full">
                {webinar.isPaid
                  ? `Continue to Payment - $${webinar.price.toFixed(2)}`
                  : 'Complete Registration - Free'}
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              By registering, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

// Export the component with dynamic import
export default dynamic(() => Promise.resolve(WebinarRegistration), {
  loading: () => (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  ),
  ssr: false // Disable server-side rendering for this component
});
