import SalaryCalculator from '@/components/pages/SalaryCalculator';

import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Science Salary Calculator',
  description: 'Calculate your salary potential in Data Science!',
};


export default function SalaryCalculatorPage() {
  return <SalaryCalculator />;
} 