import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/components/ui/button';

interface FAQsectionProps{
 sectionClass?:String;
 data: { question: string; answer: string }[];
}
const FAQsection = ({ sectionClass, data }: FAQsectionProps) => {
    return (
        <section className={`${sectionClass ? sectionClass : 'my-32'}`}>
            <div className="container max-w-4xl">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="heading-lg mb-4">
                Frequently Asked <span className="text-primary-600">Questions</span>
                </h2>
                <p className="body-md text-gray-600 max-w-2xl mx-auto">
                 Find answers to common queries about our courses, accessibility, certificates, and more.
                </p>
            </div>
          <Accordion type="single" collapsible>
            {data.map((faq, index) => (
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