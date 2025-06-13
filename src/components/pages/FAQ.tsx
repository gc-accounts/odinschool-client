
import React, { useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqCategories = [
    {
      "title": "Bootcamps",
      "questions": [
        {
          "question": "Who are the instructors for the Bootcamps?",
          "answer": "Our instructors include a diverse mix of experienced industry professionals, academic experts, startup founders, and domain mentors. They bring both real-world experience and teaching passion to help learners bridge the gap between theory and practical application. Most importantly, they are deeply invested in your career success."
        },
        {
          "question": "What projects will I be working on during the Bootcamps?",
          "answer": `You'll work on multiple hands-on projects that mirror real-world industry challenges in domains like Data Science, Power BI, Machine Learning, Python, SQL, and more. These projects are regularly updated to reflect the latest trends and tools used by top companies.
  <p class="font-semibold mt-4">Depending on your course, you may work on:</p>
  <ul class="list-disc list-inside mt-2 space-y-1 mb-6">
    <li>End-to-end data science workflows (data wrangling → modeling → deployment)</li>
    <li>Sales forecasting and customer churn analysis</li>
    <li>Power BI dashboards for business reporting</li>
    <li>NLP-based sentiment analysis</li>
    <li>Generative AI use cases like chatbot building or prompt engineering</li>
  </ul>
  <p>Each project is designed to build job-ready skills and strengthen your portfolio.</p>
 📌 For course-specific project lists, please visit the respective course page.`
        },
        {
          "question": "What can I expect at the end of the Courses?",
          "answer": "At the end of the Courses, you will be fully prepared to tackle real-world challenges in the respective domains and become an industry asset who is productive from day one. Using multiple projects, we will train you in the essential tools and technologies needed to get a job. We also offer placement assistance to help you bag a job."
        },
        {
          "question": "How are classes conducted?",
          "answer": "The classes are conducted online over the internet using our LMS. You will require access to the internet (Speed of 2 Mbps+ recommended) on a computer/laptop (preferred) to attend. Class size may vary depending on the specific cohort. However, we have teaching assistants available to interact in small groups and also reply to your queries. You will have access to the day-wise scheduled learning sessions on the LMS. In addition, we have set up support channels on the LMS where you can ask questions to the domain experts to resolve your doubts."
        },
        {
          "question": "How does mentorship work?",
          "answer": "At OdinSchool, you’ll be mentored by industry experts and successful alumni who guide you through projects, share career insights, and help you prepare for real-world roles. From live sessions to career advice — our mentorship is hands-on, relevant, and built to support your growth."
        },
        {
          "question": "What if I get stuck? What kind of support is available?",
          "answer": "You can reach out to us via our discussion forums anytime you get stuck. You can also clarify doubts right within your lectures from the instructors. Your learning will be over our online learning management system available to you anytime, anywhere."
        }
      ]
    },
    {
      "title": "Executive Programs",
      "questions": [
        {
          "question": "What executive program does OdinSchool offer?",
          "answer": `OdinSchool currently offers a specialized executive program in collaboration with E&ICT Academy, IIT Guwahati:
                <ul class="list-disc list-inside mt-2 space-y-1 mb-6">
    <li class="font-semibold">Certification Program in Applied Generative AI</li>
  </ul>
  This program is ideal for working professionals, entrepreneurs, recent graduates, and anyone looking to upskill in Gen AI.
 You don’t need a technical background — just curiosity and commitment.<br/>
The program covers practical tools, real-world use cases, and hands-on projects to help you apply Gen AI in your career or business.
`
        },
        {
          "question": "Do I get a certificate after completing these courses?",
          "answer": "Yes, upon successfully completing these executive programs, you will be awarded a certificate of accomplishment from the E&ICT Academy, IIT Guwahati."
        },
        {
          "question": "What are the eligibility criteria for these courses?",
          "answer": "Applicants who have a Bachelors degree with an aggregate of at least 50% marks are welcome to join. A background in Mathematics or Computer Science is preferable."
        }
      ]
    },
    {
      "title": "Applications",
      "questions": [
        {
          "question": "What are the selection criteria?",
          "answer": "You will be selected based on your application and your interaction with our Counselling Team."
        },
        {
          "question": "Do I need to submit any documents while enrolling?",
          "answer": "If you opt for the EMI option for payment, you are required to submit the necessary documents. Additionally, you might have to submit documents such as your experience certificate, graduation certification, etc., during the placement process."
        },
        {
          "question": "Do I need to pay anything to start my application?",
          "answer": "No. You need to pay the Tuition Fee only at the time of admission."
        }
      ]
    },
    {
      "title": "Payments",
      "questions": [
        {
          "question": "What payment options are available for me?",
          "answer": "You can either pay the tuition fee in one go or work with our authorized credit partners to avail flexible EMI facility."
        },
        {
          "question": "What payment modes do you support?",
          "answer": "We support cheques (subject to realization), IMPS, NEFT, UPI, Credit, and Debit card payments."
        }
      ]
    },
    {
      "title": "Placements",
      "questions": [
        {
          "question": "Do your bootcamps guarantee placements?",
          "answer": "Our many tie-ups with hiring partners enable us to arrange interviews for you. We will train you, help you prepare your resume and professional profiles, and coach you to perform well in interviews. But, ultimately, getting the placement is in your hands and your performance in the recruiting company’s interview process."
        },
        {
          "question": "How does the placement process work in Bootcamps?",
          "answer": "When our industry partners send us their hiring requirements, we match them with the profiles of our students. The profiles that best suit the requirements are sent to the hiring partners and further selection schedules are planned. All Bootcamps come with Career Services that include placement preparation workshops, industry mentorships, and interview preparation. Our Career Office will work closely with you in the process of preparing you for your career transition. We work with our recruiting partners to arrange interviews for you where you will need to perform and get selected. We will also prepare you to search for opportunities on your own."
        }
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <HelpCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-center max-w-2xl mx-auto text-slate-300">
              Find answers to common questions about our platform, courses, and services
            </p>
          </div>
        </section>

        <section className='px-[20px] py-[50px] md:px-[30px] md:py-[70px]'>
          <div className="container">
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
                          <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
                  <a href="/contact-us">Contact Us</a>
                </Button>
                <Button variant="outline">
                  <a href="mailto:hello@odinschool.com">Email Support</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default FAQ;
