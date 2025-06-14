import React, { useEffect, useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { mentorshipData } from "@/components/pages/dataScienceCourse/data";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/components/ui/card";
import Image from "next/image";
import {
    BriefcaseBusiness,
    Building2,
    ChevronLeft,
    ChevronRight,
    MessageCircleQuestion,
    SpeechIcon,
    UserRoundPen,
} from "lucide-react";

const Spotlight = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots = useMemo(() => {
        if (!emblaApi) return [];
        return emblaApi.scrollSnapList().map((_, index) => index);
    }, [emblaApi, mentorshipData]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );


  return ( <section
                    className={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                >
                    <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        {/* Left: Description */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                                Alumni Spotlight
                            </h2>
                        </div>

                        {/* Right: Carousel */}
                        <div className="relative px-2 md:px-6">
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex">
                                    {mentorshipData.map((mentor) => (
                                        <div
                                            key={mentor.id}
                                            className="h-full flex-[0_0_100%] px-2"
                                        >
                                            <Card className="flex h-full min-h-[280px] flex-col border border-blue-200">
                                                <CardContent className="grid flex-grow grid-cols-12 items-start gap-4 p-6">
                                                    {/* Left: Image + Name (col-span-4 on md+) */}
                                                    <div className="col-span-5 text-center md:col-span-3">
                                                        <Image
                                                            src={mentor.image}
                                                            alt={mentor.name}
                                                            className="mx-auto h-24 w-24 rounded-md object-cover"
                                                            loading="lazy"
                                                            width={500}
                                                            height={500}
                                                        />
                                                        <p className="text-primary-600 mt-3 font-bold leading-tight">
                                                            {
                                                                mentor.name.split(
                                                                    " ",
                                                                )[0]
                                                            }
                                                            <br />
                                                            {
                                                                mentor.name.split(
                                                                    " ",
                                                                )[1]
                                                            }
                                                        </p>
                                                    </div>

                                                    {/* Right: Designation + Logo + Story (col-span-8 on md+) */}
                                                    <div className="col-span-7 md:col-span-9">
                                                        <h3 className="text-md mb-2 font-bold text-gray-800">
                                                            {mentor.designation}
                                                        </h3>
                                                        {mentor.companyLogo && (
                                                            <Image
                                                                src={
                                                                    mentor.companyLogo
                                                                }
                                                                alt={
                                                                    mentor.companyLogo
                                                                }
                                                                className="w-30 mb-3 h-12 rounded-md border object-contain shadow-sm"
                                                                loading="lazy"
                                                                width={100}
                                                                height={40}
                                                            />
                                                        )}
                                                        <p className="hidden text-sm text-gray-600 md:block">
                                                            {mentor.story}
                                                        </p>
                                                    </div>

                                                    <div className="col-span-12 md:hidden">
                                                        <p className="text-sm text-gray-600">
                                                            {mentor.story}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
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
                    </div>
                </section> );
}
 
export default Spotlight;