import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
    Star,
    Award,
    TrendingUp,
    Loader2,
    HelpCircle,
    AwardIcon,
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

import Testimonials from "@/components/components/Testimonials";

const SuccessStories = () => {
    // static data
    const [state, setState] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSuccessMetrics();
            setState(data);
            setLoading(false);
        };
        fetchData();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {
        successStories: featuredStories,
        placementRate,
        studentSatisfaction,
        salaryIncrease,
        testimonials,
    } = useMemo(() => state ?? {}, [state]);

    const statistics = [
        {
            label: "Hiring Partners",
            value: salaryIncrease + "+",
            icon: <BsSuitcaseLg className="text-primary-600 h-8 w-8" />,
        },
        {
            label: "Bootcamp NPS",
            value: placementRate,
            icon: <Award className="text-primary-600 h-8 w-8" />,
        },
        {
            label: "Google reviews",
            value: studentSatisfaction + "/5",
            icon: <Star className="text-primary-600 h-8 w-8" />,
        },
    ];

    return (
        <>
            <Navbar />
            {loading ? (
                <div className="flex h-screen items-center justify-center">
                    <Loader2 className="text-primary-600 h-8 w-8 animate-spin" />
                </div>
            ) : (
                <main className="min-h-screen bg-gray-50">
                    <div className="from-primary-800 to-primary-700 bg-gradient-to-br py-12 text-white">
                        <div className="container mx-auto px-4">
                            <div className="mb-4 flex items-center justify-center md:mb-6">
                                <div className="rounded-full bg-white/10 p-3">
                                    <AwardIcon className="h-6 w-6 md:h-8 md:w-8" />
                                </div>
                            </div>

                            <h1 className="mb-2 text-center text-2xl font-bold md:mb-4 md:text-4xl">
                                Success Stories
                            </h1>
                            <p className="text-md mx-auto max-w-2xl text-center md:text-lg">
                                Real students. Real results. Discover how
                                OdinSchool has helped thousands of students
                                transform their careers.
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-12">
                        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {statistics.map((stat, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-white p-6 text-center shadow-md"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <div className="bg-primary-50 rounded-full p-4">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <h3 className="mb-2 text-3xl font-bold text-gray-900">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-600">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2 className="mb-12 text-center text-3xl font-bold">
                            Featured Success Stories
                        </h2>

                        {featuredStories.map((story, index) => (
                            <div
                                key={story.id}
                                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} mb-16 gap-8 overflow-hidden rounded-lg bg-white shadow-lg`}
                            >
                                <div className="from-primary-700 to-primary-800 flex flex-col justify-center bg-gradient-to-br p-12 lg:w-1/2">
                                    <Avatar className="mb-6 h-24 w-24 border-4 border-white">
                                        <AvatarImage
                                            src={story.image}
                                            alt={story.name}
                                        />
                                        <AvatarFallback>
                                            {story.name
                                                ?.split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <h3 className="mb-2 text-2xl font-bold text-white">
                                        {story.name}
                                    </h3>
                                    <p className="text-primary-100 mb-6">
                                        {story.role}
                                    </p>
                                    <p className="mb-8 text-lg text-white">
                                        "{story.story}"
                                    </p>

                                    {/* <div className="grid grid-cols-3 gap-4">
                  {story.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="text-xl font-bold text-white">{metric.value}</p>
                      <p className="text-sm text-primary-100">{metric.label}</p>
                    </div>
                  ))}
                </div> */}

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="rounded-lg bg-white/10 p-4 text-center">
                                            <p className="text-md font-bold text-white">
                                                Career transition
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center p-12 lg:w-1/2">
                                    <h4 className="text-primary-600 mb-2 text-xl font-bold">
                                        The Journey
                                    </h4>
                                    <h3 className="mb-6 text-3xl font-bold text-gray-900">
                                        {story.title}
                                    </h3>
                                    <p className="mb-6 text-gray-600">
                                        {story.course}
                                    </p>
                                    <div className="mb-8">
                                        <h5 className="mb-2 font-bold text-gray-900">
                                            Skills Acquired:
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {story?.tags?.map(
                                                (item: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm"
                                                    >
                                                        {item}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <Link href="/courses">
                                        <Button className="self-start">
                                            View Course Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <Testimonials />

                        <h2 className="mb-8 text-center text-3xl font-bold">
                            More Success Stories
                        </h2>
                        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {successStoriesData.map((testimonial) => (
                                <Card
                                    key={testimonial.id}
                                    className="max-h-[400px] overflow-y-scroll"
                                >
                                    <CardContent className="p-6">
                                        <div className="mb-4 flex items-center">
                                            <Avatar className="mr-4 h-12 w-12">
                                                <AvatarFallback>
                                                    {testimonial?.name
                                                        ?.split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h3 className="font-bold text-gray-900">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {testimonial.designation} at{" "}
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-sm text-gray-700">
                                            "{testimonial.description}"
                                        </p>
                                        <div className="flex text-amber-400">
                                            {Array.from(
                                                { length: 5 },
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-4 w-4 fill-current"
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="bg-primary-50 rounded-lg p-8 text-center">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                Ready to Write Your Success Story?
                            </h2>
                            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                                Join thousands of learners who’ve upskilled with
                                OdinSchool and transitioned into high-growth
                                tech roles. Explore your path today.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Button asChild size="lg">
                                    <a href="/courses">Browse Courses</a>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <a href="/contact-us">
                                        Speak to an Advisor
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            )}
            <Footer />
        </>
    );
};

export default SuccessStories;
