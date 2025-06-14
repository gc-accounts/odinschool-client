import React, { useEffect, useState, useCallback, useMemo } from "react";
import Button from "@/components/components/Button";
import { careerServices } from "@/components/pages/dataScienceCourse/data";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Modal from "@/components/components/component-template/Modal";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";

const  CareerServices = () => {
    const [formOpen, setFormOpen] = useState(false);

  return ( <section
                    className={`${"bg-white px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-6">
                                <h2 className="mb-4 font-display text-3xl leading-tight text-gray-900 md:text-5xl">
                                    <span className="text-primary-600">
                                        Career Services
                                    </span>
                                    in a nutshell
                                </h2>
                                <p className="mb-6 text-gray-600">
                                    Get ready for your dream job! Attend
                                    comprehensive industry readiness training
                                    with Career Services.{" "}
                                </p>

                                <ul className="space-y-6">
                                    {careerServices.features.map(
                                        ({
                                            id,
                                            iconLabel,
                                            title,
                                            description,
                                        }) => (
                                            <li
                                                key={id}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="bg-primary-50 flex-shrink-0 rounded-md p-2">
                                                    <Image
                                                        src={iconLabel}
                                                        alt={`${title} icon`}
                                                        width={48}
                                                        height={48}
                                                        className="h-10 w-10 object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        {title}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {description}
                                                    </p>
                                                </div>
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <br />
                                <br />
                                <Button
                                    size="lg"
                                    variant="yellow"
                                    icon={
                                        <ArrowRight
                                            className="ml-1"
                                            size={18}
                                        />
                                    }
                                    iconPosition="right"
                                    className="font-semibold"
                                    onClick={() => setFormOpen(true)}
                                >
                                    Request a Callback
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
                            </div>

                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="m-8 flex flex-col items-center justify-center">
                                        <div className="rounded-lg bg-white p-4 text-center shadow-xl">
<img src={careerServices.url1} />
                                            <p className="mb-2 text-xl font-bold">
                                                Learn workplace skills!
                                            </p>
                                            <p className="text-sm">
                                                Your working style and behavior
                                                <br /> decide if you are a good
                                                cultural fit.
                                                <br /> Learn the right skills so
                                                you never
                                                <br /> feel out of place at
                                                work.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="m-8 flex flex-col items-center justify-center gap-16">
                                        <div className="rounded-lg bg-white p-4 text-center shadow-xl">
<img src={careerServices.url2} />
                                            <p className="mb-2 text-xl font-bold">
                                                Sell your skills, and sell them
                                                well.
                                            </p>
                                            <p className="text-sm">
                                                You are halfway there if you
                                                have a great resume and an
                                                optimized online presence. Work
                                                with our experts to build your
                                                professional profiles.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-white p-4 text-center shadow-xl">
<img src={careerServices.url3} />
                                            <p className="mb-2 text-xl font-bold">
                                                Attend mock interviews!
                                            </p>
                                            <p className="text-sm">
                                                Get a grip on those
                                                pre-interview nerves. Test and
                                                practice your skills with mock
                                                interview sessions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> );
}
 
export default  CareerServices;