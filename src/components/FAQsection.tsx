import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Follow the checkout process to complete your enrollment."
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
  ];

  
const FAQsection = () => {
    return (
        <section className="my-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="heading-lg mb-4">
                Frequently Asked <span className="text-primary-600">Questions</span>
                </h2>
                <p className="body-md text-gray-600 max-w-2xl mx-auto">
                 Find answers to common queries about our courses, accessibility, certificates, and more.
                </p>
            </div>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };

  export default FAQsection;