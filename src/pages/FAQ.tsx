
import React, { useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqCategories = [
    {
      title: "Courses & Learning",
      questions: [
        {
          question: "How do I enroll in a course?",
          answer: "To enroll in a course, browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Follow the checkout process to complete your enrollment. Once enrolled, you'll have immediate access to the course materials."
        },
        {
          question: "Can I access courses on mobile devices?",
          answer: "Yes! Our platform is fully responsive and works on all devices including smartphones, tablets, laptops, and desktop computers. You can learn on the go or from the comfort of your home."
        },
        {
          question: "How long do I have access to a course after purchasing?",
          answer: "Once you purchase a course, you'll have lifetime access to the course materials. You can revisit the lessons as often as you'd like, and you'll also receive updates if the course content is refreshed."
        },
        {
          question: "Are certificates provided upon course completion?",
          answer: "Yes, we provide digital certificates of completion for all of our courses. These certificates can be added to your LinkedIn profile or included in your resume to showcase your new skills."
        }
      ]
    },
    {
      title: "Account & Billing",
      questions: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click the 'Sign Up' button in the top right corner of the page. Fill in your details, verify your email address, and you're ready to go!"
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and in certain regions, bank transfers. All payments are securely processed."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "Yes, we offer a 30-day money-back guarantee for all course purchases. If you're not satisfied with a course, you can request a full refund within 30 days of purchase through our support team."
        },
        {
          question: "How do I update my billing information?",
          answer: "To update your billing information, log in to your account, go to your Account Settings, select the 'Billing' tab, and you can update your payment details there."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "What should I do if a video won't play?",
          answer: "If you're experiencing issues with video playback, first try refreshing the page. If that doesn't work, check your internet connection, try a different browser, or clear your browser cache. If you're still having issues, contact our support team."
        },
        {
          question: "How do I reset my password?",
          answer: "To reset your password, click on the 'Sign In' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you instructions on how to reset your password."
        },
        {
          question: "The site is loading slowly. What can I do?",
          answer: "If the site is loading slowly, try clearing your browser cache, using a different browser, or checking your internet connection. If the issue persists, it might be a temporary problem on our end, and we recommend trying again later."
        },
        {
          question: "How do I contact technical support?",
          answer: "You can contact our technical support team through the Contact Us page, by emailing support@eduplatform.com, or by using the live chat feature available on all pages in the bottom right corner."
        }
      ]
    },
    {
      title: "Tools & Resources",
      questions: [
        {
          question: "How does the Salary Calculator work?",
          answer: "Our Salary Calculator uses data from industry reports, government statistics, and our own research to provide accurate salary estimates based on your role, experience, skills, and location. The results represent average ranges for your specific profile."
        },
        {
          question: "Can I save my resume in the Resume Builder?",
          answer: "Yes, you can save your resume in our Resume Builder. Your progress is automatically saved as you work, and you can download your finished resume as a PDF when you're ready to apply for jobs."
        },
        {
          question: "How do I join the Referral Program?",
          answer: "To join our Referral Program, log in to your account and navigate to the Referral Program page. There, you'll receive a unique referral link that you can share with friends. You'll earn rewards for each person who signs up using your link."
        },
        {
          question: "What is the Hire Talent program?",
          answer: "The Hire Talent program connects employers with skilled professionals who have completed our courses. If you're an employer, you can post job opportunities and search for candidates. If you're a student, you can showcase your skills and connect with potential employers."
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <HelpCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Find answers to common questions about our platform, courses, and services
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-base font-medium text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              If you couldn't find the answer to your question, please don't hesitate to reach out to our support team.
            </p>
            <div className="flex justify-center">
              <Button asChild className="mr-4">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline">
                <a href="mailto:support@eduplatform.com">Email Support</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
