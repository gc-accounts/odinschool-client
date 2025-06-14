import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Button from "@/components/components/Button";
import Modal from "@/components/components/component-template/Modal";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import { 
    section1,
} from "./data";


const Section1 = (props) => {
    const [formOpen, setFormOpen] = useState(false);
  return ( <section
                    className={`${"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
   >
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                            <div className="col-span-1 md:col-span-6">
                                <img src={section1.logo} alt="eictlogo" style={{height: "auto"}} />
                                <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                                    Certification Program in <br />
                                    <span className="text-primary-600">
                                        Applied Generative AI
                                    </span>
                                </h2>

                                <ul className="w-max-4xl space-y-6">
                                    {section1.features.map(
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
                                                    <p className="text-gray-900">
                                                        {title}
                                                    </p>
                                                </div>
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <br />
                                <br />

                                <div className="flex flex-col lg:flex-row gap-4">
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
                                        className="py-3 font-semibold"
                                        onClick={() => setFormOpen(true)}
                                    >
                                        Enquire Now
                                    </Button>
<Modal
                                                    header_text={"Enquire Now"}
                                                    open={formOpen}
                                                    onOpenChange={setFormOpen}
                                                >
                                                    <PrimaryForm
                                                        buttonText="Enquire Now"
                                                        slug={
                                                            "data-science-elite-course"
                                                        }
                                                        isModal={true}
                                                        sourceDomain="Course form"
                                                    />
                                                </Modal>
                                    <p className="flex items-center rounded border-2 border-black p-4 text-lg font-bold">
                                        <svg
                                            className="me-2"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <rect
                                                width="27"
                                                height="27"
                                                fill="url(#pattern0_7020_485)"
                                            ></rect>
                                            <defs>
                                                <pattern
                                                    id="pattern0_7020_485"
                                                    patternContentUnits="objectBoundingBox"
                                                    width="1"
                                                    height="1"
                                                >
                                                    <use
                                                        xlinkHref="#image0_7020_485"
                                                        transform="scale(0.0078125)"
                                                    ></use>
                                                </pattern>
                                                <image
                                                    id="image0_7020_485"
                                                    width="128"
                                                    height="128"
                                                    xlinkHref="data:image/png;base64,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"
                                                ></image>
                                            </defs>
                                        </svg>
                                        Limited Seats
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1 flex justify-center md:col-span-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
                                    <div className="flex flex-col items-center justify-center lg:pl-[60px]">
                                        <div
                                            className="rounded-lg lg:rounded-br-[0px] lg:rounded-tr-[0px] bg-white p-4 text-start shadow-xl"
                                            style={{
                                                background:
                                                    "linear-gradient(334.13deg, #986BEF 22.26%, #9388ED 59.21%, #8F9EEB 87.06%)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    height: "209px",
                                                    width: "240px",
                                                    marginTop: "-60px",
                                                }}
                                                src="https://20029733.fs1.hubspotusercontent-na1.net/hubfs/20029733/form-image-GenAI.webp"
                                                alt="student image"
                                                loading="eager"
                                            />

                                            <p className="mb-2 text-xl font-bold text-white">
                                                Upgrade your
                                                <br /> skill set & unlock new
                                                opportunities!
                                            </p>
                                            <hr className="my-4" />
                                            <p className="text-sm text-white">
                                                Upcoming Cohort
                                            </p>
                                            <p className="mb-2 text-xl font-bold text-white">
                                                28 Jun 2025
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <div className="border-primary-600 rounded-lg border-4">
                                            <SecondaryForm
                                                isModal={false}
                                                isCoupon={false}
                                                buttonText="Request a Callback"
                                                sourceDomain="Home Page"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> );
}
 
export default Section1;