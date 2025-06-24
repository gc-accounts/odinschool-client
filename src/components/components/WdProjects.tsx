import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using lucide-react for icons

interface Props {
  sectionClass?: string;
}

const WdProjects = ({ sectionClass }: Props) => {

  const cardData = [
    {
      id: '1',
      title: 'Shopping Cart App',
      description: 'Build an Amazon or Flipkart but with your personal touch. Create a front-end and an admin interface for the app.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
      id: '2',
      title: 'Movies Listing App',
      description: 'Create your very own Netflix or Amazon Prime. Make functionalities to search for movies and add them to favourites.',
      technologies: ['React', 'API', 'Git', 'JavaScript'],
    },
    {
      id: '3',
      title: 'Video Player App',
      description: 'Craft a video player app with state-of-the-art features. Use official YouTube APIs or similar platforms.',
      technologies: ['HTML', 'CSS', 'Deployment', 'JavaScript'],
    },
    {
      id: '4',
      title: 'Music Player App',
      description: 'Reimagine Spotify; create a music app that has all the cool features. Work with official YouTube APIs or similar platforms.',
      technologies: ['RESTful APIs', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: '5',
      title: 'Bank Web App',
      description: 'Build a one-stop bank web app using JavaScript. Build functionalities to view bank balances, transfer money, and more.',
      technologies: ['HTML', 'CSS', 'API', 'JavaScript'],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

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
    <section className={`${sectionClass ?? ''}`}>
      <div className="container mx-auto">

        <h2 className="text-3xl mb-4 md:text-5xl font-display leading-tight text-center">
         What’s a great curriculum without project-based learning?
        </h2>
        <p className='text-center mb-8'>Engage in 15+ react web developer projects and work with instructors to master the art of project presentation.</p>

        <div className="relative mx-auto">
          {/* Arrows */}
          <button onClick={scrollPrev} className="absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cardData?.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
                  <div className="bg-white relative rounded-xl border border-gray-200 shadow-sm h-full flex flex-col items-center p-6 text-center">
                    {/* <div className="mb-4">
                      <img src="/_project_icons" alt="project icon" className="h-16 w-16 mx-auto" />
                    </div> */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-md text-gray-700 mb-6 flex-grow">{item.description}</p>

                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-200 text-purple-800 text-xs font-semibold px-4 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center flex-wrap mt-8 gap-2">
            {dots.map((index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === selectedIndex ? 'bg-purple-600 w-7' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WdProjects;