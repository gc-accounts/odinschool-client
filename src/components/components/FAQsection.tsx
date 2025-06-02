import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { dsFaqsData } from '@/components/data/dsFaqsData';


interface FAQsectionProps{
 sectionClass?:String
}
const FAQsection = ({sectionClass}:FAQsectionProps) => {
    return (
        <section className={`${sectionClass ? sectionClass : 'my-32'}`}>
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
            {dsFaqsData.map((faq, index) => (
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