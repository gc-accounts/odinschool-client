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
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <h1 className="text-white text-3xl md:text-5xl  font-display leading-normal">
            Investment Banking <br />
            and Finance Operations <br />
            <span className="text-white">Elite Course</span>
          </h1>

          <div>
            <p className="text-2xl mt-4 mb-2 text-white font-display leading-tight">Backed up by</p>
            <div className="flex items-center gap-4">
              <Image
                src="https://strapi.odinschool.com/uploads/Feemonk200_X80_e837caeb2e.webp"
                alt="Feemonk"
                width={100}
                height={40}
              />
              <Image
                src="https://strapi.odinschool.com/uploads/Broadridge200_X80_5c2df464da.webp"
                alt="Broadridge"
                width={100}
                height={40}
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
        <div className="relative z-10 flex justify-center md:justify-end">
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
