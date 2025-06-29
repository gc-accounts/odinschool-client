'use client'

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useToast } from '@/components/hooks/use-toast';
import contactFormFields from '@/components/data/contactFormFields';
import { submitToZoho } from '@/components/utils/api/submitToZoho'; // Note: submitToZoho is imported but not used directly in handleFormSubmit
import { FieldConfig } from '@/components/components/form/DynamicForm';
import { pushToDataLayer } from '@/lib/gtm';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';

const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Button = dynamic(() => import('@/components/components/ui/button').then(mod => ({ default: mod.Button })), {
  ssr: true
});

const DynamicForm = dynamic(() => import('@/components/components/form/DynamicForm'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Contact = () => {
  const { toast } = useToast();
  const [utm, setUtm] = React.useState<Record<string, string>>({});

  const getAccessToken = async () => {
    const res = await fetch('/api/auth/contact-form-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Failed to get access token');
    const data = await res.json();
    return data.access_token;
  };

  useEffect(() => {
    const data = getUTMTrackingData();
    setUtm(data);
  }, []);

  const handleFormSubmit = async (data: any, reset: () => void) => {
    try {
      const token = await getAccessToken();
      const formData = new FormData();
      formData.append('accessToken', token);

      formData.append('First Name', data.firstName);
      formData.append('Last Name', data.lastName);
      formData.append('Email', data.email);

      // --- START: Add Country Code to Phone Number ---
      const countryCodePrefix = data.countryCode ? data.countryCode.split(' ')[0] : '';
      const fullPhoneNumber = countryCodePrefix + data.phone;
      formData.append('Phone', fullPhoneNumber);
      // --- END: Add Country Code to Phone Number ---

      formData.append('Program', data.program);
      formData.append('Description', data.description);
      formData.append('Ga_client_id', '');
      formData.append('Business Unit', 'Odinschool');
      formData.append('Source_Domain', 'Contact Us form');

      // UTM Data
      formData.append('First Page Seen', utm['First Page Seen'] || '');
      formData.append('Original Traffic Source', utm['Original Traffic Source'] || '');
      formData.append(
        'Original Traffic Source Drill-Down 1',
        utm['Original Traffic Source Drill-Down 1'] || ''
      );
      formData.append(
        'Original Traffic Source Drill-Down 2',
        utm['Original Traffic Source Drill-Down 2'] || ''
      );
      formData.append('UTM Term-First Page Seen', utm['UTM Term-First Page Seen'] || '');
      formData.append('UTM Content-First Page Seen', utm['UTM Content-First Page Seen'] || '');

      const res = await fetch('/api/zoho/contactus-form', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Form submission failed');
      }

      toast({
        title: 'Success!',
        description: "Your information has been submitted successfully. We'll contact you soon.",
      });
      // --- START: Add GTM Data Layer Push Here ---
      pushToDataLayer('form_submission', {
        eventName: 'form_submission',
        program_name: data.program,
        user_email: data.email,
      });
      // --- END: Add GTM Data Layer Push Here ---
      sessionStorage.setItem('submittedEmail', data.email);
      sessionStorage.setItem('first_name', data.firstName);
      sessionStorage.setItem('last_name', data.lastName);
      sessionStorage.setItem('phone', data.phone);
      reset();

    } catch (error: any) {
      console.error(error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  if (!Object.keys(utm).length) return null;


  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">

          <div className="container mx-auto px-4">

            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <Send className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2 text-center">Contact Us</h1>
            <p className="md:text-lg text-md text-center max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-8 h-fit">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <DynamicForm
                fields={contactFormFields as FieldConfig[]}
                buttonText={'Submit'}
                initialValues={{
                  ga_client_id: '',
                  business_unit: 'Odinschool',
                }}
                onSubmit={handleFormSubmit}
              />
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:hello@odinschool.com " className="hover:text-primary-600">
                          hello@odinschool.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:+919355011033 " className="hover:text-primary-600">
                          + 91 935 501 1033
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                      <p className="mt-1 text-gray-600">
                        <span className='font-medium'>OdinSchool</span><br />
                        GreyCampus Edutech Private Limited,<br />
                        Aikya Vihar, Plot 218, B Block,
                        Kavuri Hills Phase - II,<br />
                        Hyderabad - 500033
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <p className="text-gray-600 mb-4">
                  Have questions? Check out our frequently asked questions section for quick answers.
                </p>
                <Button asChild variant="outline">
                  <a href="/faq">View FAQ</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;