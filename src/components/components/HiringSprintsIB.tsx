import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/components/ui/card';
import { Badge } from '@/components/components/ui/badge';
import { MapPin, Building, BriefcaseBusiness, ChevronLeft, ChevronRight } from 'lucide-react';
import { dsJobsDrives } from '@/components/data/dsJobsDrives';

const students = [
  {
    id: 1,
    name: 'Sai Kumar',
    designation: 'Associate Analyst',
    image: 'https://strapi.odinschool.com/uploads/Sai_Kumar_eeb565b87b.webp',
    logo: 'https://strapi.odinschool.com/uploads/Group_204869_abf57ca26c.webp'
  },
  {
    id: 2,
    name: 'Shreya Vig',
    designation: 'Financial Analyst',
    image: 'https://strapi.odinschool.com/uploads/Shreya_Vig_8043a5cab9.webp',
    logo: 'https://strapi.odinschool.com/uploads/swiggy_100x40_indv_4a990b6e20.webp'
  },
  {
    id: 3,
    name: 'Sonia Kaur',
    designation: 'Financial Analyst',
    image: 'https://strapi.odinschool.com/uploads/Sonia_Kaur_e834dbf646.webp',
    logo: 'https://strapi.odinschool.com/uploads/Flipkart_100_X40_5fbe626a5e.webp'
  },
  {
    id: 4,
    name: 'M Mahesh',
    designation: 'Associate Analyst',
    image: 'https://strapi.odinschool.com/uploads/Mahesh_Mahaling_0bab6f5730.webp',
    logo: 'https://strapi.odinschool.com/uploads/Lowes_100_X40_8c51f875ec.webp'
  },
];

const points = [
  {
    id: 1,
    point: 'Hear directly from Hiring Managers and Business Heads'
  },
  {
    id: 2,
    point: 'Get insights into job roles, key projects, and growth opportunities'
  },
  {
    id: 3,
    point: 'Understand the recruitment process in detail'
  },
  {
    id: 4,
    point: 'Ask questions and clarify your doubts'
  },
  {
    id: 5,
    point: 'Boost your confidence and perform your best in interviews'
  }
]

interface CardsProps {
  sectionClass?: string,
}

const HiringSprintsIB = ({ sectionClass }: CardsProps) => {


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const dots = useMemo(() => {
    if (!emblaApi) return [];
    return emblaApi.scrollSnapList().map((_, index) => index);
  }, [emblaApi]);

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Hiring <span className="text-primary-600">Sprints</span>
          </h2>
          {/* <p className="text-gray-600">
            Our Hiring Sprints give you the chance to hear directly from Hiring Managers and Business Heads about job roles, projects, growth opportunities, and the recruitment process. Ask questions, clarify doubts, and perform your best in the interview. <br /><span className='font-semibold'>Many success stories have emerged from our Hiring Sprints. Here are a few!</span>

          </p> */}
        </div>
        {/* Grid Layout */}
        <div className="flex items-start gap-10">
          {/* Left: studentss */}
          <div>
            <div className="relative px-6">

              <ul className='list-disc space-y-2 text-base text-gray-900'>
                {
                  points.map((point) => {
                    return (
                      <li key={point.id}>{point.point}</li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {students.map((students, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={students.image}
                      alt={students.name}
                      className='w-full'
                      height={100}
                      width={100}

                    />
                  </div>
                  <div className="bg-primary-800 md:px-4 px-2 md:py-3 py-2 text-white text-center rounded-b-md">
                    <h3 className="md:text-md text-sm font-semibold">{students.name}</h3>
                    <p className="text-xs mt-1">{students.designation}</p>
                  </div>
                  <div className="py-3 text-center">
                    <Image
                      src={students.logo}
                      alt={students.name}
                      width={80}
                      height={40}
                      className="mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiringSprintsIB;
