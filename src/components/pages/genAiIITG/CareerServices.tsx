import React, { useEffect, useState, useCallback, useMemo } from "react";

import { 

CourseCarrerServiceData,

} from "./data";

const CareerServices = (props) => {
  return ( 
    <section
                    className={`${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}>

  <div className="container">
                    <div className="my-12 text-center">
                        <h2
                            className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                        >
                            <span className="text-primary-600">
                                Career Services
                            </span>{" "}
                            in a nutshell
                        </h2>
                        <p className="text-md mx-auto max-w-3xl text-gray-600">
                            Get comprehensive job readiness training till 18
                            months after the to be fully prepared for every
                            aspect of your career ahead.
                        </p>
                    </div>

                    <div className="mb-10 grid grid-cols-1 justify-center gap-8 md:grid-cols-3">
                        {CourseCarrerServiceData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${"bg-primary-50"} rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-md`}
                                >
                                    <div className="bg-primary-50 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow ">
                                        <item.icon className="text-primary-600 h-8 w-8" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                    </section>
                 );
}
 
export default CareerServices;