import Image from "next/image";
import {section1} from './data'
import SecondaryForm from "@/components/components/course-details/SecondaryForm";

const Section1 = () => {
  return ( <section
                    className={`${"bg-primary-50 px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-6">
                                <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                                    <span className="text-primary-600">
                                        Data Science Course
                                    </span>
                                </h2>

                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                    {section1.features.map(
                                        ({
                                            id,
                                            iconLabel,
                                            title,
                                            description,
                                        }) => (
                                            <div className="border-primary-600 bg-primary-50 justify-content flex flex-row items-center rounded-lg border">
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
                                                    <p className="text-sm text-gray-600">
                                                        {description}
                                                    </p>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                                <br />
                                <br />
                                <p className="body-md mx-auto max-w-2xl text-gray-600 flex flex-wrap">
                                    A Certified Member of {" "}<img width={"25px"} src={section1.member1} /> {" "}<img width={"25px"} src={section1.member2} />
                                </p>
                            </div>

                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
                                    <div className="flex flex-col items-center justify-center lg:pl-[60px]">
                                        <div
                                            className="rounded-lg lg:rounded-br-[0px] lg:rounded-tr-[0px] bg-white p-4 text-start shadow-xl"
                                            style={{
                                                background:
                                                    "linear-gradient(334.13deg, #986BEF 22.26%, #9388ED 59.21%, #8F9EEB 87.06%)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    height: "209px",
                                                    width: "240px",
                                                    marginTop: "-60px",
                                                }}
                                                src="https://20029733.fs1.hubspotusercontent-na1.net/hubfs/20029733/form-image-GenAI.webp"
                                                alt="student image"
                                                loading="eager"
                                            />

                                            <p className="mb-2 text-xl font-bold text-white">
                                                Upgrade your
                                                <br /> skill set & unlock new
                                                opportunities!
                                            </p>
                                            <hr className="my-4" />
                                            <p className="text-sm text-white">
                                                Upcoming Cohort
                                            </p>
                                            <p className="mb-2 text-xl font-bold text-white">
                                                28 Jun 2025
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <div className="border-primary-600 rounded-lg border-4">
                                            <SecondaryForm
                                                isModal={false}
                                                isCoupon={false}
                                                buttonText="Request a Callback"
                                                sourceDomain="Home Page"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> );
}
 
export default Section1;