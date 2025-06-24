'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsAppChat from '@/components/components/WhatsAppChat';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideOnPaths = ['/data-science-foundation-course', '/web-development-course'];

  return (
    <>
      {children}
      {!hideOnPaths.includes(pathname) && <WhatsAppChat />}
    </>
  );
}
