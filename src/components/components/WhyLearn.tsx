'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


interface dsEliteProps {
  sectionClass?: String
}
const WhyLearn = ({ sectionClass }: dsEliteProps) => {

  const [formOpen, setFormOpen] = useState(false)


  return (
    <section className={`${sectionClass ? sectionClass : ' pb-[50px] md:pb-[70px] bg-white'} overflow-hidden relative`}>

      <div className='container'>

      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-6'>
           <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">Why learn <span className='text-primary-600'>Generative AI</span>  now?</h2>
           <p className='text-md'>Because Generative AI is the Future.</p>
           <p className='text-md'>One of the most cutting-edge innovations of recent times, Generative AI is projected to become a $1.3 trillion market in the next 8 years, with a compound annual growth rate of almost 27%.</p>
           <p className='text-md'>Professionals skilled in Generative AI will have a lot of career growth opportunities in various industry domains. A recent global survey revealed that 57% of IT companies have identified their Generative AI use cases, out of which 41% are actively upskilling their employees to meet their demands!</p>
           <p className='text-md'>Become a sought after Generative AI engineer and let your career take a massive leap with E&ICT Academy's Certification Program in Applied Generative AI.  </p>
        </div>
        <div className='md:col-span-2'></div>
        <div className='md:col-span-4'>
          <Image src='https://strapi.odinschool.com/uploads/Hand_20image_8d4568cd4b.webp' className='mb-3' alt='eictlogo' width={300} height={100} />
        </div>
      </div>
      </div>




    </section>
  );
}


export default WhyLearn;