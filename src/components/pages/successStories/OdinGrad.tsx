import React, { useCallback, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    arr,
    odinGradNow,
    odinGradOfTheMonth,
    odinGradsSuccessStories,
} from "@/components/pages/successStories/data";
import VideoComp from "@/components/pages/successStories/VideoComp";

const OdinGrad = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots = useMemo(() => {
        if (!emblaApi) return [];
        return emblaApi.scrollSnapList().map((_, index) => index);
    }, [emblaApi, odinGradsSuccessStories]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    return (
        <div className="container mx-auto px-4 py-12 lg:px-12">
            <div className="mb-16 grid grid-cols-1 flex-col items-center gap-8 md:grid-cols-2">
                <div className="col-span-1 flex flex-col justify-start">
                    <h1 className="heading-lg mb-6">OdinGrad of the Month</h1>
                    <span className="text-primary-600 text-lg">
                        Priya Pandey
                    </span>
                    <span className="text-sm">Data Scientist</span>

                    <img
                        height={"100%"}
                        width={"100%"}
                        src={odinGradOfTheMonth.url}
                    />

                    <div
                        className="border-primary-900 relative mb-4 mt-3 rounded-lg border p-4"
                        style={{ maxWidth: "500px" }}
                    >
                        <span
                            className="absolute h-8 w-8 rounded bg-white p-2"
                            style={{ top: "-20%" }}
                        >
                            <span>
                                <svg
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    aria-hidden="true"
                                >
                                    <g>
                                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                        <p className="mb-0">
                            OdinSchool empowered me with practical skills to
                            transition seamlessly from academia to industry!
                        </p>
                        <span
                            className="absolute h-8 w-8 rounded bg-white p-2"
                            style={{ bottom: "-20%", right: "10%" }}
                        >
                            <span>
                                <svg
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    aria-hidden="true"
                                >
                                    <g id="quote-right2_layer">
                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </div>

                    <p className="text-sm">
                        Once a lecturer with very limited exposure to real-world
                        challenges, Priya is a thriving Data Scientist today,
                        proving that the right skills can make all the
                        difference!
                    </p>
                </div>

                <div className="col-span-1">
                    <Image
                        src={odinGradOfTheMonth.certificateImage}
                        alt="OdinSchool Data Science Certificate"
                        width={400}
                        height={300}
                        className="h-auto w-full max-w-xs md:max-w-lg"
                    />
                </div>
            </div>

            <div className="container mx-auto py-4">
                <div className="flex flex-col items-center py-12">
                    <h1 className="heading-lg mb-6">
                        OdinGrads tell their{" "}
                        <span className="text-primary-600">
                            Career Success Stories
                        </span>
                    </h1>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {odinGradsSuccessStories.map((mentor) => (
                                <div
                                    key={mentor.id}
                                    className="h-full flex-[0_0_100%] px-2"
                                >
                                    <VideoComp url={mentor.url} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation + Dots */}
                    <div className="mt-6 flex items-center justify-center gap-6">
                        {/* Prev Arrow */}
                        <button
                            onClick={scrollPrev}
                            className="rounded-ful hover:bg-primary-50 text-primary-600 flex h-10 w-10 items-center justify-center rounded-full border bg-white p-2 shadow transition"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {dots.map((index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-300 md:h-2 md:w-2 ${
                                        index === selectedIndex
                                            ? "w-[1.5rem] bg-[#1a6cf7] shadow md:w-[28px]"
                                            : "h-2 w-2 bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Next Arrow */}
                        <button
                            onClick={scrollNext}
                            className="rounded-ful hover:bg-primary-50 text-primary-600 flex h-10 w-10 items-center justify-center rounded-full border bg-white p-2 shadow transition"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="container md:px-8 mx-auto py-4">
                <div className="flex flex-col items-center py-12">
                    <h1 className="heading-lg mb-6">
                        Where are OdinGrads now?
                    </h1>
                </div>

                <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-3">
                    {odinGradNow.map((item, index) => (
                        <div
                            key={index}
                            className="border-primary-400 relative mb-8 flex flex-col items-center justify-center rounded-lg border-2 p-4"
                        >
                            <div className="border-primary-400 absolute top-[-15px] rounded-lg border-2 bg-white px-4 text-center">
                                {item.status}
                            </div>

                            <div className="my-8 w-full">
                                <div className="mb-4 flex grid grid-cols-2 flex-col gap-4 align-top">
                                    <img
                                        className="bg-primary-100 rounded-lg"
                                        width={"100%"}
                                        src={item.img}
                                        alt={item.name}
                                    />
                                    <div className="flex flex-col align-top">
                                        <h2 className="text-xl font-semibold">
                                            {item.name}
                                        </h2>

                                        {item.img2 && (
                                            <img
                                                className="mt-2"
                                                width={80}
                                                src={item.logo}
                                                alt={`${item.name} company logo`}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex w-full flex-row items-center justify-between py-2">
                                    <span className="bg-primary-100 rounded-sm px-4 text-xs text-gray-600">
                                        From
                                    </span>
                                    <div className="relative flex w-full items-center justify-center px-2">
                                        <hr
                                            className="border-primary-400 w-full border-2 border-dotted" /* style={{ borderTop: "dotted 2px" }} */
                                        />
                                        <div className="absolute">
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {" "}
                                                <path
                                                    d="M9.44238 7.79538C9.77572 7.98783 9.77572 8.46895 9.44238 8.6614L3.72968 11.9596C3.39635 12.1521 2.97968 11.9115 2.97968 11.5266L2.97968 4.93016C2.97968 4.54526 3.39635 4.3047 3.72968 4.49715L9.44238 7.79538Z"
                                                    fill="#68aaff"
                                                ></path>{" "}
                                                <path
                                                    d="M30.4658 7.79538C30.7992 7.98783 30.7992 8.46895 30.4658 8.6614L24.7531 11.9596C24.4198 12.1521 24.0031 11.9115 24.0031 11.5266L24.0031 4.93016C24.0031 4.54526 24.4198 4.3047 24.7531 4.49715L30.4658 7.79538Z"
                                                    fill="#68aaff"
                                                ></path>{" "}
                                                <path
                                                    d="M22.6182 7.794C22.9515 7.98645 22.9515 8.46758 22.6182 8.66003L11.848 14.8782C11.5146 15.0707 11.098 14.8301 11.098 14.4452L11.098 2.00883C11.098 1.62393 11.5146 1.38337 11.848 1.57582L22.6182 7.794Z"
                                                    fill="#68aaff"
                                                ></path>{" "}
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="bg-primary-100 rounded-sm px-4 text-xs text-gray-600">
                                        To
                                    </span>
                                </div>

                                <div className="flex w-full flex-row items-center justify-between">
                                    <span className="text-sm">{item.from}</span>

                                    <span className="text-end text-sm font-bold">
                                        {item.to}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OdinGrad;