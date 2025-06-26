import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/components/ui/button';

interface FAQsectionProps{
 sectionClass?:String;
 data: { question: string; answer: string }[];
 fontFamily?: String
}
const FAQsection = ({ sectionClass, data, fontFamily }: FAQsectionProps) => {
    return (
        <section className={`${sectionClass ? sectionClass : 'my-32'}`}>
            <div className="container max-w-4xl">
                <div className="text-center max-w-3xl mx-auto mb-12">
                {/* <h2 className="heading-lg mb-4"> */}
                  <h2 className='text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2'>
                Frequently Asked <span className="text-primary-600">Questions</span>
                </h2>
                <p className="text-md text-gray-600 max-w-2xl mx-auto">
                 Find answers to common queries about our courses, accessibility, certificates, and more.
                </p>
            </div>
          <Accordion type="single" collapsible>
            {data.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                                          <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };

  export default FAQsection;