'use client';

import React, { useEffect, useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Lazy load components
const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div className="h-16 bg-white"></div>,
  ssr: false
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-100"></div>,
  ssr: false
});

const Button = dynamic(() => import('@/components/components/Button'), {
  loading: () => <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>,
  ssr: false
});

// Lazy load Lucide icons
const Award = dynamic(() => import('lucide-react').then(mod => mod.Award), { ssr: false });
const BookOpen = dynamic(() => import('lucide-react').then(mod => mod.BookOpen), { ssr: false });
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), { ssr: false });
const Check = dynamic(() => import('lucide-react').then(mod => mod.Check), { ssr: false });
const ArrowRight = dynamic(() => import('lucide-react').then(mod => mod.ArrowRight), { ssr: false });
const Heart = dynamic(() => import('lucide-react').then(mod => mod.Heart), { ssr: false });
const Lightbulb = dynamic(() => import('lucide-react').then(mod => mod.Lightbulb), { ssr: false });
const FolderKanban = dynamic(() => import('lucide-react').then(mod => mod.FolderKanban), { ssr: false });
const BriefcaseBusiness = dynamic(() => import('lucide-react').then(mod => mod.BriefcaseBusiness), { ssr: false });
const Send = dynamic(() => import('lucide-react').then(mod => mod.Send), { ssr: false });
const Clock = dynamic(() => import('lucide-react').then(mod => mod.Clock), { ssr: false });

const About = () => {
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - OdinSchool";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  const stats = [
    { value: 'Industry-aligned Courses', label: 'Courses', icon: <BookOpen className="text-primary-600" size={24} /> },
    { value: 'Hands-on Projects', label: 'Students', icon: <FolderKanban className="text-primary-600" size={24} /> },
    { value: 'Career Services', label: 'Expert Instructors', icon: <Award className="text-primary-600" size={24} /> },
    { value: 'Placement Assistance', label: 'Satisfaction Rate', icon: <BriefcaseBusiness className="text-primary-600" size={24} /> }
  ];

  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Company Vision',
      description: 'Become the best source of skilled talent in the country, qualitatively and quantitatively'
    },
    {
      icon: <Heart size={24} />,
      title: 'Value for the industry',
      description: 'The most efficient platform to find productive talent trained in the most in-demand skills'
    },
    {
      icon: <Users size={24} />,
      title: 'Value for Learners',
      description: 'Access to rigorous hands-on training, culminating in the highest state of job-readiness'
    },
    {
      icon: <Clock size={24} />,
      title: 'What we value',
      description: 'Excellence, transparency, and the zeal to become the best version of ourself'
    }
  ];

  const team = [
    {
      photo: 'https://strapi.odinschool.com/uploads/Deb_bc6a9c9aec.webp',
      name: 'Debajyoti',
      designation: 'CEO',
    },
    {
      photo: 'https://strapi.odinschool.com/uploads/Srinivas_3f5cb08d93.webp',
      name: 'Srini',
      designation: 'Product and Delivery',
    },
    {
      photo: 'https://strapi.odinschool.com/uploads/Shruti_8a032072a7.webp',
      name: 'Shruti',
      designation: 'Marketing and Corporate Relations',
    },
    {
      photo: 'https://strapi.odinschool.com/uploads/Anushri_cff54247af.webp',
      name: 'Anushri',
      designation: 'Counselling and Admissions',
    },
    {
      photo: 'https://strapi.odinschool.com/uploads/Avinash_944f8ef744.webp',
      name: 'Avinash',
      designation: 'Support',
    },
    {
      photo: 'https://strapi.odinschool.com/uploads/Bingi_a3cda642a8.webp',
      name: 'Balachandra',
      designation: 'Placements',
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-16 bg-white"></div>}>
        <Navbar />
      </Suspense>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-b from-primary-100 to-white">
          <div className="container">
            <div ref={addToRefs} className="text-center max-w-3xl mx-auto opacity-0">
              <h1 className="text-3xl md:text-5xl md:leading-[1.2] leading-[1.3] mb-6">
                Empowering Learners. <span className="text-primary-600">Transforming Careers.</span> Fueling Industry.
              </h1>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-[20px] pb-[50px] md:px-[30px] md:pb-[70px] bg-white">
          <div className="container">
            <div ref={addToRefs} className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-lg md:text-xl font-semibold  text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  {/* <div className="text-sm text-gray-600">
                    {stat.label}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div ref={addToRefs} className="opacity-0">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://strapi.odinschool.com/uploads/Career_s_Hero_Image_ce20df1ae4.webp"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"

                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="md:block hidden absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-primary-100 z-0"></div>
                  <div className="md:block hidden absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary-100 z-0"></div>
                </div>
              </div>

              <div ref={addToRefs} className="opacity-0">
                <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-6">
                  We are <span className="text-primary-600">OdinSchool</span>
                </h2>
                <p className="text-md text-gray-700 mb-4">OdinSchool is an upskilling platform that helps people launch, transform, and propel their careers in high-growth domains. We focus on effectively mobilizing skills, resources, and knowledge to produce candidates who can stand out in the hyper-competitive tech sector. We are also committed to becoming a trusted source of skilled talent for the Indian industry. </p>
                <ul className="space-y-3 mb-6">
                  {['Industry-experienced instructors', 'Project-based curriculum', 'Career Services', 'Placement Assistance'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-primary-600 mr-2 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/courses">
                  <Button
                    icon={<ArrowRight className='ml-1' size={18} />}
                    iconPosition="right"
                  >
                    Explore Our Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Meet the Team */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50">
          <div className="container">
            <div ref={addToRefs} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
              <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2">Meet the <span className='text-primary-600'>Team</span></h2>
              <p className="text-md text-gray-600">
                Our passionate and skilled team drives OdinSchool's mission. With deep industry expertise, they ensure our learners succeed.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6 max-w-4xl mx-auto">
              {team?.map((member, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="bg-white hover:bg-primary-100 transition-all duration-300 rounded-xl hover:border-opacity-0 border shadow-sm p-6 text-center opacity-0"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"

                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                  <h3 className="text-lg text-primary-600 font-semibold mb-2">{member.name}</h3>
                  <p className="md:text-sm text-xs text-gray-700">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Values */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px]">
          <div className="container">
            <div ref={addToRefs} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
              <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2">
                Who we are
              </h2>
              <p className=" body-md text-gray-600">
                The team of dynamic professionals that powers OdinSchool has extensive experience in managing educational programs globally in multiple variants. We invest in teaching resources and technology to make learning more outcome-oriented, engaging, interactive, and on par with the dynamically transforming industry.              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Suspense fallback={<div className="h-64 bg-gray-100"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default About;
