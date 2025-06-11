import React from 'react'
import Image from 'next/image'


interface  ProgramHighlightsProps{
 sectionClass?:String;
 data?: { id:number; icon: string; title: string; description:string }[];
}

  const  ProgramHighlights = ({ sectionClass, data }: ProgramHighlightsProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'} relative`}>
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-white">
            Program <span className="">Highlights</span>
          </h2>
          <p className="text-white">Grab the advantage of being a part of India's only Data Science course backed by top Indian companies
          </p>
        </div>
    <div className='grid grid-cols-2 md:grid-cols-2 gap-5'>
      {
        data.map((data, index)=>{
          return(
            <div key={index} className='bg-primary-50 p-4 rounded-md grid grid-cols-12'>
              <div className='col-span-2'>
                <Image src={data.icon} alt={data.title} className="w-18 h-auto block mx-auto" loading="lazy" width={50} height={50}  />
              </div>
              <div className='col-span-10'>
              <h2 className='font-semibold text-lg mb-1'>{data.title}</h2>
              <p className='text-sm'>{data.description}</p>
              </div>
            </div>
          )
        })
      }

    </div>
    </div>
    </section>
  )
}

export default  ProgramHighlights