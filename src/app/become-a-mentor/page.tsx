
import BecomeAMentor from "@/components/pages/BecomeAMentor";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Become a Mentor',
  description: 'Become a Mentor',
};

export default function BecomeAMentorPage() {
  return (
    <BecomeAMentor />
  );
}