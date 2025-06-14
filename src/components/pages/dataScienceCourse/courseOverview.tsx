const CourseOverview = () => {
  return ( <section
                    className={`${"bg-white px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container">
                        <div className="max-w-3xlmb-12">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                Data Science{" "}
                                <span className="text-primary-600">
                                    Course Overview
                                </span>
                            </h2>
                        </div>
                        <p className="text-md mt-8 text-gray-600">
                            Join our live instructor-led Data Science Course and
                            become a skilled Data Science professional! Our
                            hands-on course equips learners with the most
                            in-demand skills, making it one of the best data
                            science courses in India. Benefit from our
                            industry-vetted data science syllabus, 10+ data
                            science projects, and mock interviews. Additionally,
                            learn workplace skills, soft skills, and interview
                            skills with our dedicated Career Services Team.
                            <br />
                            <br />
                            With our unique pedagogy and close ties with the
                            industry, you'll be fully prepared to break into the
                            Data Science industry! Get in touch with a career
                            counsellor to check your data science course
                            eligibility.
                        </p>
                    </div>
                </section>
   );
}
 
export default CourseOverview;