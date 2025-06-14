import useEmblaCarousel from "embla-carousel-react";
import Markdown from "@/components/components/Markdown";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Button from "@/components/components/Button";
import Modal from "@/components/components/component-template/Modal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/components/ui/accordion";
import DynamicForm from "@/components/components/form/DynamicForm";
import brochureFormField from "@/components/data/brochureFormField";
import { useToast } from "@/components/hooks/use-toast";
import { courseSyllCarousel, curriculum  } from "@/components/pages/dataScienceCourse/data";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";

const CourseSyllabus = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const [brochureFormOpen, setBrochureFormOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const dots = useMemo(() => {
        if (!emblaApi) return [];
        return emblaApi.scrollSnapList().map((_, index) => index);
    }, [emblaApi, courseSyllCarousel]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    const { toast } = useToast();
    const handleBrochureFormSubmit = async (data: any) => {
        try {
            const accessTokenRes = await fetch("/api/auth/token-brochure", {
                method: "POST",
            });
            if (!accessTokenRes.ok) throw new Error("Token refresh failed");
            const { access_token } = await accessTokenRes.json();

            const brochureFormData = new FormData();
            brochureFormData.append("accessToken", access_token);
            brochureFormData.append("First Name", data.firstName);
            brochureFormData.append("Last Name", data.lastName);
            brochureFormData.append("Email", data.email);
            brochureFormData.append("Phone", data.phone);
            brochureFormData.append("Program", "Data Science Course");
            brochureFormData.append("Year of Graduation", data.year);
            brochureFormData.append("ga_client_id", "");
            brochureFormData.append("Business Unit", "Odinschool");
            brochureFormData.append("Source_Domain", "Brochure Form");

            const response = await fetch("/api/zoho/brochure", {
                method: "POST",
                body: brochureFormData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.error || "Failed to submit brochure form",
                );
            }

            toast({
                title: "Brochure requested successfully!",
                description: "Check your email shortly for the brochure.",
            });

            setBrochureFormOpen(false);
        } catch (err) {
            console.error("Error submitting brochure form:", err);
            toast({
                title: "Error!",
                description:
                    err instanceof Error
                        ? err.message
                        : "Submission failed. Try again later.",
                variant: "destructive",
            });
        }
    };


  return ( <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
                    <div className="container mx-auto">
                        <div className="mb-12 max-w-3xl">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                Data Science{" "}
                                <span className="text-primary-600">
                                    Course Syllabus
                                </span>
                            </h2>

                            <p className="text-md max-w-3xl text-gray-600">
                                An industry-aligned curriculum that will make
                                you productive from day one. The curriculum is
                                updated every month so you learn the skills that
                                recruiters love.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">
                                        Core Modules
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full"
                                    >
                                        {(curriculum || [])
                                            .slice(0, 7)
                                            .map(
                                                (
                                                    section: {
                                                        heading: string;
                                                        lessons: number;
                                                        description?: string;
                                                    },
                                                    index: number,
                                                ) => (
                                                    <AccordionItem
                                                        key={index}
                                                        value={`section-${index}`}
                                                        className="mb-4 rounded-lg border px-4 py-0"
                                                    >
                                                        <AccordionTrigger className="hover:no-underline">
                                                            <div className="flex w-full items-start">
                                                                <div className="text-left">
                                                                    <h3 className="text-lg font-medium">
                                                                        {
                                                                            section.heading
                                                                        }
                                                                    </h3>
                                                                    <p className="text-sm text-gray-500">
                                                                        {
                                                                            section.lessons
                                                                        }{" "}
                                                                        lessons
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="space-y-3 pl-4">
                                                                {section.description && (
                                                                    <div
                                                                        className="prose prose-sm"
                                                                        style={{}}
                                                                    >
                                                                        <Markdown
                                                                            markdown={
                                                                                section.description
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ),
                                            )}
                                    </Accordion>

                                    <br />
                                    <br />
                                    <div className="my-6 flex">
                                        <h2 className="text-2xl font-bold">
                                            Bonus Modules
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                        >
                                            {(curriculum || [])
                                                .slice(7, 10)
                                                .map(
                                                    (
                                                        section: {
                                                            heading: string;
                                                            lessons: number;
                                                            description?: string;
                                                        },
                                                        index: number,
                                                    ) => (
                                                        <AccordionItem
                                                            key={index}
                                                            value={`section-${index}`}
                                                            className="mb-4 rounded-lg border px-4 py-0"
                                                        >
                                                            <AccordionTrigger className="hover:no-underline">
                                                                <div className="flex w-full items-start">
                                                                    <div className="text-left">
                                                                        <h3 className="text-lg font-medium">
                                                                            {
                                                                                section.heading
                                                                            }
                                                                        </h3>
                                                                        <p className="text-sm text-gray-500">
                                                                            {
                                                                                section.lessons
                                                                            }{" "}
                                                                            lessons
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="space-y-3 pl-4">
                                                                    {section.description && (
                                                                        <div
                                                                            className="prose prose-sm"
                                                                            style={{}}
                                                                        >
                                                                            <Markdown
                                                                                markdown={
                                                                                    section.description
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ),
                                                )}
                                        </Accordion>
                                    </div>

                                    <br />
                                    <br />
                                    <div className="my-6 flex">
                                        <h2 className="text-2xl font-bold">
                                            Career Acceleration Skills
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                        >
                                            {(curriculum || [])
                                                .slice(10, 16)
                                                .map(
                                                    (
                                                        section: {
                                                            heading: string;
                                                            lessons: number;
                                                            description?: string;
                                                        },
                                                        index: number,
                                                    ) => (
                                                        <AccordionItem
                                                            key={index}
                                                            value={`section-${index}`}
                                                            className="mb-4 rounded-lg border px-4 py-0"
                                                        >
                                                            <AccordionTrigger className="hover:no-underline">
                                                                <div className="flex w-full items-start">
                                                                    <div className="text-left">
                                                                        <h3 className="text-lg font-medium">
                                                                            {
                                                                                section.heading
                                                                            }
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="space-y-3 pl-4">
                                                                    {section.description && (
                                                                        <div
                                                                            className="prose prose-sm"
                                                                            style={{}}
                                                                        >
                                                                            <Markdown
                                                                                markdown={
                                                                                    section.description
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ),
                                                )}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="mb-4 rounded-lg border bg-white p-4">
                                    <div className="border-primary-600 mx-4 mb-4 rounded-xl border px-4 py-2 text-center">
                                        Accelerate your career growth!
                                    </div>
                                    <h2 className="mb-3 font-display text-xl font-bold leading-tight md:text-xl">
                                        Prep well for your dream career
                                    </h2>

                                    <p className="text-md max-w-3xl text-gray-600">
                                        Attend comprehensive industry-readiness
                                        training along with your technical
                                        training.
                                    </p>

                                    <br />
                                    <br />

                                    <h2 className="mb-3 font-display text-lg font-bold leading-tight md:text-lg">
                                        Learn Data Science while you:
                                    </h2>

                                    <p className="text-md max-w-3xl text-gray-600">
                                        <ul className="mt-2 list-disc pl-5">
                                            <li>
                                                {" "}
                                                clarify doubts live
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                receive project presentation
                                                guidance and evaluation
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                interact with industry veterans
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                attend communication and
                                                aptitude training
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                take quizzes
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                build and optimize your resume
                                                and other professional profiles
                                                <br />
                                            </li>
                                            <li className="text-sm">
                                                learn workplace behavioral
                                                skills
                                                <br />
                                            </li>
                                        </ul>
                                    </p>
                                </div>

                                <div className="rounded-lg border bg-white p-4">
                                    <div className="border-primary-600 mx-4 mb-4 rounded-xl border px-4 py-2 text-center">
                                        Get support every step of your way
                                    </div>

                                    <div className="relative px-2 md:px-6">
                                        <div
                                            className="overflow-hidden"
                                            ref={emblaRef}
                                        >
                                            <div className="flex">
                                                {courseSyllCarousel.map((mentor) => (
                                                    <div
                                                        key={mentor.id}
                                                        className="h-full flex-[0_0_100%] px-2"
                                                    >
                                                        <div className="col-span-5 text-center md:col-span-3">
                                                            <p className="mt-3 font-bold leading-tight">
                                                                {mentor.text}
                                                            </p>
                                                            <Image
                                                                src={
                                                                    mentor.img
                                                                }
                                                                alt={
                                                                    mentor.text
                                                                }
                                                                className="mx-auto h-24 w-24 rounded-md object-cover"
                                                                loading="lazy"
                                                                width={500}
                                                                height={500}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-center gap-6">
                                            <div className="flex items-center gap-2">
                                                {dots.map((index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() =>
                                                            scrollTo(index)
                                                        }
                                                        className={`h-[0.4rem] w-[0.4rem]  rounded-full transition-all duration-300 md:h-2 md:w-2 ${
                                                            index ===
                                                            selectedIndex
                                                                ? "w-[1.5rem] bg-[#1a6cf7] shadow md:w-[28px]"
                                                                : "h-2 w-2 bg-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-row gap-4">
                            <Button
                                size="md"
                                variant="yellow"
                                icon={<ArrowRight className="ml-1" size={18} />}
                                iconPosition="right"
                                className="font-semibold"
                                onClick={() => setFormOpen(true)}
                            >
                                Request a callback
                            </Button>
<Modal
                                    header_text={"Enquire Now"}
                                    open={formOpen}
                                    onOpenChange={setFormOpen}
                                >
                                    <PrimaryForm
                                        buttonText="Request a Callback"
                                        slug={"data-science-elite-course"}
                                        isModal={true}
                                        sourceDomain="Course form"
                                    />
                                </Modal>
                            <Button
                                variant="outline"
                                onClick={() => setBrochureFormOpen(true)}
                            >
                                Download Brochure
                            </Button>
                            <Modal
                                header_text={"Download Brochure"}
                                open={brochureFormOpen}
                                onOpenChange={setBrochureFormOpen}
                            >
                                <DynamicForm
                                    buttonText={"Download Brochure"}
                                    fields={brochureFormField}
                                    initialValues={{
                                        program: "data-science-course",
                                        ga_client_id: "",
                                        business_unit: "Odinschool",
                                        Source_Domain: "Brochure Form",
                                    }}
                                    onSubmit={(data) => {
                                        handleBrochureFormSubmit(data);
                                    }}
                                />
                            </Modal>
                        </div>
                    </div>
                </section> );
}
 
export default CourseSyllabus;