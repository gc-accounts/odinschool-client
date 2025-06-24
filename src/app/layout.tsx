import type { Metadata } from 'next';
import * as React from 'react';
import { Inter, DM_Serif_Display } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/constant/config';
import Script from 'next/script';
import { Toaster } from '@/components/components/ui/toaster';
import { gtmScript, GTM_ID } from '@/lib/gtm';
import { ProgramProvider } from '@/context/ProgramContext';
import ClientLayoutWrapper from '@/components/components/ClientLayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
      </head>
      <body className={`${inter.className}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ProgramProvider>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ProgramProvider>
        <Toaster />
      </body>
    </html>
  );
}
