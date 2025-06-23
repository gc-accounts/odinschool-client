'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';


interface dsEliteProps {
  sectionClass?: String
}
const WhyFoundation = ({ sectionClass }: dsEliteProps) => {
const [formOpen, setFormOpen] = useState(false)
  return (
    <section className={`${sectionClass ? sectionClass : ''} overflow-hidden relative`}>

      <div className='container'>

      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-12'>
          <div className='pb-20'>
           <h2 className="text-3xl md:text-5xl font-display leading-tight mb-6">Why <span className='text-primary-600'>Foundational Course</span>?</h2>
           

           <ul className="text-black  grid md:grid-cols-2 gap-6">
                       <li className='flex gap-1 mb-4'>
                        <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                        <p>
                        <span className='font-semibold'>E-learning Course</span> 
                        <br />This is a self-paced, beginner-level course built to prep you up before you step into the real action.
                        </p>
                        </li>

                        <li className='flex gap-1 mb-4'>
                        <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                        <p>
                        <span className='font-semibold'>Everything You Need to Start Your Data Science Journey</span> 
                        <br />Get your basics right in Python, SQL, and Statistics — the core skills every data science pro needs before diving deep.
                        </p>
                        </li>


                        <li className='flex gap-1'>
                        <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                        <p>
                        <span className='font-semibold'>Assignments to Practice What You Learn</span> 
                        <br />Every concept comes with simple, hands-on tasks that make sure you’re not just watching — you're doing.
                        </p>
                        </li>

                         <li className='flex gap-1'>
                        <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                        <p>
                        <span className='font-semibold'>A Micro Project to Pull It All Together</span> 
                        <br />Wrap up with a fundamental project that ties the tools together — just enough to show you’re ready for the next step.
                        </p>
                        </li>


                         <li className='flex gap-1'>
                        <span className='mr-2'> <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span>
                        <p>
                        <span className='font-semibold'>₹2000 Off the Elite Course</span> 
                        <br />Finish this course, and you get ₹2000 off when you enroll in the full-fledged, instructor-led program at OdinSchool.
                        </p>
                        </li>
                       
                      </ul>


                      <div>

        </div>

</div>
        </div>
        {/* <div className='md:col-span-2'></div>
        <div className='md:col-span-4'>
          <Image src='https://strapi.odinschool.com/uploads/Student_20images_4998bca8ab.webp' className='' alt='studentImage' width={300} height={100} />
        </div> */}
      </div>
      </div>




    </section>
  );
}


export default WhyFoundation;