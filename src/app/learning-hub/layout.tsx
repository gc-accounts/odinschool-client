import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Learning Hub',
    default: 'Learning Hub',
  },
};

export default function LearningHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 