import Careers from '@/components/pages/Careers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OdinSchool Careers',
  description: 'Join us to help people transform their careers through up-skilling courses. Send your CV to careers@odinschool.com to check for openings.',
};


export default function CareersPage() {
  return <Careers />;
} 