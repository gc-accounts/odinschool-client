import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/components/ui/card";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { 
projectData,
} from "./data";


const ProjectsSection = (props) => {
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [emblaRef1, emblaApi1] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots1 = useMemo(() => {
        if (!emblaApi1) return [];
        return emblaApi1.scrollSnapList().map((_, index) => index);
    }, [emblaApi1, projectData]);

    const scrollPrev1 = useCallback(() => emblaApi1?.scrollPrev(), [emblaApi1]);
    const scrollNext1 = useCallback(() => emblaApi1?.scrollNext(), [emblaApi1]);
    const scrollTo = useCallback(
        (index: number) => emblaApi1?.scrollTo(index),
        [emblaApi1],
    );

  return ( <section
                    className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                                <span className="text-primary-600">
                                    Real-world projects <br />
                                </span>{" "}
                                to reinforce your learning
                            </h2>
                        </div>

                        <div className="relative px-6">
                            {/* Navigation Arrows */}
                            <button
                                onClick={scrollPrev1}
                                className="hover:bg-primary-50 text-primary-600 absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={scrollNext1}
                                className="hover:bg-primary-50 text-primary-600 absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Carousel */}
                            <div className="overflow-hidden" ref={emblaRef1}>
                                <div className="flex min-w-0">
                                    {projectData?.map(
                                        (project: any, index: any) => {
                                            return (
                                                <div
                                                    key={project.id}
                                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                                                >
                                                    <Card className="mx-2 h-full overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
                                                        <CardContent className="p-0">
                                                            <div className="flex flex-col items-center">
                                                                <Image
                                                                    src={
                                                                        project.project_img
                                                                    }
                                                                    alt={
                                                                        project.title
                                                                    }
                                                                    className="h-full w-full object-cover transition-transform hover:scale-105"
                                                                    loading="lazy"
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </div>

                                                            <div className="h-30 overflow-hidden">
                                                                <CardHeader className="pb-2">
                                                                    <div className="flex items-center justify-between">
                                                                        <CardTitle className="text-md">
                                                                            {
                                                                                project.project_title
                                                                            }
                                                                        </CardTitle>
                                                                    </div>
                                                                </CardHeader>
                                                                <CardContent className="p-6 pt-3">
                                                                    <p className="text-sm text-gray-600">
                                                                        {
                                                                            project.project_description
                                                                        }
                                                                    </p>
                                                                </CardContent>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </div>

                            {/* Pagination Dots */}
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {dots1.map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                        className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-200 md:h-2 md:w-2 ${
                                            index === selectedIndex1
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
 
export default ProjectsSection;