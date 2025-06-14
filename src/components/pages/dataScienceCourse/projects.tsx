import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Button from "@/components/components/Button";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { projects } from "@/components/pages/dataScienceCourse/data";
import Modal from "@/components/components/component-template/Modal";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";

const Projects = (props) => {
    const [playVideo, setPlayVideo] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

  return ( <section
                    className={`${"bg-primary-50 px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container mx-auto">
                        {/* Header */}
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                20+ Hands-on{" "}
                                <span className="text-primary-600">
                                    Projects
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-6xl grid-cols-12 gap-6">
                        {/* First 3 small project cards */}
                        {projects.slice(0, 6).map((project) => (
                            <div
                                key={project.id}
                                className="col-span-12 flex flex-col justify-between rounded-xl bg-white p-4 text-black md:col-span-4"
                            >
                                <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-md mb-1 font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700">
                                    {project.description}
                                </p>
                            </div>
                        ))}

                        {/* AirBnB project video block */}
                        <div className="relative col-span-12 aspect-video overflow-hidden rounded-xl border border-white lg:col-span-6">
                            {playVideo ? (
                                <iframe
                                    className="h-full w-full rounded-xl"
                                    src={projects[6].videoUrl}
                                    title="Python Analysis on AirBnB"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="relative h-full w-full cursor-pointer"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <Image
                                        src={projects[6].videoThumb}
                                        alt="Python Analysis on AirBnB Video"
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                    <Image
                                        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                                        alt="Play Button"
                                        width={60}
                                        height={60}
                                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Large AirBnB project details */}
                        <div className="col-span-12 flex flex-col justify-between rounded-xl bg-white p-6 text-black lg:col-span-6">
                            <h3 className="mb-2 text-xl font-bold">
                                {projects[6].title}
                            </h3>
                            <p className="mb-4 text-sm text-gray-700">
                                {projects[6].description}
                            </p>

                            <div className="mb-4 flex flex-col justify-between gap-4 text-sm sm:flex-row">
                                <div>
                                    <p className="text-gray-500">
                                        Pre-requisite
                                    </p>
                                    <p>{projects[6].prerequisites}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        Tools Required
                                    </p>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                        {projects[6].tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-600"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-col justify-center gap-4 delay-200 sm:flex-row">
                                <Button
                                    size="md"
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
                                    {projects[6].ctaText}
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
                        </div>

                        {/* Large AirBnB project details */}
                        <div className="col-span-12 flex flex-col justify-between rounded-xl bg-white p-6 text-black lg:col-span-6">
                            <h3 className="mb-2 text-xl font-bold">
                                {projects[7].title}
                            </h3>
                            <p className="mb-4 text-sm text-gray-700">
                                {projects[7].description}
                            </p>

                            <div className="mb-4 flex flex-col justify-between gap-4 text-sm sm:flex-row">
                                <div>
                                    <p className="text-gray-500">
                                        Pre-requisite
                                    </p>
                                    <p>{projects[7].prerequisites}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        Tools Required
                                    </p>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                        {projects[7].tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-600"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-col justify-center gap-4 delay-200 sm:flex-row">
                                <Button
                                    size="md"
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
                                    {projects[7].ctaText}
                                </Button>
                            </div>
                        </div>

                        {/* AirBnB project video block */}
                        <div className="relative col-span-12 aspect-video overflow-hidden rounded-xl border border-white lg:col-span-6">
                            {playVideo ? (
                                <iframe
                                    className="h-full w-full rounded-xl"
                                    src={projects[6].videoUrl}
                                    title="Python Analysis on AirBnB"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="relative h-full w-full cursor-pointer"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <Image
                                        src={projects[7].videoThumb}
                                        alt="Python Analysis on AirBnB Video"
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                    <Image
                                        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                                        alt="Play Button"
                                        width={60}
                                        height={60}
                                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section> );
}
 
export default Projects;