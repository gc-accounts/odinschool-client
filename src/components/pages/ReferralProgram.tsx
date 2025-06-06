
import React, { useEffect } from 'react';
import { Gift, Users, DollarSign, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent } from '@/components/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/components/ui/avatar';

const ReferralProgram = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const testimonials = [
    {
      name: "Emily Johnson",
      image: "/placeholder.svg",
      quote: "I shared my referral link with my team at work, and five of them signed up! Not only did I earn rewards, but now we're all learning together, which has created a great collaborative atmosphere.",
      earned: "$500",
    },
    {
      name: "David Chen",
      image: "/placeholder.svg",
      quote: "As a career coach, I recommend OdinSchool to all my clients. The referral program has been a nice bonus on top of seeing my clients succeed with their new skills.",
      earned: "$1,200",
    },
    {
      name: "Sarah Williams",
      image: "/placeholder.svg",
      quote: "I posted my referral link on my blog where I write about career development. It's been great to earn rewards while helping my readers find quality educational resources.",
      earned: "$750",
    },
  ];

  const steps = [
    {
      title: "Join the movement",
      description: "",
    },
    {
      title: "Share the opportunity",
      description: "",
    },
    {
      title: "Make an impact",
      description: "",
    },
    {
      title: "Earn ₹2000",
      description: "",
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Gift className="h-8 w-8" />
              </div>
            </div>
            <h1 className="heading-xl font-bold text-center mb-4">Referral Program</h1>
            <p className="text-lg font-light text-center max-w-6xl mx-auto mb-8">
              It's time to pay it forward. By participating in our Referral program, you have the power to make a difference in the lives of your friends and acquaintances. Help them discover new career opportunities, gain valuable skills, and achieve their career goals. You can also earn rewards along the way and be part of a community that's dedicated to making a positive impact.
            </p>
            {/* <div className="flex justify-center">
              <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                <a href="#get-started">Flat ₹2000 for every admission</a>
              </Button>
            </div> */}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Our referral program is simple: share OdinSchool with friends, and get rewarded when they sign up and enroll in courses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="relative">
                  <div className="absolute top-0 left-0 w-10 h-10 bg-primary-600 text-white flex items-center justify-center rounded-tl-lg rounded-br-lg font-bold">
                    {index + 1}
                  </div>
                  <CardContent className="p-6 pt-12">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Earn Amazing Rewards</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              The more friends you refer, the more rewards you unlock. Choose how you want to be rewarded.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary-50 rounded-full p-4 inline-flex mb-4">
                      {reward.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{reward.title}</h3>
                    <p className="text-gray-600">{reward.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>


          </div>



          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReferralProgram;
