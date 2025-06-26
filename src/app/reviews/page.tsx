import ReviewsComp from "@/components/pages/Reviews";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews of OdinSchool',
  description: 'Browse through a collection of OdinSchool reviews, transformation stories, career launch stories and more.',
};


export default function ReviewsPage() {
  return (
    <ReviewsComp />
  );
}