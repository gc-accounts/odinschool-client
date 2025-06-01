import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Check, CreditCard, ShieldCheck, ChevronLeft, Clock, User, BookOpen, Loader2 } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { Input } from '@/components/components/ui/input';
import { Label } from "@/components/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/components/ui/radio-group";
import { courses } from '@/components/data/courses';
import { getCourse } from '@/components/utils/api/courses';
import { useToast } from '@/components/hooks/use-toast';
import axios from 'axios';
import Script from 'next/script';

interface ApiCourseResponse {
  id: string;
  documentId: string;
  title: string;
  description: string;
  level: string;
  on_sale: boolean;
  has_certificate: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  image: string;
  instructor?: string;
  price?: number;
  salePrice?: number;
  duration?: string;
  students?: number;
  lessons?: any;
  modules?: any[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: string;
  students: number;
  image: string;
  has_certificate: boolean;
  lessons: string[] | number;
  level: string;
  on_sale: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  modules: any[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  year: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const REFRESH_TOKEN = "1000.9610e09a6a7a1d160ff1b71e848ad575.807b0d1acb74af5c6d650e688295c8d5";
const CLIENT_ID = "1000.0OJAI0ZC0NIBXRX19IC6B14QE22HFT";
const CLIENT_SECRET = "ea6422637d7299fdb33bf7a62b41ad6465a851d12b";

const CourseCheckout = () => {
  const params = useParams();
  const id = params?.id as string;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [price, setPrice] = useState(0);
  const [certificateButtonState, setCertificateButtonState] = useState(true);
  const { toast } = useToast();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const courseData = await getCourse("", id);
        if (courseData && courseData[0]) {
          const apiCourse = courseData[0] as ApiCourseResponse;
          // Transform the API response to match our Course interface
          const transformedCourse: Course = {
            id: apiCourse.id || '',
            title: apiCourse.title || '',
            description: apiCourse.description || '',
            instructor: apiCourse.instructor || 'Instructor Name',
            price: Number(apiCourse.price) || 0,
            duration: apiCourse.duration || '0 hours',
            students: Number(apiCourse.students) || 0,
            image: apiCourse.image || '',
            has_certificate: Boolean(apiCourse.has_certificate),
            lessons: apiCourse.lessons || [],
            level: apiCourse.level || 'Beginner',
            on_sale: Boolean(apiCourse.on_sale),
            overview: apiCourse.overview || '',
            slug: apiCourse.slug || '',
            createdAt: apiCourse.createdAt || '',
            updatedAt: apiCourse.updatedAt || '',
            publishedAt: apiCourse.publishedAt || '',
            url_slug: apiCourse.url_slug || '',
            modules: apiCourse.modules || [],
          };
          setCourse(transformedCourse);
          setPrice(Number(apiCourse.price) || 0);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    year: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getAccessToken = async () => {
    try {
      // Use our backend endpoint instead of calling Zoho directly
      const response = await fetch('/api/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();
      if (data?.access_token) {
        return data.access_token;
      } else {
        throw new Error('No access token in response');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  const handlePayment = async (formData: FormData) => {
    try {
      // Create Razorpay order
      const orderResponse = await fetch('/api/payment/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: course?.price || 0,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          courseName: course?.title || ''
        })
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order');
      }

      const orderData = await orderResponse.json();

      // Initialize Razorpay
      const options = {
        key: "rzp_live_gxJ95DeVUwmpdc",
        amount: orderData.amount,
        currency: "INR",
        name: `${course?.title} Seat Booking`,
        description: "OdinSchool Payment",
        image: "https://www.odinschool.com/hubfs/OdinSchool%20M22/icons/fevicon.svg",
        order_id: orderData.id,
        handler: async function (response: RazorpayResponse) {
          try {
            // Verify payment
            const verifyResponse = await fetch('/api/payment/razorpay', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                amount: course?.price || 0
              })
            });

            if (!verifyResponse.ok) {
              throw new Error('Payment verification failed');
            }

            const verifyData = await verifyResponse.json();

            if (verifyData.response === 'Paid') {
              // Track conversion
              const img = document.createElement('img');
              img.src = `https://shareasale.com/sale.cfm?amount=${course?.price}&tracking=${response.razorpay_order_id}&merchantID=123856&transtype=sale&currency=INR`;
              document.body.appendChild(img);

              // Submit payment status
              const paymentStatusForm = document.createElement('form');
              paymentStatusForm.method = 'POST';
              paymentStatusForm.action = '/api/payment/status';

              const statusFormData = new FormData();
              statusFormData.append('email', formData.email);
              statusFormData.append('payment_status', 'Paid');
              statusFormData.append('payable_amount', String(course?.price || 0));
              statusFormData.append('paid_event_name', course?.title || '');
              statusFormData.append('effective_bootcamp_fee', String(course?.price || 0));

              // Redirect to thank you page
              window.location.href = '/thank-you';
            } else {
              toast({
                title: "Payment Failed",
                description: "There was an error processing your payment. Please try again.",
                variant: "destructive"
              });
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast({
              title: "Payment Failed",
              description: "There was an error verifying your payment. Please contact support.",
              variant: "destructive"
            });
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#3399cc"
        }
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();

      razorpay.on('payment.failed', function (response: any) {
        toast({
          title: "Payment Failed",
          description: "Your payment could not be processed. Please try again.",
          variant: "destructive"
        });
      });
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "There was an error initiating the payment. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Get fresh access token
      const accessToken = await getAccessToken();

      // Create FormData for the contact creation
      const zohoFormData = new FormData();
      zohoFormData.append('accessToken', accessToken);
      zohoFormData.append('First Name', formData.firstName);
      zohoFormData.append('Last Name', formData.lastName);
      zohoFormData.append('Email', formData.email);
      zohoFormData.append('Phone', formData.phone);
      zohoFormData.append('Program', course?.slug || '');
      zohoFormData.append('Year of Graduation', formData.year);
      zohoFormData.append('Coupon Code', '');
      zohoFormData.append('Ga_client_id', '');
      zohoFormData.append('Business Unit', 'Odinschool');

      // Submit to our backend endpoint
      const response = await fetch('/api/zoho/contact', {
        method: 'POST',
        body: zohoFormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create contact');
      }

      const data = await response.json();
      if (data?.data?.[0]?.status === 'success') {
        // Initiate payment flow after successful contact creation
        await handlePayment(formData);
      } else {
        throw new Error('Failed to create contact');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Registration failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (!course || loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          {loading ? (
            <Loader2 className="h-10 w-10 animate-spin" />
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Course not found</h1>
              <Button asChild>
                <Link href="/courses">Back to Courses</Link>
              </Button>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }

  const lessonCount = Array.isArray(course.lessons)
    ? course.lessons.length
    : (typeof course.lessons === 'number' ? course.lessons : 0);

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-6" asChild>
            <Link href={`/${id}`} className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Link>
          </Button>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Reserve Your Seat</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      placeholder="Enter 10 digit phone number"
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="year">Year of Graduation</Label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select Year</option>
                      <option value="Before 2018">Before 2018</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="After 2025">After 2025</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    Secure registration process
                  </p>
                </div>
              </form>
            </div>

            <div>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 rounded-md overflow-hidden w-20 h-20">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <div className="text-sm text-gray-500">{course.instructor}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      {course.students?.toLocaleString()} students
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between py-2">
                      <span>Price</span>
                      <span>${price?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Certificate</span>
                      <span>Not Included</span>
                    </div>
                    <div className="flex justify-between py-2 font-bold border-t">
                      <span>Total</span>
                      <span>${price?.toFixed(2)}</span>
                    </div>
                  </div>
                  {course.has_certificate && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (certificateButtonState) {
                          setPrice(price + 29.99);
                          setCertificateButtonState(false);
                        } else {
                          setPrice(price - 29.99);
                          setCertificateButtonState(true);
                        }
                      }}
                      className="w-full"
                    >
                      {certificateButtonState ? "Add Certificate (+ $29.99)" : "Remove Certificate (- $29.99)"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseCheckout;
