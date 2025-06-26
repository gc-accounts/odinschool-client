import TrainYourTeam from "@/components/pages/TrainYourTeam";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Train Your Team | OdinSchool for Corporate',
  description: 'Join OdinSchool in the reskilling revolution. Train your team in the most relevant skills.',
};


export default function TrainYourTeamPage() {
  return (
    <TrainYourTeam />
  );
}