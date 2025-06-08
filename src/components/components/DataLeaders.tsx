import React from 'react';
import { Card, CardContent } from '@/components/components/ui/card';
import Image from 'next/image';

const leaders = [
  {
    name: 'Vishal Sharma',
    designation: 'Founder & CEO',
    company: 'NuvoRetail',
    image: 'https://strapi.odinschool.com/uploads/Vishal_Sharma_20_1_a76178f51e.png',
    logo: 'https://strapi.odinschool.com/uploads/Nuvoretail_20150_X60_20_2_eb65cb4f84.webp'
  },
  {
    name: 'Kennedy Singh',
    designation: 'Assistant Manager, HR',
    company: 'Swiggy',
    image: 'https://strapi.odinschool.com/uploads/Kennedy_20_2_62e1fe2387.png',
    logo: 'https://strapi.odinschool.com/uploads/swiggy_20100_X40_20indv_6108c02a5c.webp'
  },
  {
    name: 'S Sai Subrath',
    designation: 'Talent Acquisition Manager',
    company: 'PhonePe',
    image: 'https://strapi.odinschool.com/uploads/S_Sai_Subrath_3_74b49cfc6f.webp',
    logo: 'https://strapi.odinschool.com/uploads/Phon_Pe_20150_X60_aed6af7fa4.webp'
  },
  {
    name: 'Thomas Varheese',
    designation: 'Co-Founder & CEO',
    company: '4Seer',
    image: 'https://strapi.odinschool.com/uploads/Thomas_Verghese_3_281aff0a3a.webp',
    logo: 'https://strapi.odinschool.com/uploads/4_Seer_20150_X60_30ae825a01.webp'
  },
  {
    name: 'Rhishikesh Joshi',
    designation: 'Founder',
    company: 'Venanalytics',
    image: 'https://strapi.odinschool.com/uploads/Rhishikesh_Joshi_455d7620e8.png',
    logo: 'https://strapi.odinschool.com/uploads/Venanalytics_20150_X60_9ec2da4708.webp'
  },
  {
    name: 'Dr. Anand Fadte',
    designation: 'Co-Founder',
    company: 'PieStudy',
    image: 'https://strapi.odinschool.com/uploads/Anand_Fadte_a887a16636.webp',
    logo: 'https://strapi.odinschool.com/uploads/Piestudy_20150_X60_2b1d33ba59.webp'
  },
];

export default function DataLeaders({ sectionClass }: { sectionClass?: string }) {
  return (
    <section className={`bg-primary-50 py-12 px-4 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Meet the Data Leaders Who Will <span className="text-primary-600">Shape Your Learning</span>
          </h2>
          <p className="text-md text-gray-600"></p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Leaders Column (col-span-8) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:col-span-12 lg:grid-cols-3 md:gap-6 gap-5">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="border border-primary-100 hover:shadow-lg transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="md:p-5 p-4 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full"

                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                  <h3 className="text-md font-semibold text-primary-600">{leader.name}</h3>
                  <p className="text-xs text-slate-700">{leader.designation}</p>
                </CardContent>
                <div className="py-2 border-t">
                  <Image
                    src={leader.logo}
                    alt={leader.company}
                    className="h-8 mx-auto object-contain"

                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Info Column (col-span-4) */}
          {/* <div className="md:col-span-4">
            <Card className="border border-primary-100  shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-dark mb-4">Learn from Industry Experts</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Our mentors bring years of hands-on experience from top tech companies.
                  Learn practical, job-ready skills to boost your data career.
                </p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Live mentorship & guidance</li>
                  <li>Real-world case studies</li>
                  <li>Interview preparation support</li>
                </ul>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
}
