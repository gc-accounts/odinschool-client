import HireTalentComp from "@/components/pages/HireTalent";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Job-Ready Candidates | OdinSchool for Corporate',
  description: 'Collaborate with OdinSchool to hire highly-skilled, job-ready candidates at zero cost.',
};



export default function HireTalentPage() {
  return (
    <HireTalentComp />
  );
}
