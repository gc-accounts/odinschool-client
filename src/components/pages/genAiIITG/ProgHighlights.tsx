import React, { useEffect, useState, useCallback, useMemo } from "react";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import { 
highlightsData,
} from "./data";



const ProgHighlights = (props) => {
  return ( <section
                    className={`${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >
                    <div className="container mx-auto">
                        <div className="mx-auto mb-10 max-w-4xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                {"Program Highlights"}
                            </h2>
                            <p className="">
                                {
                                    "Position yourself at the forefront of technological innovation with this Certification Program in Applied Generative AI."
                                }
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                            {highlightsData.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="bg-primary-50 grid grid-cols-12 items-center rounded-md p-4"
                                    >
                                        <div className="col-span-12 flex items-center md:col-span-1">
                                            {/* <Image src={data.icon} alt={data.title} className="w-18 h-auto block mx-auto" loading="lazy" width={50} height={50}  /> */}
                                            <div className="bg-primary-600 mx-auto mb-2 block flex h-10 w-10 items-center justify-center rounded-full md:mb-0">
                                                <MoveRight className="text-white" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 text-center md:col-span-10 md:text-start">
                                            <div className="md:ml-3">
                                                <h2 className="text-md mb-1 font-semibold md:text-lg">
                                                    {data}
                                                </h2>
                                                {/* <p className='md:text-sm text-xs'>{data.description}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section> );
}
 
export default ProgHighlights;