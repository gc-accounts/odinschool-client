'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';

const DsProjects = ({ sectionClass }: { sectionClass?: string }) => {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const [formOpen, setFormOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'COVID - 19 Prediction',
      description: 'Develop a predictive model that can accurately identify the likelihood of COVID-19 infection',
      image: 'https://strapi.odinschool.com/uploads/COVID_19_Prediction_6cc6a9e792.webp',
    },
    {
      id: 2,
      title: 'Credit Card Approval',
      description: 'Help banks find potential customers to give out credit cards to by building an ML model',
      image: 'https://strapi.odinschool.com/uploads/Credit_Card_Approval_e0351d05f9.webp',
    },
    {
      id: 3,
      title: 'Health Insurance Prediction',
      description: 'Build a predictive ML model to increase the accuracy of health insurance prediction',
      image: 'https://strapi.odinschool.com/uploads/Health_Insurance_Prediction_34f74cd5fc.webp',
    },
    {
      id: 4,
      title: 'Bank Term Deposit',
      description: 'Develop an ML model predicting subscriptions to a term deposit',
      image: 'https://strapi.odinschool.com/uploads/Bank_Term_Deposit_237f4159bb.webp',
    },
    {
      id: 5,
      title: 'Customer Churn Rate Prediction',
      description: 'Predict churn rates using data collection, preparation, analysis, and visualization',
      image: 'https://strapi.odinschool.com/uploads/Customer_Churn_Rate_Prediction_094f3beea9.webp',
    },
    {
      id: 6,
      title: 'California Housing Price Prediction',
      description: "Uncover California's housing market trends effortlessly with powerful Python libraries",
      image: 'https://strapi.odinschool.com/uploads/California_Housing_Price_Prediction_43bad2049c.webp',
    },
    {
      id: 7,
      title: 'Cinemalytics',
      description: 'Design a database system with views focusing on films released in 2006 and showcasing total revenue per film.',
      prerequisites: 'SQL',
      tools: ['MySQL Workbench'],
      ctaText: 'Download Project Files',
      videoThumb: 'https://strapi.odinschool.com/uploads/cinemalytics_1670a58504.webp',
      videoUrl: 'https://strapi.odinschool.com/uploads/Project_Cinemalytics_1_af21008f9d.mp4',
    },
    {
      id: 8,
      title: 'Python Analysis on AirBnB',
      description: 'This project explores the data to correct any quality issues, visualizes the data and identifies key insights and recommendations.',
      prerequisites: 'Python, Pandas, Matplotlib, Seaborn, Excel',
      tools: ['Python', 'Jupyter Notebook', 'Excel'],
      ctaText: 'Download Project Files',
      videoThumb: 'https://strapi.odinschool.com/uploads/Python_Analysis_on_Air_Bn_B_20_1_4183a90b2f_de74befe84.webp',
      videoUrl: 'https://strapi.odinschool.com/uploads/Project_Python_Analysis_on_Air_Bn_B_085eb7bd70.mp4',
    },
  ];

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-white">
            20+ Hands-on <span className="text-primary-600">Projects</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
          {projects.slice(0, 6).map((project) => (
            <div key={project.id} className="bg-white text-black rounded-xl p-4 col-span-12 md:col-span-4 flex flex-col justify-between">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-md font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          ))}

          {/* Cinemalytics Text Block */}
          <div className="col-span-12 lg:col-span-6 bg-white text-black p-6 rounded-xl flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2">{projects[6].title}</h3>
            <p className="text-sm text-gray-700 mb-4">{projects[6].description}</p>

            <div className="flex flex-col sm:flex-row justify-between text-sm mb-4 gap-4">
              <div>
                <p className="text-gray-500">Pre-requisite</p>
                <p>{projects[6].prerequisites}</p>
              </div>
              <div>
                <p className="text-gray-500">Tools Required</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {projects[6].tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs rounded-full border border-blue-500 text-blue-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </div>

          {/* Cinemalytics Video */}
          <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden relative aspect-video border border-white">
  {activeVideoId === projects[6].id ? (
    <video
      className="w-full h-full object-cover rounded-xl"
      src={projects[6].videoUrl}
      controls
      autoPlay
      playsInline
      poster={projects[6].videoThumb}
    />
  ) : (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={() => setActiveVideoId(projects[6].id)}
    >
      <Image src={projects[6].videoThumb} alt="Video thumbnail" fill className="rounded-xl object-cover" />
      <Image
        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
        alt="Play Button"
        width={60}
        height={60}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  )}
</div>


          {/* AirBnB Text Block */}
          <div className="col-span-12 lg:col-span-6 bg-white text-black p-6 rounded-xl flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2">{projects[7].title}</h3>
            <p className="text-sm text-gray-700 mb-4">{projects[7].description}</p>

            <div className="flex flex-col sm:flex-row justify-between text-sm mb-4 gap-4">
              <div>
                <p className="text-gray-500">Pre-requisite</p>
                <p>{projects[7].prerequisites}</p>
              </div>
              <div>
                <p className="text-gray-500">Tools Required</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {projects[7].tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs rounded-full border border-blue-500 text-blue-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
              <Button
                size="md"
                variant="yellow"
                icon={<ArrowRight className="ml-1" size={18} />}
                iconPosition="right"
                className="font-semibold"
                onClick={() => setFormOpen(true)}
              >
                {projects[7].ctaText}
              </Button>

              <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                <PrimaryForm buttonText="Request a Callback" slug="data-science-elite-course" isModal={true} sourceDomain="Course form" />
              </Modal>
            </div> */}
            
          </div>

          {/* AirBnB Video */}
          <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden relative aspect-video border border-white">
  {activeVideoId === projects[7].id ? (
    <video
      className="w-full h-full object-cover rounded-xl"
      src={projects[7].videoUrl}
      controls
      autoPlay
      playsInline
      poster={projects[7].videoThumb}
    />
  ) : (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={() => setActiveVideoId(projects[7].id)}
    >
      <Image src={projects[7].videoThumb} alt="Video thumbnail" fill className="rounded-xl object-cover" />
      <Image
        src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
        alt="Play Button"
        width={60}
        height={60}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  )}
</div>

        </div>
      </div>
    </section>
  );
};

export default DsProjects;
