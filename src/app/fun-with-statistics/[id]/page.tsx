'use client';
import FunWithStatisticsComp from "@/components/pages/FunWithStatistics";


export default function FunWithStatisticsPage() {
  return (
    <>
     <style>
        {`
          p{
            margin-bottom:10px; 
          }
            img{
            margin-bottom:15px; 
            }
            h2{
            font-size:1.5rem;
            }
            @media only screen and (max-width: 600px) {
  p {
    font-size:0.9rem;
  }
}
        `}
      </style>
      <FunWithStatisticsComp />
    </>
    
  );
}