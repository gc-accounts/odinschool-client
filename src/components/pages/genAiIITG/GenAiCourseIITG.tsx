import React, { useEffect, useState, useCallback, useMemo } from "react";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import Section1 from "@/components/pages/genAiIITG/section1";
import WhyGenAI from "@/components/pages/genAiIITG/WhyGenAI";
import ProgHighlights from "@/components/pages/genAiIITG/ProgHighlights";
import JobSection from "@/components/pages/genAiIITG/JobsSection";
import CurriculumSection from "@/components/pages/genAiIITG/CurriculumSection";
import ProjectsSection from "@/components/pages/genAiIITG/ProjectsSection";
import WhoCanApply from "@/components/pages/genAiIITG/WhoCanApply";
import CareerServices from "@/components/pages/genAiIITG/CareerServices";
import Enroll from "@/components/pages/genAiIITG/Enroll";
import Certificate from "@/components/pages/genAiIITG/Certificate";
import Mentors from "@/components/pages/genAiIITG/Mentors";
import Fee from "@/components/pages/genAiIITG/Fee";
import Faq from "@/components/pages/genAiIITG/Faq";

const SuccessStories = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Section1 />

                <section className="bg-white">
                    <div className="w-full">
                        <img
                            alt="Indian Institute of Technology Guwahati"
                            src={
                                "https://20029733.fs1.hubspotusercontent-na1.net/hub/20029733/hubfs/iitG-building%20(1).webp?width=1500&height=500&name=iitG-building%20(1).webp"
                            }
                            className="w-full object-cover"
                        />
                    </div>
                </section>

                <WhyGenAI />
                <ProgHighlights />
                <JobSection />
                <CurriculumSection />
                <ProjectsSection />
                <WhoCanApply />
                <CareerServices />
                <Enroll />
                <Certificate />
                <Mentors />
                <Fee />
                <Faq />
            </main>
            <Footer />
        </>
    );
};

export default SuccessStories;
