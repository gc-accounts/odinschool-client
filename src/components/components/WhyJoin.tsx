import React from 'react'
import Image from 'next/image'

const cardData = [
  {
    id: 1,
    icon: 'https://strapi.odinschool.com/uploads/10x_exposure_20_3_42b550a01c.webp',
    title: '10x more exposure',
    description: 'Weekly sessions led by experts for 10x more industry-focused exposure'
  },
  {
    id: 2,
    icon: 'https://strapi.odinschool.com/uploads/Hands_on_learning_bd60fc5b29.webp',
    title: 'Hands-on with Real-World Tools',
    description: 'A program so that you can “DO and BUILD”; not just “LEARN and KNOW”'
  },
  {
    id: 3,
    icon: 'https://strapi.odinschool.com/uploads/Hiring_sprints_1_cfa0cbaf7b.webp',
    title: '10+ Hiring Sprints',
    description: 'Fast Track your placement journey with EXCLUSIVE placement drive opportunities'
  },
  {
    id: 3,
    icon: 'https://strapi.odinschool.com/uploads/Career_support_1_19b67cd576.webp',
    title: 'Complete Career Support',
    description: 'Don’t just “GET” opportunities”; get complete support to “CRACK” them too '
  }
]


interface CardsProps {
  sectionClass?: String,
}

  const WhyJoin = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'} relative`}>
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl text-white mb-3 font-display leading-tight">
            Why Join this <span className="text-white">Program?</span>
          </h2>
          {/* <p className="text-gray-600">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p> */}
        </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white'>
      {
        cardData.map((data, index)=>{
          return(
            <div key={index} className='p-4'>
              <Image
                            src={data.icon}
                            alt={data.title}
                            className="w-18 h-auto block mx-auto"
              
                            loading="lazy"
                            width={50}
                            height={50}
                          />
              <h2 className='font-semibold text-lg mb-2 mt-4'>{data.title}</h2>
              <p className='text-sm'>{data.description}</p>
            </div>
          )
        })
      }

    </div>
    </div>
    </section>
  )
}

export default WhyJoin