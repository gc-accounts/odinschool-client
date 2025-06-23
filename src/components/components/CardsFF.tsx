import React from 'react'
import Image from 'next/image'


interface CardsProps {
  sectionClass?: String,
  data:any
}

  const CardsFF = ({ sectionClass, data }: CardsProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'} relative`}>
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
        data.map((data, index)=>{
          return(
            <div key={index} className='bg-primary-50 border border-primary-600 p-4 rounded-md'>

              {
                data.icon && 
                <Image
                            src={data.icon}
                            alt={data.title}
                            className="w-18 h-auto block mx-auto"
              
                            loading="lazy"
                            width={50}
                            height={50}
                          />
              }
            
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

export default CardsFF