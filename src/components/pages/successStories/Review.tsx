import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/components/ui/button";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import Modal from "@/components/components/component-template/Modal";

const Reviews = (props) => {
    const [formOpen, setFormOpen] = useState(false);

  return ( <section
                    className={`${"bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >

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

                            <div className="mx-auto grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
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

                                <div className="my-2 flex flex-row flex-wrap">
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

                                        <div className="mt-2 flex items-center justify-center w-full">
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
                </section>
 );
}
 
export default Reviews;