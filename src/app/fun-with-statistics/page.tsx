import FunWithStatisticsComp from "@/components/pages/FunWithStatistics";
import FunWithStatisticsHome from "@/components/components/FunWithStatisticsHome";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Fun with Statistics',
  description: 'What is Statistics? How do you learn Statistics for Data Science? Make Statistics fun for you with this book!',
};



export default function FunWithStatisticsPage() {
  return (
    <>
      <FunWithStatisticsHome sourceDomain ='Fun With Statistics'/>
      </>
    
  );
}
