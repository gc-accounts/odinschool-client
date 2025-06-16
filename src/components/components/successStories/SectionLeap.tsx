import SecondaryForm from "@/components/components/course-details/SecondaryForm";

const SectionLeap = (props) => {
  return (
    <section
      className={`${"bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"} relative`}
    >  <div className="bg-primary-50 py-32">
        <div className="container">
          <div className="mb-16 flex grid grid-cols-1 flex-col gap-8 lg:grid-cols-2">
            <div
                                /* ref={titleRef} */ className="mx-auto mb-12 max-w-2xl text-left md:mb-16"
            >
              <h2 className="heading-lg mb-4">
                Take a leap into your dream<br /> career with our{" "}
                <span className="text-primary-600">
                  industry-aligned courses.
                </span>
              </h2>
              <p className="body-md mx-auto max-w-2xl text-gray-600">
                Start your journey towards a rewarding
                career today!
              </p>
            </div>

            <SecondaryForm
              isModal={false}
              isCoupon={false}
              buttonText="Request a Callback"
              sourceDomain="Home Page"
            />
          </div>
        </div>
      </div></section>);
}

export default SectionLeap;