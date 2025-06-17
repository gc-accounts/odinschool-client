import PrimaryForm from "@/components/components/course-details/PrimaryForm";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import { Mail, MapPinPlusInside, Phone } from "lucide-react";



interface CitySecondaryFormProps{
  sectionClass:string;
  slug?:string;
}
const CitySecondaryForm = ({sectionClass, slug}:CitySecondaryFormProps) => {
  return (
    <section className={sectionClass}>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
        {/* Left Section - Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl  text-blue-600 font-display leading-tight font-medium" >Contact Details</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPinPlusInside className="w-10 h-10"/>
              <p className="text-lg text-gray-700">
                OdinSchool, GreyCampus Edutech Private Limited, Akiya Vihar, Plot 218, B Block, Kavuri Hills Phase - II, Hyderabad - 500033
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6"/>
              <p className="text-lg text-gray-700">+91 935 501 1033</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6"/>
              <p className="text-lg text-gray-700">hello@odinschool.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Callback Form */}
        <div>
          {/* <SecondaryForm isModal={false} isCoupon={false} buttonText="Request a Callback" sourceDomain={`${slug} City page`} /> */}
                      <PrimaryForm slug={'data-science-course'} isModal={false} buttonText={'Request a Callback'} sourceDomain={`${slug} City page`} />

        </div>
      </div>
    </section>
  );
};

export default CitySecondaryForm;
