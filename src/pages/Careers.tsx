import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Building, CheckCircle } from 'lucide-react';
import CallbackForm from '@/components/CallbackForm';

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
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      alt: "Team at work having fun",
      className: "col-span-2 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      alt: "Woman with dogs",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
      alt: "Group of friends cheering outdoors",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1529470839332-78ad660a6a82",
      alt: "People with guitar and confetti",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      alt: "Friends enjoying drinks",
      className: "col-span-1 row-span-1"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Careers at OdinSchool
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                As an upskilling organization dedicated to transforming lives and careers, we understand the importance of having the right people on board. At OdinSchool, we have witnessed our graduates break free from the limitations that held them back and reach new heights in their professional lives. If you have what it takes to be the catalyst that ignites success in others’ careers, we welcome you onboard, heartily.
              </p>
              <Button size="lg" variant="secondary" className="text-primary-700 font-medium">
                Connect with us
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
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

        <section className="py-16 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">We love working at OdinSchool</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {[1, 2, 3].map((_, idx) => (
      <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Alex Morgan"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-lg font-semibold">Alex Morgan</h4>
          </div>
        </div>
        <p className="text-gray-600 italic text-sm">
          “Beyond the incredible work we do, OdinSchool values work-life balance and a supportive environment. The company understands the importance of well-being and encourages a healthy integration of personal and professional life. It's refreshing to be part of an organization that genuinely cares about its employees.”
        </p>
      </div>
    ))}
  </div>
</section>

        {/* Image Grid Section */}
        <section className="py-12 bg-gray-50">
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

       <section className="py-16 bg-gray-50">
            <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-gray-900">
            We come from  <span className="text-primary-600 ">everywhere</span>
                </h2>
            </div>

            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
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
