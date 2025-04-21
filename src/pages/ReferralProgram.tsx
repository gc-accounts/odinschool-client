
import React from 'react';
import { Gift, Users, DollarSign, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ReferralProgram = () => {
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
      quote: "As a career coach, I recommend EduPlatform to all my clients. The referral program has been a nice bonus on top of seeing my clients succeed with their new skills.",
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
      title: "Sign Up",
      description: "Create an account on EduPlatform if you haven't already.",
    },
    {
      title: "Get Your Link",
      description: "Access your unique referral link from your account dashboard.",
    },
    {
      title: "Share With Friends",
      description: "Share your link via email, social media, or direct message.",
    },
    {
      title: "Earn Rewards",
      description: "Get rewarded when your friends sign up and enroll in courses.",
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
            <h1 className="text-4xl font-bold text-center mb-4">Referral Program</h1>
            <p className="text-xl text-center max-w-2xl mx-auto mb-8">
              Share the gift of learning and earn rewards for every friend who joins EduPlatform
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                <a href="#get-started">Get Your Referral Link</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Our referral program is simple: share EduPlatform with friends, and get rewarded when they sign up and enroll in courses.
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
            
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Reward Tiers</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Number of Referrals</th>
                      <th className="p-3 text-left">Cash Reward</th>
                      <th className="p-3 text-left">Course Credits</th>
                      <th className="p-3 text-left">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">1-5</td>
                      <td className="p-3">$50 per referral</td>
                      <td className="p-3">$75 credits per referral</td>
                      <td className="p-3">-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">6-10</td>
                      <td className="p-3">$75 per referral</td>
                      <td className="p-3">$100 credits per referral</td>
                      <td className="p-3">Free webinar access</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">11-20</td>
                      <td className="p-3">$100 per referral</td>
                      <td className="p-3">$150 credits per referral</td>
                      <td className="p-3">Free premium course</td>
                    </tr>
                    <tr>
                      <td className="p-3">21+</td>
                      <td className="p-3">$150 per referral</td>
                      <td className="p-3">$200 credits per referral</td>
                      <td className="p-3">VIP membership</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Meet some of our top referrers and learn how they succeeded with our program.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-primary-600">Earned: {testimonial.earned}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
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
          
          <div id="get-started" className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sign in to your account to get your unique referral link and start sharing EduPlatform with your friends.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Already have an account?</h3>
                <Button asChild className="w-full">
                  <a href="/login">Sign In to Get Your Link</a>
                </Button>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">New to EduPlatform?</h3>
                <Button asChild variant="outline" className="w-full">
                  <a href="/signup">Create an Account</a>
                </Button>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Share these tips to maximize your earnings:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Personalize your message when sharing your referral link.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Share specific courses that might interest your friends.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Use social media platforms to reach a wider audience.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Follow up with friends who showed interest but haven't signed up yet.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReferralProgram;
