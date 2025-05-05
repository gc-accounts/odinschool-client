import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, CreditCard, ShieldCheck, ChevronLeft, Clock, User, BookOpen, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { courses } from '@/data/courses';

const CERTIFICATE_PRICE = 29.99;

const CourseCheckoutCertificate = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(course => course.id === id);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'credit-card',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would process payment here
    window.location.href = `/thank-you`;
  };
  
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course not found</h1>
            <Button asChild>
              <Link to="/courses">Back to Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  // Calculate total price
  const totalPrice = course.price + CERTIFICATE_PRICE;
  
  const lessonCount = Array.isArray(course.lessons) 
    ? course.lessons.length 
    : (typeof course.lessons === 'number' ? course.lessons : 0);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-6" asChild>
            <Link to={`/courses/${id}`} className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6 flex items-start">
                <Award className="text-primary-600 h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary-800">Certificate Included</h3>
                  <p className="text-primary-700 text-sm">
                    You'll receive a verified certificate upon course completion that you can add to your resume and LinkedIn profile.
                  </p>
                </div>
              </div>
            
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
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
                      <p className="text-xs text-gray-500">As it will appear on your certificate</p>
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
                      <p className="text-xs text-gray-500">As it will appear on your certificate</p>
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
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <RadioGroup 
                    defaultValue="credit-card" 
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
                          Credit / Debit Card
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-5 mr-2" />
                          PayPal
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {formData.paymentMethod === 'credit-card' && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber" 
                          name="cardNumber" 
                          value={formData.cardNumber} 
                          onChange={handleInputChange} 
                          placeholder="1234 5678 9012 3456" 
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input 
                            id="expiryDate" 
                            name="expiryDate" 
                            value={formData.expiryDate} 
                            onChange={handleInputChange} 
                            placeholder="MM/YY" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input 
                            id="cvv" 
                            name="cvv" 
                            value={formData.cvv} 
                            onChange={handleInputChange} 
                            placeholder="123" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t">
                  <Button type="submit" size="lg" className="w-full">
                    Complete Purchase
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    Secure payment processing
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
                      <BookOpen className="h-4 w-4 mr-2" />
                      {lessonCount} lessons
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between py-2">
                      <span>Course Price</span>
                      <span>${course.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-primary-600" />
                        Verified Certificate
                      </span>
                      <span>${CERTIFICATE_PRICE.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 font-bold border-t">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/course-checkout/${id}`}>
                        Remove Certificate (Save $29.99)
                      </Link>
                    </Button>
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

export default CourseCheckoutCertificate;
