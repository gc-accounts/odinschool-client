import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent } from '@/components/components/ui/card';
import { Users, GraduationCap, Building, CheckCircle } from 'lucide-react';
import CallbackForm from '@/components/components/CallbackForm';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers at EduPlatform - Join Our Team";
  }, []);

  const perks = [
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Empowerment",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />,
      title: "Growth Mindset",
    },
    {
      icon: <Building className="h-10 w-10 text-primary-600" />,
      title: "Collaboration",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
      title: "Integrity",
    }
  ];

  const images = [
    {
      src: "https://strapi.odinschool.com/uploads/Christmas_20_Party_536daa108a.png",
      alt: "Team at work having fun",
      className: "col-span-2 row-span-1"
    },
    {
      src: "https://strapi.odinschool.com/uploads/Saree_20_Day_a442695e32.png",
      alt: "Team at work having fun",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://strapi.odinschool.com/uploads/Bike_20with_20_CEO_d95b0a2dd5.png",
      alt: "Team at work having fun",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://strapi.odinschool.com/uploads/Diwali_20_Party_e1966c91f1.png",
      alt: "Team at work having fun",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://strapi.odinschool.com/uploads/Women_E2_80_99s_20_Day_ba23838b0d.png",
      alt: "Team at work having fun",
      className: "col-span-1 row-span-1"
    },
  ];




  const employeeView = [
    {
      id: 1,
      src: "https://strapi.odinschool.com/uploads/Kranthi_e954d47978.webp",
      name: "Kranti",
      desc: "Beyond the incredible work we do, OdinSchool values work-life balance and a supportive environment. The company understands the importance of well-being and encourages a healthy integration of personal and professional life. It's refreshing to be part of an organization that genuinely cares about its employees."
    },
    {
      id: 2,
      src: "https://strapi.odinschool.com/uploads/Fatima_1_6498ae68ed.webp",
      name: "Fathima",
      desc: "From day one, I felt embraced by a supportive and inspiring community that truly cares about my success. What sets OdinSchool apart is its commitment towards helping individuals transform their lives through upskilling. As an employee, it's rewarding to be part of a company that makes a real impact in people's lives and careers.”"
    },
    {
      id: 3,
      src: "https://strapi.odinschool.com/uploads/Maneesh_f0f1c3dbb7.webp",
      name: "Manish",
      desc: "I am proud to be a part of OdinSchool and contribute to the meaningful work that we do here. This is more than just a job to me; it’s a very purposeful career that let’s me make a difference. My team has passionate, professional individuals who bring a very diverse set of perspectives to the table. I am constantly inspired!"
    },

  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Careers at OdinSchool
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                As an upskilling organization dedicated to transforming lives and careers, we understand the importance of having the right people on board. At OdinSchool, we have witnessed our graduates break free from the limitations that held them back and reach new heights in their professional lives. If you have what it takes to be the catalyst that ignites success in others’ careers, we welcome you onboard, heartily.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-primary-700 font-medium">
                  Connect with us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                We live by <span className="text-primary-600">our values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                If you're ready to be a part of something bigger than yourself, where your work directly impacts the lives of others, OdinSchool is the place for you. We live by our values all day, every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {perk.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[20px] pb-[50px] md:px-[30px] md:pb-[70px] bg-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">We love working at <span className="text-primary-600">OdinSchool</span></h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {employeeView.map((emp, id) => (
              <div key={id} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={emp.src}
                    alt={emp.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{emp.name}</h4>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm">
                  “{emp.desc}”
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Image Grid Section */}
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-gray-900">
              Life at <span className="text-primary-600 ">Odinschool</span>
            </h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-6">
              {images.map((img, idx) => (
                <div key={idx} className={`${img.className}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-[50px] md:pt-[70px] bg-gray-50">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-gray-900">
              We come from  <span className="text-primary-600 ">everywhere</span>
            </h2>
          </div>

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <img
              src="https://strapi.odinschool.com/uploads/Diversity_Picture_2_11cd0ebabc.webp"
              alt="Team working together in an office"
              className="w-full h-[500px] object-cover object-center"
            />
          </div>
        </section>
      </main>
      <CallbackForm />
      <Footer />
    </div>
  );
};

export default Careers;
