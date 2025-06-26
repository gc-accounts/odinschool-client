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
    }
  ];

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2 text-gray-900">
            10+ Hands-on <span className="text-primary-600">Projects</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* First 3 small project cards */}
        {projects.map((project) => (
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

      </div>
    </section>
  );
};

export default IbProjects;
