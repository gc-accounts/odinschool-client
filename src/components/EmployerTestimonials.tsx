import React from "react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Sales Manager",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swiggy_logo.svg/512px-Swiggy_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      '"I come from a non-technical background with a seven-year career gap and wanted a career change. OdinSchool’s mentors guided me with excellent teaching, helping me become a software engineer at Prolifics. Grateful for their support!"',
  },
  {
    name: "Alex Morgan",
    role: "Sales Manager",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swiggy_logo.svg/512px-Swiggy_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      '"I come from a non-technical background with a seven-year career gap and wanted a career change. OdinSchool’s mentors guided me with excellent teaching, helping me become a software engineer at Prolifics. Grateful for their support!"',
  },
  {
    name: "Alex Morgan",
    role: "Sales Manager",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swiggy_logo.svg/512px-Swiggy_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      '"I come from a non-technical background with a seven-year career gap and wanted a career change. OdinSchool’s mentors guided me with excellent teaching, helping me become a software engineer at Prolifics. Grateful for their support!"',
  },
  {
    name: "Alex Morgan",
    role: "Sales Manager",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swiggy_logo.svg/512px-Swiggy_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      '"I come from a non-technical background with a seven-year career gap and wanted a career change. OdinSchool’s mentors guided me with excellent teaching, helping me become a software engineer at Prolifics. Grateful for their support!"',
  },
  {
    name: "Alex Morgan",
    role: "Sales Manager",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swiggy_logo.svg/512px-Swiggy_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      '"I come from a non-technical background with a seven-year career gap and wanted a career change. OdinSchool’s mentors guided me with excellent teaching, helping me become a software engineer at Prolifics. Grateful for their support!"',
  },
];

const steps = [
  {
    number: 1,
    text: "Send Us Your Specific Hiring Requirements",
  },
  {
    number: 2,
    text: "Receive Shortlisted Profiles Within 24 Hours",
  },
  {
    number: 3,
    text: "Review YouInterview Our Graduates And Onboard Themr Eligibility",
  },
];

const EmployerTestimonials = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Employers Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Break away from the tradition of hunting for degrees. Onboard talents who have the right skill sets!
        </p>

        {/* Top Row: 2 Centered Cards */}
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          {Array(2).fill(testimonials[0]).map((item, index) => (
            <div key={index} className="w-full max-w-sm border rounded-xl p-6 shadow-sm bg-white">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <img src={item.companyLogo} alt="Company Logo" className="w-20 mb-4" />

              <p className="text-sm text-gray-600 italic leading-relaxed">
                {item.feedback}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3).fill(testimonials[0]).map((item, index) => (
            <div key={index} className="border rounded-xl p-6 shadow-sm bg-white">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <img src={item.companyLogo} alt="Company Logo" className="w-20 mb-4" />

              <p className="text-sm text-gray-600 italic leading-relaxed">
                {item.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    
      <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 border rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl mt-4 font-bold mb-8">
          Quick, free, easy hiring process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                {step.number}
              </div>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed text-center max-w-[200px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </section>
  );
};

export default EmployerTestimonials;
