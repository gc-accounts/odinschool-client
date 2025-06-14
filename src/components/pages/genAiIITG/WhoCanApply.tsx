import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { 
whoCanApply,
} from "./data";



const WhoCanApply = (props) => {
  return ( 
<section
                    className={`${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
 >
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                            {/* Left Text Block */}
                            <div className="col-span-1 md:col-span-6">
                                <h2 className="mb-4 font-display text-3xl leading-tight text-gray-900 md:text-5xl">
                                    Who can apply?
                                </h2>

                                <p className="text-sm text-gray-600">
                                    Join this Certification Program in Applied
                                    Generative AI if you fulfill the following
                                    pre-requisites:{" "}
                                </p>
                                <br />
                                <ul className="space-y-6">
                                    {whoCanApply.features.map(({ id, iconLabel, title }) => (
                                        <li
                                            key={id}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="bg-primary-50 flex-shrink-0 rounded-md p-2">
                                                <Image
                                                    src={iconLabel}
                                                    alt={`${title} icon`}
                                                    width={48}
                                                    height={48}
                                                    className="h-10 w-10 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {title}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Certificate Image */}
                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <Image
                                    src={whoCanApply.certificateImage}
                                    alt="OdinSchool Data Science Certificate"
                                    width={400}
                                    height={300}
                                    className="h-auto w-full max-w-xs md:max-w-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
   );
}
 
export default WhoCanApply;