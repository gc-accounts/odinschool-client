import CourseCard from "@/components/components/CourseCard";
import { courses } from "@/components/pages/successStories/data";

const Transforming = (props) => {
  return ( 
 <section
                    className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                > <div className="bg-primary-50 py-32">
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

                        <div className="flex flex-wrap justify-center gap-6">
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
                </div> </section>);
}
 
export default Transforming;