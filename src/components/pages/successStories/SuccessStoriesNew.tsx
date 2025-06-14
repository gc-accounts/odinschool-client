import React, { useCallback, useMemo, useState } from "react";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import { Button } from "@/components/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import CourseCard from "@/components/components/CourseCard";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import Modal from "@/components/components/component-template/Modal";
import StudentsTicker from "@/components/components/StudentsTicker";
import VideoComp from "@/components/pages/successStories/VideoComp";
import AlumniMeetNGreet from "@/components/pages/successStories/AlumniMeetNGreet";
import { arr } from "@/components/pages/successStories/data";
import OdinGrad from "@/components/pages/successStories/OdinGrad";
import Reviews from "@/components/pages/successStories/Review";
import SectionLeap from "@/components/pages/successStories/SectionLeap";
import Transforming from "@/components/pages/successStories/Transform";

const section1 = {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
}



const SuccessStories = () => {

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-12">
                    <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="m-auto">
                            <h1 className="heading-xl mb-6">
                                Celebrating{" "}
                                <span className="text-primary-600">
                                    Success Stories
                                </span>{" "}
                                that inspire!
                            </h1>
                        </div>

                        <VideoComp url={section1.url}/>
                    </div>
                </div>

                {/* <div className="bg-primary-50 inline-flex w-full flex-nowrap py-8">
                    <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
                        {arr.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <div className="border-primary-700 relative flex flex-col items-center rounded-lg border-2 border-t-0">
                                    <span className="border-primary-700 text-primary-500 w-full rounded-lg border-2 text-center text-sm">
                                        {item.name}
                                    </span>

                                    <div className="bg-primary-200 rounded-b-lg px-2">
                                        <img
                                            height={120}
                                            width={120}
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </div>
                                </div>

                                <div style={{ minHeight: "80px" }}>
                                    <img
                                        className="mt-2"
                                        width={80}
                                        src={item.img2}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul
                        className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
                        aria-hidden="true"
                    >
                        {arr.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <div className="border-primary-700 relative flex flex-col items-center rounded-lg border-2 border-t-0">
                                    <span className="border-primary-700 text-primary-500 w-full rounded-lg border-2 text-center text-sm">
                                        {item.name}
                                    </span>

                                    <div className="bg-primary-200 rounded-b-lg px-2">
                                        <img
                                            height={120}
                                            width={120}
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </div>
                                </div>

                                <div style={{ minHeight: "80px" }}>
                                    <img
                                        className="mt-2"
                                        width={80}
                                        src={item.img2}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div> */}

                <StudentsTicker sectionClass="bg-primary-50 px-0 pb-[50px] md:px-0 md:pb-[70px]" data={arr.map(i => ({ name: i.name, student_image: i.img, current_company_image: i.img2 }))} />

                <AlumniMeetNGreet />
                <OdinGrad />
                <Transforming />
                <Reviews />
                <SectionLeap />
            </main>

            <Footer />
        </>
    );
};

export default SuccessStories;