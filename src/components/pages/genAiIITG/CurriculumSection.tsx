import React, { useEffect, useState, useCallback, useMemo } from "react";
import BrochureButton from "@/components/components/custom-component/BrochureButton";
import { CiCircleCheck } from "react-icons/ci";
import { 
curriculumData,
curriculumData1,
} from "./data";


const CurriculumSection = (props) => {
  return ( 
<section 
                    className={`${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
>
                    <div className="container">
                        <div className="my-12 text-center">
                            <h2
                                className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                            >
                                A curriculum designed for outcomes
                            </h2>
                            <p className="text-md mx-auto max-w-2xl text-gray-600">
                                Elevate your skills by learning a cutting-edge
                                Generative AI curriculum designed by E&ICT
                                Academy, IIT Guwahati.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {curriculumData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex h-full flex-col justify-between rounded-lg bg-white p-5 shadow-xl"
                                >
                                    <div className="h-[240px] overflow-auto">
                                        <h3 className="text-md mb-4 font-semibold text-black md:text-lg">
                                            {item.title}
                                        </h3>
                                        <ul className="md:text-md mb-3 space-y-2 text-sm text-black">
                                            {item.points.map((point, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex gap-1"
                                                >
                                                    <span className="mr-2">
                                                        <CiCircleCheck className="bg-primary-600 h-5 w-5 rounded-full text-white md:h-6 md:w-6" />
                                                    </span>{" "}
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                            {curriculumData1.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-primary-50 flex h-full flex-col justify-between rounded-lg p-5 shadow-xl"
                                >
                                    <div className="h-[200px] overflow-auto">
                                        <h3 className="text-md mb-4 font-semibold text-black md:text-lg">
                                            {item.title}
                                        </h3>
                                        <ul className="md:text-md mb-3 space-y-2 text-sm text-black">
                                            {item.points.map((point, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex gap-1"
                                                >
                                                    <span className="mr-2">
                                                        <CiCircleCheck className="bg-primary-600 h-5 w-5 rounded-full text-white md:h-6 md:w-6" />
                                                    </span>{" "}
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                            <div className="flex w-[250px] flex-col items-center justify-center overflow-auto rounded-lg bg-white p-5 shadow-xl">
                                <h3 className="text-md font-semibold text-black md:text-lg">
                                    Final Assessment
                                </h3>
                            </div>
                        </div>

                        <br />
                        <br />
                        <BrochureButton
                            slug={"data-science-elite-course"}
                            isPrimaryButton={true}
                            primaryButtonText={"Request a Callback"}
                            isBrochureButton={true}
                            parentClass="w-full text-center flex align-center gap-4 mx-auto justify-center"
                        />
                    </div>
                </section>
   );
}
 
export default CurriculumSection;