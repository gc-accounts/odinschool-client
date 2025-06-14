import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Button from "@/components/components/Button";
import JobsSection from "@/components/components/JobsSection1";
import { 
dsJobsDrives,
} from "./data";


const JobSection =(props) => {
  return ( 
<section
                    className={`bg-primary-50 ${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >
                    <div className="container mx-auto">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                AI Engineer and More{" "}
                                <span className="text-primary-600">Jobs!</span>
                            </h2>
                            <p className="text-md max-w-3xl text-gray-600">
                                The continuous need for skilled professionals
                                shows no signs of slowing down in the Generative
                                AI field.  Upskill yourself to grab the best jobs!
                            </p>
                        </div>

                        <JobsSection
                            dsJobsDrives={dsJobsDrives}
                            sectionClass={
                                "bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                            }
                        />

                        <div className="mx-auto my-12 max-w-3xl text-center">
                            <Link
                                href="https://jobs.odinschool.com/"
                                target="_blank"
                            >
                                <Button
                                    size="md"
                                    variant="yellow"
                                    icon={
                                        <ArrowRight
                                            className="ml-1"
                                            size={18}
                                        />
                                    }
                                    iconPosition="right"
                                    className="py-3 font-semibold"
                                >
                                    Explore Jobs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
   );
}
 
export default JobSection;