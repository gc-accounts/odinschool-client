import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Star,
    Award,
    TrendingUp,
    Loader2,
    HelpCircle,
    AwardIcon,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Navbar from "@/components/components/Navbar";
import Footer from "@/components/components/Footer";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/components/ui/avatar";
import { Card, CardContent } from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import { getSuccessMetrics } from "@/components/utils/api/successMetrics";
import { successStoriesData } from "@/components/data/successStories";
import { BsSuitcaseLg } from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";

import Testimonials from "@/components/components/Testimonials";
import { PlayCircleIcon } from "lucide-react";
import CourseCard, { CourseProps } from "@/components/components/CourseCard";
import { Description } from "@radix-ui/react-toast";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import Modal from "@/components/components/component-template/Modal";
import StudentsTicker from "@/components/components/StudentsTicker";

export const arr = [
    {
        name: "Srinivasa",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/ThoughtClan%20100X40.webp?width=160&name=ThoughtClan%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Srinivasa%20Rao%20Pendela.webp?width=240&height=240&name=Srinivasa%20Rao%20Pendela.webp",
    },
    {
        name: "Megha",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Flipkart%20100X40.webp?width=160&name=Flipkart%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Megha%20Baliyan.webp?width=240&height=240&name=Megha%20Baliyan.webp",
    },
    {
        name: "Suraj",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/TransBnk%20100X40.webp?width=160&name=TransBnk%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Suraj%20Sahu.webp?width=240&height=240&name=Suraj%20Sahu.webp",
    },
    {
        name: "Saroj",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Flipkart%20100X40.webp?width=160&name=Flipkart%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Saroj%20Kumar%20Behera.webp?width=240&height=240&name=Saroj%20Kumar%20Behera.webp",
    },
    {
        name: "Pragyan",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Muthoot-Fincorp-One%20100X40.webp?width=160&name=Muthoot-Fincorp-One%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Pragyan%20Paramita%20Patra.webp?width=240&height=240&name=Pragyan%20Paramita%20Patra.webp",
    },
    {
        name: "Sourav",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/Indicold%20100X40.webp?width=160&name=Indicold%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Sourav%20Lala.webp?width=240&height=240&name=Sourav%20Lala.webp",
    },
    {
        name: "Joydeep",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Joydeep%20Barman.webp?width=240&height=240&name=Joydeep%20Barman.webp",
    },
    {
        name: "Hemaxi",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/Venanalytics-100X40-indv.webp?width=160&name=Venanalytics-100X40-indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Hemaxi%20Chaudhari.webp?width=240&height=240&name=Hemaxi%20Chaudhari.webp",
    },
    {
        name: "Shriyansh",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/xcrino%20100X40.webp?width=160&name=xcrino%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Shriyansh%20S%20Mishra.webp?width=240&height=240&name=Shriyansh%20S%20Mishra.webp",
    },
    {
        name: "Govardhan",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Kriya%20NextWealth%20Private%20Limited%20100X40.webp?width=160&name=Kriya%20NextWealth%20Private%20Limited%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Govardhan%20S.webp?width=240&height=240&name=Govardhan%20S.webp",
    },
    {
        name: "Rohit",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/Indicold%20100X40.webp?width=160&name=Indicold%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Rohit%20Raut.webp?width=240&height=240&name=Rohit%20Raut.webp",
    },
    {
        name: "Tanuj",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Axis_Max_Life_Insurance_100X40.webp?width=160&name=Axis_Max_Life_Insurance_100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Tanuj%20Chauhan.webp?width=240&height=240&name=Tanuj%20Chauhan.webp",
    },
    {
        name: "Saurabh",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/Indicold%20100X40.webp?width=160&name=Indicold%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Saurabh%20Pandey.webp?width=240&height=240&name=Saurabh%20Pandey.webp",
    },
    {
        name: "Srijeeta",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/JLR%20100X40.webp?width=160&name=JLR%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Srijeeta%20Mondal.webp?width=240&height=240&name=Srijeeta%20Mondal.webp",
    },
    {
        name: "Prasanta",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/Indicold%20100X40.webp?width=160&name=Indicold%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/OdinSchool_V3/Prasanta%20Gouda.webp?width=240&height=240&name=Prasanta%20Gouda.webp",
    },
    {
        name: "Sonia",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Sonia%20Sharma%20(1).webp?width=240&height=240&name=Sonia%20Sharma%20(1).webp",
    },
    {
        name: "Bhawana",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/Bhawana%20Singh.webp?width=240&height=240&name=Bhawana%20Singh.webp",
    },
    {
        name: "Hemant",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/Indicold%20100X40.webp?width=160&name=Indicold%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Hemant%20Rai.webp?width=240&height=240&name=Hemant%20Rai.webp",
    },
    {
        name: "Subham",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Flipkart%20100X40.webp?width=160&name=Flipkart%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Subham%20Singh.webp?width=240&height=240&name=Subham%20Singh.webp",
    },
    {
        name: "Sai",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Sai%20Prasad%20K%20S.webp?width=240&height=240&name=Sai%20Prasad%20K%20S.webp",
    },
    {
        name: "Siddannagari",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Siddannagari%20Naveen%20Kumar.webp?width=240&height=240&name=Siddannagari%20Naveen%20Kumar.webp",
    },
    {
        name: "Nikhil",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Nikhil%20Gupta.webp?width=240&height=240&name=Nikhil%20Gupta.webp",
    },
    {
        name: "Pallavi",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/1DigitalStackAI.webp?width=160&name=1DigitalStackAI.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Pallavi%20Bhan.webp?width=240&height=240&name=Pallavi%20Bhan.webp",
    },
    {
        name: "Shivani",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Flipkart%20100X40.webp?width=160&name=Flipkart%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Shivani%20Shrikant%20Mamidwar.webp?width=240&height=240&name=Shivani%20Shrikant%20Mamidwar.webp",
    },
    {
        name: "Megha",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Scootsy%20100X40.webp?width=160&name=Scootsy%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Megha%20Basu%20Mallick.webp?width=240&height=240&name=Megha%20Basu%20Mallick.webp",
    },
    {
        name: "Jyotiprakash",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Nuziveedu%20Seeds%20100X40.webp?width=160&name=Nuziveedu%20Seeds%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Jyotiprakash%20Dash.webp?width=240&height=240&name=Jyotiprakash%20Dash.webp",
    },
    {
        name: "Anmol",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Anmol%20Zade.webp?width=240&height=240&name=Anmol%20Zade.webp",
    },
    {
        name: "Akash",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Flipkart%20100X40.webp?width=160&name=Flipkart%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Akash%20Tiwari.webp?width=240&height=240&name=Akash%20Tiwari.webp",
    },
    {
        name: "Panchatapa",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/Panchatapa%20Purkayastha.webp?width=240&height=240&name=Panchatapa%20Purkayastha.webp",
    },
    {
        name: "Priyesh",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Priyesh%20Singh.webp?width=240&height=240&name=Priyesh%20Singh.webp",
    },
    {
        name: "Shubham",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/about-img/Shubham%20Nayak.webp?width=240&height=240&name=Shubham%20Nayak.webp",
    },
    {
        name: "Joshi",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Joshi%20Babu%20Lingala.webp?width=240&height=240&name=Joshi%20Babu%20Lingala.webp",
    },
    {
        name: "Uttkarsh",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/program/Uttkarsh%20Sharma.webp?width=240&height=240&name=Uttkarsh%20Sharma.webp",
    },
    {
        name: "Shalu",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/Shalu%20Chauhan-1.webp?width=240&height=240&name=Shalu%20Chauhan-1.webp",
    },
    {
        name: "Rajeev",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/program/Rajeev%20Chaturvedi.webp?width=240&height=240&name=Rajeev%20Chaturvedi.webp",
    },
    {
        name: "Sudharsan",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Sudharsan%20H.webp?width=240&height=240&name=Sudharsan%20H.webp",
    },
    {
        name: "Mahesh",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/program/Mahesh%20Mahaling%20Joteppagol.webp?width=240&height=240&name=Mahesh%20Mahaling%20Joteppagol.webp",
    },
    {
        name: "Kartikey",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Kartikey%20Sanwal.webp?width=240&height=240&name=Kartikey%20Sanwal.webp",
    },
    {
        name: "Anand",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/Flipkart%20100X40.webp?width=160&name=Flipkart%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Anand%20Shrivastav.webp?width=240&height=240&name=Anand%20Shrivastav.webp",
    },
    {
        name: "Pushkar",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Pushkar%20Jaiswal.webp?width=240&height=240&name=Pushkar%20Jaiswal.webp",
    },
    {
        name: "Greeshma Phani",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/xcrino%20100X40.webp?width=160&name=xcrino%20100X40.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Kommisetti%20Greeshma%20Phani%20Jyothi.webp?width=240&height=240&name=Kommisetti%20Greeshma%20Phani%20Jyothi.webp",
    },
    {
        name: "Sudhanshu",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Sudhanshu%20Madhwal.webp?width=240&height=240&name=Sudhanshu%20Madhwal.webp",
    },
    {
        name: "Nikhil",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/Nikhil%20Gupta.webp?width=240&height=240&name=Nikhil%20Gupta.webp",
    },
    {
        name: "Abhijit",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/program/Abhijit%20Dahatonde.webp?width=240&height=240&name=Abhijit%20Dahatonde.webp",
    },
    {
        name: "Sai",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/program/Udayagiri%20Uday%20Venkata%20Sai%20Kumar.webp?width=240&height=240&name=Udayagiri%20Uday%20Venkata%20Sai%20Kumar.webp",
    },
    {
        name: "Ankita",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/program/Ankita%20Bajpai.webp?width=240&height=240&name=Ankita%20Bajpai.webp",
    },
    {
        name: "Deepti",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/about-img/Deepti%20Gusain.webp?width=240&height=240&name=Deepti%20Gusain.webp",
    },
    {
        name: "Indu",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Indu%20J%20A.webp?width=240&height=240&name=Indu%20J%20A.webp",
    },
    {
        name: "Firdose",
        img2: "",
        img: "https://college.odinschool.com/hs-fs/hubfs/Firdose%20Syed.webp?width=240&height=240&name=Firdose%20Syed.webp",
    },
    {
        name: "Shashi",
        img2: "https://college.odinschool.com/hs-fs/hubfs/OS_Company_Logo/100_X_40/swiggy_100x40_indv.webp?width=160&name=swiggy_100x40_indv.webp",
        img: "https://college.odinschool.com/hs-fs/hubfs/Shashi.webp?width=240&height=240&name=Shashi.webp",
    },
];
const data = [{
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              },{
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }]

const courses: any[] = [
    {
        id: "1",
        title: "Can a dietician switch to Data Science? Nidhi Kulkarni shows it's possible.",
        description:
            "  From confusing Python, the programming language, with the reptile giant, to landing a job at Prolifcs, a leader in digital transformation, data, analytics, and DevOps, Nidhi's career trajectory has been exceptional. Read her illustrious career transformation story here.   ",
        url_slug:
            "/blog/this-is-how-nidhi-kulkarni-a-dietician-became-a-data-science-professional",
    },
    {
        id: "2",
        title: "A great comeback after an 11-year career gap - Naga Lakshmi's journey to PepsiCo.",
        description:
            "  Naga Lakshmi had an 11-year career gap when she discovered the demand for Data Science professionals in India. With just 7 months of experience as a Junior Software Engineer, this mother of two became a Senior Analyst at PepsiCo! Read her inspiring story here.  ",
        url_slug:
            "/blog/naga-lakshmis-journey-to-pepsico-the-data-science-career-relaunch-story-you-need-to-read",
    },
    {
        id: "3",
        title: "A full-time mother's career relaunch after 6 years - Visweswari's success story",
        description:
            '  "As a full-time mother, it didn\'t occur to me that I could have a sense of purpose outside my household. Though it was fulfilling to nurture my child and see him grow up, I did not work for 6 years." Read her story to find out how she relaunched her career after a 6-year break.  ',
        url_slug:
            "/blog/visweswaris-success-journey-how-this-full-time-mother-relaunched-her-career",
    },
];

const SuccessStories = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots = useMemo(() => {
        if (!emblaApi) return [];
        return emblaApi.scrollSnapList().map((_, index) => index);
    }, [emblaApi, data]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

 
    const VideoComp = ({url}) => {
  const [playVideo, setPlayVideo] = useState(false);
        return (
        <div className="rounded-xl overflow-hidden relative aspect-video border border-white">
                {playVideo ? (
                    <iframe
                    className="w-full h-full rounded-xl"
                    src={url}
                    title="Python Analysis on AirBnB"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    />
                ) : (
                    <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setPlayVideo(true)}
                    >
                    <Image
                        src={"https://strapi.odinschool.com/uploads/Python_Analysis_on_Air_Bn_B_20_1_4183a90b2f.webp"}
                        alt="Python Analysis on AirBnB Video"
                        fill
                        className="rounded-xl object-cover"
                    />
                    <Image
                        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                        alt="Play Button"
                        width={60}
                        height={60}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    />
                    </div>
                )}
            </div>
        );
    };
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

                        <VideoComp
                            url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
                        />
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
                <StudentsTicker sectionClass="bg-primary-50 px-0 pb-[50px] md:px-0 md:pb-[70px]" />

                <div className="container mx-auto px-4 py-12">
                    <div className="w-full text-center">
                        <h1 className="heading-xl mb-6">
                            <span className="text-primary-600">
                                Alumni Meet & Greet
                            </span>{" "}
                        </h1>
                    </div>
                    <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
                        <VideoComp
                            url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
                        />

                        <p>
                            A unique opportunity to bring together the next
                            generation of skilled professionals and our
                            successful Alumni, OdinSchool's Alumni Meet & Greet
                            sessions are conducted to foster meaningful
                            connections.
                            <br />
                            <br />
                            Alumni share their experiences, journeys, setbacks,
                            victories, and valuable insights with current
                            learners in these sessions. Whether it's discussing
                            industry trends, career challenges, or the
                            transformative power of OdinSchool, the Alumni Meet
                            and Greets provide a platform for learning,
                            mentorship, and inspiration!
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-12 py-12">
                    <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-start">
                            <h1 className="heading-lg mb-6">
                                OdinGrad of the Month
                            </h1>
                            <span className="text-primary-600 text-lg">
                                Priya Pandey
                            </span>
                            <span className="text-sm">Data Scientist</span>

                            <img
                                height={"100%"}
                                width={"100%"}
                                // src={item.img}
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
                                    OdinSchool empowered me with practical
                                    skills to transition seamlessly from
                                    academia to industry!
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
                                Once a lecturer with very limited exposure to
                                real-world challenges, Priya is a thriving Data
                                Scientist today, proving that the right skills
                                can make all the difference!
                            </p>
                        </div>

                        <p>
                            <img
                                height={60}
                                width={150}
                                // src={item.img}
                            />
                        </p>
                    </div>

                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col items-center py-12">
                            <h1 className="heading-lg mb-6">
                                OdinGrads tell their{" "}
                                <span className="text-primary-600">
                                    Career Success Stories
                                </span>
                            </h1>
                        </div>

<div className="relative px-2 md:px-6">


          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.map((mentor) => (
                <div key={mentor.id} className="flex-[0_0_100%] px-2 h-full">
                                          <VideoComp
                            url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
                        />


                </div>
              ))}
            </div>
          </div>

          {/* Navigation + Dots */}
          <div className="flex items-center justify-center mt-6 gap-6">
            {/* Prev Arrow */}
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-ful flex items-center justify-center transition bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {dots.map((index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`md:w-2 md:h-2  w-[0.4rem] h-[0.4rem] transition-all duration-300 rounded-full ${index === selectedIndex
                    ? 'bg-[#1a6cf7] md:w-[28px] w-[1.5rem] shadow'
                    : 'bg-gray-300 w-2 h-2'
                    }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-ful flex items-center justify-center transition bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>


        </div>
                        <div></div>
                    </div>

                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col items-center py-12">
                            <h1 className="heading-lg mb-6">
                                Where are OdinGrads now?
                            </h1>
                        </div>

                        <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-3">
                            {arr.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-primary-400 relative mb-8 flex flex-col items-center justify-center rounded-lg border-2 p-4"
                                >
                                    <div className="border-primary-400 absolute top-[-15px] rounded-lg border-2 bg-white px-4 text-center">
                                        Career Upgrade
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
                                                        src={item.img2}
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
                                            <span className="text-sm">
                                                Analyst
                                            </span>

                                            <span className="text-sm font-bold">
                                                Data Analyst
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-primary-50 py-32">
                    <div className="container">
                        <div
                            /* ref={titleRef} */ className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
                        >
                            <h2 className="heading-lg mb-4">
                                <span className="text-primary-600">
                                    Transforming lives and careers{" "}
                                </span>
                                every day
                            </h2>
                            <p className="body-md mx-auto max-w-2xl text-gray-600">
                                Read the success tales of our students powering
                                ahead in their careers.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                            {courses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className="w-full max-w-sm sm:w-[48%] lg:w-[30%]"
                                >
                                    <CourseCard {...course} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-32">
                    <div className="container">
                        <div
                            /* ref={titleRef} */ className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center md:mb-16"
                        >
                            <h2 className="heading-lg mb-4">
                                Student reviews and industry recognitions
                            </h2>
                            <p className="body-md mx-auto max-w-2xl text-gray-600">
                                Don’t just take our word for it. Check out our
                                reviews and recognitions.
                            </p>

                            <div className="mx-auto grid grid-cols-1 justify-center gap-4 lg:grid-cols-2">
                                <div className="my-2">
                                    <div className="h-100 bg-primary-50 border-gray rounded border-2 px-6 py-2 text-center">
                                        <div className="flex flex-row text-center">
                                            <img
                                                src="https://www.odinschool.com/hubfs/OS_Company_Logo/100_X_40/Google%20100x40.webp"
                                                alt="Reviews"
                                                loading="lazy"
                                                width="100"
                                                height="40"
                                                className=""
                                            />
                                            <span className="text-sm">
                                                Reviews
                                            </span>
                                        </div>

                                        <div className="flex flex-row items-center px-3 py-2 text-center text-sm">
                                            <div className="font-bold">4.6</div>
                                            &nbsp;
                                            <div className="">
                                                <img
                                                    src="https://www.odinschool.com/hubfs/OdinSchool_V3/icons/4.7_Rating.svg"
                                                    alt="Reviews"
                                                    loading="lazy"
                                                    width="82"
                                                    height="18"
                                                    className="mr-1"
                                                />
                                            </div>
                                            <div className="text-xs">
                                                1,484 Reviews
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-2 flex">
                                    <div className="h-100 bg-primary-50 border-gray rounded border-2 px-6 py-2 text-center">
                                        <div className="flex items-center justify-center">
                                            <h4 className="text-primary-400 mr-2 font-bold">
                                                Bootcamp NPS
                                            </h4>
                                            <div className="">
                                                <a
                                                    type="button"
                                                    role="button"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="NPS (Net Promoter Score) is a customer satisfaction metric that measures the likelihood of customers recommending a company, product, or service to others."
                                                    data-original-title="Follow on Linkedin"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="#9868EF"
                                                        className="bi bi-info-circle"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        {" "}
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>{" "}
                                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>{" "}
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-2 flex items-center justify-center">
                                            <div className="mr-2 font-bold">
                                                90.4
                                            </div>
                                            <div className="mr-2 w-[50px]">
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar bg-success progress-bar-striped"
                                                        role="progressbar"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="text-xs">
                                                5031 Reviews
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-row flex-wrap items-center justify-center">
                                <div className="mb-md-0 mb-2 pe-2">
                                    A Certified Member of
                                </div>

                                <div className="mb-2 px-2">
                                    <a href="https://hysea.in/existing-members/">
                                        <img
                                            src="https://20029733.fs1.hubspotusercontent-na1.net/hub/20029733/hubfs/OdinSchool_V3/accreditations/hysea_rc.webp?width=118&amp;height=46&amp;name=hysea_rc.webp"
                                            alt="HYSEA"
                                            width="118"
                                            height="46"
                                            loading="lazy"
                                            sizes="(max-width: 118px) 100vw, 118px"
                                        />
                                    </a>
                                </div>
                                <div className="mb-md-0 mb-2 px-2">
                                    <img
                                        src="https://20029733.fs1.hubspotusercontent-na1.net/hub/20029733/hubfs/OdinSchool_V3/accreditations/shrm_rc.webp?width=118&amp;height=46&amp;name=shrm_rc.webp"
                                        alt="SHRM"
                                        width="118"
                                        height="46"
                                        loading="lazy"
                                        sizes="(max-width: 118px) 100vw, 118px"
                                    />
                                </div>
                            </div>

                            <p className="mt-8 text-xl font-bold">
                                Craft your very own success story with
                                OdinSchool's job-aligned courses.
                            </p>

                            <Modal
                                header_text={"Enquire Now"}
                                open={formOpen}
                                onOpenChange={setFormOpen}
                            >
                                <SecondaryForm
                                    isModal={true}
                                    isCoupon={false}
                                    buttonText="Request a Callback"
                                    sourceDomain="Home Page"
                                />
                            </Modal>
                            <Button
                                variant="yellow"
                                className="mt-6 flex items-center justify-center px-8"
                                onClick={() => setFormOpen(true)}
                            >
                                Request a Callback
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="bg-primary-50 py-32">
                    <div className="container">
                        <div className="mb-16 flex grid grid-cols-1 flex-col gap-8 lg:grid-cols-2">
                            <div
                                /* ref={titleRef} */ className="mx-auto mb-12 max-w-2xl text-left md:mb-16"
                            >
                                <h2 className="heading-lg mb-4">
                                    Take a leap into your dream<br/> career with our{" "}
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
                </div>
            </main>

            <Footer />
        </>
    );
};

export default SuccessStories;