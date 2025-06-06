
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import contactFormFields from '@/components/data/contactFormFields';
import DynamicForm from '@/components/components/form/DynamicForm';
import { submitToZoho } from '@/components/utils/api/submitToZoho';
import { useToast } from '@/components/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const hiddenFields = {
    xnQsjsdp: '0ee5fe53d8fdab0c50e05b6711b8646e52af804ecad070c5c2048cd027b0ef61',
    xmIwtLD: '43b71e08f2fd49b38ef635e57723ad06c199ca8b29ea5fa48b314181e575842418b919d303f74b11878d665b6cb5c787',
    actionType: 'Q29udGFjdHM=',
    returnURL: 'null',
  };

  const fieldMap = {
    name: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    program: 'Program',
    description: 'Description',
    ga_client_id: 'ga_client_id',
    business_unit: 'Business Unit',
    source_domain: 'Source Domain'
  };

  const handleFormSubmit = async (data: any, reset: () => void) => {
    const [firstName, ...rest] = data.name?.split(' ') || [];
    const lastName = rest.join(' ') || 'NA';

    await submitToZoho({
      data: { ...data, name: firstName, lastName },
      fieldMap,
      hiddenFields,
      toast,
      onSuccess: reset,
    });
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



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

            <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">Contact Us</h1>
            <p className="md:text-lg text-md text-center max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>


        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <DynamicForm
                fields={contactFormFields}
                buttonText="Submit"
                initialValues={{ ga_client_id: '', business_unit: 'OdinSchool', source_domain: 'Odinschool contact-us form' }}
                onSubmit={(data, reset) => handleFormSubmit(data, reset)}
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
