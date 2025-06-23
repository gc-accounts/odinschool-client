// app/webinar-ended/page.tsx

import React from 'react';
import WebinarComp from '@/components/pages/WebinarComp';

export const metadata = {
  title: 'Webinars - OdinSchool',
  description: 'This webinar has concluded. Stay tuned for upcoming sessions from OdinSchool.',
};

export default function WebinarEndedPage() {
  return <WebinarComp />;
}
