import NewsRoom from '@/components/pages/NewsRoom';
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'OdinSchool Newsroom | Latest News and Recognitions | Media Mentions',
  description: "Read all the media recognitions, media mentions, announcements, future roadmaps, and more on OdinSchool's Newsroom. ",
};

export default function NewsRoomPage() {
  return <NewsRoom />;
} 