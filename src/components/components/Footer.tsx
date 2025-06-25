
import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

// Utility function to handle links both inside and outside Router context
const SafeLink = ({ to, className, children }: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => {
  try {
    // Try to use the Link component
    return (
      <Link href={to} className={className}>
        {children}
      </Link>
    );
  } catch (error) {
    // Fallback to using an anchor tag
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
};

const Footer = () => {
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'Home', href: '/' },
        // { name: 'Courses', href: '/courses' },
        { name: 'Events', href: '/events' },
        { name: 'Success Stories', href: '/success-stories' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { name: 'Salary Calculator', href: '/data-science/salary-calculator' },
        { name: 'Resume Builder', href: '/resume-builder' },
        { name: 'Hire Talent', href: '/hire-talent' },
        { name: 'Become a Mentor', href: '/become-a-mentor' },
        { name: 'Referral Program', href: '/referral-program' },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "All Resources", href: "/resources" },
        { name: "Blog", href: "/blog" },
        { name: "Free Project", href: "/projects-page" },
        { name: "Fun With Statistics", href: "/fun-with-statistics" },
        { name: "Data Science Career Guide", href: "/data-science-career-guide" },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'News Room', href: '/news' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact-us' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        // { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const secondaryFooterLinks=[
        { name: 'Data Science Course', href: '/data-science-course' },
        { name: 'Data Science Course Hyderabad', href: '/data-science-course/hyderabad' },
        { name: 'Data Science Course Mumbai', href: '/data-science-course/mumbai' },
        { name: 'Data Science Course Bangalore', href: '/data-science-course/bangalore' },
        { name: 'Data Science Course Pune', href: '/data-science-course/pune' },
        { name: 'Data Science Course Chennai', href: '/data-science-course/chennai' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto  pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-5 px-4">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <SafeLink
                      to={link.href}
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {link.name}
                    </SafeLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* <div className='mt-12 border-t border-gray-800 px-8 py-8 bg-gray-800 flex justify-center items-center'>

          <ul className='list-none flex flex-wrap items-center gap-4 text-sm'>
          {
            secondaryFooterLinks.map((link,index)=>{
              return (
                <li key={link.name}>
                    <SafeLink
                      to={link.href}
                      className={`text-gray-400 hover:underline hover:text-gray-200 transition-colors pr-4 ${secondaryFooterLinks.length-1 !== index && 'sm:border-r'}`}
                    >
                      {link.name}
                    </SafeLink>
                  </li>
              )
            })
          }
          </ul>
        </div> */}



        <div className="border-t border-gray-800 pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <SafeLink to="/" className="text-xl font-bold text-white">
                OdinSchool
              </SafeLink>
              <p className="mt-2 text-sm text-gray-400">
                Empowering your learning journey with expert-led courses
              </p>
            </div>

            <div className="flex space-x-6">

              <a href="https://www.facebook.com/OdinSchool/" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} className="text-primary-600" />
              </a>
              <a href="https://www.linkedin.com/school/odinschool/" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} className="text-primary-600" />
              </a>
              <a href="https://www.instagram.com/odin_school/" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} className="text-primary-600" />
              </a>
              <a href="https://www.youtube.com/@OdinSchool" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Youtube</span>
                <Youtube size={20} className="text-primary-600" />
              </a>



            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} OdinSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
