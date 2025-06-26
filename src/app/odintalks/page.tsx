import OdinTalksComp from "@/components/pages/OdinTalks";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'OdinTalks | Listen to Industry Experts',
  description: 'Listen to industry experts talk about the latest trends, hiring processes, and more of Data Science and AI in these free OdinTalks sessions.',
};


export default function OdinTalksPage() {
  return (
    <OdinTalksComp />
  );
}