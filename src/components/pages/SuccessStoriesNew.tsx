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



const SuccessStoriesNew = () => {

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

            <VideoComp url={section1.url} />
          </div>
        </div>

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

export default SuccessStoriesNew;