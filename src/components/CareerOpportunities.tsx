import React from "react";
import { Button } from "@/components/ui/button"; 
import RequestCallback from "./custom-component/RequestCallback";
const opportunities = [
  {
    title: "Data Scientist",
    description:
      "Your working style and behavior decide if you are a good cultural fit. Learn the right skills so you never feel out of place at work.",
  },
  {
    title: "Machine Learning Engineer",
    description:
      "You are halfway there if you have a great resume and an optimized online presence. Work with our experts to build your professional profiles.",
  },
  {
    title: "AI Research Scientist",
    description:
      "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions.",
  },
  {
    title: "Data Engineer",
    description:
      "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions.",
  },
];

interface CareerOpportunitiesProps{
  slug:String
}
const CareerOpportunities = ({slug}:CareerOpportunitiesProps) => {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Possible Career Opportunities
      </h2>

      <div className=" container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {opportunities.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <RequestCallback slug={slug}/>
    </section>
  );
};

export default CareerOpportunities;
