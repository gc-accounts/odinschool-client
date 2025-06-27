  'use client';

  import React, { useEffect, useState } from 'react';
  import dynamic from 'next/dynamic';

  const Navbar = dynamic(() => import('@/components/components/Navbar'), {
    loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
  });
    const Footer = dynamic(() => import('@/components/components/Footer'), {
    loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
  });

  import Button from '@/components/components/Button';
  import { ArrowRight, BarChart, BarChartHorizontal, Download } from 'lucide-react';
  import Image from 'next/image';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';




interface Props {
  sectionClass?: String;
  sourceDomain?:string;
}
const FunWithStatisticsHome = ({ sectionClass, sourceDomain }: Props) => {

const [formOpen, setFormOpen] = useState(false);


    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="">
          <section className='px-[20px] py-[50px] md:px-[30px] md:py-[70px]'>
          <div className="container text-end">
            <div className='flex justify-end'>
            <div className="mb-12 max-w-3xl">
              <h1 className="text-4xl mb-4">The Little Book of Statistics</h1>
              <p className="text-md text-gray-600 italic">
                "From ancient times to modern marvels, statistics has helped us understand our world better. In this book, we'll explore the basics of statistics in simple terms.<br />
                Think of it as a journey—a journey where we'll discover how statistics can unravel mysteries, solve problems, and even predict the future. We'll learn about counting, patterns, and how to make sense of data.<br />
                But more than that, this book is a celebration! It's a celebration of the people who've dedicated their lives to statistics—the pioneers, the scholars, and the everyday folks who use statistics to make informed decisions."           </p>
            </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                <Image
                  src="https://strapi.odinschool.com/uploads/Book_20_Cover_20_New_5f527a1f35.svg"
                  alt="Data visualization charts"
                  className=" w-full h-auto"

                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Author - Srinivas Vedantam</h3>
                <p className="text-gray-600 mb-4 italic">
                  "Product development is a passion that I have given my everything to. I enjoy working on solutions that apply the advancement in technology in areas like learning, and marketing."              </p>
                <p className="text-gray-600 mb-6">
                  Together, we'll unlock the secrets of statistics and see how it shapes our world in remarkable ways.
                  Let's dive in!              </p>

             <div>
          <div className="flex justify-end gap-4 delay-200 mt-10">
            <Button
              size="lg"
              variant="yellow"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
              onClick={() => setFormOpen(true)}
            >
              Read More
            </Button>
          </div>
          <Modal header_text={''} open={formOpen} onOpenChange={setFormOpen}>
            <PrimaryForm isCustomRedirect='/fun-with-statistics/lets-make-statistics-fun' buttonText='Read More' slug={'data-science-course'} isModal={true} sourceDomain={sourceDomain ? sourceDomain : 'Course form'} />
          </Modal>
        </div>

   


              </div>
            
            </div>
          </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  };



  export default FunWithStatisticsHome;