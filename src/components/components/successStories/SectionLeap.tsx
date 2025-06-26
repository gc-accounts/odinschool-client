import SecondaryForm from "@/components/components/course-details/SecondaryForm";


interface SectionLeapProps {
  sectionClass: string;
}
const SectionLeap = ({ sectionClass }: SectionLeapProps) => {
  return (
    <section className={sectionClass}>
      <div>
        <div className="container">
          <div className="flex grid grid-cols-1 flex-col gap-8 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl text-left"
            >
              <h2 className="heading-lg mb-4 font-display font-medium leading-tight">
                Take a leap into your dream<br /> career with our{" "}
                <span className="text-primary-600">
                  industry-aligned courses.
                </span>
              </h2>
              <p className="text-md mx-auto max-w-2xl text-gray-600">
                Start your journey towards a rewarding
                career today!
              </p>
            </div>
            <SecondaryForm
              isModal={false}
              isCoupon={false}
              buttonText="Request a Callback"
              sourceDomain="Success Stories page"
            />
          </div>
        </div>
      </div>
    </section>);
}

export default SectionLeap;