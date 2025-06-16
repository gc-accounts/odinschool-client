'use client';

import React from 'react';
import Image from 'next/image';

interface DsOverviewProps {
sectionClass: string;
}

    const DsOverview = ({ sectionClass }: DsOverviewProps) => {

  return (
    <section className={`${sectionClass ?? ''}`}>

         <div className="container">
        <div className="animate-on-scroll ">
          <h2 className="mb-5 text-3xl md:text-5xl font-display leading-tight">
            Data Science Course <span className="text-primary-600">Overview</span>
          </h2>
          <p className="text-md text-gray-600 mb-3">
           Join our live instructor-led Data Science Course and become a skilled Data Science professional! Our hands-on course equips learners with the most in-demand skills, making it one of the best data science courses in India. Benefit from our industry-vetted data science syllabus, 10+ data science projects, and mock interviews. Additionally, learn workplace skills, soft skills, and interview skills with our dedicated Career Services Team.
          </p>
          <p className="text-md text-gray-600">
            With our unique pedagogy and close ties with the industry, you'll be fully prepared to break into the Data Science industry! Get in touch with a career counsellor to check your data science course eligibility.</p>
        </div>
        </div>

 
    </section>
  );
};

export default DsOverview;
