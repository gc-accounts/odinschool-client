import React from "react";
import RequestCallback from "./custom-component/RequestCallback";
const opportunities = [
  {
    title: "Data Scientist",
    description:
      "Extract insights from structured and unstructured data using statistics, machine learning, and business domain knowledge to solve real-world problems.",
  },
  {
    title: "Machine Learning Engineer",
    description:
      "Develop and deploy ML models in production environments. Focuses on algorithm optimization, feature engineering, and model performance tuning.",
  },
  {
    title: "AI Research Scientist",
    description:
      "Drive innovation by exploring advanced AI techniques such as deep learning, NLP, and reinforcement learning, often in academic or R&D settings.",
  },
  {
    title: "Data Engineer",
    description:
      "Design and maintain scalable data infrastructure and pipelines. Work closely with data scientists to ensure clean, accessible, and reliable data.",
  },
  {
    title: "Business Analyst",
    description:
      "Use data to uncover trends, create dashboards, and support business decisions. Focuses on translating data into actionable business insights.",
  },
  {
    title: "Data Analyst",
    description:
      "Collect, clean, and interpret data to answer specific questions. Often uses tools like Excel, SQL, and visualization platforms like Power BI.",
  },
  {
    title: "BI Analyst (Power BI / Tableau)",
    description:
      "Specializes in data visualization and storytelling. Builds dashboards that help stakeholders monitor performance and make informed decisions.",
  },
  {
    title: "Product/Data Consultant",
    description:
      "Advises companies on data strategy, analytics setup, and implementation. Combines business sense with technical skills to deliver impact.",
  },
];

interface CareerOpportunitiesProps {
  slug: String,
  sectionClass?: String,
  data: { id: number, title: String, description: String }[]
}
//  data: { question: string; answer: string }[];

const CareerOpportunities = ({ slug, sectionClass, data }: CareerOpportunitiesProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'py-12 px-4 md:px-8'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Career Paths After This Course
      </h2>

      <div className=" container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data?.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <RequestCallback slug={slug} />
    </section>
  );
};

export default CareerOpportunities;
