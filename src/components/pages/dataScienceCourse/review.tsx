import Image from "next/image";
import Button from "@/components/components/Button";
import Link from "next/link";
import JobsSection from "@/components/components/JobsSection1";
import { CircleCheck, ArrowRight, MoveRight } from "lucide-react";
import { Progress } from "@/components/components/ui/progress";

const Review = (props) => {
  return ( <section
                    className={"px-[20px] py-[50px] md:px-[30px] md:py-[70px]"}
                >
                    <div className="container">
                        <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
                            <div
                                /* ref={titleRef} */ className="mx-auto mb-12 max-w-3xl text-left md:mb-16"
                            >
                                <h2 className="heading-lg mb-4">
                                    Student{" "}
                                    <span className="text-primary-600">
                                        reviews
                                    </span>{" "}
                                    and industry{" "}
                                    <span className="text-primary-600">
                                        recognitions
                                    </span>
                                </h2>
                                <br />
                                <p className="body-md mx-auto max-w-2xl text-gray-600">
                                    A Certified Member of
                                </p>
                                <br />
                                <br />

                                <Link href="/reviews">
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
                                        className="py-3 font-semibold"
                                    >
                                        View More Reviews
                                    </Button>
                                </Link>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md md:mr-16">
                                <h3 className="mb-4 text-lg font-bold">
                                    Reviews & Recognition
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {/* <BarChart className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Lessons: </span> */}

                                            <Image
                                                src="https://strapi.odinschool.com/uploads/Google_20100x40_7ed0d4c3dc.webp"
                                                alt="google"
                                                className="w-20"
                                                loading="lazy"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        {/* <span>{course.curriculum?.reduce((a: number, b: { lessons: number }) => a + b.lessons, 0)}</span> */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-light">
                                                    4.6
                                                </span>
                                                <Image
                                                    src="https://strapi.odinschool.com/uploads/4_7_Rating_d1c77dfdf8.svg"
                                                    alt="rating-star"
                                                    className="w-12"
                                                    loading="lazy"
                                                    width={500}
                                                    height={500}
                                                />
                                                <span className="text-xs font-light">
                                                    1,484 Reviews
                                                </span>
                                            </div>
                                        </div>
                                        {/* <span>{course.curriculum.map((section) => section.lessons).reduce((a, b) => a + b, 0)}</span> */}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-primary-500 text-base font-semibold">
                                            Bootcamp
                                        </span>

                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-light">
                                                90.4
                                            </span>
                                            <Progress
                                                value={90.4}
                                                className="h-3 w-20"
                                            />
                                            <span className="text-xs font-light">
                                                5,031 Reviews
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> );
}
 
export default Review;