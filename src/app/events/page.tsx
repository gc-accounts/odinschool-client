// src/app/events/page.tsx

import EventListing from "@/components/pages/EventListing";

export const metadata = {
  title: 'Events | OdinSchool',
  description: 'Explore OdinSchool events to engage with industry experts, learn in-demand skills, and stay updated on trends. Join interactive sessions for career growth!',
  openGraph: {
    title: 'Events | OdinSchool',
    description: 'Explore OdinSchool events to engage with industry experts, learn in-demand skills, and stay updated on trends. Join interactive sessions for career growth!',
    url: 'https://www.odinschool.com/events',
    type: 'website',
    siteName: 'OdinSchool',
    images: [
      {
        url: 'https://www.odinschool.com/images/events-og.jpg',
        width: 1200,
        height: 630,
        alt: 'OdinSchool Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | OdinSchool',
    description: 'Explore OdinSchool events to engage with industry experts, learn in-demand skills, and stay updated on trends. Join interactive sessions for career growth!',
    images: ['https://www.odinschool.com/images/events-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.odinschool.com/events',
  },
};

export default function EventsPage() {
  return <EventListing />;
}
