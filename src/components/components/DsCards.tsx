import React from 'react'
import Image from 'next/image'

const cardData = [
  {
    id: 1,
    icon: 'https://strapi.odinschool.com/uploads/data_glbe_7ac5335221.webp',
    title: '',
    description: 'Be a part of the global data transformation wave by learning Data Science '
  },
  {
    id: 2,
    icon: 'https://strapi.odinschool.com/uploads/opportunity_975d2a388e.webp',
    title: '',
    description: `Don't worry about a non-IT background - Data Science provides opportunities for all`
  },
  {
    id: 3,
    icon: 'https://strapi.odinschool.com/uploads/job_drive_3f3a90ad76.webp',
    title: '',
    description: 'Participate in JobDrives every month and open up a world of opportunities '
  }
]


interface CardsProps {
  sectionClass?: String,
}

  const DsCards = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : ''} relative md:translate-y-[-50%]`}>
      <div className="container mx-auto">
        {/* <div className="text-center max-w-4xl mx-auto mb-10 opacity-0">
          <h2 className="text-3xl font-bold mb-2">
            Hear from your peers who’ve <span className="text-primary-600">been successfully placed</span>
          </h2>
          <p className="text-gray-600">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p>
        </div> */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-center'>
      {
        cardData.map((data, index)=>{
          return(
            <div key={index} className='bg-primary-50 border border-primary-600 p-4 rounded-md'>
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

export default DsCards