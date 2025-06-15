'use client';

import Image from 'next/image';
import Button from '@/components/components/Button';
import BrochureButton from '@/components/components/custom-component/BrochureButton';

interface InvestmentBankingHeroProps {
  sectionClass: string;
}

export default function InvestmentBankingHero({ sectionClass }: InvestmentBankingHeroProps) {
  return (
    <section className={sectionClass}>
      <div className="container mx-auto">
        <div className='w-full md:space-y-6 space-y-0'>
          <h1 className="text-white text-3xl md:text-5xl  font-display leading-normal text-center">
            Investment Banking and Finance Operations <br /> Elite Course
            {/* <span className="text-white">Elite Course</span> */}
          </h1>

          <div className='flex md:flex-row flex-col md:gap-8 gap-0 items-center justify-center w-full'>
            <p className="md:text-2xl text-xl mt-4 mb-2 text-white font-medium font-display">Backed by</p>
            <div className="flex items-start gap-4">

              <div className="w-[80px] md:w-[180px] relative aspect-[13/10]">
                <Image
                  src="https://strapi.odinschool.com/uploads/Feemonk400_X160_677eb51820.webp"
                  alt="Feemonk"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px 180px"
                />
              </div>
              {/* https://strapi.odinschool.com/uploads/Broadridge400_X160_c0ac988115.webp */}

              <div className="w-[80px] md:w-[180px] relative aspect-[13/10]">
                <Image
                  src="https://strapi.odinschool.com/uploads/Broadridge400_X160_c0ac988115.webp"
                  alt="Broadridge"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 180px"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-wrap gap-4 pt-6">
            <Button className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500">
              Download brochure
            </Button>
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
              Book a free call
            </Button>
          </div> */}
          <div className='flex justify-center'>
            <BrochureButton slug='investment-banking-course' isBrochureButton={true} isPrimaryButton={true} primaryButtonText='Enquire Now' parentClass='w-fit flex  md:gap-6 gap-2  items-center' />
          </div>
        </div>

      </div>
    </section>
  );
}
