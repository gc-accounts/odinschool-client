'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/components/ui/card'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/components/Button'


const videoIcon = 'https://strapi.odinschool.com/uploads/youtube_8c0e38626b.webp'

interface HiringPartnersProps {
  sectionClass?: string;
  data?: any[];
  title: string;
  subText: string;
  headerColor: string;
}

const MoreJobs = ({ sectionClass, data, title, subText, headerColor }: HiringPartnersProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [playingId, setPlayingId] = useState<number | null>(null)

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
        <div className={`text-center max-w-3xl mx-auto mb-12 ${headerColor}`}>
          <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2">
            {title}
          </h2>
          <p className="text-md">
            {subText}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <button onClick={scrollPrev} className="absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.map(({ id, thumbnail, videoId, name, designation, highlight, companyLogo, tags, salary }) => (
                <div key={id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] px-2 mb-2">
                  <Card className="border border-gray-200 hover:shadow-lg transition-all h-full overflow-hidden p-5">
                    <CardContent className="p-0 relative">
                      {/* Video Thumbnail */}
                      {playingId === id ? (
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            allow="autoplay; encrypted-media"
                            className="absolute top-0 left-0 w-full h-full rounded-md"
                          />
                        </div>
                      ) : (
                        <div className="relative cursor-pointer" onClick={() => setPlayingId(id)}>
                          <Image src={thumbnail} alt={`${name} thumbnail`} width={600} height={338} className="w-full h-auto rounded-md" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image src={videoIcon} alt="Play icon" width={64} height={64} />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="px-2 py-4 border-t mt-2 space-y-3">
                        {/* Title Row */}
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <p className="text-md text-gray-500 font-medium my-2">{name}</p>
                            <p className="text-primary-600 text-lg font-semibold">{designation}</p>
                          </div>
                          {/* <Image src={companyLogo} alt={`${name} logo`} width={90} height={40} className="object-contain bg-white rounded shadow-md" /> */}
                        </div>

                        {/* Experience */}
                        <div>
                          <span className="inline-block bg-yellow-100 text-xs text-yellow-700 px-3 py-1 rounded-md font-medium">
                            {highlight}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 my-3">
                          {tags?.map((tag, i) => (
                            <span key={i} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Salary */}
                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold text-gray-800">Offered Salary upto {salary}</p>
                        </div>
                      </div>
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

        {/* CTA */}
        <div className="flex flex-row gap-4 justify-center mt-10">
          <Link href='https://jobs.odinschool.com/' target='_blank'>
            <Button
              size="lg"
              variant="primary"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
            >
              Explore Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MoreJobs
