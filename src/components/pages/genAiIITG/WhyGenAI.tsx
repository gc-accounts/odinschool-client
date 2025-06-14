import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { 
section2,

} from "./data";


const WhyGenAI = (props) => {
  return ( <section 
                    className={`bg-primary-50 ${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
  >
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 md:grid-cols-12">
                            {/* Left Text Block */}
                            <div className="col-span-1 md:col-span-6">
                                <h2 className="mb-4 font-display text-3xl leading-tight text-gray-900 md:text-5xl">
                                    Why learn Generative AI now?
                                </h2>

                                <p className="text-sm text-gray-600">
                                    Because Generative AI is the Future.
                                </p>
                                <br />
                                <p className="text-sm text-gray-600">
                                    One of the most cutting-edge innovations of
                                    recent times, Generative AI is projected to
                                    become a $1.3 trillion market in the next 8
                                    years, with a compound annual growth rate of
                                    almost 27%.
                                </p>
                                <br />
                                <p className="text-sm text-gray-600">
                                    Professionals skilled in Generative AI will
                                    have a lot of career growth opportunities in
                                    various industry domains. A recent global
                                    survey revealed that 57% of IT companies
                                    have identified their Generative AI use
                                    cases, out of which 41% are actively
                                    upskilling their employees to meet their
                                    demands!
                                </p>
                                <br />
                                <p className="text-sm text-gray-600">
                                    Become a sought after Generative AI engineer
                                    and let your career take a massive leap with
                                    E&ICT Academy's Certification Program in
                                    Applied Generative AI.
                                </p>
                            </div>

                            {/* Right Certificate Image */}
                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <Image
                                    src={section2.certificateImage}
                                    alt="OdinSchool Data Science Certificate"
                                    width={400}
                                    height={300}
                                    className="h-auto w-full max-w-xs md:max-w-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section> );
}
 
export default WhyGenAI;