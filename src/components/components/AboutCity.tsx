'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PuneData } from '@/components/data/AboutCityPageData/PuneData';
import { MumbaiData } from '@/components/data/AboutCityPageData/MumbaiData';
import { BangaloreData } from '@/components/data/AboutCityPageData/BangaloreData';
import { HyderabadData } from '@/components/data/AboutCityPageData/HyderabadData';
import { ChennaiData } from '@/components/data/AboutCityPageData/ChennaiData';
interface AboutCityProps {
  slug: string;
  sectionClass: string;
}

const AboutCity = ({ slug, sectionClass }: AboutCityProps) => {
  const [cityData, setCityData] = useState<any>(null);

  useEffect(() => {
    // Function to load city data based on the slug
    const getCityData = (slug: string) => {
      switch (slug) {
        case 'mumbai':
          return MumbaiData;
        case 'bangalore':
          return BangaloreData;
        case 'pune':
          return PuneData;
        case 'hyderabad':
          return HyderabadData;
        case 'chennai':
          return ChennaiData
        default:
          return null;
      }
    };

    const data = getCityData(slug);
    setCityData(data); // Set the city data based on the slug
  }, [slug]); // This effect runs every time `slug` changes

  // If city data is not available yet, return a loading state
  if (!cityData) {
    return <div>Loading...</div>;
  }

  return (
    <section className={sectionClass}>
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl mb-4 font-display leading-tight font-medium">
            {cityData.heading}
          </h2>
          <p className="mb-6">{cityData.para1}</p>
          <p className="mb-6">{cityData.para2}</p>
          <ul className="list-disc pl-6 space-y-2">
            {cityData.listing.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-6">{cityData.para3}</p>
        </div>
        <div className="flex-1">
          <Image
            src={cityData.image}
            alt={cityData.heading}
            width={500}
            height={500}
            className="object-cover rounded-lg filter grayscale brightness-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCity;
