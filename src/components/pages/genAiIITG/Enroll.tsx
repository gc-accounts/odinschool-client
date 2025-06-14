const Enroll = (props) => {
  return (
<section
                    className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
                >

     <div className={"bg-primary-50"}>
                    <div className="container py-8">
                        <div className="animate-on-scroll my-16 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 ">
                            <div className="mb-10 text-center">
                                <h3 className="mb-4 text-2xl font-bold">
                                    How do I enroll in this program?
                                </h3>
                                <p className="mx-auto max-w-3xl text-gray-600">
                                    Our structured learning path takes you from
                                    beginner to certified professional
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                                {[
                                    { step: "1", title: "Apply" },
                                    {
                                        step: "2",
                                        title: "Data Talk to A Counsellor",
                                    },
                                    {
                                        step: "3",
                                        title: "Review Your Eligibility",
                                    },
                                    { step: "4", title: "Get Started" },
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="relative flex flex-col items-center"
                                    >
                                        <div className="bg-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                                            {step.step}
                                        </div>
                                        {index < 3 && (
                                            <div className="bg-primary-200 absolute left-[50%] top-6 hidden h-0.5 w-auto md:block"></div>
                                        )}
                                        <h4 className="mb-2 text-lg font-bold">
                                            {step.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                 );
}
 
export default Enroll;