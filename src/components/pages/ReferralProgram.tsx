'use client';

import React, { useState, useEffect } from 'react';
import { Gift, Users, DollarSign, Award, Plus } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent } from '@/components/components/ui/card';
import ReferrerFormFields from '@/components/data/form-fields/ReferrerFormFields';
import ReferralFormFields from '@/components/data/form-fields/ReferralFormFields';
import DynamicForm from '@/components/components/form/DynamicForm';
import { useToast } from '@/components/hooks/use-toast';
import { useRouter } from 'next/navigation';

const ReferralProgram = () => {
  const [referrals, setReferrals] = useState([{ id: 1 }]);
  const [referrerSubmitted, setReferrerSubmitted] = useState(false);
  const [referrerData, setReferrerData] = useState<any>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addReferral = () => {
    setReferrals([...referrals, { id: referrals.length + 1 }]);
  };

  const rewards = [
    {
      title: "Cash Rewards",
      description: "Earn up to $100 for every friend who enrolls in a paid course using your referral link.",
      icon: <DollarSign className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Course Credits",
      description: "Get credits to use towards future courses, webinars, or premium content.",
      icon: <Gift className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Exclusive Access",
      description: "Top referrers get early access to new courses and special events.",
      icon: <Award className="h-10 w-10 text-primary-600" />,
    },
    {
      title: "Community Status",
      description: "Earn badges and recognition in our learning community.",
      icon: <Users className="h-10 w-10 text-primary-600" />,
    },
  ];

  const steps = [
    {
      title: "Join the movement",
      description: "Sign up for our referral program to get your unique link",
    },
    {
      title: "Share the opportunity",
      description: "Share your link with friends via email, social media, or messaging",
    },
    {
      title: "Make an impact",
      description: "Your friends enroll in courses using your referral link",
    },
    {
      title: "Earn rewards",
      description: "Get rewarded when your referrals complete their enrollment",
    },
  ];

  const faqs = [
    {
      question: "How do I get my referral link?",
      answer: "You can find your unique referral link in your account dashboard under the 'Referrals' tab. Simply copy the link and start sharing!",
    },
    {
      question: "When do I receive my rewards?",
      answer: "Rewards are issued after your referred friend has completed their first course or has been a member for 30 days, whichever comes first.",
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer: "No, there is no limit! You can refer as many friends as you want and earn rewards for each successful referral.",
    },
    {
      question: "Can I combine different types of rewards?",
      answer: "Yes, you can choose how to receive your rewards for each successful referral – either as cash, course credits, or a combination.",
    },
  ];

  const getAccessToken = async () => {
    try {
      const res = await fetch('/api/auth/referral-form-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to get access token');
      const data = await res.json();
      return data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  };

  const handleReferrerSubmit = async (data: any, reset: () => void) => {
    try {
      setReferrerData(data);
      setReferrerSubmitted(true);
      toast({
        title: 'Success!',
        description: 'Your details have been saved. Now you can add referrals.',
      });
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const handleReferralSubmit = async (data: any, reset: () => void) => {
    try {
      if (!referrerData) {
        throw new Error('Please complete your details first');
      }


      const token = await getAccessToken();
      const formData = new FormData();
      
      // Add referrer data
      formData.append('accessToken', token);
      formData.append('First_Name', referrerData.name);
      formData.append('Email', referrerData.email);
      formData.append('Phone', referrerData.phone);
      formData.append('Business_Unit', 'Odinschool');
      
      // Add referral data
      formData.append('Referral_First_Name', data.first_name);
       formData.append('Referral_Last_Name', data.last_name);
      formData.append('Referral_Email', data.email);
      formData.append('Referral_Phone', data.phone);
      formData.append('Program', data.program);
      formData.append('Referral_URL', window.location.href);

      const res = await fetch('/api/zoho/referral-form', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to submit referral');
      }

      toast({
        title: 'Success!',
        description: 'Referral submitted successfully. Thank you!',
      });

      reset();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4">
                <Gift className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Referral Program</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Share OdinSchool with your network and earn rewards when they enroll in our programs.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-center mb-2 text-primary-600">Submit Referrals</h2>
                <p className="text-center text-gray-600 mb-8">Help your friends discover OdinSchool and earn rewards</p>

                {/* Referrer Details */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Your Details</h3>
                  {!referrerSubmitted ? (
                    <DynamicForm
                      fields={ReferrerFormFields}
                      buttonText="Submit Your Details"
                      onSubmit={handleReferrerSubmit}
                    />
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <p className="text-green-700">✓ Your details have been submitted</p>
                    </div>
                  )}
                </div>

                {/* Referral Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Referral Details</h3>
                  
                  {!referrerSubmitted ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                      <p className="text-gray-600">Please submit your details above before adding referrals</p>
                    </div>
                  ) : (
                    <>
                      {referrals.map((referral, index) => (
                        <div key={referral.id} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                          <h4 className="font-medium text-gray-700 mb-4">Referral #{index + 1}</h4>
                          <DynamicForm
                            fields={ReferralFormFields}
                            buttonText="Submit Referral"
                            onSubmit={handleReferralSubmit}
                            disabled={!referrerSubmitted}
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="mt-4 text-sm text-red-600 hover:text-red-800"
                              onClick={() => setReferrals(referrals.filter((_, i) => i !== index))}
                            >
                              Remove this referral
                            </button>
                          )}
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addReferral}
                        className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-800 font-medium mt-4"
                      >
                        <Plus className="h-5 w-5" />
                        <span>Add Another Referral</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Earn Amazing Rewards</h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              The more friends you refer, the more rewards you can earn
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rewards.map((reward, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary-100 rounded-full p-5 inline-flex mb-6">
                      {reward.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{reward.title}</h3>
                    <p className="text-gray-600">{reward.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-primary-600">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReferralProgram;