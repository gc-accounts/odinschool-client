import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using lucide-react for icons

interface Props{
  sectionClass?: string;
}

  const SuccessfullyPlaced = ({ sectionClass }: Props) => {

  // Static data for the four career success cards
  const cardData = [
    {
      id: '1',
      category: 'Career Upgrade',
      profileImage: 'https://placehold.co/80x80/E0E7FF/4F46E5?text=Prins',
      name: 'Prins Kumar',
      companyLogo: 'https://placehold.co/100x40/aabbcc/ffffff?text=prolific_100X40_Individual',
      designation: 'AI Software Engineer',
      from: 'Data Analyst Intern',
      to: 'AI Software Engineer',
      quote: 'I gained the confidence and skills needed through the bootcamp. The structured curriculum and career support made all the difference in helping me break into the industry.',
    },
    {
      id: '2',
      category: 'Career Launch',
      profileImage: 'https://placehold.co/80x80/E0E7FF/4F46E5?text=Asra_1',
      name: 'Asra Hussain',
      companyLogo: 'https://placehold.co/100x40/aabbcc/ffffff?text=Smartbridge_logo_200X80',
      designation: 'Machine Learning role',
      from: 'Fresher',
      to: 'Machine Learning role',
      quote: 'Through expert-led training, hands-on projects, and career support, I built strong AI/ML skills and landed an ML role. The structured curriculum and real-world exposure were invaluable in shaping my journey.',
    },
    {
      id: '3',
      category: 'Career Launch',
      profileImage: 'https://placehold.co/80x80/E0E7FF/4F46E5?text=Swetha_Guggal_(1)',
      name: 'Swetha Guggal',
      companyLogo: 'https://placehold.co/100x40/aabbcc/ffffff?text=Smartbridge_logo_200X80',
      designation: 'AI/ML role',
      from: 'Fresher',
      to: 'AI/ML role',
      quote: 'The projects helped me apply my theoretical knowledge, boost my confidence, and build a strong portfolio. I highly recommend this bootcamp to anyone looking to break into AI and Machine Learning!',
    },
    {
      id: '4',
      category: '4-year career gap',
      profileImage: 'https://placehold.co/80x80/E0E7FF/4F46E5?text=Ashutosh_Behera',
      name: 'Ashutosh Behera',
      companyLogo: 'https://placehold.co/100x40/aabbcc/ffffff?text=PRUDENT_200X80',
      designation: 'AI Software Engineer',
      from: 'Fresher',
      to: 'AI Software Engineer',
      quote: 'The best part is when they take weekly assessments, they understand your weak points and personalize their teaching accordingly to overcome the hurdles. They never teach/interact in \'made for all\' mode.',
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
    <section className={`${sectionClass ?? ''}` }>
      <div className="container mx-auto">

          <h2 className="text-3xl md:text-5xl mb-8  text-center">
            Hear from your peers who’ve been successfully placed.
          </h2>


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
                <div key={item.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] px-2 py-4">
                  <div className="bg-white relative rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col justify-between">
                    <div className="p-6">
                      <div className="absolute z-10 -top-4 left-1/2 -translate-x-1/2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {item?.category}
                      </div>

                      <div className='grid grid-cols-12 mt-4'>
                        <div className='col-span-6'>
<div className="flex items-center justify-center space-x-4 mb-4">
                        <img src={item.profileImage} alt={item.name} className="w-20 h-20 rounded-full object-cover border-2 border-purple-300" />
                      </div>
                        </div>
                        <div className='col-span-6'>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                      <div className="flex items-center mb-4">
                        <img src={item.companyLogo} alt="Company Logo" className="h-10 w-auto rounded-md" />
                      </div>
                      <p className="text-md text-gray-700 font-semibold mb-4">{item.designation}</p>
                        </div>
                      </div>


                      

                    

                      {/* FROM TO section */}
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="font-semibold">FROM</span>
                        <div className="mt-4 flex-grow border-t-2 border-dashed border-purple-300 mx-2 flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="font-semibold">TO</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-medium text-gray-800 mb-6">
                        <span>{item.from}</span>
                        <span>{item.to}</span>
                      </div>

                      <p className="text-sm text-gray-600 italic leading-relaxed text-center">
                        "{item.quote}"
                      </p>
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

export default SuccessfullyPlaced;
