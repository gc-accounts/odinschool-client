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
        <div className='w-full'>
          <h1 className="text-3xl md:text-5xl  font-display leading-normal text-center">
            Investment Banking and Finance Operations <br /> Elite Course
            {/* <span className="text-white">Elite Course</span> */}
          </h1>

          <div className='flex flex-col items-center w-full gap-4 md:my-6 my-0'>
            <p className="md:text-2xl text-xl font-medium font-display leading-tight mt-[10px]">Supported by</p>
            <div className="flex items-start gap-4">

              <div className="h-[60px] w-[80px] md:w-[180px] relative aspect-[13/10]">
                <Image
                  src="https://strapi.odinschool.com/uploads/Broadridge400_X160_4_23b3bf325f.webp"
                  alt="Broadridge"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px 180px"
                  loading="lazy"
                />
              </div>

              <div className="h-[60px] w-[80px] md:w-[180px] relative aspect-[13/10]">
                <Image
                  src="https://strapi.odinschool.com/uploads/feemonk400_X160_1_f17891b25a.webp"
                  alt="Feemonk"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 180px"
                  loading="lazy"
                />
              </div>
            </div>

             <p className="md:text-2xl text-xl font-medium font-display leading-tight mt-[10px]">And 600+ hiring companies</p>
          </div>
         
          <div className='flex justify-center mt-8'>
            <BrochureButton slug='investment-banking-course' isBrochureButton={true} isPrimaryButton={true} primaryButtonText='Enquire Now' parentClass='w-fit flex  md:gap-6 gap-2  items-center' />
          </div>
        </div>

      </div>
    </section>
  );
}
