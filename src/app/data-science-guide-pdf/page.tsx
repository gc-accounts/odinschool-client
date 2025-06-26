import DataScienceCareerGuideComp from "@/components/pages/DataScienceCareerGuide";

import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ultimate Data Science Career Guide',
  description: 'Looking to launch your career in Data Science? Get started with this comprehensive Data Science career guide curated by industry experts.',
};


export default function DataScienceCareerGuidePage() {
  return (
    <DataScienceCareerGuideComp />
  );
}