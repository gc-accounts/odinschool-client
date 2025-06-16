'use client'
import React, { useCallback, useMemo, useState } from "react";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import { Button } from "@/components/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import CourseCard from "@/components/components/CourseCard";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import Modal from "@/components/components/component-template/Modal";
import StudentsTicker from "@/components/components/StudentsTicker";
import VideoComp from "@/components/components/successStories/VideoComp";
import AlumniMeetNGreet from "@/components/components/successStories/AlumniMeetNGreet";
// import { arr } from "@/components/pages/successStories/data";
import OdinGrad from "@/components/components/successStories/OdinGrand";
import Reviews from "@/components/components/successStories/Reviews";
import SectionLeap from "@/components/components/successStories/SectionLeap";
import Transforming from "@/components/components/successStories/Transform";
import { DM_Serif_Display } from "next/font/google";
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});
const section1 = {
  url: "https://strapi.odinschool.com/uploads/Odin_School_V3_Copy_01_1_cc9b86d834.mp4"
}



const SuccessStoriesNew = () => {

  return (
    <>
      <Navbar />
      {/* ${dmSerifDisplay.variable} */}
      <main className={`min-h-screen bg-gray-50 ${dmSerifDisplay.variable}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="m-auto">
              <h1 className="text-5xl mb-6 font-display leading-tight font-medium">
                Celebrating{" "}
                <span className="text-primary-600">
                  Success  <br />Stories
                </span>{" "}
                that inspire!
              </h1>
            </div>

            <VideoComp url={section1.url} thumbnail="https://strapi.odinschool.com/uploads/Naresh_babu_18_3215752714.webp" />
          </div>
        </div>

        <StudentsTicker sectionClass="bg-primary-50 px-0 pb-[50px] md:px-0 md:pb-[70px]"
        />

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

export default SuccessStoriesNew;