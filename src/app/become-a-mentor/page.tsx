
import BecomeAMentor from "@/components/pages/BecomeAMentor";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Become a Mentor',
  description: 'Are you a working professional? Do you want to help students become job-ready? Give back to the tech community by applying today to become a mentor.',
};

export default function BecomeAMentorPage() {
  return (
    <BecomeAMentor />
  );
}