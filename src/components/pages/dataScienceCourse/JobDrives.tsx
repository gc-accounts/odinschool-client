import JobsSection from "@/components/components/JobsSection1";
import { dsJobsDrives } from "@/components/pages/dataScienceCourse/data";

const JobDrives = (props) => {
  return ( <section
                    className={`${"bg-primary-50 py-16 md:py-24"} relative`}
                >
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                Multiple Job Drives Every Month
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-16">
                                {[
                                    "Interact directly with the HR through pre-placement talks",
                                    "Participate in assessments conducted by companies",
                                    "Get shortlisted based on your skills - not backgrounds",
                                    "Attend at least 3 placement drives every month",
                                ].map((i, ii) => (
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="bg-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                                            {ii + 1}
                                        </div>
                                        <p className="text-md max-w-[200px]">
                                            {i}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <JobsSection
carouselClassName={"flex-[0_0_100%] sm:flex-[0_0_100%] lg:flex-[0_0_50%] px-2"}
                                sectionClass={
                                    "bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                                }
dsJobsDrives={dsJobsDrives}
                            />
                        </div>
                    </div>
                </section> );
}
 
export default JobDrives;