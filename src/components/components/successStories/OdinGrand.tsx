import React, { useCallback, useMemo, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoComp from "@/components/components/successStories/VideoComp";
import {
  odinGradNow,
  odinGradOfTheMonth,
  odinGradsSuccessStories,
} from "@/components/data/success-stories-data/alumniMeetNGreet";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AlumniCardsData } from "@/components/data/success-stories-data/AlumniCardsData";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/components/ui/button";
import Link from "next/link";
interface OdinGrandProps {
  sectionClass?: string;
}
const OdinGrad = ({ sectionClass }: OdinGrandProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  const dots = useMemo(() => {
    if (!emblaApi) return [];
    return emblaApi.scrollSnapList().map((_, index) => index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect(); // set initial index
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);


  return (
    <div>
      {/* OdinGrad of the Month */}
      <div className={sectionClass}>
        <div className="grid grid-cols-1 flex-col items-center justify-between gap-8 md:grid-cols-2">
          <div className="col-span-1 flex flex-col justify-start">
            <h1 className="heading-lg mb-6 font-display leading-tight font-medium">OdinGrad of the Month</h1>
            <span className="text-primary-600 text-lg">Priya Pandey</span>
            <span className="text-sm">Data Scientist</span>

            <img src={odinGradOfTheMonth.url} alt="Priya Pandey" className="w-[200px] h-[80px]" />

            <div className="border-primary-900 relative mb-4 mt-3 rounded-lg border p-4" style={{ maxWidth: "500px" }}>
              {/* Quote bubble top */}
              <span className="absolute h-8 w-8 rounded bg-white p-2 md:top-[-20%] top-[-13%] ">
                {/* Quote SVG */}
                <FaQuoteLeft className="text-black" />
              </span>

              <p className="mb-0">OdinSchool empowered me with practical skills to transition seamlessly from academia to industry!</p>

              {/* Quote bubble bottom */}
              <span className="absolute h-8 w-8 rounded bg-white p-2 md:bottom-[-20%] bottom-[-13%]  right-[10%]" >
                <FaQuoteRight className="text-black" />

              </span>
            </div>

            <p className="text-sm">
              Once a lecturer with very limited exposure to real-world challenges, Priya is a thriving Data Scientist today,
              proving that the right skills can make all the difference!
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
      </div>

      {/* Carousel Section */}
      <div className="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
        <div className="flex flex-col items-center">
          <h1 className="heading-lg mb-6 font-display leading-tight font-medium">
            OdinGrads tell their{" "}
            <span className="text-primary-600">Career Success Stories</span>
          </h1>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {odinGradsSuccessStories.map((mentor) => (
                <div key={mentor.id} className="h-full lg:flex-[0_0_33.333333333%] md:flex-[0_0_50%] flex-[0_0_100%]  px-2">
                  <div className="shadow">
                  <VideoComp url={mentor.url} thumbnail={mentor.thumbnail} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button onClick={scrollPrev} className="rounded-full hover:bg-primary-50 text-primary-600 flex h-10 w-10 items-center justify-center border bg-white p-2 shadow transition">
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {dots.map((index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${index === selectedIndex
                    ? "w-[1.5rem] bg-[#1a6cf7] shadow md:w-[28px] h-[0.4rem]"
                    : "h-2 w-2 bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button onClick={scrollNext} className="rounded-full hover:bg-primary-50 text-primary-600 flex h-10 w-10 items-center justify-center border bg-white p-2 shadow transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Where are OdinGrads now */}
      <div className="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
        <div className="flex flex-col items-center">
          <h1 className="heading-lg mb-6 font-display leading-tight font-medium">Where are OdinGrads now?</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {AlumniCardsData.map((item, index) => (
            <div key={index} className="border-primary-400 relative mb-8 flex flex-col items-center justify-center rounded-lg border-2 p-4">
              <div className="border-primary-400 absolute top-[-15px] rounded-lg border-2 bg-white px-4 text-center">
                {item.status}
              </div>

              <div className="my-8 w-full">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <img className="bg-primary-100 rounded-lg" width={"100%"} src={item.img} alt={item.name} />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold  break-words text-wrap">{item.name} {item.last_name}</h2>
                    {item.logo && (
                      <img className="mt-2" width={80} src={item.logo} alt={`${item.name} company logo`} />
                    )}
                  </div>
                </div>

                <div className="flex w-full items-center justify-between py-2">
                  <span className="bg-primary-100 rounded-sm px-4 text-xs text-gray-600">From</span>
                  <div className="relative flex w-full items-center justify-center px-2">
                    <hr className="border-primary-400 w-full border-2 border-dotted" />
                    <div className="absolute">
                      <svg width="32" height="32" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.44 7.79..." fill="#68aaff" />
                        <path d="M30.46 7.79..." fill="#68aaff" />
                        <path d="M22.61 7.79..." fill="#68aaff" />
                      </svg>
                    </div>
                  </div>
                  <span className="bg-primary-100 rounded-sm px-4 text-xs text-gray-600">To</span>
                </div>

                <div className="flex w-full justify-between">
                  <span className="text-sm">{item.from}</span>
                  <span className="text-end text-sm font-bold">{item.to}</span>
                </div>
              </div>

                 {
                  item.student_linkedin_link.length > 0 &&              <div>
                <Link href={item.student_linkedin_link} passHref target="_blank">
                  <Button className="bg-blue-700 hover:bg-blue-600 w-24 h-10 rounded-full flex- items-center justify-center">
                   <FaLinkedin className="text-white w-10 h-10"/>
                   </Button>
                   </Link>
              </div>
                 }

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OdinGrad;
