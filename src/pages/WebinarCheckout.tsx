
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getWebinarById } from '@/data/webinars';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronLeft, CreditCard, Check, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { formatDate } from '@/utils/dateUtils';
import { useToast } from '@/hooks/use-toast';

const paymentFormSchema = z.object({
  cardNumber: z.string().min(16, { message: "Please enter a valid card number" }),
  cardName: z.string().min(3, { message: "Name on card is required" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Please use MM/YY format" }),
  cvc: z.string().min(3, { message: "CVC must be at least 3 digits" }),
});

type LocationState = {
  registrationData?: {
    fullName: string;
    email: string;
    company?: string;
    jobTitle?: string;
    marketingConsent: boolean;
  };
}

const WebinarCheckout = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { registrationData } = (location.state as LocationState) || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const webinar = getWebinarById(id || '');
  
  if (!webinar) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="heading-lg mb-4">Webinar Not Found</h1>
        <p className="mb-8">The webinar you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/webinars')}>Back to Webinars</Button>
      </div>
    );
  }
  
  if (!webinar.isPaid) {
    navigate(`/webinar-registration/${webinar.id}`);
    return null;
  }
  
  if (!registrationData) {
    navigate(`/webinar-registration/${webinar.id}`);
    return null;
  }
  
  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvc: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof paymentFormSchema>) => {
    console.log("Payment form submitted:", values);
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate(`/webinar-confirmation/${webinar.id}`, { 
        state: { registrationData, paymentCompleted: true } 
      });
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <button 
        onClick={() => navigate(`/webinar-registration/${id}`)}
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Registration
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="mb-8">
              <h1 className="heading-md mb-2">Payment Details</h1>
              <p className="text-muted-foreground">
                Complete your purchase to secure your spot in the webinar
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="1234 5678 9012 3456"
                            {...field}
                            maxLength={16}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(value);
                            }}
                          />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name on Card</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="MM/YY" 
                            {...field} 
                            maxLength={5}
                            onChange={(e) => {
                              let value = e.target.value.replace(/[^\d/]/g, '');
                              if (value.length === 2 && !value.includes('/') && field.value.length === 1) {
                                value += '/';
                              }
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cvc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="123" 
                            {...field}
                            maxLength={4}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay $${webinar.price.toFixed(2)}`}
                  </Button>
                </div>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground mt-4">
                  <Lock className="h-4 w-4 mr-1" />
                  Secure payment powered by Stripe
                </div>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg border p-6 sticky top-8">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-4">
              <div>
                <h4 className="font-medium">{webinar.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {formatDate(new Date(webinar.date))} • {webinar.time}
                </p>
              </div>
              
              <div className="text-sm">
                <p>Attendee: {registrationData.fullName}</p>
                <p>Email: {registrationData.email}</p>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span>Webinar Price</span>
                <span>${webinar.price.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${webinar.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarCheckout;
