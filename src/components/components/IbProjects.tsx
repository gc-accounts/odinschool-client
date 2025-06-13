'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/components/Button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';

interface IbProjectsProps {
  sectionClass?: string;
}

const IbProjects = ({ sectionClass }: IbProjectsProps) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [formOpen, setFormOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Insider Trading & Market Surveillance',
      description: 'Simulate how banks detect suspicious trading activity and raise compliance alerts.',
      image: 'https://strapi.odinschool.com/uploads/Insider_Trading_and_Market_Surveillance_7c0d889f08.webp',
    },
    {
      id: 2,
      title: 'Clearing & Settlement Breakdown',
      description: 'Resolve a simulated settlement failure and apply recovery protocols used in global markets.',
      image: 'https://strapi.odinschool.com/uploads/Clearing_and_Settlement_Breakdown_805490d2de.webp',
    },
    {
      id: 3,
      title: 'Corporate Actions Management',
      description: 'Handle events like mergers and dividends while ensuring accurate communication and reconciliation.',
      image: 'https://strapi.odinschool.com/uploads/Corporate_Actions_Management_89ef815514.webp',
    },
    {
      id: 4,
      title: 'Coffee Shop Sales Analysis',
      description:
        'The objective of this project is to develop a comprehensive sales analysis dashboard that provides insights into sales trends, transaction patterns, and product performance',
      prerequisites: 'Excel',
      tools: [],
      ctaText: 'Request a callback',
      ctaLink: '#',
      videoThumb: 'https://strapi.odinschool.com/uploads/Coffee_Shop_Sales_Analysis_b6184e36bb.webp',
      videoUrl: 'https://strapi.odinschool.com/uploads/Coffee_Shop_Sales_Analysis_Dashboard_1_52ea2bd127.mp4', // sample URL
    },
  ];

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-gray-900">
            10+ Hands-on <span className="text-primary-600">Projects</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* First 3 small project cards */}
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="bg-white border text-black rounded-xl p-4 col-span-12 md:col-span-4 flex flex-col justify-between"
          >
            <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}

        {/* Large AirBnB project details */}
        <div className="border col-span-12 lg:col-span-6 bg-white text-black p-6 rounded-xl flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">{projects[3].title}</h3>
          <p className="text-sm text-gray-700 mb-4">{projects[3].description}</p>

          <div className="flex flex-col sm:flex-row justify-between text-sm mb-4 gap-4">
            <div>
              <p className="text-gray-500">Pre-requisite</p>
              <p>{projects[3].prerequisites}</p>
            </div>
          </div>


          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
            <Button
              size="md"
              variant="yellow"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
              onClick={() => setFormOpen(true)}
            >
              {projects[3].ctaText}
            </Button>

            <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
              <PrimaryForm buttonText='Request a Callback' slug={'investment-banking-course'} isModal={true} />
            </Modal>
          </div>


        </div>

        {/* AirBnB project video block */}
        <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden relative aspect-video border border-white">
          {playVideo ? (
            <iframe
              className="w-full h-full rounded-xl"
              src={projects[3].videoUrl}
              title="Python Analysis on AirBnB"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <Image
                src={projects[3].videoThumb}
                alt="Python Analysis on AirBnB Video"
                fill
                className="rounded-xl object-cover"
              />
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
    </section>
  );
};

export default IbProjects;
