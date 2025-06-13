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
      <div className="container grid grid-cols-12 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6 z-10 col-span-7">
          <h1 className="text-white text-3xl md:text-5xl  font-display leading-normal">
            Investment Banking
            and Finance Operations Elite Course
            {/* <span className="text-white">Elite Course</span> */}
          </h1>

          <div className='flex md:flex-row flex-col gap-8 items-center'>
            <p className="text-2xl mt-4 mb-2 text-white font-display leading-tight">Backed by</p>
            <div className="flex items-start gap-4">
              <Image
                src="https://strapi.odinschool.com/uploads/Feemonk400_X160_677eb51820.webp"
                alt="Feemonk"
                width={130}
                height={100}
              />
              <Image
                src="https://strapi.odinschool.com/uploads/Broadridge400_X160_c0ac988115.webp"
                alt="Broadridge"
                width={130}
                height={100}
              />
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
          <BrochureButton slug='investment-banking-course' isBrochureButton={true} isPrimaryButton={true} primaryButtonText='Book a free call' parentClass='w-full flex md:flex-row flex-col md:gap-6 gap-2  items-center' />
        </div>

        {/* Right Side Model Image */}
        <div className="col-span-5 relative z-10 flex justify-center md:justify-end">
          <Image
            src="https://strapi.odinschool.com/uploads/Group_5394_34e14bafe4.webp"
            alt="Model"
            width={500}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
