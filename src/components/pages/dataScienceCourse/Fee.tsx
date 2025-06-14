import React, { useEffect, useState, useCallback, useMemo } from "react";
import Button from "@/components/components/Button";
import Link from "next/link";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/components/ui/tabs";
import { feeData } from "@/components/pages/dataScienceCourse/data";
import Modal from "@/components/components/component-template/Modal";
import PrimaryForm from "@/components/components/course-details/PrimaryForm";
import Image from "next/image";

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
                                Data Science{" "}
                                <span className="text-primary-600">
                                    Course Fee
                                </span>
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
                                        <div className="grid grid-cols-12 items-center justify-center gap-6">
                                            <div className="border-primary-600 col-span-12 flex h-full flex-col items-center justify-center rounded-xl border-[0.2rem] p-6 shadow-sm md:col-span-8">
                                                <div className="flex grid grid-cols-1 flex-col items-center gap-8 md:grid-cols-2">
                                                    <div>
                                                        <h3 className="text-center text-lg font-bold text-green-600">
                                                            Course Fee
                                                        </h3>
                                                        <h3 className="py-2 text-center text-3xl font-bold text-green-600">
                                                            {selected.price}{" "}
                                                            <span className="text-base font-normal">
                                                                + GST
                                                            </span>
                                                        </h3>
                                                        <br />
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
                                                            className="my-2 w-full py-3 font-semibold"
                                                            onClick={() =>
                                                                setFormOpen(
                                                                    true,
                                                                )
                                                            }
                                                        >
                                                            Apply Now
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

                                                    <div>
                                                        <div className="border-l-1 border-gray-200">
                                                            <p className="mb-2 text-sm font-medium text-gray-500">
                                                                Early Bird Offer
                                                                Up To ₹10,000
                                                            </p>

                                                            <div className="mt-4 rounded-md bg-blue-100 px-3 py-2 text-center text-sm font-medium text-blue-900">
                                                                Offer only valid
                                                                for the first 30
                                                                seats!
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <Link href="/course-checkout/investment-banking-course">
                                                            <Button
                                                                size="md"
                                                                variant="outline"
                                                                icon={
                                                                    <ArrowRight
                                                                        className="ml-1"
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                }
                                                                iconPosition="right"
                                                                className="w-full py-3 font-semibold"
                                                            >
                                                                Reserve your
                                                                seat at ₹5000 +
                                                                GST
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-12 rounded-xl md:col-span-4">
                                                <div className="col-span-12 rounded-xl bg-green-100 p-6 md:col-span-4">
                                                    <p className="mb-4 whitespace-pre-line text-sm text-gray-800">
                                                        <b>
                                                            No cost EMIs start
                                                            at ₹7867 per month.
                                                        </b>{" "}
                                                        3, 6, 9, 12 months EMI
                                                        option available.
                                                    </p>
                                                </div>

                                                <div className="p-6">
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
                                                                        width={
                                                                            80
                                                                        }
                                                                        height={
                                                                            24
                                                                        }
                                                                        className="mx-auto block"
                                                                    />
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
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