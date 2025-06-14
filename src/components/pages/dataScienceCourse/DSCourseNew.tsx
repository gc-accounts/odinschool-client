import React, { useEffect, useState, useCallback, useMemo } from "react";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/components/ui/accordion";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import Certification from "@/components/components/Certification";
import OrganizationLogos from "@/components/components/OrganizationLogos1";
import StudentsTicker from "@/components/components/StudentsTicker";
import InstructorProfile from "@/components/components/InstructorProfileGrid";
import PlatformComparison from "@/components/components/PlatformComparison";
import ToolsSection from "@/components/components/ToolsSection";
import Testimonials from "@/components/components/Testimonials1";
import DsEliteFold from "@/components/components/DsEliteFold1";
import { arr } from "@/components/pages/successStories/data";
import Section1 from "@/components/pages/dataScienceCourse/section1";
import ProgramHighlights from "@/components/pages/dataScienceCourse/programHighlights";
import CourseOverview from "@/components/pages/dataScienceCourse/courseOverview";
import DSJobSection from "@/components/pages/dataScienceCourse/dsJobSection";
import CareerServices from "@/components/pages/dataScienceCourse/careerServices";
import JobDrives from "@/components/pages/dataScienceCourse/JobDrives";
import CourseSyllabus from "@/components/pages/dataScienceCourse/courseSyllabus";
import Projects from "@/components/pages/dataScienceCourse/projects";
import Review from "@/components/pages/dataScienceCourse/review";
import Fee from "@/components/pages/dataScienceCourse/Fee";
import Enroll from "@/components/pages/dataScienceCourse/enroll";
import Spotlight from "@/components/pages/dataScienceCourse/spotlight";
import { DsCertificateData, dsMentors, faQdata } from "@/components/pages/dataScienceCourse/data";


const SuccessStories = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Section1 />
                <DsEliteFold
                    sectionClass={
                        "bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                />
                <ProgramHighlights />
                <OrganizationLogos
                    sectionClass={"bg-primary-50  py-[50px]  md:py-[70px]"}
                />
                <CourseOverview />
                <Testimonials
                    sectionClass={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                />
                <DSJobSection />
                <CareerServices />
                <JobDrives />
                <CourseSyllabus />
                <ToolsSection
                    sectionClass={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                    propPath={"/data-science-course"}
                />
                <Projects />
                <PlatformComparison />
                <Review />
                <Fee />
                <Enroll />
                <Spotlight />
                <InstructorProfile
                    sectionClass={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                    slug={"Data Science Course"}
                    data={dsMentors}
                />

                <Certification
                    sectionClass="bg-white pt-4 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    data={DsCertificateData}
                />

                <section
                    className={"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"}
                >
                    <div className="container">
                        <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
                            <div
                                /* ref={titleRef} */ className="mx-auto mb-12 max-w-3xl text-left md:mb-16"
                            >
                                <h2 className="heading-lg mb-4">
                                    Take a leap into your dream career with our{" "}
                                    <span className="text-primary-600">
                                        industry-aligned courses.
                                    </span>
                                </h2>
                                <p className="body-md mx-auto max-w-2xl text-gray-600">
                                    Start your journey towards a rewarding
                                    career today!
                                </p>
                            </div>

                            <SecondaryForm
                                isModal={false}
                                isCoupon={false}
                                buttonText="Request a Callback"
                                sourceDomain="Home Page"
                            />
                        </div>
                    </div>
                </section>

                <StudentsTicker sectionClass="bg-primary-50 px-0 pb-[50px] md:px-0 md:pb-[70px]" data={arr.map(i => ({ name: i.name, student_image: i.img, current_company_image: i.img2 }))} />

                <section
                    className={
                        "bg-primary-50 px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]"
                    }
                >
                    <div className="container max-w-4xl">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            {/* <h2 className="heading-lg mb-4"> */}
                            <h2
                                className={`mb-4 text-3xl text-gray-900 ${"font-bold md:text-4xl"}`}
                            >
                                Data Science Training FAQs
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
                                        {faq.points && (
                                            <ul className="mt-2 list-disc pl-5">
                                                {faq.points.map(
                                                    (point, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm"
                                                        >
                                                            {point}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SuccessStories;