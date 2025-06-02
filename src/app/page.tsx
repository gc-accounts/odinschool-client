
import * as React from 'react';
import Home from '@/components/pages/Index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OdinSchool - Boost Your Career with Industry-Aligned Courses',
  description: 'Upskill with career-aligned courses: Data Science | Power BI | Applied Generative AI | DevOps & Cloud Computing',
  openGraph: {
    title: 'OdinSchool - Boost Your Career with Industry-Aligned Courses',
    description: 'Upskill with career-aligned courses: Data Science | Power BI | Applied Generative AI | DevOps & Cloud Computing',
  },
  twitter: {
    title: 'OdinSchool - Boost Your Career with Industry-Aligned Courses',
    description: 'Upskill with career-aligned courses: Data Science | Power BI | Applied Generative AI | DevOps & Cloud Computing',
  },
};

export default function HomePage() {
  return (
    <main>
      <div className='layout min-h-screen'>
        <Home />
      </div>
    </main>
  );
}
