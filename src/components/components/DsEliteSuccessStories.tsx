import React from 'react';
import { Card, CardContent } from '@/components/components/ui/card';

const students = [
  {
    id:1,
    name: 'Janapureddi Radha',
    designation: 'Product Analyst',
    image: 'https://strapi.odinschool.com/uploads/Radha_1_1d88f39370.webp',
    logo: 'https://strapi.odinschool.com/uploads/Group_204869_abf57ca26c.webp'
  },
   {
    id:2,
    name: 'Shubham Nayak',
    designation: 'Power BI Developer',
    image: 'https://strapi.odinschool.com/uploads/19_5542c1a8a2.webp',
    logo: 'https://strapi.odinschool.com/uploads/Reliance_General_Insurance_20100_X40_3ec92f5438.webp'
  },
   {
    id:3,
    name: 'Tanuj Chauhan',
    designation: 'Data Analyst',
    image: 'https://strapi.odinschool.com/uploads/Tanuj_1_84bd563ca5.webp',
    logo: 'https://strapi.odinschool.com/uploads/Axis_Max_Life_Insurance_100_X40_425fc9a4c3.webp'
  },
    {
    id:4,
    name: 'Rohit Raut',
    designation: 'WMS Operator - Analytics',
    image: 'https://strapi.odinschool.com/uploads/Rohit_Raut_1_0c6a4110d1.webp',
    logo: 'https://strapi.odinschool.com/uploads/Indicold_20100_X40_131fcbbf55.webp'
  },
    {
    id:5,
    name: 'Akash Tiwary',
    designation: 'Operations Analytics',
    image: 'https://strapi.odinschool.com/uploads/Akash_Tiwari_1_941b59341e.webp',
    logo: 'https://strapi.odinschool.com/uploads/Flipkart_20100x40_8a8b52e7a2.svg'
  },
   {
    id:6,
    name: 'Ankita Bajpai',
    designation: 'MIS Executive',
    image: 'https://strapi.odinschool.com/uploads/18_626190768c.webp',
    logo: 'https://strapi.odinschool.com/uploads/swiggy_20100_X40_20indv_e206ccf06f.webp'
  },

];

export default function DsEliteSuccessStories({ sectionClass }: { sectionClass?: string }) {
  return (
    <section className={`bg-primary-50 py-12 px-4 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Success <span className="text-primary-600">Stories</span>
          </h2>
          <p className="text-md text-gray-600">Many success stories have emerged from our Hiring Sprints. Here are a few! </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          

          {/* Info Column (col-span-4) */}
          <div className="md:col-span-4">
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
          </div>

          {/* students Column (col-span-8) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((leader, index) => (
              <Card
                key={index}
                className="border border-primary-100 hover:shadow-lg transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-md font-semibold text-primary-600">{leader.name}</h3>
                  <p className="text-xs text-slate-700">{leader.designation}</p>
                </CardContent>
                <div className="py-2 border-t">
                  <img
                    src={leader.logo}
                    alt=''
                    className="h-8 mx-auto object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
