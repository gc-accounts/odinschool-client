import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import Button from "@/components/components/Button";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/components/ui/tabs";
import Modal from "@/components/components/component-template/Modal";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";
import { 
feeData,
} from "./data";


const Fee = (props) => {
    const [formOpen, setFormOpen] = useState(false);

  return ( <section
                    className={
                        "bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                    }
                >
                    <div className="container">
                        <div className="w-full">
                            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                                Get started now!
                            </h2>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2 text-sm font-medium text-gray-500">
                                Upcoming Cohort
                            </p>
                            <Tabs
                                defaultValue={feeData[0].id}
                                className="w-full"
                            >
                                <TabsList className="mb-6 rounded-md bg-white p-2">
                                    {feeData.map((item) => (
                                        <TabsTrigger
                                            key={item.id}
                                            value={item.id}
                                            className="data-[state=active]:bg-primary-600 border-primary-500 border px-5 py-2 text-sm data-[state=active]:text-white"
                                        >
                                            {item.cohortDate}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {feeData.map((selected) => (
                                    <TabsContent
                                        key={selected.id}
                                        value={selected.id}
                                    >
                                        <div className="grid grid-cols-12 items-center gap-6">
                                            {/* Left Block */}
                                            <div className="col-span-12 md:col-span-4">
                                                <h2 className="mb-4 font-display text-3xl leading-tight md:text-5xl">
                                                    Fee Structure
                                                </h2>
                                                <p className="mb-4 text-lg font-medium text-gray-700">
                                                    {selected.includes}
                                                </p>
                                                <hr className="border-gray mb-4" />

                                                <div className="space-y-3">
                                                    {selected.details.map(
                                                        (item, index) => (
                                                            <div
                                                                key={index}
                                                                className="grid grid-cols-12 items-center gap-2"
                                                            >
                                                                <span className="bg-primary-50 col-span-1 flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <CircleCheck className="bg-primary-600 mx-auto block h-5 w-5 rounded-full text-white" />
                                                                </span>
                                                                <div className="col-span-10">
                                                                    <p className="text-md ml-1 font-semibold leading-tight text-gray-800 ">
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </p>
                                                                    {/* <p className="ml-2 text-sm text-gray-500 leading-snug">{item.description}</p> */}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>

                                            {/* Price Card */}
                                            <div className="border-primary-600 col-span-12 flex h-full flex-col items-center justify-center rounded-xl border-[0.2rem] p-6 shadow-sm md:col-span-4">
                                                <h3 className="text-center text-3xl font-bold text-green-600">
                                                    {selected.price}{" "}
                                                    <span className="text-base font-normal">
                                                        + GST
                                                    </span>
                                                </h3>
                                                <div className="mt-4 rounded-md bg-blue-100 px-3 py-2 text-center text-sm font-medium text-blue-900">
                                                    {selected.offer}
                                                </div>

                                                <br />
                                                <Button
                                                    size="md"
                                                    variant="outline"
                                                    icon={
                                                        <ArrowRight
                                                            className="ml-1"
                                                            size={18}
                                                        />
                                                    }
                                                    iconPosition="right"
                                                    className="w-full py-3 font-semibold"
                                                    onClick={() =>
                                                        setFormOpen(true)
                                                    }
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
                                            </div>

                                            {/* EMI Note */}
                                            <div className="col-span-12 rounded-xl bg-green-100 p-6 md:col-span-4">
                                                <span className="mb-3 inline-block rounded-md bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                                                    {selected.emiNote}
                                                </span>
                                                <p className="mb-4 whitespace-pre-line text-sm text-gray-800">
                                                    {selected.emiDescription}
                                                </p>
                                                <p className="mb-2 text-sm font-medium text-gray-700">
                                                    Our Financing Partners:
                                                </p>
                                                <div className="grid max-w-xs grid-cols-2 gap-3 text-sm font-semibold">
                                                    {selected.partners.map(
                                                        (partner, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-3 rounded-md border border-green-300 p-2"
                                                            >
                                                                <Image
                                                                    src={
                                                                        partner.logo
                                                                    }
                                                                    alt={
                                                                        partner.name
                                                                    }
                                                                    width={80}
                                                                    height={24}
                                                                    className="mx-auto block"
                                                                />
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </section> );
}
 
export default Fee;