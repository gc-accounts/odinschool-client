'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/components/ui/card'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/components/Button'
import { GenAIIITGProjectsData } from '@/components/data/course-section/projects/GenAIIITGProjectsData'

interface HiringPartnersProps {
  sectionClass?: string
}

const RealWorldProjects = ({ sectionClass }: HiringPartnersProps) => {
  const projects = GenAIIITGProjectsData[0]?.project ?? [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const dots = useMemo(() => emblaApi ? emblaApi.scrollSnapList().map((_, i) => i) : [], [emblaApi])

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
              <span className='text-primary-600'>Real-world projects</span> to reinforce your learning
          </h2>
          {/* <p className="text-md">
            Get hands-on with powerful Generative AI projects that simulate real-world applications and use cases.
          </p> */}
        </div>

        {/* Carousel */}
        <div className="relative">
          <button onClick={scrollPrev} className="absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map(({ project_img, project_title, project_description }, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_33.3333%] px-2">
                  <Card className="border border-gray-200 hover:shadow-lg transition-all h-full overflow-hidden p-5">
                    <CardContent className="p-0 relative space-y-4">
                      <Image
                        src={project_img}
                        width={600}
                        height={338}
                        alt={project_title}
                        className="rounded-md w-full h-48 object-cover"
                      />
                      <h3 className="text-lg font-semibold text-primary-700">{project_title}</h3>
                      <p className="text-sm text-gray-600">{project_description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center flex-wrap mt-8 gap-2">
            {dots.map(idx => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-200 rounded-full ${idx === selectedIndex ? 'bg-primary-600 w-6 h-2 shadow' : 'bg-gray-300 w-2 h-2'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default RealWorldProjects
