import React, { useEffect, useState, useCallback, useMemo } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/components/ui/accordion";

import { 

faQdata,
} from "./data";


const Faq = (props) => {
  return ( <section
                    className={
                        "bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                >
                    <div className="container max-w-5xl">
                        <div className="mx-auto mb-12 text-center">
                            {/* <h2 className="heading-lg mb-4"> */}
                            <h2
                                className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                            >
                                Certification Program in Applied Generative AI{" "}
                                <span className="text-primary-600">FAQs</span>
                            </h2>
                        </div>
                        <Accordion type="single" collapsible>
                            {faQdata.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                >
                                    <AccordionTrigger>
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section> );
}
 
export default Faq;