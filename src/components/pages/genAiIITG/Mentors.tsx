import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/components/ui/avatar";
import {
    Card,
    CardContent,
} from "@/components/components/ui/card";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { 
mentorsData,
} from "./data";


const Mentors = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots = useMemo(() => {
        if (!emblaApi) return [];
        return emblaApi.scrollSnapList().map((_, index) => index);
    }, [emblaApi, mentorsData]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);


  return ( <section
                    className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                                Meet your{" "}
                                <span className="text-primary-600">
                                    Mentors
                                </span>
                            </h2>
                        </div>

                        <div className="relative px-6">
                            {/* Navigation Arrows */}
                            <button
                                onClick={scrollPrev}
                                className="hover:bg-primary-50 text-primary-600 absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="hover:bg-primary-50 text-primary-600 absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Carousel */}
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex min-w-0">
                                    {mentorsData.map((instructor) => {
                                        return (
                                            <div
                                                key={instructor.id}
                                                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                                            >
                                                <Card className="mx-2 h-full overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
                                                    <Link
                                                        href={`${instructor.linkedin}`}
                                                    >
                                                        <CardContent className="p-0">
                                                            <div className="bg-primary-600 h-7"></div>
                                                            <div className="p-6">
                                                                <div className="flex flex-col items-center">
                                                                    <Avatar className="mb-4 h-24 w-24">
                                                                        <AvatarImage
                                                                            src={
                                                                                instructor.photo
                                                                            }
                                                                            alt={
                                                                                instructor.name
                                                                            }
                                                                        />
                                                                        <AvatarFallback>
                                                                            {instructor.name.charAt(
                                                                                0,
                                                                            )}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                    <h3 className="mb-1 text-xl font-semibold">
                                                                        {
                                                                            instructor.name
                                                                        }
                                                                    </h3>
                                                                    <p className="mb-0 text-sm text-gray-500">
                                                                        {
                                                                            instructor.designation
                                                                        }
                                                                    </p>
                                                                    <p className="mb-4 text-center text-gray-600">
                                                                        {}
                                                                    </p>
                                                                </div>
                                                                <div className="mb-0 flex flex-col items-center space-y-3">
                                                                    <div
                                                                        className="mb-4 overflow-hidden rounded-md border-gray-200"
                                                                        title={
                                                                            instructor.currentCompany
                                                                        }
                                                                    >
                                                                        {
                                                                            instructor.currentCompany
                                                                        }
                                                                    </div>
                                                                    {instructor
                                                                        .prevCompanies
                                                                        .length >
                                                                        0 && (
                                                                        <div className="flex w-full justify-between border-t-2 pt-4">
                                                                            {instructor.prevCompanies.map(
                                                                                (
                                                                                    company,
                                                                                    index,
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className="overflow-hidden rounded-md border-gray-200"
                                                                                        title={
                                                                                            company
                                                                                        }
                                                                                    >
                                                                                        <Image
                                                                                            src={
                                                                                                company
                                                                                            }
                                                                                            alt={
                                                                                                company
                                                                                            }
                                                                                            className="h-full w-full object-contain"
                                                                                            loading="lazy"
                                                                                            width={
                                                                                                500
                                                                                            }
                                                                                            height={
                                                                                                500
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Link>
                                                </Card>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Pagination Dots */}
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {dots.map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                        className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-200 md:h-2 md:w-2 ${
                                            index === selectedIndex
                                                ? "bg-primary-600 w-[1.5rem] shadow md:w-[28px]"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section> );
}
 
export default Mentors;